import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
}

const productColumns: ColumnDef<Product, any>[] = [
    {
        header: 'Products Details',
        footer: props => props.column.id,
        columns: [
            {
                accessorKey: 'id',
                header: 'Id',
                cell: info => info.getValue(),
                footer: info => info.column.id
            },
            {
                accessorKey: 'title',
                header: 'Title',
                cell: info => info.getValue(),
                footer: info => info.column.id
            },
        ],
    },
    {
        header: 'More Details',
        footer: info => info.column.id,
        columns: [
            {
                accessorKey: 'description',
                header: 'Description',
                cell: info => info.getValue(),
                footer: info => info.column.id
            },
            {
                accessorKey: 'price',
                header: 'Price',
                cell: info => info.getValue(),
                footer: info => info.column.id
            },
        ],
    }
]


export const ViewProducts = () => {
    const [productList, setProductList] = useState<any[]>([]);

    const table = useReactTable({
        data: productList,
        columns: productColumns,
        getCoreRowModel: getCoreRowModel(),
    });

    const { isLoading, error } = useQuery(["repo"], () =>
        axios.get(' https://api.escuelajs.co/api/v1/products')
            .then(
                (res) => (setProductList(res.data)
                ),
            ));
    console.log(productList, "hello");
    if (isLoading) {
        return 'Loading...'
    }

    if (error) {
        return 'An error has occurred:'
    }

    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto ml-[15rem] mr-[15rem]">
                <div className="inline-block min-w-full py-[4rem] sm:pl-[2rem] lg:px-6">
                    <div className='overflow-hidden'>
                        <table className='min-w-full border text-center text-sm font-light dark:border-neutral-500'>
                            <thead className='border-b font-medium bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                                {table.getHeaderGroups().map(headerGroup => (
                                    <tr key={headerGroup.id}>
                                        {headerGroup.headers.map(header => (
                                            <th key={header.id} colSpan={header.colSpan} className="border-r px-6 py-4 dark:border-neutral-500">
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody >
                                {table.getRowModel().rows.map(row => (
                                    <tr key={row.id} className="border-b dark:border-neutral-500">
                                        {row.getVisibleCells().map(cell => (
                                            <td key={cell.id} className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
