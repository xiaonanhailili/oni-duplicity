import { setLanguage } from "@/actions/set-language";
import { toggleSettings } from "@/actions/toggle-settings";

const mapDispatchToProps = {
  onLanguageChanged: setLanguage,
  onCloseSettings() {
    return toggleSettings(false);
  }
};
export type DispatchProps = typeof mapDispatchToProps;
export default mapDispatchToProps;
