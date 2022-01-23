import { setupWorker } from "msw";
import { handlers } from "infrastructure/mock/handler";

export const worker = setupWorker(...handlers);
