function Pagination({ page, setPage, lastPage }) {
  const pages = [];
  for (let i = 1; i <= lastPage; i++) {
    pages.push(
      <button
        onClick={() => setPage(i)}
        className={
          "border border-primary-dark w-8 h-8 text-center " +
          (i === page
            ? "bg-primary-dark text-white"
            : "bg-white text-primary-dark hover:bg-primary-dark hover:text-white")
        }
        key={i}
      >
        {i}
      </button>
    );
  }

  return <div className="flex gap-1 mt-8">{pages}</div>;
}

export default Pagination;
