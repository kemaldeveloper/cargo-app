import '../scss/styles.scss';
import './libs.js';
import { handleFilterChange } from './modules/handleCargoFilter.js';
import { handleClearTable } from './modules/handleClearTable.js';
import { handleFormSubmit } from './modules/handleFormSubmit.js';
import { initCalendar } from './modules/initCalendar.js';
import { renderCitiesInSelects } from './modules/renderCitiesInSelects.js';
import { renderTable } from './modules/renderTable.js';
import { cargoStore } from './stores/cargoStore.js';

document.addEventListener('DOMContentLoaded', function () {
  renderCitiesInSelects('#originState');
  renderCitiesInSelects('#destinationState');
  initCalendar();
  handleFormSubmit();
  cargoStore.getState().loadCargos();
  cargoStore.subscribe(renderTable);
  renderTable();
  handleClearTable();
  handleFilterChange();
});

