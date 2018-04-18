
import { Element, ElementDataTable } from "./interfaces";

export type ElementParseEntry = number | [number, ((value: string) => any)] | string;
export type ElementParser<TElement extends Element> = {
    [P in keyof TElement]: ElementParseEntry;
}
export function parseElement<TElement extends Element>(rows: string[], parser: ElementParser<TElement>): TElement {
    
    const element: any = {};
    for (let key of Object.keys(parser) as (keyof ElementParser<TElement>)[]) {
        const parseData: ElementParseEntry = parser[key];
        let index: number;
        let formatter = (x: string) => x;
        if (typeof parseData === "string") {
            element[key] = parseData;
            continue;
        }
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
    const rows = rowData.filter(x => x[0] !== "#").map(x => x.split(",")).filter(x => x.length > 0 && x[0] !== "");
    return {
        headers,
        rows
    };
}
