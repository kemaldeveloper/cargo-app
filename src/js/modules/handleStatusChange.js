import { cargoStore } from '../stores/cargoStore';

export const handleStatusChange = (cargo, newStatus) => {
  cargoStore.getState().updateCargoStatus();

  import('./renderTable').then(({ renderTable }) => {
    renderTable();
  });
};
