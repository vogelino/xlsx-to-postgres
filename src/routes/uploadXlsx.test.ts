import fastify from "fastify";
import { write } from "xlsx";
import { createFakeWorkbook } from "../utils/testUtil";
import { createUploadRoute } from "./uploadXlsx";

const app = fastify({ logger: true });
createUploadRoute(app);
const workbook = createFakeWorkbook();

describe("/upload-xlsx", () => {
  it("should return a 400 error if no body is provided", async (): Promise<void> => {
    const response = await app.inject({
      method: "POST",
      url: "/upload-xlsx",
    });

    expect(response.statusCode).toBe(400);
  });

  it("should return an array if provided with a file", async (): Promise<void> => {
    const blob = write(workbook, { bookType: "xlsx", type: "buffer" });
    const response = await app.inject({
      method: "POST",
      url: "/upload-xlsx",
      payload: {
        file: blob,
      },
    });

    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.body)).toHaveLength(2);
  });
});
