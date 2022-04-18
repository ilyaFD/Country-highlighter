import React from "react";
import axios from "axios";

export default function useFetch <T>(url: string) {
	const [response, setResponse] = React.useState<T[] | null>(null);
    const [isError, setIsError] = React.useState<boolean>(false);
    const [isLoading, setIsLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        function fetchCountries(): void {
            axios
                .get(url)
                .then((resp: any): void => {
                    setIsLoading(false);
                    setResponse(resp.data);
                })
                .catch((err: any): void => {
                    setIsLoading(false);
                    setIsError(true);
                });
        }

        fetchCountries();
    }, [url])

    return [ response, isError, isLoading ]  as const;
}