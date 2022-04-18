import styled from 'styled-components';

export const Container = styled.div`
    max-width: 700px;
    width: 100%;
    margin: 4rem auto;
    padding: 0 1rem;
`;

export const Row = styled.div`
    display: flex;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Col = styled.div`
    flex: 1;
    padding: 0 15px;
    flex-grow: ${props => props.grow ?  props.grow : 1 };
    align-self: ${props => props.centerVertical ?  'center' : 'auto' };
    :first-child {
        padding-left: 0
    }
    :last-child {
        padding-right: 0
    }
    @media (max-width: 768px) {
        :first-child {
            padding-left: 15px;
        }
        :last-child {
            padding-right: 15px;
        }
    }
`;

export const Title = styled.p`
    text-align: ${props => props.center ? 'center' : 'auto' };
    font-size: 3.6rem;
    font-weight: 400;
    @media (max-width: 992px) {
        font-size: 3rem;
    }
    @media (max-width: 768px) {
        font-size: 2.1rem;
        margin-bottom: 30px;
    }
`;

export const SubTitle = styled.p`
    text-align: ${props => props.center ? 'center' : 'auto' };
    font-size: 2.6rem;
    font-weight: 500;
    margin-bottom: 3.5rem;
    @media (max-width: 992px) {
        font-size: 2.1rem;
    }
    @media (max-width: 768px) {
        font-size: 1.6rem;
    }
`;


export const Btn = styled.button`
    cursor: pointer;
    background-color: white;
    color: ${props => props.active ? '#e62382' : 'black'};
    border: 2px solid ${props => props.active ? '#e62382' : 'black'};
    font-size: 1.9rem;
    line-height: 1;
    min-width: 150px;
    border-radius: 10px;
    font-weight: 600;
    padding: 0.8rem;
    margin: 0.8rem;
    transition: 0.2s;
    @media (max-width: 992px) {
        padding: 0.5rem;
        margin: 0.5rem;
        font-size: 1.5rem;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`;


