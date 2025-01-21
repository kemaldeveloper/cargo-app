import $ from 'jquery';
import { cities } from '../consts/cities';

export const renderCitiesInSelects = id => {
  const select = $(id);

  cities.map(item => {
    const option = $('<option></option>');
    option.attr('value', item.value);
    option.text(item.name);
    select.append(option);
  });
};
