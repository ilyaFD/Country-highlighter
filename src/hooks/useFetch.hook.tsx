import React from "react";
import axios from "axios";

export default function useFetch <T>(url: string) {
	// const [response, setResponse] = React.useState<T[] | null>(null);
	const [response, setResponse] = React.useState<any>(null);
    const [isError, setIsError] = React.useState<boolean>(false);
    const [isLoading, setIsLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        function fetchCountries(): void {
            axios
                .get(url)
                .then(resp => {
                    setIsLoading(false);
                    // setResponse(resp.data); 
                    setResponse([
                        {
                            name: "Afghanistan",
                            continent: "Asia"
                        },
                        {
                            name: "Vietnam",
                            continent: "Europe"
                        },
                        {
                            name: "IlliaBurg",
                            continent: "Europe"
                        },
                        {
                            name: "Antigua and Barbuda",
                            continent: "Americas"
                        }
                    ]);
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