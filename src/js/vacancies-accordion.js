import {toggleAccordionItem} from './toggle-accordion-item';

const vacanciesAccordion = document.querySelector('.vacancies__accordion-item');

const initVacanciesAccordion = () => {
  if (vacanciesAccordion) {
    toggleAccordionItem(vacanciesAccordion);
  }
  return;
};

export {initVacanciesAccordion};
