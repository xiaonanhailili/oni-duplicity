
import {
    ElementParser,
    parseCsv,
    parseElement
} from "./parser";

import liquidCsv from "raw-loader!oni-save-parser/data/liquid.csv";

export const LIQUID_DATATABLE = parseCsv(liquidCsv);
