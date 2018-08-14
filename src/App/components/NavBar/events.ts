import testData from "@/__mocks__/save-game.json";

import { loadOniSave } from "@/actions/load-onisave";
import { saveOniSave } from "@/actions/save-onisave";

import { toggleSettings } from "@/actions/toggle-settings";

import { receiveOniSaveSuccess } from "@/actions/receive-onisave";

const mapDispatchToProps = {
  onLoad: loadOniSave,
  onLoadTestData: () => receiveOniSaveSuccess(testData as any),
  onSave: saveOniSave,
  onSettingsClick() {
    return toggleSettings();
  }
};
export default mapDispatchToProps;
export type DispatchProps = typeof mapDispatchToProps;
