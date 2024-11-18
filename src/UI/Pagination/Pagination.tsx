import { getPageArray } from "../../utils/page";
import "../../Styles/App.css";

export default function Pagination({ totalPages, page, changePage }) {
  let pagesArray = getPageArray(totalPages);
  return (
    <div className="page-leaner">
      {pagesArray.map((p) => {
        return (
          <span
            onClick={() => changePage(p)}
            key={p}
            className={page === p ? "page page__current" : "page"}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
}
