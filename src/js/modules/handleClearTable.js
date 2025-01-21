import { clearLocalForage } from '../services/localForage';
import { cargoStore } from '../stores/cargoStore';

export const handleClearTable = () => {
  const clearBtn = document.querySelector('#clearTable');

  clearBtn.addEventListener('click', async () => {
    cargoStore.setState({ cargoList: [] });

    await clearLocalForage();

    const tableBody = document.querySelector('#cargoTable tbody');

    if (tableBody) {
      tableBody.innerHTML = '';
    }

    console.log('Таблица успешно удалена');
  });
};
