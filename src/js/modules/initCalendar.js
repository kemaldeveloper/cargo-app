import { Calendar } from 'vanilla-calendar-pro';

export const initCalendar = () => {
  const options = {
    inputMode: true,
    positionToInput: 'auto',
    onChangeToInput(self) {
      if (!self.context.inputElement) return;
      if (self.context.selectedDates[0]) {
        self.context.inputElement.value = self.context.selectedDates[0];
        self.hide();
      } else {
        self.context.inputElement.value = '';
      }
    },
  };

  const calendar = new Calendar('#calendar', options);
  calendar.init();
};
