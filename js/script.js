const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle){
    element.addEventListener('click',function(){
        nav.classList.toggle('show')
        //Ei nav, na sua lista de classe tem show? 
        // Se sim, tira. Se não tem, coloca.
    })}


/* quando clicar em um item do menu, esconder o menu */

const links = document.querySelectorAll("nav ul li a") // pesquisar todos os selectores dentro do parênteses

for(const link of links){
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}
 