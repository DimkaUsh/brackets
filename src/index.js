module.exports = function check(str, b) {

  let arr = [];

  for (let i = 0; i < str.length; i++) {
    
    for (let j = 0; j < b.length; j++) {

      if (b[j][0] != b[j][1]) {
      
        if (str[i] === b[j][0]) {
          arr.push(b[j][0])
          break
        }

        if (str[i] === b[j][1] && i === 0) {return false}
  
        if (str[i] === b[j][1] && arr.pop() != b[j][0]) {return false}
      } 

      if (b[j][0] === b[j][1])  {
        
        if (str[i] === b[j][0] && arr[arr.length-1] != b[j][0]) {
          arr.push(b[j][0])
          break
        }

        if (str[i] === b[j][0] && arr[arr.length-1] === b[j][0]){
          arr.pop()
        break
        }
        }

      }
    }
  

  return arr.length === 0 ? true : false

}
