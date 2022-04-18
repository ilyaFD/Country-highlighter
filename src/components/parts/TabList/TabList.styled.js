import styled from 'styled-components';

export const Wrap = styled.div`
    padding: 0 2.5rem;
`;

export const Nav = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 3.5rem;
`;

export const Content = styled.div`

`;

export const Item = styled.button`
    cursor: pointer;
    width: calc(25% - 22.5px);
    border: none;
    background-color: white;
    font-size: 1.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0;
    margin-right: 30px;
    color: ${props => props.active ? '#e62382' : 'black'};
    transition: 0.2s;
    margin-bottom: 1rem;
    :nth-child(4n) {
        margin-right: 0;
    }
`;


