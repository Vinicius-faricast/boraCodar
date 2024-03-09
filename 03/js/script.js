const btnEnable = document.querySelector('[data-js="btn-enable"]');
let iconLoading = null;

const createIconLoading = e => {
    iconLoading = document.createElement('img');
    iconLoading.classList.add('icon')
    iconLoading.setAttribute('src', "assets/load.svg")
    e.target.insertAdjacentElement('afterbegin', iconLoading)
    e.target.classList.add('loading')
}

const activeIconLoading = e => {

    if(e.target.classList.contains('loading')){
        e.target.classList.remove('loading');
        iconLoading.remove();
        return
    }

    createIconLoading(e);

}

btnEnable.addEventListener('click', e => {
    
    activeIconLoading(e)
})