import "../../Styles/App.css";

export default function MySelect({
  options,
  defaultValue,
  onChange,
  value,
}: any) {
  return (
    <select
      className={"select"}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      <option disabled={true} value="">
        {defaultValue}
      </option>
      {options.map((option: any) => (
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
