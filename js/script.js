const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
        //Ei nav, na sua lista de classe tem show? 
        // Se sim, tira. Se não tem, coloca.
    })
}


// quando clicar em um item do menu, esconder o menu 

const links = document.querySelectorAll("nav ul li a")
// pesquisar todos os selectores dentro do parênteses
for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}

// Mudar o header da página quando der scroll(movimentar a página).

const header = document.querySelector("#header")
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
    if(window.scrollY >= navHeight){
        // scroll é maior que a altura do header.
        header.classList.add('scroll')
    }else{
        // menor que a altura do header.
        header.classList.remove('scroll')
    }
})