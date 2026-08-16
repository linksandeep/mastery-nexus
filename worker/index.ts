import handler from "vinext/server/app-router-entry";

type WorkerEnv = Record<string, unknown>;
type WorkerContext = {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
};

export default {
  fetch(request: Request, env: WorkerEnv, context: WorkerContext) {
    return handler.fetch(request, env, context);
  },
};

