function trending() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var portfolioTrack = spreadsheet.getSheetByName('Overview');
  
  var marketvalue = portfolioTrack.getRange(4, 10, portfolioTrack.getLastRow()-11).getValues();
  var cash = portfolioTrack.getRange(portfolioTrack.getLastRow()-1 ,2).getValues();
  
  /*
  - filter empty cell out 
  - concat all arrays 
  */
  var portdata = marketvalue.concat(cash)
  var arrayportdata = portdata.reduce((arr, cell) => {
  if (cell[0]) arr.push(cell[0])
  return arr;},[]);
  
  var localDateTime = new Date();
  var alldata = [localDateTime].concat(arrayportdata);
  
  var trackingSheet = spreadsheet.getSheetByName('PortfolioTracking');
  trackingSheet.appendRow(alldata);
  SpreadsheetApp.flush(); /* https://medium.com/@interdigitizer/scrape-and-save-data-to-google-sheets-with-apps-script-7e3c0ccec96b : in case flush still doesn't work*/
}

