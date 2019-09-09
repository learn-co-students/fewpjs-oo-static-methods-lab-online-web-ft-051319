class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(string) {
    let except = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let wordArr = string.split(' ')
    let newArr = []

    for (let w = 0; w < wordArr.length; w++) {
      if (w === 0) {
        newArr.push( this.capitalize(wordArr[w]))
      } else if (except.includes(wordArr[w])) {
        newArr.push(wordArr[w])
      } else {
        newArr.push(this.capitalize(wordArr[w]))
      }
    }

    return newArr.join(' ')
  }
}