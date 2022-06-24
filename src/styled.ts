import styled from 'styled-components';



export const Container = styled.div`
    max-width: 100vw;
    background-color: #5db7de;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat';
    box-sizing: border-box;
    overflow-x: hidden;
`;

export const Body = styled.div`
    min-height: calc(100vh - 47px);
`;

export const MainScreen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 80vw;
    margin: 10px auto;
`;

export const Sorteado = styled.div`
    height: 60px;
    line-height: 60px;
    font-weight: bold;
    text-transform: uppercase;
    width: 100%;
    text-align: center;
    font-size: 25px;
`;

export const Header = styled.header`
    color: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1`
    font-weight: bold;
    font-size: 40px;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 10px;
    padding: 0;
`;

export const Subtitle = styled.div`
    text-align: center;
    font-weight: bold;
    width: 50vw;
    border: 2px solid #FFF;
    background-color: #5db7de;
    border-radius: 10px;
    height: 40px;
    line-height: 40px;
    color: #FFF;

`;

export const MainImage = styled.img`
    height: 100px;
    margin-bottom: 30px;
`;

export const InputNew = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50vw;
    height: 90px;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 20px;
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


export const ScreenSorteio = styled.div`
    display: flex;
    flex-direction: column;
    width: 50vw;
    align-items: center;
    justify-content: center;
`;

export const ListaSorteio = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #FFF;
    border-radius: 10px;
`;  

export const NoParticipants = styled.div`
    height: 40px;
    line-height: 40px;
`;

export const NamesScreen = styled.div`
    background-color: white;
    width: inherit;
    border-radius: 10px;
    margin-bottom: 10px;
`;

export const SorteioRow = styled.div`
    font-size: 16px;
    text-align: center;
    justify-content: center;
    height: 40px;
    line-height: 40px;
    border-radius: 10px;
    border: 2px solid #FFF;
    background-color: #5db7de;
    color: white;
    font-weight: bold;
    width: 100%;
`;

export const Footer = styled.footer`
    text-align: center;
    font-size: 14px;
    padding: 15px;
    background-color: #2f4550;
    color: #FFF;
    width: 100%;
`;

/* Estilizações gerais */

export const link = styled.a`
    text-decoration: none;
    color: inherit;
    :hover {
        text-shadow: 0 0 5px #FFF;
    }
`;