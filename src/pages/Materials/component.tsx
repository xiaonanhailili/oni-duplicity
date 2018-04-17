
import * as React from "react";
import { Route, Redirect } from "react-router";
import { Switch } from "react-router-dom";

import {
    SOLID_DATATABLE,
    LIQUID_DATATABLE,
    GAS_DATATABLE
} from "@/services/materials";

import RawDataTable from "./components/RawDataTable";

export default class MaterialsPage extends React.Component {
    render() {
        return (
            <div className="ui-page ui-page-materials fill-parent container-scroll">
                <Switch>
                    <Redirect exact path="/material-explorer" to="/material-explorer/solids" />
                    <Route exact path="/material-explorer/solids" component={SolidRawDataTable} />
                    <Route exact path="/material-explorer/liquids" component={LiquidRawDataTable} />
                    <Route exact path="/material-explorer/gasses" component={GasRawDataTable} />
                </Switch>
            </div>
        );
    }
}

const SolidRawDataTable = () => (
    <RawDataTable className="fill-parent" dataTable={SOLID_DATATABLE}/>
);

const LiquidRawDataTable = () => (
    <RawDataTable className="fill-parent" dataTable={LIQUID_DATATABLE}/>
);

const GasRawDataTable = () => (
    <RawDataTable className="fill-parent" dataTable={GAS_DATATABLE}/>
);

