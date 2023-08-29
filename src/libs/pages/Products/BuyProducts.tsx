import axios from "axios";
import { AiFillStar } from "react-icons/ai";
import { useQuery } from "react-query";
import { NavLink, useParams } from "react-router-dom";

export const BuyProducts = () => {
    const { id } = useParams();
    const { data: products = [] } = useQuery(["products"], () =>
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(
                (res) => res.data,
            ));

    console.log(products);

    return (
        <header className="ml-[20rem] mt-[2rem] ">
            <section className='grid grid-cols-2 gap-2 m-auto w-[65%] ml-[9rem] p-[2.5rem] bg-white border-radius shadow-md items-center'>
                <div className='grid grid-rows-2'>
                    <div className='border-radius-[6px] bg-red h-[250px] w-[250px]'>
                        <img className='l-[-4.5rem]' src={products.image} alt={products.image} />
                    </div>
                </div>
                <div className='grid grid-rows-2 mt-[-10rem]'>
                    <h1 className='text-uppercase font-bold'>{products.title}</h1>
                    <h1 className='text-uppercase font-bold'>Category : {products?.category?.toUpperCase()}</h1>
                    <h1 className="rates font-bold">Rating : {products.rating && products.rating.rate}<AiFillStar /></h1>
                    <h1 className="font-bold">Price : ${products.price}
                    </h1>
                    <p className="description">{products.description}</p>
                    <br />
                    <br />
                    <div className="ml mt-4">
                        <NavLink to='/products' className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" >
                            Add To Cart
                        </NavLink>
                    </div>
                </div>

            </section>
        </header>
    )
}