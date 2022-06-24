import * as C from './styled';
import iconDelete from '../../assets/images/icons/deleteIcon.png';
import {Person} from '../../types/Person';

type Props = {
    person: Person,
    clickRemoveButton: (id: number) => void,
    clickEditButton?: (id: number, name: string) => void
}

export const PersonList = ({person, clickRemoveButton}:Props) => {
    return(
            <C.Container>
                <C.PersonName>{person.name}</C.PersonName>
                <C.Icon onClick={e => clickRemoveButton(person.id)}><C.IconImg src={iconDelete} /></C.Icon>
            </C.Container>
    );
}