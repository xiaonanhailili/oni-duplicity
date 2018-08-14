export const ACTION_TOGGLE_SETTINGS = "app/toggle-settings";
export const toggleSettings = (open?: boolean) => ({
  type: ACTION_TOGGLE_SETTINGS as typeof ACTION_TOGGLE_SETTINGS,
  payload: open != null ? open : null
});
export type ToggleSettingsAction = ReturnType<typeof toggleSettings>;
