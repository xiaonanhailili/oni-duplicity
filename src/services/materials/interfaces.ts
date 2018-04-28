
export interface Element {
    name: string;
    type: "solid" | "liquid" | "gas";
    category: string;
    tags: string[];

    molarMass: number;

    /**
     * J/gm per K
     */
    specificHeatCapacity: number;

    /**
     * watts per metre per Kelvin (W/m)/K
     */
    thermalConductivity: number;

    defaultTemperature: number;

    solidSurfaceAreaMultiplier: number;
    liquidSurfaceAreaMultiplier: number;
    gasSurfaceAreaMultiplier: number;

    lightEmitDistance: number;
    lightEmitIntensity: number;
}

export const ELEMENT_KEYS: (keyof Element)[] = [
    "name",
    "type",
    "category",
    "tags",
    "molarMass",
    "specificHeatCapacity",
    "thermalConductivity",
    "defaultTemperature",
    "solidSurfaceAreaMultiplier",
    "liquidSurfaceAreaMultiplier",
    "gasSurfaceAreaMultiplier",
    "lightEmitDistance",
    "lightEmitIntensity"
];

export interface ElementDataTable {
    headers: string[];
    rows: string[][];
}
