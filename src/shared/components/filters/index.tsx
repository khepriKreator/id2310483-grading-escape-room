import { useState } from 'react';
import {
  LevelFilters,
  LevelFiltersOptions,
  ThemeFilters,
  ThemeFiltersOptions,
} from './const';
import FiltersItem from './components/filters-item';
import { useAppDispatch } from '../../api/store/hooks';
import {
  setLevelFilter,
  setThemeFilter,
} from '../../api/store/slices/quests-slice/quests-slice';

const DEFAULT_FILTERS = {
  theme: ThemeFilters.AllQuests,
  level: LevelFilters.Any,
};

const isValueThemeFilter = (
  value: ThemeFilters | LevelFilters,
): value is ThemeFilters =>
  Object.values(ThemeFilters).includes(value as ThemeFilters);

const FiltersList = () => {
  const [activeFilter, setActiveFilter] = useState<{
    theme: ThemeFilters;
    level: LevelFilters;
  }>(DEFAULT_FILTERS);
  const dispatch = useAppDispatch();

  const handleFilterChange = (value: ThemeFilters | LevelFilters) => {
    if (isValueThemeFilter(value)) {
      setActiveFilter({
        ...activeFilter,
        theme: value,
      });

      dispatch(setThemeFilter(value));
    } else {
      setActiveFilter({
        ...activeFilter,
        level: value,
      });

      dispatch(setLevelFilter(value));
    }
  };

  return (
    <form className="filter" action="#" method="get">
      <fieldset className="filter__section">
        <legend className="visually-hidden">Тематика</legend>
        <ul className="filter__list">
          {ThemeFiltersOptions.map((option) => (
            <FiltersItem
              key={option.value}
              option={option}
              fieldset="theme"
              isChecked={option.value === activeFilter.theme}
              onFilterChange={handleFilterChange}
            />
          ))}
        </ul>
      </fieldset>
      <fieldset className="filter__section">
        <legend className="visually-hidden">Сложность</legend>
        <ul className="filter__list">
          {LevelFiltersOptions.map((option) => (
            <FiltersItem
              key={option.value}
              option={option}
              fieldset="level"
              isChecked={option.value === activeFilter.level}
              onFilterChange={handleFilterChange}
            />
          ))}
        </ul>
      </fieldset>
    </form>
  );
};

export default FiltersList;
