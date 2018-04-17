
export interface Element {
    name: string;
    type: "solid" | "liquid" | "gas";
    category: string;
    tags: string[];

    molarMass: number;
}

export interface ElementDataTable {
    headers: string[];
    rows: string[][];
}
