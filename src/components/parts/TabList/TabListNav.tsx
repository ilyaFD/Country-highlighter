import React from 'react';
import * as STablist from './TabList.styled';
import * as SBase from '../../styles/base.styled';

interface ITabListNavProps {
    activeContinent: string;
    continents: string[];
    onClick: (continent: string) => void
};

const TabListNav: React.FC<ITabListNavProps> = ({activeContinent, continents, onClick}) => {
    return (
        <STablist.Nav>
            {continents.map((continent: string, index: number) => {
                return (
                    <SBase.Btn
                        key={`${continent} ${index}`}
                        onClick={() => onClick(continent)}
                        active={continent === activeContinent}
                    >{continent}</SBase.Btn>
                )
            })}
        </STablist.Nav>
    );
}

export default TabListNav;
