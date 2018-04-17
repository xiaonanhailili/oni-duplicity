
import * as React from "react"

import { ElementDataTable } from "@/services/materials";

export interface RawDataTableProps {
    className?: string;
    dataTable: ElementDataTable;
}
export default class RawDataTable extends React.Component<RawDataTableProps> {
    render() {
        const {
            className,
            dataTable
        } = this.props;
        
        const headers = dataTable.headers.map((x, i) => (
            <th key={i}>{x}</th>
        ));
        const rows = dataTable.rows.map((x, i) => (
            <tr key={i}>
                {x.map((r, ri) => <td key={ri}>{r}</td>)}
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