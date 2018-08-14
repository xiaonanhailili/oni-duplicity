import { Reducer } from "redux";
import reduceReducers from "reduce-reducers";

import { AppState } from "@/state";

import behaviorsReducer from "@/reducer/behaviors";
import gameObjectReducer from "@/reducer/game-object";

import dismissErrorReducer from "@/reducer/dismiss-error";
import modifyOniSave from "@/reducer/modify-onisave";
import parseProgressReducer from "@/reducer/onisave-parse-progress";
import toggleSettingsReducer from "@/reducer/toggle-settings";
import receiveOniSaveReducer from "@/reducer/receive-onisave";
import selectPathReducer from "@/reducer/select-path";
import setEditModeReducer from "@/reducer/set-editmode";
import setLanguageReducer from "@/reducer/set-language";

const reducers: Reducer<AppState, any>[] = [
  behaviorsReducer,
  gameObjectReducer,
  dismissErrorReducer,
  modifyOniSave,
  parseProgressReducer,
  toggleSettingsReducer,
  receiveOniSaveReducer,
  selectPathReducer,
  setEditModeReducer,
  setLanguageReducer
];

export default reduceReducers<AppState, any>(...reducers);
