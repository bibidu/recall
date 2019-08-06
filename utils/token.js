function isWord(v) {
  return /^[a-zA-Z1-9]{1}$/.test(v)
}
function isLeftBracket(v) {
  return v === '{'
}
function isRightBracket(v) {
  return v === '}'
}
function isColon(v) {
  return v === ':'
}
function isBlock(v) {
  return v === ' '
}
function isAt(v) {
  return v === '@'
}
function isSemicolon(v) {
  return v === ';'
}
function isEnter(v) {
  return /^\n$/.test(v)
}
function isHash(v) {
  return v === '#'
}
function isAnd(v) {
  return v === '&'
}
function isSingleQuot(v) {
  return v === "'"
}
function isDoubleQuot(v) {
  return v === '"'
}
function isDot(v) {
  return v === '.'
}
module.exports = {
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
  isDot
}