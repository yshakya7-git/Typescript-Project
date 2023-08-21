import { SortingState, createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useState, useReducer } from 'react';

type DemoTableProps = {
    name: string;
    address: string;
    age: number;
    status: string;

}

const tableData: DemoTableProps[] = [
    {
        name: 'Yunika Shakya',
        address: 'Patan',
        age: 22,
        status: 'Single',
    },
    {
        name: 'Yunish Shakya',
        address: 'Mangalbazar',
        age: 27,
        status: 'Complicated',
    },
    {
        name: 'Shereen Shakya',
        address: 'Chakupat',
        age: 15,
        status: 'Single',
    },
    {
        name: 'Hriden Shakya',
        address: 'Chakupat',
        age: 15,
        status: 'Single',
    },
    {
        name: 'Binod Shakya',
        address: 'Chakupat',
        age: 15,
        status: 'Single',
    },
    {
        name: 'Manoj Shakya',
        address: 'Chakupat',
        age: 15,
        status: 'Single',
    },
    {
        name: 'Prabesh Shakya',
        address: 'Chakupat',
        age: 15,
        status: 'Single',
    },
    {
        name: 'Rajani Shakya',
        address: 'Chakupat',
        age: 15,
        status: 'Single',
    },
    {
        name: 'Simom Shakya',
        address: 'Chakupat',
        age: 15,
        status: 'Single',
    },
]

const columnHelper = createColumnHelper<DemoTableProps>();

const columns = [
    columnHelper.accessor('name', {
        cell: info => info.getValue(),
        footer: info => info.column.id,
    }),
    columnHelper.accessor('address', {
        header: () => 'Address',
        cell: info => info.getValue(),
        footer: info => info.column.id,
    }),
    columnHelper.accessor('age', {
        header: () => 'Age',
        cell: info => info.renderValue(),
        footer: info => info.column.id,
    }),
    columnHelper.accessor('status', {
        header: () => 'Status',
        footer: info => info.column.id,
    }),
]

export const DemoTable = () => {

    const rerender = useReducer(() => ({}), {})[1];
    const [data] = useState(() => [...tableData]);

    const [sorting, setSorting] = useState<SortingState>([]);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        state: {
            sorting,
        },
        onSortingChange: setSorting,
        getSortedRowModel: getCoreRowModel(),
    });


    return (
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
            <h2>DemoTable</h2>
            <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id} className='px-6 py-3'>
                                    {header.isPlaceholder ? null : (
                                        <div {...{
                                            className: header.column.getCanSort() ? 'cursor-pointer select-none' : '',
                                            onClick: header.column.getToggleSortingHandler(),
                                        }}>
                                            {flexRender(header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                            {{
                                                asc: '🔼',
                                                desc: '🔽',
                                            }[header.column.getIsSorted() as string] ?? null}
                                        </div>
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>

                <tbody className='border border-slate-300 ...'>
                    {table.getRowModel().rows.slice(0, 10).map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell,
                                        cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>

                <tfoot className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-40'>
                    {table.getFooterGroups().map(footerGroup => (
                        <tr key={footerGroup.id}>
                            {footerGroup.headers.map(footheader => (
                                <th key={footheader.id}>
                                    {footheader.isPlaceholder ? null : flexRender(footheader.column.columnDef.footer,
                                        footheader.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </tfoot>
            </table>

            <div>
            Rows : 
                {table.getRowModel().rows.length}
            </div>

            <div>
                <button onClick={() => rerender()}>Force Rerender</button>
            </div>
            {/* <pre>{JSON.stringify(sorting, null, 2)}</pre> */}
        </div>
    )
}