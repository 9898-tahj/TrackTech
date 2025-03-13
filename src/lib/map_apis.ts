import type { LngLatLike } from "maplibre-gl";
import { jamaica_location } from "./constants";

export interface LocationResponse {
    status: string;
    country: string;
    countryCode: string;
    region: string;
    regionName: string;
    city: string;
    zip: string;
    lat: number;
    lon: number;
    timezone: string;
    isp: string;
    org: string;
    as: string;
    query: string;
}


export  async function getLocation() {
    try {

        const response = await fetch("http://ip-api.com/json/");
        const json = (await response.json() as LocationResponse);

        return [json.lon, json.lat] as LngLatLike;

    } catch(error) {
        //alert(error);
        return jamaica_location;
    }
}
