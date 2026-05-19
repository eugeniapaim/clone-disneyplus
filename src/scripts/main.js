document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');
    const heroSection = document.querySelector('.hero');

    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', () => {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaHero) {
            ocultaElementosDoHeader();
        } else {
            exibeElementosDoHeader();
        }
    });


    // Seção de navegação por abas (atrações, streaming e filmes)
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const tabId = event.currentTarget.dataset.tabButton;
            hideAllTabContents();

            const tabContent = document.querySelector(`[data-tab-id="${tabId}"]`);
            tabContent.classList.add('shows_list--is-active');
            removeActiveButtons();
            event.target.classList.add('shows_tabs_button--is-active');
        });
    });


    // Seção de perguntas frequentes (FAQ)
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreFechaResposta);
    }

    function abreFechaResposta(elemento) {
        const classe = 'faq__questions__item--is-open';
        const pai = elemento.currentTarget.parentNode;

        pai.classList.toggle(classe);

    };

    function removeActiveButtons() {
        const buttons = document.querySelectorAll('[data-tab-button]');
        buttons.forEach(button => {
            button.classList.remove('shows_tabs_button--is-active');
        });
    }

    function hideAllTabContents() {
        const tabContents = document.querySelectorAll('[data-tab-id]');
        tabContents.forEach(tab => {
            tab.classList.remove('shows_list--is-active');
        });
    }

    function ocultaElementosDoHeader() {
        const header = document.querySelector('.header');
        header.classList.add('header--is-hidden');
    }

    function exibeElementosDoHeader() {
        const header = document.querySelector('.header');
        header.classList.remove('header--is-hidden');
    }
});
