

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

function out(maze, x, y, currPath, allPaths, tempMaze) {
  // console.log(maze[0]);
  // console.log(maze[1]);
  // console.log(maze[2]);
  // console.log(maze[3]);
  // console.log(maze[4]);
  // console.log('\b');
  if(tempMaze[y][x] === ' '){
    tempMaze[y][x] = '1';
    if (x + 1 < tempMaze[0].length && (tempMaze[y][x+1] === ' ' || tempMaze[y][x+1] ===  'e')) {
      currPath.push('R');
      if(!out(tempMaze, x+1, y, currPath, allPaths, tempMaze)){
        currPath.pop();
        tempMaze[y][x+1] = ' ';
      }
    }
    if (x > 0 && (tempMaze[y][x-1] === ' ' ||tempMaze[y][x-1] ===  'e')){
      currPath.push('L');
      if(!out(tempMaze, x-1, y, currPath, allPaths, tempMaze)){
        currPath.pop();
        tempMaze[y][x-1] = ' ';
      }
    }
    if (y + 1 < tempMaze.length && (tempMaze[y+1][x] === ' ' ||tempMaze[y+1][x] ===  'e')) {
      currPath.push('D');
      if(!out(tempMaze, x, y+1, currPath, allPaths, tempMaze)){
        currPath.pop();
        tempMaze[y+1][x] = ' ';
      }
    }
    if (y > 0 && (tempMaze[y-1][x] === ' ' || tempMaze[y-1][x] === 'e')) {
      currPath.push('U');
      if(!out(tempMaze, x, y-1, currPath, allPaths, tempMaze)){
        currPath.pop();
        tempMaze[y-1][x] = ' ';
        return false;
      }
    }
  } else if (tempMaze[y][x] === 'e'){
    allPaths.push([...currPath]);
    currPath.pop();
    tempMaze[y][x] = 'e';
    console.log('allPaths', allPaths);
    return allPaths;
  }

}

console.log(out(maze, 0, 0, [], [], maze));