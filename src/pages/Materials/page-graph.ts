
import { SiteGraph } from "@/site-graph";

import Browser from "./pages/Browser";
import Inspector from "./pages/Inspector";

export const pageGraph: SiteGraph = [
    {
        type: "page",
        path: "/material-explorer/",
        component: Browser,
        name: "Materials"
    },
    {
        type: "page",
        path: "/material-explorer/material/:material",
        name: "Material Inspector",
        component: Inspector
    }
];
