const nodemailer = require('nodemailer')

const transporte = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, //valor true somente para a porta 465, segundo o manuel do nodemailer
    auth: {
        user: 'jgabrielnr31@gmail',
        pass: "", //O gmail tem uma segurnaça que não aceita acessar email por aplicativos terceiros, sendo preciso configurar uma senha diferente(não achei). O hotmail daria para enviar sem problemas.
    }
})

transporte.sendMail({
    from: 'Gabriel Ramos <jgabrielnr31@gmail>',
    to: 'gabrielnasciemtoramos002@gmail.com',
    subject: 'Enviando E-mail',
    html: '<h1>Olá!</h1><p>Email enivado usando Nodemailer</p>',
    text: 'Olá! Email enviaso usando Nodemailer',
})
.then(() => console.log('Email enviado com sucesso!'))
.catch((err) => console.log('Erro ao enviar email: ', err))