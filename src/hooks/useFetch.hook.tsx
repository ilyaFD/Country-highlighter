import React from "react";
import axios from "axios";

export default function useFetch <T>(url: string) {
	const [response, setResponse] = React.useState<T[] | null>(null);
	// const [response, setResponse] = React.useState<any>(null);
    const [isError, setIsError] = React.useState<boolean>(false);
    const [isLoading, setIsLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        function fetchCountries(): void {
            axios
                .get(url)
                .then(resp => {
                    setIsLoading(false);
                    setResponse(resp.data); 
                    // setResponse([
                    //     {
                    //         name: "Afghanistan",
                    //         continent: "Asia",
                    //         active: false
                    //     },
                    //     {
                    //         name: "Vietnam",
                    //         continent: "Europe",
                    //         active: false
                    //     },
                    //     {
                    //         name: "IlliaBurg",
                    //         continent: "Europe",
                    //         active: false
                    //     },
                    //     {
                    //         name: "Antigua and Barbuda",
                    //         continent: "Americas",
                    //         active: false
                    //     },
                    //     {
                    //         name: "Lesotho",
                    //         continent: "Africa"
                    //     },
                    //     {
                    //         name: "Marshall Islands",
                    //         continent: "Oceania"
                    //     },
                    //     {
                    //         name: "qasdasdasdwerwedasdsddffwerwfsdfweer",
                    //         continent: "Oceania"
                    //     },
                    //     {
                    //         name: "hgfghfghfgh",
                    //         continent: "Oceania"
                    //     },
                    //     {
                    //         name: "ghjghjghj fghfgh",
                    //         continent: "Oceania"
                    //     },
                    //     {
                    //         name: "sssssssssssssssss dddddd",
                    //         continent: "Oceania"
                    //     },
                    //     {
                    //         name: "ssss dddffffffffffffffddd",
                    //         continent: "Oceania"
                    //     }
                    // ]);
                })
                .catch(err => {
                    setIsLoading(false);
                    setIsError(true);
                });
        }

        fetchCountries();
    }, [])

    return [ response, isError, isLoading ]  as const;
}