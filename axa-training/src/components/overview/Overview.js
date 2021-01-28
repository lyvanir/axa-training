import {MySpace} from "../my-space/MySpace";
import {ContractList} from "../contract-list/ContractList";
import {useState} from "react";

export const Overview = () => {
    const [contractList, setContractList] = useState([
        {id: 86, contractor: "max", advisor: "Sylvain", price: 1846},
        {id: 258, contractor: "etienne", advisor: "henry", price: 6184},
        {id: 28, contractor: "geoffrey", advisor: "jérémy", price: 295},
    ]);

    return <>
        <MySpace addContract={c => setContractList([...contractList, c])}/>
        <ContractList contractList={contractList}/>
    </>
}
