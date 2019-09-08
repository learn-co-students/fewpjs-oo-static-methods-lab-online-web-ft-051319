class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static titleize(sentence) {
    let except = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let words = sentence.split(' ');
    let titleCased = [];
    for (let i = 0; i < words.length; i++) {
      if (i === 0) {
        titleCased.push(this.capitalize(words[i]));
      }
      else if (except.includes(words[i])) {
        titleCased.push(words[i]);
      }
      else {
        titleCased.push(this.capitalize(words[i]));
      }
    }
    return titleCased.join(' ');
  }
}