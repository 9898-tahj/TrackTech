
export async function getLocation(): Promise<{ lon: number; lat: number }>{

    if (!navigator.geolocation) {
        throw new Error("Geolocation is not supported by this browser.");
    }

    try {

        const position = await new Promise<GeolocationPosition>((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        return {
            lat: position.coords.latitude,
            lon: position.coords.longitude
        };

    } catch (error) {
        throw new Error(`Geolocation error: ${error instanceof Error ? error.message : "Unknown error"}`);
    }

}
