// const input = `body {
//   color: red;
//   border: 1px solid #ccc;
//   &:after{
//     content: '';
//   }
// }`
// syntax
// attr | value | selector
// const {
//   isAttr,
//   isValue,
//   isSelector
// } = require('./utils/syntax')
const TokenUtil = require('./utils/TokenUtil')

// body: {
//   children: [
//     {
//       color: red
//     },
//     '&:after': {
//       children: []
//     }
//   ]
// }
module.exports = function toSyntax(tokens) {
  let results = '{'
  let current = {}
  const tokenUtil = new TokenUtil(tokens)
  for (let i = 0; i < tokens.length; i++) {
    current = tokens[i]

    // if (isSelector(current)) {
    //   results += current.value
    // } else if (isAttr(current)) {
    //   results += current.value
    // } else if (isValue(current)) {
    //   results += '"' + current.value + '"'
    // } else if (isSemicolon(current)) {
    //   results += ','
    // } else if (isLeftBracket(current)) {
    //   results += ':' + current.value
    // } else if (isRightBracket(current) || isEnter(current)) {
    //   results += current.value
    // }
    if (current.isLeftBracket) {
      results += ':' + current.value
    } else if (current.isRightBracket) {
      results += '' + current.value
    } else if (current.isSemicolon) {
      results += ','
    } else {
      results += current.value
    }
  }
  results += '}'

  console.log(results);
}

