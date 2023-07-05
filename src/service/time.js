const days = [
  'Неділя',
  'Понеділок',
  'Вівторок',
  'Середа',
  'Четверг',
  `П'ятниця`,
  'Субота',
];

const currentTime = new Date();
const currentDay = currentTime.getDay();

export const unixToWeekDay = function (unix) {
  const time = Number(`${unix}000`);

  const date = new Date(time);
  const day = date.getDay();
  if (days[currentDay] !== days[day]) {
    return days[day];
  }
  return 'Сьогодні';
};
