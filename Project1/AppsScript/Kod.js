let ss = SpreadsheetApp.getActiveSpreadsheet()
let sheetTask2 = ss.getSheetByName("Zadanie 2")
let sheetTask3 = ss.getSheetByName("Zadanie 3")

function myFunction() {
  let range = sheetTask3.getDataRange();
	let lastRow = sheetTask3.getLastRow()
  let i;

  for(i = 0; i < range.length ; i++){

	if (sheetTask3.getRange(lastRow, 1) !== "")
		sheetTask3.getRange(lastRow, 1).setValue("TEST123")
  }
}
