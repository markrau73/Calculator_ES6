import { Calculator } from "./Calculator";

class DecCalculator extends Calculator {
    constructor(settings) {
        super(settings);
        console.log( this.getName() );
    }

    add(numberX, numberY) {
        let result = [0,0,0,0,0,0,0,0,0];
        for(let i = numberX.length - 1; i >= 0; i--) {
            let carryBit =  numberX[i] + numberY[i] + result[i];
            if( carryBit  > 9) {
                result[i] = carryBit - 10;
                result[i-1] = 1;
            } else {
                result[i] = carryBit;
            }
        }
        return result;
    }

    changeNumber(root) {
        let activeElement = root.find('.active');
        activeElement.attr("contenteditable", "true");
        activeElement.trigger("focus");
    }

    updateResult() {
         let root =  this.$calculatorDOMElement;
         let resultNumber = root.children(".group-number").children(".result-bit");
         for(let i =  this.resultNumberArray.length - 1, j = 0; i >= 0 ; i--, j++) {
              let finalRes = $(resultNumber[j]).find(".active");
              finalRes.text(this.resultNumberArray[i]);
            }
          }

         initEvents() {
               super.initEvents();
               this.$calculatorDOMElement.find(".operator-bar span").on('click', (event) => {
                 this.checkNumber();
                 this.updateResult();
               });
             }

}

export { DecCalculator  };
