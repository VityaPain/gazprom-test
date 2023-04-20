import { resolve } from "mathjs";
import React, {useCallback, useState, useEffect } from "react";

const TestServices = () => {
    const [testVar, setTestVar] = useState()

    const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address";
    const urlAdres = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party"
    // const urlAdres = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address"
    const token = '5d5a431872dfa50cd1d66ced6d073b24f7cfedc6';
    const options = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
        },
    }


    const onRequest = useCallback(async (url, options, param) => {
        try {
            const response = await fetch(url, {...options, body: JSON.stringify(param)})

            if (!response.ok) {
                throw new Error(`Could not fetch status: ${response.url}`);
            }

            const data = await response.json()

            return data
        } catch (e) {
            throw e
        }
    }, [])

    const GetLocation = async (coords) => {
        const data = await onRequest(url, options, coords)

        return [data.suggestions[0].data.city_with_type, data.suggestions[0].data.geo_lat, data.suggestions[0].data.geo_lon ].join(' ')
    }   

    const getAdresses = async (query) => {
        const data = await onRequest(urlAdres, options, query)

        return data.suggestions
    }

    return {GetLocation, getAdresses}
}

export default TestServices