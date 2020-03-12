import styled from 'styled-components'

export const SearchContainer = styled.div`
    height: 50px;
    width: 90%;
    margin: 30px 5%;
    border-radius: 10px;
    background-color: transparent;
    border: 1px solid #01baef;
`
export const SearchInput = styled.input`
    padding: 0px 15px;
    width: 100%;
    height: 100%;
    border-width: 0px;
    background-color: transparent;
    color: #fafafa;
    font-size: 18px;
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #fafafa;
        opacity: 1; /* Firefox */
        font-size: 18px;
    }

    :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: #fafafa;
        font-size: 18px;
    }

    ::-ms-input-placeholder { /* Microsoft Edge */
        color: #fafafa;
        font-size: 18px;
    }
`