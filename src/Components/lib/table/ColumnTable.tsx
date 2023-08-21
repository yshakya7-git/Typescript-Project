import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import React from "react";

type College = {
    name: string;
    address: string;
    district: string;
    postal_code: number;

}

const defaultCollegeData: College[] = [
    {
        name: 'Himalayan College',
        address: 'Balkumari',
        district: 'Lalipur',
        postal_code: 2512
    },
    {
        name: 'Kathford College',
        address: 'Balkumari',
        district: 'Lalipur',
        postal_code: 2154
    },
    {
        name: 'NCIT College',
        address: 'Gwarko',
        district: 'Lalipur',
        postal_code: 8541
    },
    {
        name: 'Deerwalk College',
        address: 'Jaybadeswori',
        district: 'Kathmandu',
        postal_code: 4512

    },
]

const defaultCollegeColumn: ColumnDef<College, any>[] = [
    {
        header: 'College Name',
        footer: info => info.column.id,
        columns: [
            {
                accessorKey: 'name',
                header: 'Name',
                cell: info => info.getValue(),
                footer: info => info.column.id
            },
        ],
    },
    {
        header: 'Information',
        footer: info => info.column.id,
        columns: [
            {
                accessorKey: 'address',
                header: 'Address',
                cell: info => info.getValue(),
                footer: info => info.column.id
            },
            {
                accessorKey: 'district',
                header: 'District',
                cell: info => info.getValue(),
                footer: info => info.column.id
            },
            {
                accessorKey: 'postal_code',
                header: 'Postal_code',
                cell: info => info.getValue(),
                footer: info => info.column.id
            },

        ],
    }
]

export const ColumnTable = () => {

    const [columnVisibility, setColumnVisibility] = React.useState({});

    const collegeTable = useReactTable({
        data: defaultCollegeData,
        columns: defaultCollegeColumn,
        state: {
            columnVisibility,
        },
        onColumnVisibilityChange: setColumnVisibility,
        getCoreRowModel: getCoreRowModel(),
        debugTable: true,
        debugHeaders: true,
        debugColumns: true,

    })
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto ml-[15rem] mr-[15rem]">
                <div className="inline-block min-w-full py-[4rem] sm:pl-[2rem] lg:px-6">
                    <div className='overflow-hidden'>
                        <table className='min-w-full border text-center text-sm font-light dark:border-neutral-500'>
                            <thead className='border-b font-medium bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                                {collegeTable.getHeaderGroups().map(headerGroup => (
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
                                {collegeTable.getRowModel().rows.map(row => (
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
