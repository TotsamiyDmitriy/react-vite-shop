import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { switchFilters } from '../../redux/catalogSlice';
import { ProductType } from '../../types/MainTypes';
import { AppDispatch } from '../../redux/store';

interface ICheckbox {
  item: ProductType;
  keyItem: string;
  index: number;
  dispatch: AppDispatch;
}

const Checkbox: React.FC<ICheckbox> = ({ item, keyItem, dispatch }) => {
  const [checked, setChecked] = React.useState(false);
  const [searchParams, _setSearchParams] = useSearchParams();

  React.useEffect(() => {
    if (searchParams.getAll(keyItem)?.includes(item[keyItem])) {
      setChecked(true);
    } else setChecked(false);
  }, [searchParams]);

  function HandlerChecker(e: React.ChangeEvent<HTMLInputElement>, item: any) {
    dispatch(switchFilters([item[keyItem], keyItem]));
    setChecked(e.currentTarget.checked);
  }

  return (
    <div className="filter_input__wrapper">
      <input
        className="custom-checkbox"
        onChange={(e) => HandlerChecker(e, item)}
        id={item[keyItem]}
        type="checkbox"
        name={item[keyItem]}
        checked={checked}
      />
      <label htmlFor={item[keyItem]}>{item[keyItem]}</label>
    </div>
  );
};

export default React.memo(Checkbox);
