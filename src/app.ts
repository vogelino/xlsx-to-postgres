import fastify, { FastifyServerOptions, FastifyInstance } from "fastify";
import { createUploadRoute } from "./routes/uploadXlsx";

export function createApp(opts: FastifyServerOptions = {}): FastifyInstance {
  const app = fastify(opts);

  createUploadRoute(app);

  return app;
}
