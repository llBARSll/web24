const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate() {
    try {
        let expression = display.value.match(/(\d+\.?\d*|\.\d+|\D)/g);
        if (expression === null) {
            display.value = "Error";
            return;
        }
        
        let result = parseFloat(expression[0]);

        for (let i = 1; i < expression.length; i += 2) {
            let operator = expression[i];
            let nextNumber = parseFloat(expression[i + 1]);

            switch (operator) {
                case '+':
                    result += nextNumber;
                    break;
                case '-':
                    result -= nextNumber;
                    break;
                case '*':
                    result *= nextNumber;
                    break;
                case '/':
                    if (nextNumber === 0) throw new Error("Division by zero");
                    result /= nextNumber;
                    break;
                default:
                    throw new Error("Unknown operator");
            }
        }

        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

// EC-31 21.11.24
// used as reference: https://www.youtube.com/watch?v=I5kj-YsmWjM
