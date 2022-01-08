const openModalBtn = document.querySelector('button[data-action="open-modal"]');
const closeModalBtn = document.querySelector('button[data-action="open-modal"]');
const modalActive = document.querySelector("modal");

openModalBtn.addEventListener('click', () => {
    document.body.classList.add("show-modal");
    modalActive.classList.add("modal-active")
})
