import { Modal } from 'bootstrap';
import { cargoStore } from '../stores/cargoStore';

const cargoModal = new Modal(document.getElementById('addCargoModal'));

export const handleFormSubmit = () => {
  document.querySelector('#addCargoForm').addEventListener('submit', e => {
    e.preventDefault();
    const form = e.target;

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      console.log('Форма не прошла валидацию');
      return;
    }

    const statusSelect = form.status;
    const statusText = statusSelect.selectedOptions[0].textContent;

    const newCargo = {
      id: `CARGO${String(Date.now()).slice(-6)}`,
      name: form.name.value,
      status: statusText,
      origin: form.origin.value,
      destination: form.destination.value,
      departureDate: form.departureDate.value,
    };

    cargoStore.getState().addCargo(newCargo);

    console.log('Груз успешно добавлен');

    form.reset();
    form.classList.remove('was-validated');
    cargoModal._dialog.children[0].classList.add('loading');
    setTimeout(() => {
      cargoModal.hide();
      cargoModal._dialog.children[0].classList.remove('loading');
    }, 1000);
  });
};
