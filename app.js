//After working on our Terminal Lab I was told about math.js so I used that here.
//Correction, I originally used math.js but changed after discussing with Matt change it.

const calculator = document.querySelector(`#calculator`);
const display = document.querySelector(`.display`);

let output = ``;

display.textContent = `Please Use Me!`;

calculator.addEventListener(`click`, (event) => {
    if (!event.target.classList.contains(`button`)) return;
    const value = event.target.innerText;
    //console.log(value);
    
    if (value === `C`) {
        output = ``;
        display.textContent = `0`;
    } else if (value === `=`) {
        if (output !== ``) {
            output = eval(output).toString(); 
            display.textContent = output;
        } else {
            display.textContent = `0`;
        }
    } else if (event.target.classList.contains(`number`) || 
    event.target.classList.contains(`operator`)) {
        output += value;
        display.textContent = output;
    }
});
