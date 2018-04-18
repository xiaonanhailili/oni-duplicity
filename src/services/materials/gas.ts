
import {
    Element
} from "./interfaces";

import {
    ElementParser,
    parseCsv,
    parseElement
} from "./parser";

import gasCsv from "raw-loader!oni-save-parser/data/gas.csv";

export const GAS_DATATABLE = parseCsv(gasCsv);

export interface GasElement extends Element {
    type: "gas";

    flow: number;

    defaultPressure: number;

    lowTemp: number;
    lowTempTransition: string;

    toxicity: number;
}

const GAS_FIELD_PARSER: ElementParser<GasElement> = {
    name: 0,
    type: "gas",
    category: 15,
    tags: [16, x => (x || "").split("|").map(x => x.trim()).filter(x => x != "")],

    molarMass: [11, Number],

    specificHeatCapacity: [1, Number],
    thermalConductivity: [2, Number],
    defaultTemperature: [9, Number],

    solidSurfaceAreaMultiplier: [3, Number],
    liquidSurfaceAreaMultiplier: [4, Number],
    gasSurfaceAreaMultiplier: [5, Number],

    flow: [6, Number],

    defaultPressure: [10, Number],

    lowTemp: [7, Number],
    lowTempTransition: [8, x => x != "" ? x : null],

    lightEmitDistasnce: [12, Number],
    lightEmitIntensity: [13, Number],

    toxicity: [14, Number]
};
export const GASSES = GAS_DATATABLE.rows.map(x => parseElement(x, GAS_FIELD_PARSER));
export const GAS_FIELDS: (keyof GasElement)[] = Object.keys(GAS_FIELD_PARSER) as any;
