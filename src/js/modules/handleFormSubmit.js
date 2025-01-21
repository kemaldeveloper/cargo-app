import { Modal } from 'bootstrap';
import { toggleLoading } from '../helpers/toggleLoading';
import { cargoStore } from '../stores/cargoStore';

const cargoModal = new Modal(document.getElementById('addCargoModal'));

export const handleFormSubmit = () => {
  const cargoForm = document.querySelector('#addCargoForm');
  cargoForm.addEventListener('submit', e => {
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

    const modalContent = document.querySelector('#addCargoModal .modal-content');
    toggleLoading(modalContent, true);
    setTimeout(() => {
      cargoModal.hide();
      toggleLoading(modalContent, false);
    }, 1000);
  });
};
