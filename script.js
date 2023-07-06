function getValue(e) {
    form.display.value += e.value;
    if (form.display.value.length > 10) {
        document.querySelector(".display-input").style.fontSize = "2.6rem";
        document.querySelector(".display").style.margin = "2.3rem 0";
    }
}

function calculate() {
    form.display.value = eval(form.display.value);
}

function allClear() {
    form.display.value = "";
    document.querySelector(".display-input").style.fontSize = "3.8rem";
    document.querySelector(".display").style.margin = "1.4rem 0";
}

function deleteValue() {
    form.display.value = form.display.value.toString().slice(0, -1);
    if (form.display.value.length <= 10) {
        document.querySelector(".display-input").style.fontSize = "3.8rem";
        document.querySelector(".display").style.margin = "1.4rem 0";
    }
}

