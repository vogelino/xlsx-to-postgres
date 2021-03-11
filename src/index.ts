import fastifyServer from "fastify";
import fileUpload from "fastify-file-upload";
import { read, utils } from "xlsx";

const fastify = fastifyServer({ logger: true });

fastify.register(fileUpload);

interface BodyFileType {
  name: string;
  data: Buffer;
  size: number;
  encoding: string;
  tempFilePath: string;
  truncated: boolean;
  mimetype: string;
  md5: string;
  mv: unknown[];
}

fastify.post("/upload-xlsx", {
  schema: {
    body: {
      type: "object",
      properties: {
        file: { type: "object" },
      },
      required: ["file"],
    },
  },
  handler: (request, reply) => {
    const body: { file: unknown } = request.body as {
      file: unknown;
    };
    const file: BodyFileType = body.file as BodyFileType;
    const workbook = read(file.data, { type: "buffer" });
    const firstWorksheet = workbook.Sheets[workbook.SheetNames[0]];
    const json = utils.sheet_to_json(firstWorksheet);
    reply.send(json);
  },
});

const start = async (): Promise<void> => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
