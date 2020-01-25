let input = document.querySelector(".inputValue");
let button = document.querySelector("button");
let output = document.querySelector(".outputValue");
button.onclick = () => {
    let inputValue = input.value;
    if (inputValue.length > 0) {
        if (inputValue == 0) {
            output.innerHTML = "Ноль не простое число и не составное";
        } else if (inputValue == 1) {
            output.innerHTML = "Единица не простое число и не составное";
        } else if (inputValue == 2) {
            output.innerHTML = `Число ${inputValue} простое`;
        } else if (inputValue >= 1000) {
            output.innerHTML = `Число ${inputValue} не подходит`;
        } else if (inputValue <= 1000 && inputValue > 0) {
            let integerNumber = 2;
            let power = Math.pow(integerNumber, inputValue - 1);
            let mod1 = power % inputValue;
            let mod2 = 1 % inputValue;
            if (mod1 == mod2) {
                output.innerHTML = `Число ${inputValue} простое`;
            } else output.innerHTML = `Число ${inputValue} составное`;
        } else output.innerHTML = `Введенные данные неверны`;
    }
    else output.innerHTML = `Введенные данные неверны`;
} 