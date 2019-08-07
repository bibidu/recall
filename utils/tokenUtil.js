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

TokenUtil.prototype.prev = function(index) {
  return index === 0 ? { matchNull: true } : this.tokens[index - 1]
}
TokenUtil.prototype.after = function(index) {
  return index === this.tokens.length - 1 ? { matchNull: true } : this.tokens[index + 1]
}
TokenUtil.prototype.isSelector = function(index) {
  // let matchNull = false
  let nextToken = this.after(index)
  while (!nextToken.isLeftBracket && !nextToken.isSemicolon) {
    if (nextToken.matchNull) {
      break
    }
    index++
    nextToken = this.after(index)
  }
  return !!(nextToken.isLeftBracket)
}
module.exports = TokenUtil