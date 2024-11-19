import InputSection from "../UI/Input/InputSection";
import MySelect from "../UI/Select/MySelect";
import "../Styles/App.css";
export default function PostFilter({ filter, setFilter }: any) {
  return (
    <div>
      <InputSection
        value={filter.query}
        onChange={(e: { target: { value: any } }) =>
          setFilter({ ...filter, query: e.target.value })
        }
        placeholder="Поиск..."
      />

      <MySelect
        
        value={filter.sort}
        onChange={(selectedSort: any) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Cортировка"
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ]}
      />
    </div>
  );
}
