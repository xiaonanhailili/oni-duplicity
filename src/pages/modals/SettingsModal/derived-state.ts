import { createStructuredSelector } from "reselect";

import { AppState } from "@/state";

import isSettingsOpen from "@/selectors/is-settings-open";
import language from "@/selectors/language";

const stateSelectors = {
  isSettingsOpen,
  language
};
export type StateProps = StructuredStateProps<typeof stateSelectors>;
const mapStateToProps = createStructuredSelector<AppState, StateProps>(
  stateSelectors
);
export default mapStateToProps;
