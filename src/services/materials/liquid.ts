
import {
    Element
} from "./interfaces";

import {
    ElementParser,
    parseCsv,
    parseElement
} from "./parser";

import liquidCsv from "raw-loader!oni-save-parser/data/liquid.csv";

export const LIQUID_DATATABLE = parseCsv(liquidCsv);

export interface LiquidElement extends Element {
    type: "liquid",

    defaultMass: number;

    maxCompressionMass: number;
    compressionFactor: number;

    speed: number;
    minHorizontalFlow: number;
    minVerticalFlow: number;

    electricalConductivity: number;

    lowTemp: number;
    lowTempTransition: string;

    highTemp: number;
    highTempTransition: number;
    highTempTransitionOre: string;
    highTempTransitionOreMassFactor: number;

    sublimateId: string;

    convertId: string;

    toxicity: number;
}

const LIQUID_FIELD_PARSER: ElementParser<LiquidElement> = {
    name: 0,
    type: "liquid",
    category: 27,
    tags: [28, x => (x || "").split("|").map(x => x.trim()).filter(x => x != "")],

    molarMass: [23, Number],
    defaultMass: [22, Number],
    maxCompressionMass: [1, Number],
    compressionFactor: [2, Number],

    specificHeatCapacity: [6, Number],
    thermalConductivity: [7, Number],
    defaultTemperature: [21, Number],

    solidSurfaceAreaMultiplier: [8, Number],
    liquidSurfaceAreaMultiplier: [9, Number],
    gasSurfaceAreaMultiplier: [10, Number],

    speed: [3, Number],
    minHorizontalFlow: [4, Number],
    minVerticalFlow: [5, Number],

    electricalConductivity: [11, Number],

    lowTemp: [12, Number],
    lowTempTransition: 14,

    highTemp: [13, Number],
    highTempTransition: 15,
    highTempTransitionOre: 19,
    highTempTransitionOreMassFactor: [20, Number],

    sublimateId: 16,

    lightEmitDistasnce: [24, Number],
    lightEmitIntensity: [25, Number],

    convertId: 18,

    toxicity: [26, Number],
};
export const LIQUIDS = LIQUID_DATATABLE.rows.map(x => parseElement(x, LIQUID_FIELD_PARSER));
export const LIQUID_FIELDS: (keyof LiquidElement)[] = Object.keys(LIQUID_FIELD_PARSER) as any;
