"use client"
import useTheme from "../context/useTheme"
function SearchAndFilter({ userSearch: { search, setSearch, setFilter } }) {
    const { theme } = useTheme()
    return (
        <div className='flex justify-between items-center my-16!'>
            <div className="search md:w-[30%]">
                <input
                   value={search}
                   onChange={(e) => setSearch(e.target.value)}
                    className={`w-full px-6! py-2! rounded-lg ${theme === "light" ? "bg-white text-black" : "bg-[#2b3945] text-white"}  shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] outline-0`}
                    type="text" placeholder='Search for country...' />
            </div>
            <div className={`filter rounded-lg shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] outline-0`}>
                <select
                onClick={(e) => setFilter(e.target.value)}
                 name="region" className={`${theme === "light" ? "bg-white text-black" : "bg-[#2b3945] text-white"} outline-0 py-2! px-6! rounded-lg`}>
                    <option value="">Region</option>
                    <option value="">All</option>
                    <option value="Asia">Asia</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </div>
    )
}

export default SearchAndFilter