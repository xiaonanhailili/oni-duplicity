
import {
    Element
} from "./interfaces";

import {
    ElementParser,
    parseCsv,
    parseElement
} from "./parser";

import solidCsv from "raw-loader!oni-save-parser/data/solid.csv";

export const SOLID_DATATABLE = parseCsv(solidCsv);

export interface SolidElement extends Element {
    type: "solid",

    defaultMass: number;
    maxMass: number;

    strength: number;
    hardness: number;
    hardnessTier: any;

    electricalConductivity: number;

    highTemp: number;
    highTempTransitionTarget: number;

    sublimateId: string;
}

/*
0: id
1: specificHeatCapacity
2: thermalConductivity
3: SolidSurfaceAreaMultiplier
4: LiquidSurfaceAreaMultiplier
5: GasSurfaceAreaMultiplier
6: electricalConductivity
7: strength
8: highTemp
9: highTempTransitionTarget
10: sublimateId
11: sublimateFx
12: defaultValues.temperature
13: defaultValues.mass,
14: Max Mass,
15: hardnessTier,
16: hardness,
17: molarMass,
18: EmitDistance,
19: EmitIntensity,
20: MaterialCategory,
21: Tags,
22: Notes
*/
const SOLID_FIELD_PARSER: ElementParser<SolidElement> = {
    name: 0,
    type: "solid",
    category: 20,
    tags: [21, x => (x || "").split("|").map(x => x.trim()).filter(x => x != "")],
    molarMass: [17, Number],

    defaultMass: [13, Number],
    maxMass: [14, Number],

    strength: [7, Number],
    hardness: [16, Number],
    hardnessTier: [15, Number],

    defaultTemperature: [12, Number],
    specificHeatCapacity: [1, Number],
    thermalConductivity: [2, Number],

    solidSurfaceAreaMultiplier: [3, Number],
    liquidSurfaceAreaMultiplier: [4, Number],
    gasSurfaceAreaMultiplier: [5, Number],

    electricalConductivity: [6, Number],

    highTemp: [8, Number],
    highTempTransitionTarget: [9, x => x != "" ? x : null],

    sublimateId: [10, x => x != "" ? x : null],
    lightEmitDistasnce: [18, Number],
    lightEmitIntensity: [19, Number]
};
export const SOLIDS = SOLID_DATATABLE.rows.map(x => parseElement(x, SOLID_FIELD_PARSER));
export const SOLID_FIELDS: (keyof SolidElement)[] = Object.keys(SOLID_FIELD_PARSER) as any;
