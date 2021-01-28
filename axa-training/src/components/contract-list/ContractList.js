import "./ContractList.css"

export const ContractList = (props) => <div className="ContractList">
    <p>Mes contrats : </p>
    {
        props.contractList.map(c =>
            <ContractDetails key={c.id} contract={c}/>)
    }
</div>

const ContractDetails = (props) => <div className="contract-detail">
    <p> Numéro de contrat : {props.contract.id} </p>
    <p> Assuré : {props.contract.contractor}</p>
    <p> Conseiller : {props.contract.advisor}</p>
    <p> Prix : {props.contract.price}</p>
</div>

