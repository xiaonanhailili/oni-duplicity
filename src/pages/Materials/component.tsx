
import * as React from "react";
import { Route, Redirect } from "react-router";
import { Switch } from "react-router-dom";

import {
    SolidElement,
    LiquidElement,
    GasElement,
    SOLIDS,
    SOLID_FIELDS,
    LIQUIDS,
    LIQUID_FIELDS,
    GASSES,
    GAS_FIELDS
} from "@/services/materials";

import DataTable from "./components/DataTable";
import MaterialInspector from "./pages/MaterialInspector";

export default class MaterialsPage extends React.Component {
    render() {
        return (
            <div className="ui-page ui-page-materials fill-parent container-scroll">
                <Switch>
                    <Redirect exact path="/material-explorer" to="/material-explorer/solids" />
                    <Redirect exact path="/material-explorer/material" to="/material-explorer/solids" />
                    <Route exact path="/material-explorer/material/:material" component={MaterialInspector}/>
                    <Route exact path="/material-explorer/solids" component={SolidDataTable} />
                    <Route exact path="/material-explorer/liquids" component={LiquidDataTable} />
                    <Route exact path="/material-explorer/gasses" component={GasDataTable} />
                </Switch>
            </div>
        );
    }
}

class SolidDataTableComponent extends DataTable<SolidElement> {};
const SolidDataTable = () => (
    <SolidDataTableComponent className="fill-parent" elements={SOLIDS} fields={SOLID_FIELDS}/>
);

class LiquidDataTableComponent extends DataTable<LiquidElement> {};
const LiquidDataTable = () => (
    <LiquidDataTableComponent className="fill-parent" elements={LIQUIDS} fields={LIQUID_FIELDS}/>
);

class GasDataTableComponent extends DataTable<GasElement> {};
const GasDataTable = () => (
    <GasDataTableComponent className="fill-parent" elements={GASSES} fields={GAS_FIELDS}/>
);
