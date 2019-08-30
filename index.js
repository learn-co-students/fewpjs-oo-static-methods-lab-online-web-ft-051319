class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]+/g, "");
  }

  static titleize(string) {
    const nonCapWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let stringArr = string.split(" ");

    let capArr = stringArr.map(word => {
      if (!nonCapWords.includes(word) || stringArr.indexOf(word) === 0) {
        return this.capitalize(word);
      } else {
        return word;
      }
    })

    return capArr.join(" ");
  }
}