import fileUpload from "fastify-file-upload";
import { createApp } from "./app";

const fastify = createApp({ logger: true });

fastify.register(fileUpload);

const start = async (): Promise<void> => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
