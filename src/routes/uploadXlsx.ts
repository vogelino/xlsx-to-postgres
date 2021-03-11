import { FastifyInstance } from "fastify";
import { parseXlsxWorkbook } from "../utils/parseXlsxWorkbook";
import { read } from "xlsx";

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

export const createUploadRoute = (app: FastifyInstance): void => {
  app.post("/upload-xlsx", {
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
      const json = parseXlsxWorkbook(workbook);
      reply.send(json);
    },
  });
};
