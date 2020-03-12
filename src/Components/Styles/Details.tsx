import styled from 'styled-components'

export const TrailerContainer = styled.div`
    height: 400px;
    width: 711px;
    background-color: rgba(0,0,0,0.2);
`
export const CoverImageContainer = styled.div`
    height: 400px;
    width: 100%;
    background-image:
    linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.7) 89.5%),
        url(${props => (props.image)});
    background-size: cover;
`
export const MovieTitle = styled.h1`
    color: #fafafa;
    text-align: center;
`
export const MovieDescription = styled.p`
    color: #fafafa;
    text-align: center;
`