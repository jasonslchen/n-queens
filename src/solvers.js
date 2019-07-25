/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting

//togglePiece(row,col) adds a value of 1, representation of queen or rook, athe row x col in the board

// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n) {
  //retuns a singular solution to the the n-rooks problem
  //create an n*n board where the initial values are all zeros
  //populate the board using togglePiece to add 1s
  //only add one at (row,col) position if doing so does not create a conflict on the resulting board
  var board = new Board({n:n})
  for(var r=0; r<n; r++){
    for (var c=0; c<n; c++){
      board.togglePiece(r,c)
      if(board.hasAnyRooksConflicts()){
        board.togglePiece(r,c)
      }
    }
  }
  var solution = board.rows();
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  //retuns a count of the total number of solutions to the n-rooks problem
  //implement tree structure
  //each child value will have to be an array of tuple toggled pieces for that instance or some child structure
    //that way when we instanciate the board and toggle the pieces itll be eaiser than having the value be a new board
    //


  var solutionCount = undefined; //fixme



  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  //reutns a singular solution to the n-queens problem
  //create an n*n board where the initial values are all zeros
  //populate the board using togglePiece to add 1s
  //only add one at (row,col) position if doing so does not create a conflict on the resulting board
  //for helper recursion put for loops in recursion
  //check queen soln number is equal to n, if not run recursion again
  //if queen soln number = n, somehow push out answer and return the answer
  //implementation?!?!??!

  var solutions =[];
  for (var i=0; i<n; i++){
    var board = new Board({n:n})
    var counter = 0;
    let start = true;
    for (var r=0; r<n; r++){
      for (var c=0; c<n; c++){
        if(r === 0 && start) {
          c = i;
          start = false;
        }
        board.togglePiece(r,c);
        counter++
        if(board.hasAnyQueensConflicts()){
          board.togglePiece(r,c);
          counter--
        }
      }
    }
    if(counter === n){
      solutions.push(board.rows());
    }

    // if (n === 6) {
    //   debugger;
    // }
  }
  var solution = solutions[0] || solutions; //fixme
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  //returns a count of the total number of solutions to the n-queens problem
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
