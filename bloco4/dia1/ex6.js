let piece = "kiNg";
let pieceLower = piece.toLowerCase(piece);

switch (pieceLower) {
    case "bishop":
        console.log("Bishops only move diagonally");
        break;
    case "pawn":
        console.log("Pawns can move 2 squares foward the first time, then only 1 step foward. Pawns must 'kill' diagonally");
        break;
    case "knight":
        console.log("Knights move in a L shape");
        break;
    case "rook":
        console.log("Rooks move any amount of square fowards, backwards, left or right (if possible)");
        break;
    case "king":
        console.log("King can move one square to any side");
        break;
    case "queen":
        console.log("Queen can move any amount of squares to any side");
        break;
    default:
        console.log("This is no chess piece!")
}