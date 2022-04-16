import styled from 'styled-components';

export const Row = styled.div`
    display: flex;
`;

export const Col = styled.div`
    flex: 1;
    padding: 0 15px;
    glex-grow: ${props => props.grow ? props.grow : 1 }
    :first-child {
        padding-left: 0
    }
    :last-child {
        padding-right: 0
    }
`;

export const Title = styled.p`
    font-size: 3.6rem;
    font-weight: 400;
`;

