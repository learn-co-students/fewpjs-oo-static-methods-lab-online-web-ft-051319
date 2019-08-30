class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string){
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let strings = string.split(" ")
    let sentence = []
    let that = this
  
      strings.forEach(function(word, index){
        if(!exceptions.includes(word) || index === 0 ){
          sentence.push(that.capitalize(word))
        }else{
          sentence.push(word)
        }
      })
  
    
    // let sentence = strings.map(function(str){
    //   if(exceptions.includes(str)){
    //       this.capitalize(str)
    //     }
        
    // })
  
     
    return sentence.join(" ")
  }
}