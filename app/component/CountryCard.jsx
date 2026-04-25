import Link from 'next/link';
import Image from 'next/image';
function CountryCard({ data }) {
    

    return (
       <Link href={`countrydetail/${data.cca3}`}>
        <div className="card card-wraper rounded-lg overflow-hidden shadow">
            <div className="img-wraper relative w-full h-45 overflow-hidden">
                <Image
                    src={data.flags.png}
                    alt={data?.name?.common}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    fill
                    loading="eager"
                   
                />

            </div>
            <div className="card-body py-4! px-3!">
                <h3 className="country-title py-1!">{data?.name?.common}</h3>
                <p className='py-1!'><b>Population :</b> <span>{data.population.toLocaleString("en-IN")}</span></p>
                <p className='py-1!'><b>Region : </b><span>{data.region}</span></p>
                <p className='py-1!'><b>Capital :</b> <span>{data.capital.join(",") || "N/A"}</span> </p>
            </div>
        </div>
       </Link>
    )
}

export default CountryCard