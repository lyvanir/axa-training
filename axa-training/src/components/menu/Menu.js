import {Component} from "react";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import {MySpace} from "../my-space/MySpace";
import './Menu.css';
import {ContractList} from "../contract-list/ContractList";
import {Overview} from "../overview/Overview";

export class Menu extends Component {

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

    render() {
        return <BrowserRouter>
            <nav className="App-menu">
                <ul>
                    <li>
                        <Link to="/espace-client">Mon espace</Link>
                    </li>
                    <li>
                        <Link to="/contrats">Mes contrats</Link>
                    </li>
                    <li>
                        <Link to="/overview">Résumé</Link>
                    </li>
                </ul>
            </nav>
            <div className="App-router-switch">
                <Switch>
                    <Route exact path="/">
                        <div>Home</div>
                    </Route>
                    <Route path="/espace-client">
                        <MySpace/>
                    </Route>
                    <Route path="/contrats">
                        <ContractList contractList={this.state.contractList}/>
                    </Route>
                    <Route path="/overview">
                        <Overview />
                    </Route>
                    <Route path="*">
                        <div>404 Not found</div>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    }

}
