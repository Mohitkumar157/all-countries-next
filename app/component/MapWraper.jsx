"use client";
import LoadingScaleton from "./LoadingScaleton";
import dynamic from "next/dynamic";

const CountryMap = dynamic(() => import("./CountryMap"), {
    ssr: false,
    loading: () => <LoadingScaleton />,
});

function MapWrapper({ latlng, name }) {
    return <CountryMap latlng={latlng} name={name} />;
}

export default MapWrapper;