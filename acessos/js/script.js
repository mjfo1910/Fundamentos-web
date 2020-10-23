/* Instruções importantes do DOM 
Case Sensitive = reconhece letras maiusculas e minusculas
formas de busca elementos:
por tag: getElementByTagName()
por id: getElementById()
por nome: getElementByName()
por classe: getElementByClassName()
por seletor: queryselector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let numerocelular = document.querySelector('#numero-celular')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let numerocelularOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'

function validarNome() {
    let txt = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML ='Nome Inválido. Reveja se seu nome está certo'
        txtNome.style.color ='red'
        nomeOk = false
    } 
    else{
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validarEmail() {
   let txtEmail = document.querySelector('#txtEmail')

   if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ) {
       txtEmail.innerHTML ='E-mail Inválido. Por favor digite o Email novamente'
       txtEmail.style.color = "orange"
       emailOk = false
       
   }
   else{
       txtEmail.innerHTML = 'E-mail Válido'
       txtEmail.style.color = 'green'
       emailOk = true
   }
}

function validarNumeroCelular(){
   let txtNumeroCelular = document.querySelector('#txtNumeroCelular')
   
   if(numerocelular.value.length >11){
       txtNumeroCelular.innerHTML = 'Número inválido, verifique se o seu número para contato está correto '
       txtNumeroCelular.style.color ="red"
       numerocelularOk = false
   }
   else{
       txtNumeroCelular.innerHTML = 'Número válido'
       txtNumeroCelular.style.color = 'green'
       numerocelularOk = true

   }
}

function validarAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 120){
       txtAssunto.innerHTML ='Texto muito grande, por favor digite no máximo até 100 caracteres!'
       txtAssunto.style.color ="red"
       txtAssunto.style.display ="block"
       assuntoOk = false
    } 
    else{
        txtAssunto.style.display ="none"
        assuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && numerocelularOk == true && assuntoOk == true){
        alert ('Formulário realizado e enviado com sucesso!')
    } 
    else{
       alert ('Preencha o formulário corretamete antes de enviar...')
    }
}

function mapazoom(){
    mapa.style.width ='750px'
    mapa.style.height ='450px'
}

function mapapadrao(){
    mapa.style.width ='400px'
    mapa.style.height ='250px'

}