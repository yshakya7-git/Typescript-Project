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

    console.log(products)

    return (
        <header className="ml-[20rem] mt-[2rem]">
            <div className="row py-4">
                <div className="col-md-6">
                    <img src={products.image} alt={products.image} height="350px" width="350px" />
                </div>
                <div className="col-md-6">
                    <h4 className='text-uppercase text-black-50'>{products.category}</h4>
                    <h1 className="display-5">{products.title}</h1>
                    <p className="rates fw-bolder"><br />
                        Rating{products.rating && products.rating.rate}
                        <AiFillStar />
                    </p>
                    <h3 className="display-6 fw-bold my-4">
                        ${products.price}
                    </h3>
                    <p className="description">{products.description}</p>
                    <NavLink to='/products' className='btn btn-success ms-2'>
                                View Products
                            </NavLink>
                </div>
            </div>
        </header>
    )
}
