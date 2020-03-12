import styled from 'styled-components';

export const ListContainer = styled.div`
    max-width: 100vw;
    padding: 50px 100px;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 100px;
`
export const ItemContainer = styled.div`
    width: 100%;
    height: 400px;
    background-image:
    linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.7) 89.5%),
    url(${props => (props.image)});
    background-size: cover;
`
export const ItemTitle = styled.h1`
    color: #fafafa;
`