class Formatter {
  //add static methods here
  static capitalize(phrase) {
    phrase = phrase.split(' ')
    for (var i=0, x=phrase.length; i < x; i++) {
      phrase[i] = phrase[i][0].toUpperCase() + phrase[i].substr(1)
    }
    return phrase.join(' ')
  }

  static sanitize(phrase) {
      return phrase.replace(/[^0-9a-z-\s\']/gi, '')
  }
  static titleize(phrase) {
    phrase = phrase.split(' ')
    let stopwords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']


      for (var i=0, x=phrase.length; i < x; i++) {
        if (!stopwords.includes(phrase[i]) || i===0) {

          phrase[i] = phrase[i][0].toUpperCase() + phrase[i].substr(1)
          }
    }
    return phrase.join(' ')
  }
}
