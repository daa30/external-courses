let input = document.querySelector(".inp1");
let button = document.querySelector("button");
let out = document.querySelector(".out1");
button.onclick = () => {
    let a = input.value;
    if (a == 0) {
        out.innerHTML = "Undefined";
    } else if (a == 1) {
        out.innerHTML = "Единица не простое число и не составное";
    } else if (a == 2) {
        out.innerHTML = `Число ${a} простое`;
    } else if (a >= 1000) {
        out.innerHTML = `Число ${a} больше 1000`;
    } else if (a <= 1000 && a > 0) {
        let b = 2;
        let power = Math.pow(b, a - 1);
        let x = power % a;
        let y = 1 % a;
        if (x == y) {
            out.innerHTML = `Число ${a} простое`;
        } else out.innerHTML = `Число ${a} составное`;
    } else out.innerHTML = `Число ${a} отрицательное`
}