let lettersArr = 
[
  ["B", "B", "D", "A", "D", "E", "F"],
  ["B", "X", "C", "D", "D", "J", "K"],
  ["H", "Y", "I", "3", "D", "D", "3"],
  ["R", "7", "O", "Ñ", "G", "D", "2"],
  ["W", "N", "S", "P", "E", "0", "D"],
  ["A", "9", "C", "D", "D", "E", "F"],
  ["B", "X", "D", "D", "D", "J", "K"],
];


let longestChain2 = (arr = []) => {
  let rows = arr.length;
  let cols = arr[0].length;
  
  let maxLength = Math.max(rows,cols)
  
  let temp;
  const allStrings = []
  const diagonalStrings = []
  const horizonalStrings = []
  const verticalStrings = Array(cols).fill("")
  // Diagonales
  for (let i = 0; i <= 2 * (maxLength - 1); i++) {
    temp = [];
    for (let y = rows - 1; y >= 0; --y) {
      var x = i - (rows - y);
      if (x >= 0 && x < cols) {
        temp.push(arr[y][x]);
      }
    }
    if(temp.length > 0) {
      allStrings.push(temp.join(''))
      diagonalStrings.push(temp.join(''))
    }
    
  }
  for (let i = 0; i < rows; i++) {
    let horizontalString = ""
    
    for (let j = 0; j < cols; j++) {
      horizontalString += arr[i][j]
      
      verticalStrings[j] = verticalStrings[j] + arr[i][j] 
    }
    allStrings.push(horizontalString)
    horizonalStrings.push(horizontalString)
    
  }
  for(let i = 0; i < verticalStrings.length;i++){
    allStrings.push(verticalStrings[i])
  }
  
  let longString = allStrings.join("")
  
  const buscarRepetidos = string =>{
    let sum = 0
    let rta = []
    for (let i = 0, j = 1; j<string.length;){
      if(string[j] === string[i]){
        
        if(sum < j - i + 1){
          sum = j - i + 1;
          
        };
        j++
      } else {
        i = j
      }
      
    }
    return sum
  } 
  return buscarRepetidos(longString)
}

let respuesta = longestChain2(lettersArr)
document.getElementsByTagName("p")[0].innerHTML=`Dado el ejemplo anterior la mayor cantidad de letras consecutivas es ${respuesta}`

let ejemplo = document.getElementById('matriz-ex')
ejemplo.innerText(lettersArr.toString())




