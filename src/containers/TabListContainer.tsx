import React from 'react';
import { useStore } from '../stores/Store';
import { ICountry } from '../types/types';
import useFetch from '../hooks/useFetch.hook';
import TabList from '../components/parts/TabList/TabList';
import { observer } from "mobx-react";

const TabListContainer: React.FC = () => {
    const store = useStore();
    const [response, isError, isLoading] = useFetch<ICountry>("https://cdn.utopiamusic.com/code-test/frontend/countries.json");

    React.useEffect(() => {
        if (response) {
            store.setCountries(response);
            store.setActiveContinent(response[0].continent);
        }
    }, [response]);

    const onClickNav = (continent: string): void => {
        store.setActiveContinent(continent)
    }

    const onClickContent = (country: string): void => {
        store.toggleCountryActivity(country)
    }

    const title: string =  isLoading ?
        'Loading ...'
    :
        isError ?
            'Oops, try again later'
        :
            'Select region and click on the countries you want to highlight'

    return (
        <TabList
            title={title}
            activeContinent={store.activeContinent}
            continents={store.continents}
            continentCountries={store.continentCountries}
            onClickNav={onClickNav}
            onClickContent={onClickContent}
        />
    );
}
export default observer(TabListContainer);
