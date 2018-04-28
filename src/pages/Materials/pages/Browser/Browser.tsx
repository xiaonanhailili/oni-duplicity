
import * as React from "react";
import { RouteComponentProps, Link } from "react-router-dom";
import { autobind } from "core-decorators";

import binarySearch from "binary-search";

import { Popover, Button, Menu, MenuItem } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

import {
    Element,
    ELEMENTS,
    ELEMENT_KEYS,
} from "@/services/materials";

import "./style.scss";


type ElementKey = ArrayItemType<typeof ELEMENT_KEYS>;
type ConfigurableKey = Exclude<ElementKey, "name">;

function isConfigrableKey(x: string): x is ConfigurableKey {
    return x !== "name";
}
const CONFIGURABLE_KEYS: ConfigurableKey[] = ELEMENT_KEYS.filter(isConfigrableKey);

const CONFIGURABLE_KEY_INDEXES: Record<ConfigurableKey, number> = {} as any;
CONFIGURABLE_KEYS.forEach((key, i) => CONFIGURABLE_KEY_INDEXES[key] = i);


interface State {
    enabledColumns: ConfigurableKey[]
};
type Props = RouteComponentProps<any>;
export default class MaterialBrowser extends React.Component<Props, State> {
    state: State = {
        enabledColumns: [
            "molarMass",
            "specificHeatCapacity",
            "thermalConductivity"
        ]
    };

    render() {
        const {
            enabledColumns
        } = this.state;

        const selectionMenu = CONFIGURABLE_KEYS.map(key => (
            <ColumnMenuItem key={key} column={key} isSelected={enabledColumns.indexOf(key) !== -1} toggleColumn={this._toggleColumn}/>
        ));

        const headers = enabledColumns.map(x => <HeaderColumn key={x} column={x} toggleColumn={this._toggleColumn}/>);
        const rows = ELEMENTS.map(element => (
            <tr key={element.name}>
                <td><Link to={`/material-explorer/material/${element.name}`}>{element.name}</Link></td>
                {enabledColumns.map(key => <td key={key}>{element[key]}</td>)}
            </tr>
        ));

        return (
            <div className="ui-page-materials-browser fill-parent layout-vertical">
                <div className="fill-parent-width">
                    <div className="ui-material-browser-toolbox">
                        <Popover>
                            <Button icon={IconNames.COG}/>
                            <Menu>
                                {selectionMenu}
                            </Menu>
                        </Popover>
                    </div>
                </div>
                <div className="layout-item-fill container-scroll">
                    <table className="pt-html-table pt-html-table-bordered">
                        <thead>
                            <tr style={{ position: "sticky" }}>
                                <th>Name</th>
                                {headers}
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    @autobind()
    private _toggleColumn(columnName: ConfigurableKey) {
        if (CONFIGURABLE_KEYS.indexOf(columnName) === -1) return;

        let { enabledColumns } = this.state;

        const idx = binarySearch(enabledColumns, columnName, (a, b) => {
            return CONFIGURABLE_KEY_INDEXES[a] - CONFIGURABLE_KEY_INDEXES[b];
        });

        if (idx > -1) {
            // Found the index, remove it.
            enabledColumns = [
                ...enabledColumns.slice(0, idx),
                ...enabledColumns.slice(idx + 1)
            ];
        }
        else {
            // Did not find index.  Index is negative of position the item should appear at.
            const addIndex = (idx * -1) - 1;
            enabledColumns = [
                ...enabledColumns.slice(0, addIndex),
                columnName,
                ...enabledColumns.slice(addIndex)
            ];
        }

        this.setState({
            enabledColumns
        });
    }
}

interface HeaderColumnProps {
    column: ConfigurableKey;
    toggleColumn(columnName: ConfigurableKey): void;
}
class HeaderColumn extends React.Component<HeaderColumnProps> {
    render() {
        const { column } = this.props;
        return <th><span className="ui-element-column-header">{column}<Button minimal={true} small={true} onClick={this._onClick} icon={IconNames.SMALL_CROSS}/></span></th>;
    }

    @autobind()
    _onClick() {
        const {
            column,
            toggleColumn
        } = this.props;
        toggleColumn(column);
    }
}

interface ColumnMenuItemProps {
    column: ConfigurableKey;
    isSelected: boolean;
    toggleColumn(columnName: ConfigurableKey): void;
}
class ColumnMenuItem extends React.Component<ColumnMenuItemProps> {
    render() {
        const { column, isSelected } = this.props;
        const icon = isSelected ? IconNames.DOT : undefined;
        return (
            <MenuItem onClick={this._onClick} icon={icon} text={column}/>
        );
    }

    @autobind()
    _onClick() {
        const {
            column,
            toggleColumn
        } = this.props;
        toggleColumn(column);
    }
}