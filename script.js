function game(x) {
    let valorinput = document.getElementById("input").value;

    if (valorinput == x) {
        alert("You won")

    } else {
        alert("you are close. Try again")
        if (valorinput > x) {
            alert("Your number is bigger than x")
        } else {
            alert("Your number is smaller than x")
        }
    }
}
var x = Math.floor(Math.random() * 100);
class Client {
    constructor(name, sename, age, number) {
        this.name = name;
        this.sename = sename;
        this.age = age;
        this.number = number;
    };
    showed() {
        return String(this.name) + " " + String(this.sename) + " " + String(this.age) + " " + String(this.number);
    }; //we use string to define the type of the element in the ()
};

function GetInfo(cs) {
    let nam = document.getElementById('fname').value;
    let snam = document.getElementById('sname').value;
    let clage = document.getElementById('cage').value;
    let cnum = document.getElementById('cnumber').value;

    let cliente = new Client(nam, snam, clage, cnum);
    cs.push(cliente);
    console.log(cs);
};

function Show(cs) {
    text = " ";
    for (x of cs) {
        text += x.showed() + "</br>"
        console.log(x);
        document.getElementById('text').innerHTML = text
    }
}
var cs = [];
/*let first = new Client(document.getElementById('name').value, array.age = document.getElementById('age').value)
document.write(first.name + " " + first.age)
    /*function add(array) {
        array.name = document.getElementById('name').value;
        array.age = document.getElementById('age').value;
    };


    function show(array) {
        // for (x = 0; x <= array.length; x++) {
        //    document.write(x.name + "  " + x.age);
        //}
        document.write(array.name + " " + array.age);
    };

    var cliente = new.Client()
    let a = new.Client(Larisa, 17, );*/

var Today = new Date();
new Date(year, month, day, hours, minutes);

const a = new Set(["x", "y", "z"])
a.add("a") //add new element
a.forEach(function(value(
    alert(value)
)))

console.log(value("a")) //it will show string, the type of the element

var x = ""
undefined
null //these arre the same values, 0

Number("24") //24
Number(False) //0
Number(True) //1
Number("1 1a") //NaN =Not a Number

String() //transform everything to a string

Events

onclick
onchange
onmouseover
onmouseout
onkeydown //when you push some key
onload

window.onload = function() {
        //all the Js code comes here to be loaded at the end
    } //save the sintax for the future <3