function getHistory() {
   return document.querySelector('.history__value').innerText;
}

function writeHistory(number) {
   document.querySelector('.history__value').innerText = number;
}

function getOutput() {
   return document.querySelector('.output__value').innerText;
}

function numberFormatter(number) {
   let n = Number(number);
   let value = n.toLocaleString('en-Us');
   return value;
}

function writeOutput(number) {
   if (number == "") {
      document.querySelector('.output__value').innerText = number;
   }
   else {
      document.querySelector('.output__value').innerText = numberFormatter(number);
   }
}

function reverseNumberFormatter(number) {
   return Number(number.replace(/,/g, ''));
}

// action click

let action = document.querySelectorAll('.action').forEach((elem, index) => {
   elem.onclick = function () {
      if (this.id == 'clear') {
         writeHistory('');
         writeOutput('');
      }
      else if (this.id == 'backspace') {
         let output = reverseNumberFormatter(getOutput()).toString();
         if (output) {
            output = output.substr(0, output.length - 1);
            writeOutput(output);
         }
      }
      else {
         let output = getOutput();
         let history = getHistory();

         if (output == "" && history != "") {
            if (isNaN(history[history.length - 1])) {
               history = history.substr(0, history.length - 1);
            }
         }

         else if (output != "" || history != "") {
            output = output == "" ? output : reverseNumberFormatter(output);
            history = history + output;
            if (this.id == "=") {
               let result = eval(history);
               writeOutput(result);
               writeHistory("");
            }

            else {
               history = history + this.id;
               writeHistory(history);
               writeOutput("");
            }
         }






      }
   }
})

// numbers click
let number = document.querySelectorAll(".number");
number.forEach((elem, index) => {
   number[index].onclick = function () {
      let output = reverseNumberFormatter(getOutput());
      if (output != NaN) {
         output = output + this.id;
         writeOutput(output);
      }
   }
})
