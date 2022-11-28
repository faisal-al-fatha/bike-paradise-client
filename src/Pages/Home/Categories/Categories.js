import { useEffect, useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="my-12">
      <div className="text-center">
        <h3 className="text-3xl font-semibold text-accent">
          Browse By Category
        </h3>
      </div>
      {loading && <Loading></Loading>}
      <div className="my-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:mx-24 mx-10">
        {categories?.map((category) => (
          <CategoryCard key={category._id} category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Categories;
