// 需要回溯处理
function isAttr(v, lastLeftBracket, lastRightBracket, lastSemicolon, lastColon) {
  // const { isWord, isAnd, isColon } = v
  // return (
  //   // 前面有左括号
  //   lastLeftBracket &&
  //   // 前面无冒号
  //   !lastSemicolon &&
  //   // & : after
  //   (isWord || isAnd || isColon)
  // )
}
// 需要回溯处理
function isSelector(v, lastLeftBracket, lastRightBracket, lastSemicolon, lastColon) {

}

function isValue(v, lastLeftBracket, lastRightBracket, lastSemicolon, lastColon) {
  const { isWord, isBlock, isSingleQuot, isDoubleQuot } = v
  return (
    // 前面有冒号
    lastSemicolon &&
    // 1px 空格 ' "
    (isWord || isBlock || isSingleQuot || isDoubleQuot)
  )
}


// TODO: 暂不实现
function isAtRule(v, lastLeftBracket, lastRightBracket, lastSemicolon, lastColon, lastAt) {
  const { isAt, isWord } = v
  return (
    // @
    isAt ||
    // 前面是@ 且 current是word
    (lastAt && isWord)
  )
}


module.exposts = {
  isAttr,
  isValue,
  isSelector,
  isAtRule
}