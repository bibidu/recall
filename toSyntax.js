// 问题的关键
// 依次检查后面token 当先碰到{ 则当前token为selector。先碰到; 则当前token是attr
const TokenUtil = require('./utils/TokenUtil')

module.exports = function toSyntax(tokens) {
  let id = 0
  const results = []
  const fathersId = []
  let strPool = '', current = {}
  const tokenUtil = new TokenUtil(tokens)
  
  for (let i = 0; i < tokens.length; i++) {
    current = tokens[i]

    if (!current.isLeftBracket && !current.isSemicolon) {
      strPool += current.value
    }

    if (current.isLeftBracket) {
      results.push({ id: ++id, type: 'selector', value: strPool, fatherId: fathersId.length ? fathersId[fathersId.length - 1] : -1 })
      strPool = ''
      fathersId.push(id)
    } else if (current.isColon) {
      if (tokenUtil.prev(i).isAnd) {
        // strPool += current.value
      } else {
        if (tokenUtil.isSelector(i)) {
          results.push({ id: ++id, type: 'selector', value: strPool, fatherId: fathersId.length ? fathersId[fathersId.length - 1] : -1 })
          strPool = ''
          fathersId.push(id)
        } else {
          results.push({ id: ++id, type: 'attr', value: strPool.slice(0, strPool.length - 1), fatherId: fathersId.length ? fathersId[fathersId.length - 1] : -1 })
          strPool = ''
        }
      }
    } else if (current.isSemicolon) {
      results.push({ id: ++id, type: 'value', value: strPool, fatherId: fathersId.length ? fathersId[fathersId.length - 1] : -1 })
      strPool = ''
    } else if (current.isRightBracket) {
      fathersId.pop()
    }
  }
  return results
}
