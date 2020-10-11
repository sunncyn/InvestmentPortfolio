function RefreshImports() {
  var lock = LockService.getScriptLock();
  if (!lock.tryLock(5000)) return;             // Wait up to 5s for previous refresh to end.

  var id = "1pZ6hqc8eZFazGtj97C2urbjr9zoNBUsx-eTYQXekwCA";
  var ss = SpreadsheetApp.openById(id);
  var sheet = ss.getSheetByName("YOUR-SHEET-NAME");
  var dataRange = sheet.getDataRange();
  var formulas = dataRange.getFormulas();
  var content = "";
  var now = new Date();
  var time = now.getTime();
  var re = /.*[^a-z0-9]import(?:xml|data|feed|html|range)\(.*/gi;
  var re2 = /((\?|&)(update=[0-9]*))/gi;
  var re3 = /(",)/gi;

  for (var row=0; row<formulas.length; row++) {
    for (var col=0; col<formulas[0].length; col++) {
      content = formulas[row][col];
      if (content != "") {
        var match = content.search(re);
        if (match !== -1 ) {
          // import function is used in this cell
          var updatedContent = content.toString().replace(re2,"$2update=" + time);
          if (updatedContent == content) {
            // No querystring exists yet in url
            updatedContent = content.toString().replace(re3,"?update=" + time + "$1");
          }
          // Update url in formula with querystring param
          sheet.getRange(row+1, col+1).setFormula(updatedContent);
        }
      }
    }
  }

  // Done refresh; release the lock.
  lock.releaseLock();

}
