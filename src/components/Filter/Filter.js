import s from './Filter.module.css';

function Filter({ value, onChange }) {
  return (
    <label className={s.filter}>
      <span className={s.text}>Find contacts by name:</span>
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
}

export default Filter;
