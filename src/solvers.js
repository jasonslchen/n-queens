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
  let board = new Board({n:n});

  //start at row 0;
  //start at column = 0, check if possible
    //run recursion on next row
  //when row = n and there is a possible solution solution count = 1;
  var solutionCount = 0; //fixme
  let rooksRecursion = function(row) {
    if(row === n && !board.hasAnyRooksConflicts()) {
      solutionCount++;
    }
    if(!!board.get(row)) {
      for (let j = 0; j < n; j++) {
        board.togglePiece(row, j);
       if(!board.hasColConflictAt(j)) {
         rooksRecursion(row + 1);
       }
        board.togglePiece(row, j);

      }
    }
  }


  rooksRecursion(0);





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
  var solution;//fixme

  if (n === 0) {
    return [];
  } else if (n === 2 || n === 3) {
    let emptys = new Board({n:n});
    solution = emptys.rows();
  }

  let board = new Board({n:n});

  let queensRecursion = function(row) {
    if(row === n && !board.hasAnyQueensConflicts()) {
      let answer = JSON.stringify(board.rows());
      solution = JSON.parse(answer);
    }
    if(!!board.get(row)) {
      for (let j = 0; j < n; j++) {
        board.togglePiece(row, j);
       if(!board.hasAnyQueensConflicts()) {
         queensRecursion(row + 1);
       }
        board.togglePiece(row, j);

      }
    }
  }

  queensRecursion(0);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  //returns a count of the total number of solutions to the n-queens problem

  let board = new Board({n:n});
  var solutionCount = 0; //fixme

  let queensRecursion = function(row) {
    if(row === n && !board.hasAnyQueensConflicts()) {
      solutionCount++;
    }
    if(!!board.get(row)) {
      for (let j = 0; j < n; j++) {
        board.togglePiece(row, j);
       if(!board.hasAnyQueensConflicts()) {
         queensRecursion(row + 1);
       }
        board.togglePiece(row, j);

      }
    }
  }

  queensRecursion(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
