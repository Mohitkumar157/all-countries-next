import CountryList from "./component/CountryList";
export default async function Home() {
  const allCountriesData = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,cca3,borders")
    .then((res) => res.json());

  return (
    <main>
      <CountryList data={allCountriesData} />
    </main>
  );
}
