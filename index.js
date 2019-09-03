class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string){
    let noNoWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    let returnArray = []
    let newString = string.charAt(0).toUpperCase() + string.slice(1);
    const words = newString.split(" ");
    for (let word of words){
      if (!(noNoWords.includes(word))){
      returnArray.push(word.charAt(0).toUpperCase() + word.slice(1));
      }
    else 
      returnArray.push(word)
    }
    return returnArray.join(' ')
  }


}
