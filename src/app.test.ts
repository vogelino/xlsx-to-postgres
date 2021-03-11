import { createApp } from "./app";

describe("createApp", () => {
  it("should create an app", () => {
    const app = createApp({ logger: true });
    expect(app).toBeDefined();
  });

  it("should have an /upload-xlsx route", async () => {
    const app = createApp({ logger: true });
    const response = await app.inject({
      method: "POST",
      url: "/upload-xlsx",
    });

    expect(response.statusCode).toBe(400);
  });
});
