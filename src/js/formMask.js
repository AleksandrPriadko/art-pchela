import IMask from 'imask';

const inputNumber = document.querySelector('input[data-number="number"]');
onInputMaskNumber();

function onInputMaskNumber() {
  const maskOptions = {
    mask: '+{38}(000)000-00-00',
    lazy: false,
  };
  const maskNumber = IMask(inputNumber, maskOptions);
  return maskNumber;
}
