const btnAnimated = document.querySelector('.btn');
const btnAclosed = document.querySelector('.closed')
const html = document.querySelector('html')

const addOpenClass = () => {
    html.classList.toggle('open')
}

btnAnimated.addEventListener('click', addOpenClass)

btnAclosed.addEventListener('click', addOpenClass)

