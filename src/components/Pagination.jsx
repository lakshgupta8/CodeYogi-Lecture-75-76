import { range } from "lodash";
import { Link } from "react-router-dom";

function Pagination({ page, lastPage }) {
  const pages = range(1, lastPage + 1).map((pageNo) => (
    <Link
      to={`?page=${pageNo}`}
      className={
        "border border-primary-dark w-8 h-8 text-center " +
        (pageNo === page
          ? "bg-primary-dark text-white"
          : "bg-white text-primary-dark hover:bg-primary-dark hover:text-white")
      }
      key={pageNo}
    >
      {pageNo}
    </Link>
  ));

  return <div className="flex gap-1 mt-8">{pages}</div>;
}

export default Pagination;
