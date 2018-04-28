
import * as React from "react";
import { RouteComponentProps } from "react-router";

import { Element, getElement } from "@/services/materials";


const style_element_square: React.CSSProperties = {
    width: "200px",
    height: "200px",
    border: "3px red solid",
};

const style_element_name: React.CSSProperties = {
    textAlign: "center"
};

const style_element_type: React.CSSProperties = {
    textAlign: "center",
    padding: "2px"
};

const style_element_tags: React.CSSProperties = {
    textAlign: "center",
    fontSize: 12,
    padding: "2px"
};

const style_element_mass: React.CSSProperties = {
    textAlign: "center",
    fontSize: 12,
    padding: "2px"
};

const style_element_specificHeat: React.CSSProperties = {
    textAlign: "left",
    fontSize: 12,
    padding: "2px"
};

const style_element_thermalConductivity: React.CSSProperties = {
    textAlign: "right",
    fontSize: 12,
    padding: "2px"
};

const style_element_surfaceArea: React.CSSProperties = {
    textAlign: "center",
    fontSize: 12,
    padding: "2px",
};


export interface MaterialInspectorRouteProps {
    material: string;
}
export interface MaterialInspectorProps extends RouteComponentProps<MaterialInspectorRouteProps> { }
type State = {
    element: Element | null;
}
export default class MaterialInspector extends React.Component<MaterialInspectorProps, State> {
    componentWillMount() {
        this.setState(s => ({
            element: getElement(this.props.match.params.material)
        }));
    }

    render() {
        const elementName = this.props.match.params.material;
        const element = getElement(elementName);
        return (
            <div>
                {/* <pre><code>{JSON.stringify(element, null, 2)}</code></pre> */}
                {this._renderElementSquare()}
            </div>
        );
    }

    private _renderElementSquare(): React.ReactFragment {
        const element = this.state.element;
        if (!element) return <div>Element Not Found</div>;

        return (
            <div style={style_element_square} className="layout-vertical">
                <div className="layout-horizontal">
                    <div style={style_element_specificHeat}>{element.specificHeatCapacity}</div>
                    <div className="layout-item-fill" />
                    <div style={style_element_surfaceArea}>{element.solidSurfaceAreaMultiplier} / {element.liquidSurfaceAreaMultiplier} / {element.gasSurfaceAreaMultiplier}</div>
                    <div className="layout-item-fill" />
                    <div style={style_element_thermalConductivity}>{element.thermalConductivity}</div>
                </div>
                <div className="layout-item-fill" />
                <h4 className="layout-item" style={style_element_name}>{element.name}</h4>
                <div style={style_element_type}>{element.type}</div>
                <div style={style_element_tags}>{element.tags.join(", ")}</div>
                <div className="layout-item-fill" />
                <div style={style_element_mass}>{element.molarMass}</div>
            </div>
        );
    }
}
