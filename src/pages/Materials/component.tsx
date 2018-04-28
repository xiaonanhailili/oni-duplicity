
import * as React from "react";

import MaterialInspector from "./pages/Inspector";

export default class MaterialsPage extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <div className="ui-page ui-page-materials fill-parent">
                {children}
            </div>
        );
    }
}
