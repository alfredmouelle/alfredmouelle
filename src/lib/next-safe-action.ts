
import {
  createSafeActionClient,
  DEFAULT_SERVER_ERROR_MESSAGE,
} from "next-safe-action";

export class ActionError extends Error {}

export const action = createSafeActionClient(
  {
    handleServerError(e) {
      if (e instanceof ActionError) {
        return e.message;
      }
  
      return DEFAULT_SERVER_ERROR_MESSAGE;
    },
  }
);