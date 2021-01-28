import {Button, TextInput} from "@axa-fr/react-toolkit-all";
import {useState} from "react";

export const MySpace = (props) => {
    const [contractor, setContractor] = useState('');
    const [advisor, setAdvisor] = useState('');
    const [price, setPrice] = useState(0);

    return <form name="userForm">
        <TextInput label="Assuré" type="text" value={contractor} name="contractor"
                   onChange={(e) => setContractor(e.value)}/>
        <TextInput label="Conseillé" type="text" value={advisor} name="advisor"
                   onChange={(e) => setAdvisor(e.value)}/>
        <TextInput label="Prix" type="number" value={price} name="price"
                   onChange={e => setPrice(e.value)}/>
        <Button onClick={() => props.addContract({contractor, advisor, price})}>Editer mes informations</Button>
    </form>
}
