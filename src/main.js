document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

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
});
