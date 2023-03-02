const capitalize = (str)=>{
    let holder = []
      let letter;
    for(let i = 0; i< str.length; i++)
      {
          
        if(i === 0){
          letter = str.charAt(i).toUpperCase()
          holder.push(letter)
          
        }
        else{
          letter = str.charAt(i).toLowerCase()
          holder.push(letter)
        }
      }
        holder = holder.join("")
       return holder
    }

    module.exports = capitalize;