
let screen = document.getElementById("screen");
screen.addEventListener('keypress', function (e) {
    e.preventDefault();
    return false;
})
let screenval = "";
let prv = "";
let pre = "";
let btn = document.querySelectorAll("button")
for (items of btn) {
    items.addEventListener('click', function (e) {
        buttontxt = e.target.innerText;

        if (buttontxt == 'x') {
            buttontxt = '*';
            screenval = screenval + buttontxt;
            screen.value = screenval;
        } else if (buttontxt == '%') {
            buttontxt = '*';
            pre = '%';
            prv = screenval / 100;
            screenval = screenval + '%';
            screen.value = screenval;


        }

        else
            if (buttontxt == 'C') {
                screenval = ""

                screen.value = "";
            }
            else if (buttontxt == '=') {
                if (pre == '%') {
                    screen.value = eval(prv)
                    screenval = screen.value

                }
                else {
                    screen.value = eval(screenval)
                    screenval = screen.value
                }
                pre = '='
            }

            else {
                if (pre == '%') {
                    prv = prv + '*' + buttontxt;
                }
                if (pre == '=') {
                    if (buttontxt != 'x' || buttontxt != '/' || buttontxt != '+' || buttontxt != '-' || buttontxt != '%') {
                        screenval = ""

                        screen.value = "";
                        pre = ""
                    }

                }
                screenval = screenval + buttontxt;
                screen.value = screenval
            }

    })
}

let erase = document.getElementById("erase");
erase.addEventListener('click', (e) => {
    console.log("Hello")
    let length = screenval.length;
    screenval = screenval.substring(0, length - 1);
    screen.value = screenval
})
