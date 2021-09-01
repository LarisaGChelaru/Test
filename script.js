function game(x) {
    let valorinput = document.getElementById("input").value;

    if (valorinput == x) {
        alert("You won")
    } else {
        alert("you are close. Try again")
        if (valorinput > x) {
            alert("Your number is bigger than x")
        } else { alert("Your number is smaller than x") }
    }
}
var x = Math.floor(MAth.random() * 100);