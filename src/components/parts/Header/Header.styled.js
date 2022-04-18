import styled from 'styled-components';

export const Wrap = styled.div`
    background-color: #222;
    color: white;
    padding: 60px 30px;
    @media (max-width: 768px) {
        padding: 40px 30px;
    }
}
`;
export const Logo = styled.img`
    width: 130px;
    height: 130px;
    border-radius: 50%;
    @media (max-width: 992px) {
        width: 100px;
        height: 100px;
    }
    @media (max-width: 768px) {
        width: 70px;
        height: 70px;
    }
`;

export const LogoWrap = styled.div`
    justify-content: flex-end;
    align-items: center;
    display: flex;
    height: 100%
`
