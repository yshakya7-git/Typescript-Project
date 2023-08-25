import { ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import axios from "axios";
import { useQuery } from "react-query";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

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
    const { data: productList = [] } = useQuery(["repo"], () =>
        axios.get('https://fakestoreapi.com/products')
            .then(
                (res) => res.data,
            ));
console.log(productList, 'hello');

    const table = useReactTable({
        data: productList,
        columns: productColumns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });
    return (
        <div className="flex flex-col w-screen">
            <div className="overflow-x-visible w-[40px] ml-[10rem] mr-[20rem]">
                <div className="inline-block min-w-full items-center ml-96 mt-10">
                    <div>
                        <NavLink to={'/addProducts'} className="bg-red-600">Add +</NavLink>
                    </div>
                    <br />
                    <div className='overflow-auto md:overflow-scroll hover:overflow-auto h-[450px] w-[100%]  '>
                        <table className='border text-center text-sm font-light dark:border-neutral-500'>
                            <thead className='sticky top-0 border-b font-medium bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                                {table.getHeaderGroups().map(headerGroup => (
                                    <tr key={headerGroup.id} >
                                        {headerGroup.headers.map(header => (
                                            <th key={header.id} colSpan={header.colSpan} className=" border-r px-6 py-4 dark:border-neutral-500">
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
                            <tbody className="pt-1">
                                {table.getRowModel().rows.map(row => (
                                    <tr key={row.id} className="border-b dark:border-neutral-500">
                                        {row.getVisibleCells().map(cell => (
                                            <td key={cell.id} className={classNames(`truncate whitespace-nowrap border-r px-2 py-2 font-medium dark:border-neutral-500`,
                                            )}

                                            >
                                                <span className={classNames(cell.column.columnDef.header == 'Description' || cell.column.columnDef.header == 'Title' ? ' inline-block truncate w-[250px] ' : '')}>
                                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                </span>


                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>


                    </div>
                    <br />
                    <div className="flex items-center gap-2">
                        <button className="border rounded p-1"
                            onClick={() => table.setPageIndex(0)}
                            disabled={!table.getCanPreviousPage()}>
                            {'<<'}
                        </button>
                        <button className="border rounded p-1"
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}>
                            {'<'}
                        </button>
                        <button className="border rounded p-1"
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}>
                            {'>'}
                        </button>
                        <button className="border rounded p-1"
                            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                            disabled={!table.getCanNextPage()}>
                            {'>>'}
                        </button>
                        <span className="flex items-center gap-1">
                            <div>Page</div>
                            <strong>
                                {table.getState().pagination.pageIndex + 1} of{' '}
                                {table.getPageCount()}
                            </strong>
                        </span>
                        <span className="flex items-center gap-1">
                            | Go to page:
                            <input
                                type="number"
                                defaultValue={table.getState().pagination.pageIndex + 1}
                                onChange={e => {
                                    const page = e.target.value ? Number(e.target.value) - 1 : 1
                                    table.setPageIndex(page)
                                }}
                                className="border p-1 rounded w-16"
                            />
                        </span>
                        <select
                            value={table.getState().pagination.pageSize}
                            onChange={e => {
                                table.setPageSize(Number(e.target.value))
                            }}
                        >
                            {[5, 10, 20, 30, 40, 50].map(pageSize => (
                                <option key={pageSize} value={pageSize}>
                                    Show {pageSize}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}
