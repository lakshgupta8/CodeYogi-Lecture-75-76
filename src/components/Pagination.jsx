import { range } from "lodash";

function Pagination({ page, setPage, lastPage }) {
  const pages = range(1, lastPage + 1).map((item) => (
    <button
      onClick={() => setPage(item)}
      className={
        "border border-primary-dark w-8 h-8 text-center " +
        (item === page
          ? "bg-primary-dark text-white"
          : "bg-white text-primary-dark hover:bg-primary-dark hover:text-white")
      }
      key={item}
    >
      {item}
    </button>
  ));

  return <div className="flex gap-1 mt-8">{pages}</div>;
}

export default Pagination;
