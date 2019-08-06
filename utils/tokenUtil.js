function TokenUtil(tokens) {
  this.tokens = tokens
  this.recordSymbolIndex()
  // this.splitByBracket()
}
// 记录 { } ;所在的下标存入数组
TokenUtil.prototype.recordSymbolIndex = function recordSymbolIndex() {
  const symbolArr = []
  let current = {}

  for (let i = 0; i < this.tokens.length; i++) {
    current = this.tokens[i]
    
    if (current.isLeftBracket || current.isRightBracket || current.isSemicolon) {
      symbolArr.push(current)
    }
  }
  return symbolArr
}
// 按 { } 分隔
// TokenUtil.prototype.splitByBracket = function(index) {
//   let results = []
//   let lastIndex = 0
//   let current = {}
//   for (let i = 0; i < this.tokens.length - 1; i++) {
//     current = this.tokens[i]

//     if (current.isLeftBracket || current.isRightBracket) {
//       results.push(this.tokens.slice(lastIndex, i))
//       lastIndex = i + 1
//     }
//   }
//   this.splitByBracketTokens = results
//   // this.splitByBracketTokenStr = 
// }

  TokenUtil.prototype.prev = function(index) {
  let current = {}
  for (let i = this.tokens.length - 1; i >= 0; i--) {
    current = this.tokens[i]

    if (current.start < index) {
      return current
    }
  }
  return { matchNull: true }
}
TokenUtil.prototype.after = function(index) {
  let current = {}
  for (let i = 0; i < this.tokens.length - 1; i++) {
    current = this.tokens[i]

    if (current.start > index) {
      return current
    }
  }
  return { matchNull: true }
}
module.exports = TokenUtil