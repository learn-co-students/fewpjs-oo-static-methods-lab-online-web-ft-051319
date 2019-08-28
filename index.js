class Formatter {
  //add static methods here

  static capitalize(string) {
    return (string[0].toUpperCase() + string.substring(1));
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string) {
    let noCap = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']

    let returnString = [];

    let sentence = string.split( " " )

    for (let x = 0; x < sentence.length; x++ ) {
      if ( x == 0 ) {
        returnString.push( this.capitalize(sentence[x]))
      } else {
        if (!noCap.includes(sentence[x])) {
          returnString.push(this.capitalize(sentence[x]))
        } else {
          returnString.push(sentence[x])
        }
      }

    }
    return returnString.join(" ");
  }

}