import styled from 'styled-components';

export const Container = styled.div`
    max-width: 700px;
    width: 100%;
    margin: 4rem auto;
    padding: 0 1rem;
`;

export const Row = styled.div`
    display: flex;
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
`;

export const Title = styled.p`
    text-align: ${props => props.center ? 'center' : 'auto' };
    font-size: 3.6rem;
    font-weight: 400;
`;

export const SubTitle = styled.p`
    text-align: ${props => props.center ? 'center' : 'auto' };
    font-size: 2.6rem;
    font-weight: 500;
    margin-bottom: 3.5rem;
`;


export const Btn = styled.button`
    cursor: pointer;
    background-color: white;
    color: ${props => props.active ? '#e62382' : 'black'};
    border: 2px solid ${props => props.active ? '#e62382' : 'black'};
    font-size: 30px;
    line-height: 1;
    min-width: 150px;
    border-radius: 10px;
    font-weight: 600;
    padding: 0.8rem;
    margin: 0.8rem;
    transition: 0.2s;
`;


