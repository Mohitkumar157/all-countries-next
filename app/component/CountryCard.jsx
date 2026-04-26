import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Earth } from 'lucide-react';
import { Users } from 'lucide-react';
import { MapPin } from 'lucide-react';
function CountryCard({ data }) {


    return (
        <Link href={`countrydetail/${data.cca3}`}>
            <div className="card card-wraper rounded-lg overflow-hidden shadow">
                <div className="img-wraper relative w-full aspect-video overflow-hidden hover:scale-110 duration-300 ease-in-out">
                    <Image
                        src={data.flags.png}
                        alt={data?.name?.common}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        fill
                        loading="eager"

                    />

                </div>
                <div className="card-body py-4! px-3!">
                    <div className="title flex flex-col items-start">
                   
                            <h2 className="country-title text-[24px] mb-2! font-semibold">{data?.name?.common}</h2>
                            <span className='flex items-center gap-2.5 text-[#1d86d1] text-[12px] px-3! py-0.5! rounded-full bg-[#e9f4ff] w-fit'><Earth className='text-[#1d86d1] w-4' />{data.region}</span>
                    </div>
                    <div className="wraper flex flex-col gap-2 mt-2!">
                        <div className="population flex gap-3 items-center">
                            <Users className='text-[#4161bb] bg-[#e9f4ff] p-1.5! rounded-xl w-6 h-6' />
                            <div className="pop leading-[1.4]">
                                <p className='text-[16px]'>Population </p>
                                <span className='font-semibold'>{data.population.toLocaleString("en-IN")}</span>
                            </div>
                        </div>

                        <div className="capital flex gap-3 items-center">
                            <MapPin className='text-[#4161bb] bg-[#e9f4ff] p-1.5! rounded-xl w-6 h-6' />
                            <div className="pop leading-[1.4]">
                                <p className='text-[16px]'>Capital </p>
                                <span className='font-semibold'>{data.capital.join(",") || "N/A"}</span>
                            </div>
                        </div>


                        <div className="region flex gap-3 items-center">
                            <Earth className='text-[#4161bb] bg-[#e9f4ff] p-1.5! rounded-xl w-6 h-6' />
                            <div className="pop leading-[1.4]">
                                <p className='text-[16px]'>Region</p>
                                <span className='font-semibold'>{data.region}</span>
                            </div>
                        </div>
                        <div className="view-details pt-3! border-t border-[#ccc] flex justify-between items-center text-[12px] text-[#1d86d1]">
                            <p>View details</p>
                            <ArrowRight className='w-4 h-4'/>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CountryCard