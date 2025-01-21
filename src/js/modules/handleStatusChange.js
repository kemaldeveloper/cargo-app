import { statuses } from '../consts/consts';
import { cargoStore } from '../stores/cargoStore';

export const handleStatusChange = (cargo, newStatus) => {
  cargoStore.getState().updateCargoStatus(cargo, statuses[newStatus]);

  import('./renderTable').then(({ renderTable }) => {
    renderTable();
  });
};
