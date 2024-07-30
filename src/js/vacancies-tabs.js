const accordionsLists = document.querySelectorAll('.vacancies__accordion');
const tabsButtonsList = document.querySelector('.vacancies__tabs-list');

if (accordionsLists && tabsButtonsList) {
  const tabButtons = Array.from(tabsButtonsList.querySelectorAll('.vacancies__tabs-button'));

  tabButtons.forEach((tabButton) => {
    tabButton.addEventListener('click', () => {
      tabsButtonsList.querySelector('.vacancies__tabs-button--active').classList.remove('vacancies__tabs-button--active');
      tabButton.classList.add('vacancies__tabs-button--active');

      const currentTabIndex =  tabButtons.indexOf(tabButton);

      document.querySelector('.vacancies__accordion--show').classList.remove('vacancies__accordion--show');
      accordionsLists[currentTabIndex].classList.add('vacancies__accordion--show');
    });
  });
}
