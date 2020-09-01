const rows = 6;
const cols = 7;
let connectN = 4;
let playerCount = 0;
const grid = $("grid")
let winner = false;

//. grid initialiser
for (let i = 0; i < rows; i++) {
    elementID_row = "row-" + i

    $('#grid').prepend(
        $("<div></div>")
        .addClass("row")
        .attr('id', elementID_row)
    )

    for (let j = 0; j < cols; j++) {
        elementID_col = "row-" + i + "-column-" + j
        $('#' + elementID_row).append(
            $('<div></div>')
            .addClass("col-1")
            .attr('id', elementID_col)
        )
    }
}

// setup
let board = getBoard(rows, cols)

// create row buttons and bind them 
for (let i = 0; i < cols; i++) {
    $('#button-row').append(
        $('<button />')
        .attr('id', "button" + i)
        .addClass("btn btn-primary btn-lg")
        .click(buttonClick)
    )
}

// bind reset buttons
$('#reset').click(buttonClick)

// push board to html
updateHTML(board)