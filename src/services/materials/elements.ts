
import { SOLIDS, SolidElement } from "./solid";
import { LIQUIDS, LiquidElement } from "./liquid";
import { GASSES, GasElement } from "./gas";

export const ELEMENTS: (SolidElement | LiquidElement | GasElement)[] = [
    ...SOLIDS,
    ...LIQUIDS,
    ...GASSES
];
