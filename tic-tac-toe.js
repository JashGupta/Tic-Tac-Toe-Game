
let reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
    window.location.reload();
});

let boxes = document.querySelectorAll(".boxes");
let turnX = true;
let winner = document.querySelector("#winner");

let winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7 ,8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnX == true) {
            box.innerText = "X";
            turnX = false;
        } else {
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disablebox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

checkWinner = () => {
    for (let patterns of winningPatterns) {
        let p1 = boxes[patterns[0]].innerText;
        let p2 = boxes[patterns[1]].innerText;
        let p3 = boxes[patterns[2]].innerText;

        if (p1 != "" && p2 != "" && p3 != "") {
            if (p1 == p2 && p2 == p3) {
                winner.textContent = "Congrats, " + p1 + ' Won🏅';
                disablebox();
            }
        }
    }
}