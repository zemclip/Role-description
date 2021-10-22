const changeCategory = (element) => {
    const parent = element.parentElement;
    const grand = parent.parentElement;
    grand.getElementsByClassName('is-active')[0].classList.remove('is-active');
    parent.classList.add('is-active');
}

const changeVisible = (id) => {
    
}
