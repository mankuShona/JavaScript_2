const a = 10;
const b = 20.5;
const c = 10;
const d = null;
let e; // undefined variable
const f = "bangla";

document.write(``); //boolean
document.getElementById("a1").innerHTML = 
`The types of different variables' value:<br>
a and b are equal => ${a==b} <br>
a and c are equal => ${a==c} <br>
a and b are equal => ${typeof (a==b)} <br>
a and c are equal => ${typeof (a==c)} <br>
type of d = ${typeof d}<br>
type of e = ${typeof e}<br>
type of b = ${typeof b}<br>
type of a = ${typeof a}<br>
type of f = ${typeof f}<br>`;

function conditionals(){
    let greetings;
    let time = new Date().getHours();
    if (time>=6 && time < 12){
        greetings = "Good Morning";
        }
    else if(time === 12){
        greetings = "Good Noon";
    }
    else if(time > 12 && time < 17){
        greetings = "Good Afternoon";
    }
    else if ( time >= 17 && time < 19){
        greetings = "Good Evening";

    }
    else{
        greetings = "Good Night";
    };

    document.getElementById("hour").innerHTML = 
    `
    Current Hour is : ${time}
    `;
    document.getElementById("greet").innerHTML = greetings;

};

function while_loop(){
    let text = ``;
    let i = 0;
    while(i<10){
        text += `<br> The number is: ${i}`;
        i++;
    };
    document.getElementById("whileLoop").innerHTML = text;
}

