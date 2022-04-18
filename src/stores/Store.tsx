import React from "react";
import { makeAutoObservable } from "mobx";
import { ICountry } from '../types/types';

export interface IStore {
  countries: ICountry[]; 
  activeContinent: string;
  continents: string[];
  continentCountries: ICountry[];
  setCountries: (countries: ICountry[]) => void
  setActiveContinent: (activeContinent: string) => void
  toggleCountryActivity: (country: string) => void
}

export class Store implements IStore {
  countries = [] as ICountry[];
  activeContinent = '';
  get continents() {
    let continents: string[] = [];
    this.countries.forEach((country: ICountry): void => {
        !continents.includes(country.continent) && continents.push(country.continent)
    })
    return continents;
  };
  get continentCountries() {
    return this.countries.filter((country: ICountry): boolean  => {
      return country.continent === this.activeContinent
    })
  }

  constructor() {
    makeAutoObservable(this);
  }

  setCountries(countries: ICountry[]) {
    this.countries = countries;
  }

  setActiveContinent(activeContinent: string) {
    this.activeContinent = activeContinent;
  }

  toggleCountryActivity(activeCountry: string) {
    this.countries = this.countries.map((country: ICountry): ICountry => {
      return {
        name: country.name,
        continent: country.continent,
        active: country.name === activeCountry ? !country.active : country.active,
      }
    })
  }
}

/* Store provider */
const StoreContext = React.createContext({} as IStore); 

type StoreComponent = React.FC<{
  store: IStore;
  children: React.ReactNode;
}>;

export const StoreProvider: StoreComponent = ({ children, store }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

/* Hook to use store in any functional component */
export const useStore = (): IStore => React.useContext(StoreContext);
