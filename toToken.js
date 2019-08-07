const {
  isWord,
  isLeftBracket,
  isRightBracket,
  isColon,
  isBlock,
  isAt,
  isSemicolon,
  isEnter,
  isHash,
  isAnd,
  isSingleQuot,
  isDoubleQuot,
  isDot,
  isHyphen
} = require('./utils/token')

module.exports = function toToken(input) {
  let tokens = [], current, cached = '', start = 0, end = 0
  const strs = input.split('')
  
  for (let i = 0; i < strs.length; i++) {
    current = strs[i]

    if (isWord(current)) {
      if (cached.length) {
        end++
      } else {
        start = i
        end = i + 1
      }
      cached += current
      continue
    } else if (isLeftBracket(current)) {
      if (cached.length) {
        tokens.push({ type: 'word', value: cached, start, end, isWord: true })
        cached = ''
      }
      tokens.push({ type: 'leftBracket', value: current, start: i, end: i + 1, isLeftBracket: true })
    } else if (isRightBracket(current)) {
      tokens.push({ type: 'rightBracket', value: current, start: i, end: i + 1, isRightBracket: true })
    } else if (isEnter(current)) {
      tokens.push({ type: 'enter', value: current, start: i, end: i + 1, isEnter: true })
    } else if (isColon(current)) {
      if (cached.length) {
        tokens.push({ type: 'word', value: cached, start, end, isWord: true })
        cached = ''
      }
      tokens.push({ type: 'colon', value: current, start: i, end: i + 1, isColon: true })
    } else if (isBlock(current)) {
      if (cached.length) {
        tokens.push({ type: 'word', value: cached, start, end, isWord: true })
        cached = ''
      }
      tokens.push({ type: 'block', value: current, start: i, end: i + 1, isBlock: true })
    } else if (isAt(current)) {
      tokens.push({ type: 'at', value: current, start: i, end: i + 1, isAt: true })
    } else if (isSemicolon(current)) {
      if (cached.length) {
        tokens.push({ type: 'word', value: cached, start, end, isWord: true })
        cached = ''
      }
      tokens.push({ type: 'semicolon', value: current, start: i, end: i + 1, isSemicolon: true })
    } else if (isHash(current)) {
      tokens.push({ type: 'hash', value: current, start: i, end: i + 1, isHash: true })
    } else if (isAnd(current)) {
      tokens.push({ type: 'and', value: current, start: i, end: i + 1, isAnd: true })
    } else if (isSingleQuot(current)) {
      tokens.push({ type: 'singleQuot', value: current, start: i, end: i + 1, isSingleQuot: true })
    } else if (isDoubleQuot(current)) {
      tokens.push({ type: 'doubleQuot', value: current, start: i, end: i + 1, isDoubleQuot: true })
    } else if (isDot(current)) {
      tokens.push({ type: 'dot', value: current, start: i, end: i + 1, isDot: true })
    } else if (isHyphen(current)) {
      tokens.push({ type: 'hyphen', value: current, start: i, end: i + 1, isHyphen: true })
    } else {
      console.log('未知字符');
      console.log(current);
    }
  }
  // check
  if (!check(tokens)) {
    console.log('[ERROR] error ....');
  }
  return tokens
}

// 检查是否有遗漏的token
function check(tokens) {
  // console.log(tokens.map(item => {
  //   Object.keys(item).forEach(k => {
  //     if (/^is/.test(k)) {
  //       delete item[k]
  //     }
  //   })
  //   return item
  // }));
  // const errorChar = []
  let flag = true, lastEnd = 0, current = 0
  for (let i = 0; i < tokens.length; i++) {
    current = tokens[i]
    if (current.start !== lastEnd) {
      // errorChar.push(current)
      flag = false
      break
    }
    lastEnd = current.end
  }
  // console.log(errorChar);
  return flag
}


