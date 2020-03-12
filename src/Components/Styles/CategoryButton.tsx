import styled from 'styled-components';

export const ButtonContainer = styled.button`
    margin: 10px;
    transition: .35s;
    height: 50px;
    width: 200px;
    border: ${props => (props.selected ? '1px solid #01baef' : '1px solid transparent')};
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    background-color: transparent;

    &:hover {
        h2 {
            color: #01baef;
            margin-bottom: 10px;
        }
    }
`
export const ButtonText = styled.h2`
    transition: .2s;
    margin: 0px;
    color: #fafafa;
    letter-spacing: 1.15px;
`