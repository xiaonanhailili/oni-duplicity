
import { ElementDataTable } from "./interfaces";

export type ElementParseEntry = number | [number, ((value: string) => any)];
export interface ElementParser {
    [fieldname: string]: ElementParseEntry;
}
export function parseElement(rows: string[], parser: ElementParser): any {
    const element: any = {};
    for (let key of Object.keys(parser)) {
        const parseData = parser[key];
        let index: number;
        let formatter = (x: string) => x;
        if (Array.isArray(parseData)) {
            index = parseData[0];
            formatter = parseData[1];
        }
        else {
            index = parseData;
        }
        element[key] = formatter(rows[index]);
    }
    return element;
}


export function parseCsv(content: string): ElementDataTable {
    const [headerRow, ...rowData] = content.split(/\r\n?/);
    const headers = headerRow.split(",");
    const rows = rowData.filter(x => x[0] !== "#").map(x => x.split(","))
    return {
        headers,
        rows
    };
}
