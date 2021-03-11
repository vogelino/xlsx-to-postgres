import { parseXlsxWorkbook } from "./parseXlsxWorkbook";
import { createFakeWorkbook } from "./testUtil";

const workbook = createFakeWorkbook();
describe("parseXlsxWorkbook", () => {
  it("should convert the workbook to an array of sheets", () => {
    const parsedWorkbook = parseXlsxWorkbook(workbook);
    expect(parsedWorkbook).toHaveLength(2);
  });
});
