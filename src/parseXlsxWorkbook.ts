import { WorkBook } from "xlsx/types";

export const parseXlsxWorkbook = (
  workbook: WorkBook
): Record<string, unknown> => {
  console.log(workbook);
  return workbook.Sheets.A1;
};
