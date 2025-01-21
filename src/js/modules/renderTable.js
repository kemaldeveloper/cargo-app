import { statuses } from '../consts/consts';
import { cargoStore } from '../stores/cargoStore';
import { filterCargoList } from './handleCargoFilter';
import { handleStatusChange } from './handleStatusChange';

export const renderTable = () => {
  const { cargoList } = cargoStore.getState();
  const statusFilter = document.getElementById('statusFilter').value;
  const table = document.getElementById('cargoTable');
  const tbody = table.querySelector('tbody');
  const clearBtn = document.getElementById('openCLearTableModalBtn');

  const filteredCargoList = filterCargoList(cargoList, statusFilter);

  tbody.innerHTML = '';

  if (filteredCargoList.length === 0) {
    clearBtn.style.display = 'none';
  } else {
    clearBtn.style.display = 'block';
  }

  filteredCargoList.forEach(cargo => {
    const row = document.createElement('tr');

    let badgeClass = '';
    switch (cargo.status) {
      case 'В пути':
        badgeClass = 'text-bg-info';
        break;
      case 'Ожидает отправки':
        badgeClass = 'text-bg-warning';
        break;
      case 'Доставлен':
        badgeClass = 'text-bg-success';
        break;
      default:
        badgeClass = 'text-bg-secondary';
    }

    row.innerHTML = ` 
    <td>${cargo.id}</td>
    <td>${cargo.name}</td>
    <td><span class="badge ${badgeClass}">${cargo.status}</span></td>
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
