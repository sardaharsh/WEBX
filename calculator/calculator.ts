function calculate(): void {
    const num1Element = document.getElementById('num1') as HTMLInputElement;
    const num2Element = document.getElementById('num2') as HTMLInputElement;
    const operationElement = document.getElementById('operation') as HTMLSelectElement;
    const resultElement = document.getElementById('result') as HTMLInputElement;

    const num1 = parseFloat(num1Element.value);
    const num2 = parseFloat(num2Element.value);
    const operation = operationElement.value;

    let result: number | string;

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'Cannot divide by zero';
            }
            break;
        default:
            result = 'Invalid operation';
            break;
    }

    resultElement.value = result.toString();
}
