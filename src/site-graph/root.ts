
import { SitePage } from "@/site-graph";

import App from "../components/App";
import SaveEditor, { pageGraph as saveEditorPages } from "../pages/SaveEditor";
import Materials, { pageGraph as materialsPages } from "../pages/Materials";
import ChangeLog from "../pages/Changelog";

const siteGraph: SitePage = {
    type: "page",
    name: "Duplicity",
    path: "/",
    component: App,
    children: [
        {
            // Save Editor
            type: "page",
            path: "/editor",
            component: SaveEditor,
            name: "Save Editor",
            navMenu: true,
            children: saveEditorPages
        },
        {
            type: "group",
            children: [
                {
                    type: "page",
                    path: "/material-explorer",
                    component: Materials,
                    name: "Materials Explorer",
                    navMenu: true,
                    children: materialsPages
                }
            ]
        },
        {
            type: "page",
            path: "/changelog",
            name: "Duplicity Changelog",
            navMenu: true,
            component: ChangeLog
        }
    ]
};

export default siteGraph;
