import { Link } from "react-router-dom";

const CategoryCard = ({category}) => {
    const {categoryId, image} = category
    return (
        <Link type="button" to={`/category/${categoryId}`} className="max-w-sm rounded-md shadow-md bg-gray-800 text-gray-100">
        <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
        <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2 text-center">
                <h2 className="text-3xl font-semibold tracking-wide">{category.category}</h2>
            </div>
        </div>
    </Link>
    );
};

export default CategoryCard;