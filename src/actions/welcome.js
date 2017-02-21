export const FETCH_WELCOME_MESSAGE = 'FETCH_WELCOME_MESSAGE';

export function fetchWelcomeMessage () {
  return (dispath) => {
    dispath({
      type    : FETCH_WELCOME_MESSAGE,
      payload : {
        message : 'welcome to the rn-profile demo app',
      },
    });
  };
}
