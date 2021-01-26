import {Button, TextInput} from "@axa-fr/react-toolkit-all";
import {Component} from "react";

export class MySpace extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contractor: '',
            advisor: '',
            price: '',
            id: ''
        }
    }

    handleContractorChange = (e) => {
        this.setState({contractor: e.value});
    }

    handleAdvisorChange = (e) => {
        this.setState({advisor: e.value});
    }

    handlePriceChange = (e) => {
        this.setState({price: e.value});
    }

    handleAddClick = () => {
        this.setState({id: Math.random})
        this.props.addContract(this.state);
    }

    render() {
        return <>
            <form name="userForm">
                <TextInput label="Assuré" type="text" value={this.state.contractor} name="contractor"
                           onChange={this.handleContractorChange}/>
                <TextInput label="Conseillé" type="text" value={this.state.advisor} name="advisor"
                           onChange={this.handleAdvisorChange}/>
                <TextInput label="Prix" type="number" value={this.state.price} name="price"
                           onChange={this.handlePriceChange}/>
                <Button onClick={this.handleAddClick}>Editer mes informations</Button>
            </form>
        </>
    }
}
