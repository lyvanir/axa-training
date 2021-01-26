import {Component} from "react";
import "./ContractList.css"

export class ContractList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contractList: this.props.contractList
        }
    }

    render() {
        return <div className="ContractList">
            <p>Mes contrats : </p>
            {
                this.state.contractList.map(c =>
                    <ContractDetails key={c.id} contract={c} />)
            }
        </div>;
    }
}

const ContractDetails = (props) => {
    return <div className="contract-detail">
        <p> Numéro de contrat : {props.contract.id} </p>
        <p> Assuré : {props.contract.contractor}</p>
        <p> Conseiller : {props.contract.advisor}</p>
        <p> Prix : {props.contract.price}</p>
    </div>;
}
