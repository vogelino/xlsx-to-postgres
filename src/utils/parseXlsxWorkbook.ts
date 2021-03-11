import { utils } from "xlsx";
import { WorkBook as WorkBookType } from "xlsx/types";

export const parseXlsxWorkbook = (workbook: WorkBookType): unknown[] => {
  const sheetsAmount = Object.keys(workbook.Sheets).length;
  return [...Array(sheetsAmount)].map(idx => {
    const firstWorksheet = workbook.Sheets[workbook.SheetNames[idx]];
    const json = utils.sheet_to_json(firstWorksheet);
    return json;
  });
};
