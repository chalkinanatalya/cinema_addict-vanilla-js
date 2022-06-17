import dayjs from 'dayjs';

const CARDACTIVE = 'film-card__controls-item--active';
const POPUPACTIVE = 'film-details__control-button--active';
const CARDCONTAINER = 'cardContainer';
const POPUPCONTAINER = 'popupContainer';

// Функция из интернета по генерации случайного числа из диапазона
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomSubjects = (subjects) => subjects[getRandomInteger(0, subjects.length - 1)];

const humanizeTaskDueDate = (dueDate) => dayjs(dueDate).format('D MMMM');

const getRandomDate = () => {
  const start = new Date(2000, 0, 1);
  const end =  new Date();

  const randomDay = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return dayjs(randomDay);
};

const dateComarison = (firstDateStr, secondDateStr) => {
  const firstDate = dayjs(firstDateStr, 'MM/DD/YYYY');
  const secondDate = dayjs(secondDateStr, 'MM/DD/YYYY');

  return firstDate.isBefore(secondDate);
};

const makeControlClass = (controlItem, cardType) => {
  if(controlItem) {
    if(cardType === CARDCONTAINER) {
      return CARDACTIVE;
    } else if(cardType === POPUPCONTAINER) {
      return POPUPACTIVE;
    }
  }
};

const makeCheckedMark = (emotionType, value) => {
  if(emotionType === value) {
    return 'checked';
  }
};

const makeActiveSort = (sortType, value) => {
  if(sortType === value) {
    return 'sort__button--active';
  }
};

const makeActiveFilter = (filterType, value) => {
  if(filterType === value) {
    return 'main-navigation__item--active';
  }
};

export {getRandomInteger, getRandomSubjects, humanizeTaskDueDate, getRandomDate, makeControlClass, dateComarison, makeCheckedMark, makeActiveSort, makeActiveFilter};
