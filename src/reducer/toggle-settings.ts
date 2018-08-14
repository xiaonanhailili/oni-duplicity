import { Action } from "redux";

import { AppState, defaultAppState } from "@/state";
import {
  ACTION_TOGGLE_SETTINGS,
  ToggleSettingsAction
} from "@/actions/toggle-settings";

export default function toggleSettingsReducer(
  state: AppState = defaultAppState,
  action: Action
): AppState {
  if (action.type !== ACTION_TOGGLE_SETTINGS) {
    return state;
  }
  const toggleAction = action as ToggleSettingsAction;

  const newState =
    toggleAction.payload !== null
      ? toggleAction.payload
      : !state.isSettingsOpen;

  return {
    ...state,
    isSettingsOpen: newState
  };
}
