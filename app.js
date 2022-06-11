class Calculator{

    constructor(input, output) {
        this.inputDisplay=input;
        this.outputDisplay=output;
        this.inputHistory=[];
    }
    clearAllHistory() {
        this.inputHistory=[];
        this.updateInputDisplay();
        this.updateOutputDisplay("0");

    }
    backspace() {}
    changePercentToDecimal() {}
    insertNumber(value) {
        if(this.getLastInputType()==="number"){
            this.appendToLastInput(value);
        }
        else if(this.getLastInputType()==="operator"|| this.getLastInputType()=== null){
            this.addNewInput(value,"number");
        }
    }
    insertOperation(value) {}
    negateNumber() {}
    insertDecimalPoint() {}
    generateResult() {}
   // HELPER FUNCTIONS
   getLastInputType(){
       return (this.inputHistory===0) ? null: this.inputHistory[this.inputHistory.length-1].type;
   }

   getLastInputValue(){
    return (this.inputHistory===0) ? null: this.inputHistory[this.inputHistory.length-1].value;
  }

   getAllInputValues(){
    return this.inputHistory.map(entry=>entry.value);
  }

  getOutputValue(){
    return this.outputDisplay.value.replace(/,/g,"");

  }

addNewInput(value,type){
        this.inputHistory.push({"type": type, "value":value.toString()});
        this.updateInputDisplay();
}

appendToLastInput(value){
    this.inputHistory[this.inputHistory.length-1].value +=value.toString();
    this.updateInputDisplay();
}


   updateInputDisplay(){
    this.inputDisplay.value=this.getAllInputValues().join("");
  }

  updateOutputDisplay(value){
    this.outputDisplay.value=Number(value).toLocaleString();
  }
                             

  }// End Calculator Class Definition

  // Create bindings to access DOM elements
  const inputDisplay=document.querySelector("#history");
  const outputDisplay =document.querySelector("#result");

  const allClearButton=document.querySelector("[data-all-clear]");
  const backspaceButton=document.querySelector("[data-backspace]");
  const percentButton=document.querySelector("[data-percent]");
  const operationButtons=document.querySelectorAll("[data-operator]");
  const numberButtons=document.querySelectorAll("[data-number]");
  const negationButton=document.querySelector("[data-negation]");
  const decimalButton=document.querySelector("[data-decimal]");
  const equalsButton=document.querySelector("[data-equals]");

  // Createanew Calculator
  const calculator=new Calculator(inputDisplay,outputDisplay);

  // Add event handlers to the calculator buttons
  allClearButton.addEventListener("click",()=>{
   calculator.clearAllHistory()
  })

  backspaceButton.addEventListener("click",()=>{
    calculator.backspace();
  });
  percentButton.addEventListener("click",()=>{
    calculator.change Percent ToDecimal();
  });

  operationButtons.forEach(button=>{
    button.addEventListener("click",(event)=>{
      let(target)=event;
                                     
      calculator.insertOperation(target.dataset.operator);
    })
  });
  numberButtons.forEach(button=>{
    button.addEventListener("click",(event)=>{
      let{target}=event;
      calculator.insertNumber(target.dataset.number);
    })
  });

  negationButton.addEventListener("click",()=>{
    calculator.negateNumber();
   });

   decimalButton.addEventListener("click",()=>{
     calculator.insertDecimalPoint();
   });

   equalsButton.addEventListener("click",()=>{
    calculator.generateResult();
   });

