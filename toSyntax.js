// const input = `body {
//   color: red;
//   border: 1px solid #ccc;
//   &:after{
//     content: '';
//   }
// }`
// syntax
// attr | value | selector
const {
  isAttr,
  isValue,
  isSelector
} = require('./utils/syntax')
module.exports = function toSyntax(tokens) {
  let lastLeftBracket = -1, // {
      lastRightBracket = -1, // }
      lastSemicolon = -1, // ;
      lastColon = -1 // :
      lastAt = -1
  
}