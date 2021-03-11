import fileUpload from "fastify-file-upload";
import { VercelRequest, VercelResponse } from "@vercel/node";
import { createApp } from "../src/app";

const fastify = createApp({ logger: true });

fastify.register(fileUpload);

export default async (
  req: VercelRequest,
  res: VercelResponse
): Promise<void> => {
  await fastify.ready();
  fastify.server.emit("request", req, res);
};
