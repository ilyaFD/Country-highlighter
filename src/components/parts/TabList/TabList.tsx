import React from 'react';
import TabListNav from './TabListNav';
import TabListContent from './TabListContent';
import * as SBase from '../../styles/base.styled';
import * as STablist from './TabList.styled';
import { ICountry } from '../../../types/types';

interface ITabListProps {
    title: string;
    activeContinent: string;
    continents: string[];
    continentCountries: ICountry[];
    onClickNav: (continent: string) => void;
    onClickContent: (country: string) => void;
};

const TabList: React.FC<ITabListProps> = ({
    title,
    activeContinent,
    continents,
    continentCountries,
    onClickNav,
    onClickContent
}) => {
    return (
        <SBase.Container>
            <SBase.SubTitle center>{title}</SBase.SubTitle>
            <STablist.Wrap>
                <TabListNav
                    activeContinent={activeContinent}
                    continents={continents}
                    onClick={onClickNav}
                />
                <TabListContent continentCountries={continentCountries} onClick={onClickContent}/>
            </STablist.Wrap>
        </SBase.Container>
    );
}

export default TabList;
