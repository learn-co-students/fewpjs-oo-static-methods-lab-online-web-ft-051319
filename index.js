class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase()+string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static titleize(string){
    const Extras = ['a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from', 'the']
    let array=string.split(' ')
    let mod_array=array.slice(1).map(word=>{
      if(Extras.includes(word)){
        return word
      }else{
        return this.capitalize(word)
      }
    })
    return this.capitalize(array[0])+' '+mod_array.join(' ')
  }


}
