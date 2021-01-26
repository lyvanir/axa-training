import {Component} from "react";
import {MySpace} from "../my-space/MySpace";
import {ContractList} from "../contract-list/ContractList";

export class Overview extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contractList: [
                {id: 86, contractor: "max", advisor: "Sylvain", price: 1846},
                {id: 258, contractor: "etienne", advisor: "henry", price: 6184},
                {id: 28, contractor: "geoffrey", advisor: "jérémy", price: 295},
            ]
        }
    }

    addContract = (contract) => {
        const newContractList = [...this.state.contractList, contract];
        this.setState({contractList: newContractList});
    }

    render() {
        return <>
            <MySpace addContract={c => this.addContract(c)}/>
            <ContractList contractList={this.state.contractList}/>
        </>
    }
}
