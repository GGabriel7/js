const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

console.log('-=-=-=-= Encadeando promessas =-=-=-=-\n');

/* Você pode fazer assim. Usando um then() dentro de outro

fetchPromise.then((response) => {
    const jsonPromise = response.json();

    jsonPromise.then((data) => {
        for (let i = 0; i < data.length; i++) {
            console.log(`Name: ${data[i].name}`);
        }
    });
});
*/

// Ou fazer assim,jeito que deve ser feito, adicionando um then() depois do outro:

fetchPromise
    .then((promise) => {
        if (!promise.ok) {
            throw new Error(`HTTP erro: ${promise.status}`); //verificando se deu algum erro
        }
        return promise.json();
    })
    .then((data) => {
        for (let i = 0; i < data.length; i++) {
            console.log(`Name: ${data[i].name}`);
        }
    })
    .catch((error) => {
        console.error(`Could not get products: ${error}`)
    });//catch() funciona como o then, mas só retorna a promessa caso dê 

console.log('loading names...\n')