function butotnClick(){
  const t1 = document.getElementById("text1").value;
    document.getElementById("span1").textContent = t1;
       var spreadsheet = SpreadsheetApp.openById('1-6TzqeB0J5RxylGa4GD-lBXfvRJkU8UhP1Tt6QuXURE')
        var sheet = spreadsheet.getActiveSheet();
        
        var textFinder = sheet.createTextFinder(t1);
        var cells = textFinder.findAll();
        
        for(var i=0; i<cells.length; i++){
          var ss = cells[i].getA1Notation();
const range = sheet.getRange(ss);
  console.log(range.getValue());
}


let msg = document.getElementById('msg');

let checkButton = document.getElementById('checkButton');
checkButton.addEventListener('click', butotnClick);
