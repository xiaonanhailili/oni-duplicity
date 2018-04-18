
import * as React from "react"

import { Element } from "@/services/materials";

export interface RawDataTableProps<TElementType extends Element> {
    className?: string;
    elements: TElementType[];
    fields: (keyof TElementType)[];
}
interface State<TElementType extends Element> {
    enabledFields: (keyof TElementType)[];
}
export default class DataTable<TElementType extends Element> extends React.Component<RawDataTableProps<TElementType>, State<TElementType>> {
    constructor(props: any) {
        super(props);
        
        this.state = {
            enabledFields: []
        };
    }

    render() {
        const {
            className,
            elements,
            fields
        } = this.props;
        const {
            enabledFields
        } = this.state;
        
        const targetFields = enabledFields.length === 0 ? fields : enabledFields;
        const headers = targetFields.map((x, i) => (
            <th key={i}>{x}</th>
        ));
        const rows = elements.map((x, i) => (
            <tr key={i}>
                {targetFields.map((field, ri) => <td key={ri}>{String(x[field])}</td>)}
            </tr>
        ));

        return (
            <div className={`container-scroll ${className || ""}`}>
                <table className="fill-parent">
                    <thead>
                        <tr>
                            {headers}
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}