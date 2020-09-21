document.addEventListener('DOMContentLoaded', event => {
    document.querySelectorAll('pre code').forEach(block => {
        hljs.highlightBlock(block);
    });

    navigation('nav', 'nav a', '.page', 'active');
    fixScrollModal();
});

const navigation = (navSelector, linksSelector, pagesSelector, activeClass) => {
    const nav = document.querySelector(navSelector);
    const links = document.querySelectorAll(linksSelector);
    const pages = document.querySelectorAll(pagesSelector);

    nav.addEventListener('click', e => {
        const target = e.target;

        if (target.tagName === 'A') {
            links.forEach(link => link.classList.remove(activeClass));
            target.classList.add(activeClass);

            pages.forEach(page => {
                page.classList.remove(activeClass);

                if (page.getAttribute('id') === target.getAttribute('data-target')) {
                    page.classList.add(activeClass);
                }
            });
        }
    });
};

const fixScrollModal = () => {
    const modalTriger = document.querySelector('[data-toggle="modal"]');
    const header = document.querySelector('header');
    const body = document.querySelector('body');
    const closeElements = document.querySelectorAll('[data-close]');

    modalTriger.addEventListener('click', () => {
        const bodyMarginRight = window.getComputedStyle(body).marginRight;
        header.style.right = bodyMarginRight;
    });

    const smoothClose = () => {
        setTimeout(() => {
            header.style.right = '0';
        }, 500);
    };

    closeElements.forEach(elem => elem.addEventListener('click', smoothClose));
};
