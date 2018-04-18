
import * as React from "react";
import { RouteComponentProps } from "react-router";

import { getElement } from "@/services/materials";

export interface MaterialInspectorRouteProps {
    material: string;
}
export interface MaterialInspectorProps extends RouteComponentProps<MaterialInspectorRouteProps> { }
export default class MaterialInspector extends React.Component<MaterialInspectorProps> {
    render() {
        const elementName = this.props.match.params.material;
        const element = getElement(elementName);
        return (
            <div>
                <pre><code>{JSON.stringify(element, null, 2)}</code></pre>
            </div>
        );
    }
}