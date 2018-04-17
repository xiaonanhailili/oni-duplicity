
import {
    ElementParser,
    parseCsv,
    parseElement
} from "./parser";

import gasCsv from "raw-loader!oni-save-parser/data/gas.csv";

export const GAS_DATATABLE = parseCsv(gasCsv);
