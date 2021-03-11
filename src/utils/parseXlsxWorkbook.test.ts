import { utils } from "xlsx";
import { parseXlsxWorkbook } from "./parseXlsxWorkbook";

const worksheet1 = utils.aoa_to_sheet([
  ["Name", "Last Name", "Age", "Gender"],
  ["Joel", "Embid", 24, "Male"],
  ["Natasha", "Gracia", 12, "Female"],
  ["Luca", "Maliq", null, null],
]);
const worksheet2 = utils.aoa_to_sheet([
  ["id", "first_name", "last_name", "email", "gender", "ip_address"],
  [1, "Lissa	Scobie", "lscobie0@businesswire.com", "Female", "16.7.226.116"],
  [2, "Randene	Wooton", "rwooton1@oracle.com", "Agender", null],
  [3, null, "dchetwynd2@reuters.com", "Male", "187.157.18.42"],
  [4, "Tailor	Mee", "tmee3@cam.ac.uk", "Male", "55.187.84.72"],
  [5, "Dorey	Orry", "dorry4@kickstarter.com", null, "119.152.93.91"],
  [
    "6",
    "Leanora	McRonald",
    "lmcronald5@seattletimes.com",
    "Bigender",
    "28.22.165.65",
  ],
  [7, "Burl	Miche", "bmiche6@bluehost.com", "Genderfluid", "213.98.165.44"],
  [8, "Lise	Wasmer", null, "Female", "220.224.38.121"],
  [9, "Whit	Blincko", "wblincko8@bbc.co.uk", "Female", "122.107.98.117"],
  [
    10,
    "Jerrie	Gibbetts",
    "jgibbetts9@google.ru",
    "Genderqueer",
    "139.238.104.181",
  ],
]);
const workbook = utils.book_new();
utils.book_append_sheet(workbook, worksheet1, "Sheet1");
utils.book_append_sheet(workbook, worksheet2, "Sheet2");

describe("parseXlsxWorkbook", () => {
  it("should convert the workbook to an array of sheets", () => {
    const parsedWorkbook = parseXlsxWorkbook(workbook);
    expect(parsedWorkbook).toHaveLength(2);
  });
});
