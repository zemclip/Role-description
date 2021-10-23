const changeCategory = (element) => {
    const parent = element.parentElement;
    const grand = parent.parentElement;
    grand.getElementsByClassName('is-active')[0].classList.remove('is-active');
    parent.classList.add('is-active');
    changeCategoryVisible(element.id);
}

const changeCategoryVisible = (id) => {
    const list = document.getElementById('list');
    const all = Array.from(list.children).filter((element) => {
        return element.tagName === 'A';
    });
    const target = Array.from(list.getElementsByClassName(id));

    if (id === 'all') {
        all.map((element) => {
            element.style.display = '';
        });
        return;
    }

    all.map((element) => {
        element.style.display = 'none';
    });

    target.map((element) => {
        element.style.display = '';
    });
}

const changeCardVisible = (element) => {
    const target = element.getElementsByTagName('div')[0];
    target.style.display = target.style.display === '' ? 'none' : '';
}
