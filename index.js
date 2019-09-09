class Formatter {
  //add static methods here
  static capitalize(string) {
      return string.charAt(0).toUpperCase()+string.slice(1);
  }

  static sanitize(string) {
      return string.replace(/[^A-Za-z0-9 '-]/g,'');
  }

  static titleize(sentence) {
    // words that shouldn't be capitalized
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result = [];
    // original sentence split into an array
    let arrayOfWords = sentence.split( " " )
    for ( let n = 0; n < arrayOfWords.length; n++ ) {
    // if there is only 1 word, capitalize it
      if ( n == 0 ) {
        result.push( this.capitalize(arrayOfWords[n]))
      } else {
    // if there is more than 1 word, check whether it is in the exceptions array
        if (exceptions.includes(arrayOfWords[n])) {
          result.push(arrayOfWords[n])
        } else {
    // if it is not in the exceptions array, capitalize it
          result.push(this.capitalize(arrayOfWords[n]))
        }
      }

    }
    // take the result array and re-join it to be a string
    return result.join( " " );
  }
}
