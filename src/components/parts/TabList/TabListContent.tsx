import React from 'react';
import * as STablist from './TabList.styled';
import { ICountry } from '../../../types/types';

interface ITabListContentProps {
    continentCountries: ICountry[];
    onClick: (continent: string) => void
};

const TabListContent: React.FC<ITabListContentProps> = ({continentCountries, onClick}) => {
    return (
        <STablist.Content>
            {continentCountries.map((country: ICountry, index: number) => {
                return (
                    <STablist.Item
                        key={`${country.name} ${index}`}
                        onClick={() => onClick(country.name)}
                        active={country.active}
                    >{country.name}</STablist.Item>
                )
            })}
        </STablist.Content>
    );
}

export default TabListContent;
