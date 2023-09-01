import { useEffect, useState } from "react"
import { SearchInput } from "../../ui(components)/inputfields/SearchInput"
import { useDebounce } from "../../hooks/useDebounce";

const DATA_LIST = [
  "Luke Skywalker",
  "C-3PO",
  "R2-D2",
  "Darth Vader",
  "Leia Organa",
  "Owen Lars",
  "Beru Whitesun lars",
  "R5-D4",
  "Biggs Darklighter",
  "Obi-Wan Kenobi",
];

export const SearchProduct = () => {

  const [search, setSearch] = useState<any>([]);
  const [text, setText] = useState('');

  const debounce = useDebounce(text, 500);

  // const { isLoading,data } = useQuery({
  //   queryKey: ['search', de],
  //   queryFn: ()=>{
  //     axios.get(`https://dummyjson.com/products/search?q=${search}`)
  //     .then(res=> console.log(res.data));
  //   },
  // })

  // if (isLoading) {
  //   return <span>Loading...</span>
  // }

  // if (isError) {
  //   return <span>Error: {erro}</span>
  // }

  useEffect(() => {
    const data = DATA_LIST.filter((data: any) => data.toLowerCase().includes(debounce));
    setSearch(data);
  }, [debounce]);

  return (
    <header className="ml-[20rem] mt-[2rem]">
      <SearchInput
        label="Search"
        type="search"
        placeholder="Search Products..." value={""} name={""}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="bg-white/70 w-[50%] border-b-8">
        {search.length ? (
          search.map((item : any, i: any) => (
            <div key={i} className="result-item">
              {item}
            </div>
          ))
        ): (
          <p>No Result</p>
        )}
        </div>
    </header>
  )
}
