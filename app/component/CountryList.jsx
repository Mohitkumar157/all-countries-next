"use client"
import SearchAndFilter from "./SearchAndFilter";
import CountryCard from './CountryCard';
import { useState } from "react";
function CountryList({ data }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState('');
  console.log(search);
  console.log(filter);
 data.forEach((d) => console.log(d)
 )
  return (
    <>
      <div className="container search&filter">
        <SearchAndFilter userSearch={{ search, setSearch, setFilter }} />
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {!data.length ? "loading..." : data.filter((c) => c.region.includes(filter.trim()))
          .filter((c) => c.name.common.toLowerCase().includes(search.toLowerCase().trim()))
          .map((country) => (
            <CountryCard key={country.cca3} data={country} />
          ))}
      </div>
    </>
  )
}

export default CountryList