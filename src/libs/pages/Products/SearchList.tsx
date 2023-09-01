export default function SearchList({ isLoading, data }: any) {
    return (
        <div className="flex flex-col items-center w-full bg-gray-500">
            {isLoading &&
                <div className="text-white">Loading...</div>
            }
            {data && data.map((item: any) => (
                <div key={item.id} className="text-white">{item.title}</div>
            ))}

        </div>
    )
}
