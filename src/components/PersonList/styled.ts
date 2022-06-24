import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 99%;
border: 2px solid #FFF;
border-bottom: 2px solid #5db7de;
padding: 5px 0px;
margin: 1px 5px;
border-radius: 10px;
background-color: #FFF;
    :hover {
        background-color: #5db7de;
        border: 2px solid #FFF;
    }
`;

export const IconImg = styled.img`
    height: 80%;
        :hover {
            transform: scale(1.2);
        }
`;

export const PersonName = styled.div`
    flex: 1;
    margin-left: 10px;
`;

export const Icon = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 20px;
    margin: 0 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;