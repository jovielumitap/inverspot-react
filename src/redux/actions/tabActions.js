export const CHANGE_TAB = 'CHANGE_TAB';

export function changeTab(scope, value) {
  return {
    type: CHANGE_TAB,
    scope,
    value,
  };
}
