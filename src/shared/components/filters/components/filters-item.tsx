import { FiltersOption, LevelFilters, ThemeFilters } from '../const';

type FiltersItemProps = {
  option: FiltersOption;
  fieldset: string;
  isChecked: boolean;
  onFilterChange: (value: ThemeFilters | LevelFilters) => void;
};

const FiltersItem = ({option, fieldset, isChecked, onFilterChange}: FiltersItemProps) => {
  const {
    value,
    label,
    icon
  } = option;

  return (
    <li className="filter__item">
      <input onChange={() => onFilterChange(value)} type="radio" name={fieldset} id={value} checked={isChecked}/>
      <label className="filter__label" htmlFor={value}>
        {icon}
        <span className="filter__label-text">{label}</span>
      </label>
    </li>
  );
};

export default FiltersItem;
