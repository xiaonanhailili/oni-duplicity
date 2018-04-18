
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
     * watts per metre per Kelvin  (W/m)/K
     */
    thermalConductivity: number;

    defaultTemperature: number;

    solidSurfaceAreaMultiplier: number;
    liquidSurfaceAreaMultiplier: number;
    gasSurfaceAreaMultiplier: number;

    lightEmitDistasnce: number;
    lightEmitIntensity: number;
}

export interface ElementDataTable {
    headers: string[];
    rows: string[][];
}
