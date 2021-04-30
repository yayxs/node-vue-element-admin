module.exports = {
  getUser: function () {
    let arr = []
    for (
      let i = 0;
      i < document.getElementsByClassName('list-item').length;
      i++
    ) {
      arr.push(document.getElementsByClassName('list-item')[i].children[1].href)
    }
  },
}
