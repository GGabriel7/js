const list = document.querySelector('ul');
const titleInput = document.querySelector('#title');
const bodyInput = document.querySelector('#body');
const form = document.querySelector('form');
const submitBtn = document.querySelector('form button');

// Será usado para armazenar um objeto representando nosso banco de dados.
let db;

// Esta linha cria uma solicitação para abrir uma versão 1 de um banco de dados chamado notes_db
const openRequest = window.indexedDB.open("notes_db", 2);

// esse erro significa que o banco de dados não abriu com sucesso
openRequest.addEventListener('error', () => {
    console.error('Banco de Dados falhou ao abrir');
});

// quando o banco de dados abrir com sucesso
openRequest.addEventListener('success', () => {
    console.log('Database aberto com sucesso');

    //armazena o objeto do banco de dados aberto na variavel db
    db = openRequest.result;

    //exibe os dados no banco de dados dentro do <ul>
    displayData();
});

//configura (ou atualiza) o database caso não tenha sido antes
openRequest.addEventListener('upgradeneeded', (event) => {
    //pega uma referência ao banco de dados existente da resultpropriedade do target do evento
    db = event.target.result;

    //Crie um objectStore em nosso banco de dados para armazenar notas e uma chave de incremento automático (id)
    const objectStore = db.createObjectStore("notes_os", {
        keyPath: 'id',
        autoIncrement: true,
    });

    //define quais dados o banco de dados irá conter
    objectStore.createIndex("title", "title", { unique: false });
    objectStore.createIndex("body", "body", { unique: false })

    console.log("Configuração do Database concluída")
});

form.addEventListener("submit", addData);

function addData(event) {
    event.preventDefault();

    //Crie um objeto representando um registro para inserir no banco de dados, preenchendo-o com valores das entradas do formulário
    const newItem = { title: titleInput.value, body: bodyInput.value };

    //nos permite acessar o object store para que possamos fazer algo com ele, por exemplo, adicionar um novo registro.
    const transaction = db.transaction(["notes_os"], "readwrite");

    //Acesse o armazenamento de objetos usando o IDBTransaction.objectStore()método, salvando o resultado na objectStorevariável.
    const objectStore = transaction.objectStore("notes_os")

    //Adicione o novo registro ao banco de dados usando IDBObjectStore.add(). Isso cria um objeto request, da mesma forma que vimos antes.
    const addRequest = objectStore.add(newItem);

    //Adicione um monte de manipuladores de eventos ao requeste aos transactionobjetos para executar o código em pontos críticos do ciclo de vida. Assim que a solicitação for bem-sucedida, limpamos as entradas do formulário prontas para inserir a próxima nota. Assim que a transação for concluída, executamos a displayData()função novamente para atualizar a exibição das notas na página.
    addRequest.addEventListener("success", () => {
        titleInput.value = "";
        bodyInput.value = "";
    });

    transaction.addEventListener("complete", () => {
        console.log("transação completa: modificação do database finalizada");

        displayData();
    });

    transaction.addEventListener("error", () => {
        console.log("transação não aberta devido ao erro")
    });
}

function displayData() {
    //esvaziamos o <ul>conteúdo do elemento, antes de então preenchê-lo com o conteúdo atualizado
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    //obtemos uma referência ao notes_osarmazenamento de objetos
    const objectStore = db.transaction("notes_os").objectStore("notes_os");
    //O próximo passo é usar o IDBObjectStore.openCursor()método para abrir uma solicitação para um cursor — esta é uma construção que pode ser usada para iterar sobre os registros em um armazenamento de objetos. Encadeamos um successmanipulador de eventos no final desta linha para tornar o código mais conciso — quando o cursor é retornado com sucesso, o manipulador é executado.
    objectStore.openCursor().addEventListener("success", (event) => {
        const cursor = event.target.result;

        if (cursor) {
            const listItem = document.createElement("li");
            const h3 = document.createElement("h3");
            const para = document.createElement("p");

            listItem.appendChild(h3);
            listItem.appendChild(para);
            list.appendChild(listItem);

            h3.textContent = cursor.value.title;
            para.textContent = cursor.value.body;

            listItem.setAttribute("data-note-id", cursor.value.id);

            const deleteBtn = document.createElement("button");
            listItem.appendChild(deleteBtn);
            deleteBtn.textContent = "Delete";

            deleteBtn.addEventListener("click", deleteItem);

            //método para avançar o cursor para o próximo registro no datastore e executar o conteúdo do ifbloco novamente.
            cursor.continue();
        } else {
            //Este bloco verifica se alguma nota foi inserida no <ul>— se não, ele insere uma mensagem para dizer que nenhuma nota foi armazenada.
            if (!list.firstChild) {
                const listItem = document.createElement("li");
                listItem.textContent = "No notes stored.";
                list.appendChild(listItem);
            }

            console.log("Notes all displayed");
        }
    });
}

function deleteItem(event) {
    //recuperamos o ID do registro a ser excluído
    const noteId = Number(event.target.parentNode.getAttribute("data-note-id"));

    const transaction = db.transaction(["notes_os"], "readwrite");
    const objectStore = transaction.objectStore("notes_os");
    //método para excluir o registro do banco de dados, passando a ele o ID.
    const deleteRequest = objectStore.delete(noteId);

    transaction.addEventListener("complete", () => {
        event.target.parentNode.parentNode.removeChild(event.target.parentNode);
        console.log(`Note ${noteId} deleted.`);

        if(!list.firstChild) {
            const listItem = document.createElement("li");
            listItem.textContent = "No notes stored.";
            list.appendChild(listItem);
        }
    });
}