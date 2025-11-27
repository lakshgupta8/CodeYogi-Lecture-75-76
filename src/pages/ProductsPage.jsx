import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Filter from "../components/Filter.jsx";
import ProductGrid from "../components/ProductGrid.jsx";
import Pagination from "../components/Pagination.jsx";
import NoMatch from "../components/NoMatch.jsx";
import Loading from "../components/Loading.jsx";
import { getProductList, searchProducts } from "../api.js";

function ProductsPage() {
  const [productData, setProductData] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get("page") || 1;
  const query = searchParams.get("query") || "";
  const sort = searchParams.get("sort") || "default";

  useEffect(
    function () {
      let sortBy;
      let order;

      if (sort === "title") {
        sortBy = "title";
        order = "asc";
      } else if (sort === "price-asc") {
        sortBy = "price";
        order = "asc";
      } else if (sort === "price-desc") {
        sortBy = "price";
        order = "desc";
      }

      setLoading(true);
      const promise = query
        ? searchProducts(query, sortBy, order, page)
        : getProductList(sortBy, order, page);
      promise
        .then(function (data) {
          setProductData(data);
          setLoading(false);
        })
        .catch(function (error) {
          console.error("Error fetching products:", error);
          setLoading(false);
        });
    },
    [query, sort, page]
  );

  const lastPage = Math.ceil(productData.total / 12);

  return (
    <div className="bg-white mx-auto my-8 md:my-16 px-9 py-8 max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-6xl">
      <div className="flex flex-col gap-4">
        <p className="text-gray-400 text-xs">Home / Shop</p>
        <h1 className="mb-4 text-primary-light text-4xl">Shop</h1>
        <Filter
          query={query}
          sort={sort}
          onSearch={(newQuery) => {
            setSearchParams({ query: newQuery });
          }}
          onSort={(sortType) => {
            setSearchParams({ sort: sortType });
          }}
        />
      </div>
      {loading && <Loading />}
      {!loading && productData.products.length > 0 && (
        <>
          <ProductGrid products={productData.products} />
          <Pagination page={page} lastPage={lastPage} />
        </>
      )}
      {!loading && productData.products.length === 0 && (
        <NoMatch
          searchQuery={query}
          onClearSearch={() => {
            setSearchParams({ query: "" });
          }}
        />
      )}
    </div>
  );
}

export default ProductsPage;
