import styled from 'styled-components';

export const BoxText = styled.div`
    display: flex;
    flex-direction: column;
    width: inherit;
    text-align: center;
    justify-content: center;
`;

export const InputName = styled.input`
    width: inherit;
    margin: 0;
    height: 40px;
    background-color: white;
    border-radius: 10px;
    text-align: center;
    font-size: 15px;
    border: 2px solid #FFF;
    padding: 0;
        :focus {
            outline: none;
            border: 2px solid #FFF;
        }
`;

export const Button = styled.div`
    width: inherit;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background-color: #2f4550;
    color: #FFF;
    border: 2px solid #FFF;
    border-radius: 10px;
    font-size: 16px;
    cursor: pointer;
        :hover {
            background-color: #586f7c;
        }
`;
