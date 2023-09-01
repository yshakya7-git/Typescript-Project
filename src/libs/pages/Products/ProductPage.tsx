import axios from "axios";
import { useQuery } from "react-query";
import { NavLink } from "react-router-dom";
import { SearchProduct } from "./SearchProduct";

export const ProductPage = () => {
    const { data: products = []} = useQuery(["products"], () =>
        axios.get('https://fakestoreapi.com/products')
            .then(
                (res) => res.data,
            ));

    return (
        <header className="ml-[20rem] mt-[2rem]">
            <SearchProduct/>
            <div className="grid grid-cols-4 gap-4">
                {products.map((product: any) => {
                    return (
                        <div className="card h-300 text-center p-4 shadow-md">
                            <img src={product.image}
                                style={{ height: "250px", width: "250px", objectFit: "cover" }}
                                alt={product.description}
                            />
                            <div className="card-body">
                                <h5 className="card-title">
                                    {product.title ? product.title.substring(0, 20) : 'products'}
                                </h5>
                                <p className="card-text ms-2">
                                    ${product.price}
                                </p>
                                <p className='card-text'>{product?.description ? product?.description.substring(0, 40) : 'products'}</p>
                                <div className="mt-[2.5rem] mb-[2.5rem]">
                                    <NavLink className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                     to={`/buyProducts/${product.id}`}>Buy Product</NavLink>
                                </div>
                            </div>
                        </div>

                    )

                })}
            </div>


        </header >
    )
}
