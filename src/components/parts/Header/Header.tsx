import React from 'react';
import * as SBase from '../../ui/base.styled';
import * as SHeader from './Header.styled';
import logo from '../../../assets/logo.png';

const Header: React.FC = () => {
    return (
        <SHeader.Wrap>
            <SBase.Row>
                <SBase.Col></SBase.Col>
                <SBase.Col grow={2}>
                    <SBase.Title>Utopia Country Highlighter</SBase.Title>
                </SBase.Col>
                <SBase.Col>
                    <SHeader.LogoWrap>
                        <SHeader.Logo src={logo} />
                    </SHeader.LogoWrap>
                </SBase.Col>
            </SBase.Row>
        </SHeader.Wrap>
    );
}

export default Header;
