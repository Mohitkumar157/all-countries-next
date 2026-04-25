import Link from "next/link";
import Map from "./CountryMap";
import Image from 'next/image'
import { Landmark } from 'lucide-react';
import { Users } from 'lucide-react';
import { Scan } from 'lucide-react';
import { Clock } from 'lucide-react';
import { Languages } from 'lucide-react';
import { Wallet } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Globe } from 'lucide-react';
import MapWraper from './MapWraper';








function CountryDetails({ data, borderCountries }) {
    const currency = Object.values(data?.currencies || {})[0];
    return (
        <div className="container py-9! md:py-16!">
            <div className="flag flex items-center flex-col md:flex-row md:justify-center  gap-5">
                <div className="img-wraper relative w-full h-70 md:w-45 md:h-25 border-0 rounded-md overflow-hidden">
                    <Image
                        src={data.flags.png}
                        alt={data.name.common}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        loading="eager"
                        fill
                    />
                </div>
                <div className="country-name w-full">
                    <h1 className="title text-[32px] font-bold">{data?.name?.common}</h1>
                    <span className="sub-region">
                        {data.name.nativeName ? Object.values(data?.name?.nativeName)[0]?.common : "N/A"}
                    </span>
                    <p className="flex gap-1">
                        <span className="border rounded-sm border-[#ccc] px-5! py-1! my-1!">{data.cca2}</span>
                        <span className="border rounded-sm border-[#ccc] px-5! py-1! my-1!">{data.cca3}</span>
                        <span className="border rounded-sm border-[#ccc] px-5! py-1! my-1!">{data.region}</span>
                        <span className="border rounded-sm border-[#ccc] px-5! py-1! my-1!">{data.subregion}</span>
                    </p>
                </div>
            </div>
            <div className="about-country my-5! flex flex-col gap-5 lg:flex-row md:flex-col">
                <div className="left w-full flex-1 lg:w-[70%] grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 ">

                    <div className="capital py-2! w-full  shadow-sm hover:shadow-md transition px-4! flex gap-4 items-center border border-[#ccc] rounded-lg ">
                        <div className="icon">
                            <Landmark />
                        </div>
                        <div className="capital flex flex-col">
                            <span className="title font-semibold">Capital</span>
                            {data?.capital?.map((item, i) => <span key={i}>{item}</span>)}
                        </div>
                    </div>
                    <div className="population  w-full shadow-sm hover:shadow-md transition py-2! px-4! flex gap-4 items-center border border-[#ccc] rounded-lg ">
                        <div className="icon"><Users /></div>
                        <div className="population">
                            <p className='font-semibold'>Population</p>
                            <span>{(data?.population?.toLocaleString("en-IN"))}</span>
                        </div>
                    </div>
                    <div className="area  w-full shadow-sm hover:shadow-md transition py-2! px-4! flex gap-4 items-center border border-[#ccc] rounded-lg ">
                        <div className="icon"><Scan /></div>
                        <div className="area">
                            <p className='font-semibold'>Area</p>
                            <span>{data?.area}km²</span>
                        </div>
                    </div>
                    <div className="time-zone  w-full shadow-sm hover:shadow-md transition py-2! px-4! flex gap-4 items-center border border-[#ccc] rounded-lg ">
                        <div className="icon">
                            <Clock />
                        </div>
                        <div className="time-zone">
                            <p className='font-semibold'>Time Zone</p>
                            <span>{data?.timezones[0]}</span>
                        </div>
                    </div>
                    <div className="language  w-full shadow-sm hover:shadow-md transition py-2! px-4! flex gap-4 items-center border border-[#ccc] rounded-lg ">
                        <div className="icon"><Languages /></div>
                        <div className="language">
                            <p className='font-semibold'>Languages</p>
                            {Object.values(data.languages || {}).map((lang, i) => <span key={i}>{lang}</span>) || []}
                        </div>
                    </div>
                    <div className="currency  w-full shadow-sm hover:shadow-md transition py-2! px-4! flex gap-4 items-center border border-[#ccc] rounded-lg ">
                        <div className="icon"><Wallet /></div>
                        <div className="currency">
                            <p className='font-semibold'>Currencies</p>
                            <span>
                                {currency ? `${currency.symbol || ""} (${currency.name || ""})` : "N/A"}
                            </span>
                        </div>
                    </div>

                    <div className="calling-code  w-full shadow-sm hover:shadow-md transition py-2! px-4! flex gap-4 items-center border border-[#ccc] rounded-lg ">
                        <div className="icon"><Phone /></div>
                        <div className="calling">
                            <p><b>Calling code  </b></p>
                            <span>
                                {
                                    data.idd.root && data?.idd?.suffixes.length
                                        ? `${data?.idd?.root + data?.idd?.suffixes[0]}`
                                        : "N/A"
                                }
                            </span>
                        </div>
                    </div>
                    <div className="top-level-domian  w-full shadow-sm hover:shadow-md transition py-2! px-4! flex items-center gap-4 border border-[#ccc] rounded-lg">
                        <div className="icon"><Globe /></div>
                        <div className="tld">
                            <p className='font-semibold'>Top Level Domain</p>
                            <ul className="flex gap-2">{data?.tld?.map((item, i) => <li key={i}>{item}</li>)}</ul>
                        </div>
                    </div>
                    <div className="borders  w-full shadow-sm hover:shadow-md transition py-2! px-4! flex gap-4 border border-[#ccc] rounded-lg ">
                        <div className="">
                            <p className='font-semibold'>Borders</p>
                            {data?.borders?.length
                                ? data.borders.map((border, i) => (
                                    <span key={i}>{border}, </span>
                                ))
                                : "N/A"}
                        </div>
                    </div>
                    <div className="border-countries  w-full shadow-sm hover:shadow-md transition col-span-3 py-2! px-4! flex flex-wrap items-center gap-4 border border-[#ccc] rounded-lg">
                        <b><p>Border countries</p></b>
                        <div className="b-countries flex flex-wrap gap-4">
                            {!borderCountries.length ? <p>No border country</p> : borderCountries?.map((country) => (

                                <Link href={`/countrydetail/${country.cca3}`}
                                    key={country.name.common}>
                                    <div className='border-country hover:scale-105 hover:shadow-md transition-all duration-300 flex justify-center items-center gap-2.5 border border-[#ccc] rounded-sm px-2.5! py-2!'>
                                        <div className="left w-8 h-7 relative">
                                            <Image
                                                src={country.flags.png}
                                                alt={country.name.common}
                                                fill
                                                className="object-cover rounded-sm"
                                                sizes="(max-width: 768px) 50px, 60px"
                                            />
                                        </div>
                                        <div className="right flex flex-col">
                                            <p className='text-[10px] font-semibold'>{country.name.common}</p>
                                            <span className='text-[10px] text-start'>{country.cca3}</span>
                                        </div>
                                    </div>
                                </Link>

                            ))}
                        </div>
                    </div>
                </div>

                <div className="right w-full lg:w-[30%]">
                    <div className="map-wraper h-full">


                        <MapWraper latlng={data.latlng} name={data.name.common} />



                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountryDetails