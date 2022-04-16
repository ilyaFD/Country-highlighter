import React from "react";
import { makeAutoObservable } from "mobx";

export interface ICountry {
  name: string;
  continent: string;
}

export interface IStore {
  activeRegion: string;
  countries: ICountry[]; 
  activeCountries: string[];
  setActiveRegion: (activeRegion: string) => void
  setCountries: (countries: ICountry[]) => void
  addActiveCountry: (country: string) => void
  deleteActiveCountry: (country: string) => void
}

export class Store implements IStore {
  activeRegion = '';
  countries = [] as ICountry[];
  activeCountries = [] as string[];

  constructor() {
    makeAutoObservable(this);
  }

  setActiveRegion(activeRegion: string) {
    this.activeRegion = activeRegion;
  }

  setCountries(countries: ICountry[]) {
    this.countries = countries;
  }

  addActiveCountry(country: string) {
    // this.activeCountries = [...this.activeCountries, country]
    this.activeCountries.push(country)
  }

  deleteActiveCountry(country: string) {
    this.activeCountries = this.activeCountries.filter((item: string) => item !== country)
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
