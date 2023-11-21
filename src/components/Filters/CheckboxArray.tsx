import React from 'react';
import { switchFilters } from '../../redux/catalogSlice';
import { AppDispatch } from '../../redux/store';
import { useSearchParams } from 'react-router-dom';

interface ICheckbox {
  color: string;
  keys: string;
  dispatch: AppDispatch;
}

const Checkbox: React.FC<ICheckbox> = ({ color, keys, dispatch }) => {
  const [checked, setChecked] = React.useState(false);
  const [searchParams, _setSearchParams] = useSearchParams();

  React.useEffect(() => {
    if (searchParams.getAll(keys)?.includes(color)) {
      setChecked(true);
    } else setChecked(false);
  }, [searchParams]);

  function HandlerChecker(e: React.ChangeEvent<HTMLInputElement>, item: string[]) {
    dispatch(switchFilters(item));
    setChecked(e.currentTarget.checked);
  }

  return (
    <div className="filter_input__wrapper">
      <input
        className="custom-checkbox"
        onChange={(e) => HandlerChecker(e, [color, keys])}
        id={color}
        type="checkbox"
        name={color}
        checked={checked}
      />
      <label htmlFor={color}>{color}</label>
    </div>
  );
};

export default Checkbox;
