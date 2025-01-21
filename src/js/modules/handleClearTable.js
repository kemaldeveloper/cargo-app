import { Modal } from 'bootstrap';
import { toggleLoading } from '../helpers/toggleLoading';
import { clearLocalForage } from '../services/localForage';
import { cargoStore } from '../stores/cargoStore';

const clearModal = new Modal(document.getElementById('clearTableModal'));

export const handleClearTable = () => {
  const clearBtn = document.querySelector('#clearTableBtn');

  clearBtn.addEventListener('click', async () => {
    cargoStore.setState({ cargoList: [] });
    await clearLocalForage();
    const tableBody = document.querySelector('#cargoTable tbody');
    if (tableBody) {
      tableBody.innerHTML = '';
    }

    const modalContent = document.querySelector('#clearTableModal .modal-content');
    toggleLoading(modalContent, true);
    setTimeout(() => {
      clearModal.hide();
      toggleLoading(modalContent, false);
    }, 1000);
  });
};
