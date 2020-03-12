import styled from 'styled-components';

export const ListContainer = styled.div`
    max-width: 100vw;
    padding: 50px 100px;
    display: grid;
    grid-template-columns: calc(50% - 50px) calc(50% - 50px);
    grid-gap: 100px;
    @media only screen and (max-width: 768px) {
        grid-template-columns: 100%;
        grid-gap: 50px;
        padding: 50px 20px;
    }
`
export const ItemContainer = styled.div`
    width: 100%;
    height: 400px;
    background-image:
    linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.7) 89.5%),
        url(${props => (props.image)});
    background-size: cover;
    display: flex;

    &:hover {
        h1 {
            padding: 40px 0px;
            background-color: rgba(0,0,0,0.8);
        }
    }
`
export const ItemTitle = styled.h1`
    color: #fafafa;
    text-align: center;
    background-color: rgba(0,0,0,0.3);
    display: inline-block;
    align-self: flex-end;
    width: 100%;
    margin: 0px;
    padding: 20px 0px;
    transition: .4s;
`