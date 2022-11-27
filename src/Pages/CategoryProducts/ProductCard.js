import { Link } from "react-router-dom";

const ProductCard = ({product}) => {
    const {name, price, buyPrice, location, photoUrl, sellerName, sellerEmail, contactNo, purchaseYear, condition, category, description, time } = product;
    return (
        <div className="rounded-md shadow-md sm:w-96 bg-gray-900 text-gray-100">
        <div className="flex items-center justify-between p-3">
            <div className="flex items-center space-x-2">
                <div className="text-left">
                    <h2 className="text-sm font-semibold leading-none">Seller: {sellerName}</h2>
                    <p className="block text-xs leading-none mt-2 text-gray-400">Post Published: {time}</p>
                    <span className="inline-block text-xs leading-none text-gray-400">Location: {location}</span>
                    <p className="block text-xs leading-none text-gray-400">Contact No: {contactNo}</p>
                </div>
            </div>
        </div>
        <img src={photoUrl} alt="" className="object-fill w-full h-80 dark:bg-gray-500" />
        <div className="p-0 py-6">          
                <div className="flex  flex-row-reverse justify-between mx-4">
                    <button type="button" title="Add to Wishlist" className="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                            <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                        </svg>
                    </button>
                    <p className="text-sm">
                    <span className="text-base font-semibold">{name}</span>
                </p>                   
                </div>
           <div className="text-left mx-4">
                    <p className=" text-base font-semibold">Price: ${price} <span className="ml-4 line-through">${buyPrice}</span> </p>            
            <h6 className="text-sm text-gray-400">Product condition: {condition} </h6>
            <h6 className="text-sm text-gray-400">Purchase Year: {purchaseYear} </h6>
            <h6 className="text-sm text-gray-400">Description: {description} </h6>
            <div className="flex justify-between mt-6 ">
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              to="/"
              className="px-5 pt-1 text-sm font-semibold rounded btn-sm btn-secondary text-black hover:btn-error"
            >
              Buy Now
            </Link>
          </div>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              to="/"
              className="px-5 pt-1 text-sm font-semibold rounded btn-sm btn-accent text-black hover:btn-error"
            >
              Book Now
            </Link>
          </div>
            </div>
            
           </div>
            
        </div>
    </div>
    );
};

export default ProductCard;