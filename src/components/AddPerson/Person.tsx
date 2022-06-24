import * as C from './styled';
import { useState, KeyboardEvent } from 'react';

type Props = {
    onEnter: (name: string) => void,
    onClick: (name: string) => void,
}

export const AddPerson = ({ onEnter, onClick }: Props) => {
    const [newName, setNewName] = useState('');
    
    const handleKeyUp = (e: KeyboardEvent) => {
        if ((e.code === 'Enter' || e.code === 'NumpadEnter') && newName !== '') {
            onEnter(newName);
            setNewName('')
        }
    }

    const handleClick = () => {
        if (newName !== '') {
            onClick(newName);
            setNewName('');
        }
    }

    return (
        <C.BoxText>
            <C.InputName
            type='text'
            placeholder='Insira o nome do participante'
            value={newName}
            onChange={e => setNewName(e.target.value)}
            onKeyUp={handleKeyUp}>
            </C.InputName>
            <C.Button onClick={handleClick}> Confirmar </C.Button>
        </C.BoxText>
    );
}