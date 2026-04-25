import React from 'react'
import CountryDetails from "../../component/CountryDetails";
import BackBtn from '../../component/BackBtn';

export async function generateStaticParams() {
  const res = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,cca3,borders");
  const data = await res.json();
  console.log(data);
  
  return data.map((country) => ({
    id : country.cca3
  }));
};


async function page({ params }) {
  let borderCountries = [];
  const { id } = await params;
  const res = await fetch(`https://restcountries.com/v3.1/alpha?codes=${id}`)
  const data = await res.json();
  console.log(data);
  
  if (data[0]?.borders?.length  > 0) {
    const borderres = await fetch(`https://restcountries.com/v3.1/alpha?codes=${data[0].borders.join(",")}`)
    borderCountries = await borderres.json();
  }
  return (
    <div className='country-detail'>
      <div className='py-4!'>
       <div className='container'> <BackBtn /></div>
      </div>
      <CountryDetails data={data[0]} borderCountries={borderCountries} />
    </div>
  )
}

export default page