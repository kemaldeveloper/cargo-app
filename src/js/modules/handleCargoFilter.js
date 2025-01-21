import { statuses } from '../consts/consts';
import { renderTable } from './renderTable';

export const filterCargoList = (cargoList, statusFilter) => {
  return cargoList.filter(cargo => {
    if (statusFilter === '') return true;
    return cargo.status === statuses[statusFilter];
  });
};

export const handleFilterChange = () => {
  document.getElementById('statusFilter').addEventListener('change', () => {
    renderTable();
  });
};
