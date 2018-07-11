export const ACTION_DISMISS_ERROR = "dismiss-error";
export const dismissError = () => ({
  type: ACTION_DISMISS_ERROR as typeof ACTION_DISMISS_ERROR
});
export type DismissErrorAction = ReturnType<typeof dismissError>;
