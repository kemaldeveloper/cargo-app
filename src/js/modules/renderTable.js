import { statuses } from '../consts/consts';
import { cargoStore } from '../stores/cargoStore';
import { handleStatusChange } from './handleStatusChange';

export const renderTable = () => {
  const { cargoList } = cargoStore.getState();

  const table = document.getElementById('cargoTable');
  const tbody = table.querySelector('tbody');

  tbody.innerHTML = '';

  cargoList.forEach(cargo => {
    const row = document.createElement('tr');

    row.innerHTML = ` 
    <td>${cargo.id}</td>
    <td>${cargo.name}</td>
    <td>${cargo.status}</td>
    <td>${cargo.origin} -> ${cargo.destination}</td>
    <td>${cargo.departureDate}</td>
    <td>
      <select name="change-status" id="changeStatus_${cargo.id}" class="form-select">
        ${Object.keys(statuses)
          .map(statusKey => {
            const isSelected = cargo.status === statuses[statusKey] ? 'selected' : '';
            return `<option value="${statusKey}" ${isSelected}>${statuses[statusKey]}</option>`;
          })
          .join('')}
      </select>
    </td>
    `;

    const statusSelect = row.querySelector(`#changeStatus_${cargo.id}`);
    statusSelect.addEventListener('change', e => {
      const newStatus = e.target.value;
      handleStatusChange(cargo, newStatus);
    });

    tbody.appendChild(row);
  });
};
