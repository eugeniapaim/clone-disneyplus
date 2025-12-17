document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('[data-tab-button]');

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
});

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
