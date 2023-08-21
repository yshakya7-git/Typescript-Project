import { useQuery } from 'react-query';
import { useState } from 'react';
import axios from 'axios';
import classNames from 'classnames';

export const ViewProducts = () => {

    const tableClasses = classNames('border-separate border border-slate-400 ... ');
    const tableHeadClasses = classNames('border border-slate-300 ...');
    const tableDataClasses = classNames('border border-slate-300 ...');

    const [productList, setProductList] = useState<any[]>([]);
    // const [displayProduct, setDisplayProduct] = useState<any[]>([]);

    const { isLoading, error } = useQuery(["repo"], () =>
        axios.get(' https://api.escuelajs.co/api/v1/products')
            .then(
                (res) => (setProductList(res.data)
            ),
    ));

    if (isLoading) {
        return 'Loading...'
    }

    if (error) {
        return 'An error has occurred:'
    }

    // const searchProduct = (query: any) => {
    //     if (!query) {
    //         const filterProductList = productList.filter((product) => {
    //             return product.title.includes(query) || product.description.includes(query);
    //         });
    //         setDisplayProduct(filterProductList);
    //     } else {
    //         setProductList(displayProduct);
    //     }
    // }

    return (
        <div>
            {/* <center>
                <input style={{ height: "40px", width: "50%", borderRadius: "10px" }} type="search" placeholder="Search Product" onChange={(e) => searchProduct(e.target.value)} />
            </center> */}
            <table className={tableClasses}>
                <thead>
                    <tr>
                        <th className={tableHeadClasses}>ID</th>
                        <th className={tableHeadClasses}>Title</th>
                        <th className={tableHeadClasses}>Description</th>
                        <th className={tableHeadClasses}>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {productList.map((product) => {
                            return (
                                <tr key={product.id}>
                                    <td className={tableDataClasses} >{product.id}</td>
                                    <td className={tableDataClasses}>{product.title}</td>
                                    <td className={tableDataClasses}>{product.description}</td>
                                    <td className={tableDataClasses}>{product.price}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}
