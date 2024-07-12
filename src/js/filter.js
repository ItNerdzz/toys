const filterButton = document.querySelector(".catalog-block__filters-button");
const filter = document.querySelector(".catalog-block__form-filters");

if (filterButton && filter) {
  filterButton.addEventListener('click', () => {
    filter.classList.toggle("catalog-block__form-filters--show");
  });
}
