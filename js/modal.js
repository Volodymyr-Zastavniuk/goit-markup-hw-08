(() => {
  // const modal2 = document.querySelector('[modal-test]'),

  refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  // refs.modal.addEventListener('click', e => {
  //   const click = e.composedPath().includes(modal2);
  //   if (!click) refs.modal.classList.toggle('is-hidden');
  //   console.log(click);
  // });

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
