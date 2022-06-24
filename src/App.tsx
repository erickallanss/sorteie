import * as C from './styled';
import { useState } from 'react';
import Image1 from './assets/images/image1.svg';
import {Person} from './types/Person';
import {PersonList} from './components/PersonList/PersonList';
import { AddPerson } from './components/AddPerson/Person';


const App = () => {
    const [list, setList] = useState<Person[]>([]);

    const addNewPerson = (name: string) => {
        const newList = [...list];
        newList.push({
            id: list.length + 1,
            name: name
        });
        setList(newList);
    }

    const [sorteio, setSorteio] = useState(false);
    const [sorteado, setSorteado] = useState<Person>();

    const handleRemoveButton = (id: number) => {
        let newList = list.filter(item => item.id !== id);
        setList(newList);
    }

    const playSorteio = () => {
        setSorteado(list[Math.floor(Math.random()*list.length)]);
        setSorteio(true);
    }

    const handleClickReturn = () => {
        setSorteio(false);
    }

    return(
        <C.Container>
            <C.Body>
                <C.MainScreen>
                    <C.Header>
                        <C.Title>Sorteie uma pessoa</C.Title>
                        <C.MainImage src={Image1} alt='' />
                    </C.Header>

                    {sorteio === false &&
                    <C.InputNew>
                        <C.Subtitle> Insira abaixo os participantes </C.Subtitle>
                            <AddPerson
                                onEnter={addNewPerson}
                                onClick={addNewPerson}    
                            />
                    </C.InputNew>  
                    }
                    <C.ScreenSorteio>
                        <C.NamesScreen>


                        </C.NamesScreen>

                        {/* Exibir lista de pessoas */}
                        {sorteio === false && list.length > 0  && 
                        
                        <C.ListaSorteio>
                            <C.SorteioRow>Participantes do sorteio</C.SorteioRow>
                        {list.map((person, index) => (
                            <PersonList
                            key={index}
                            person={person}
                            clickRemoveButton={handleRemoveButton}
                            />
                            
                        ))}
                        <C.Button onClick={playSorteio}> Sortear </C.Button>
                        </C.ListaSorteio>
                        }

                        {sorteio === false && list.length === 0 &&
                            <C.ListaSorteio><C.NoParticipants>Não há participantes cadastrados no sorteio.</C.NoParticipants></C.ListaSorteio>
                        }

                        {sorteio === true && list.length > 0 &&
                            <>
                                <C.SorteioRow>Parabéns!!!</C.SorteioRow>
                                <C.ListaSorteio><C.Sorteado> {sorteado?.name}</C.Sorteado></C.ListaSorteio>
                                <C.Button onClick={handleClickReturn}>Voltar</C.Button>
                            </>
                        }

                    </C.ScreenSorteio>

                </C.MainScreen>
            </C.Body>

            <C.Footer>© 2022 Copyright: Erick Allan Silva - <C.link target="_blank" href="https://eawebdev.com" > EAWebDev </C.link></C.Footer>
        </C.Container>
    );
}

export default App;