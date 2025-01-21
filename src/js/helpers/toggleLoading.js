/**
 * Управление состоянием загрузки для указанного элемента
 * @param {HTMLElement} element - Элемент, для которого включается/отключается загрузка
 * @param {boolean} isLoading - Флаг, указывающий, включить (true) или отключить (false) загрузку
 */
export const toggleLoading = (element, isLoading) => {
  if (!element) return;

  if (isLoading) {
    element.classList.add('loading');
  } else {
    element.classList.remove('loading');
  }
};
