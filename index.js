const input = `body {
  color: red;
  border: 1px solid #ccc;
  &:after{
    content: '';
  }
}`
const toToken = require('./toToken')
const toSyntax = require('./toSyntax')

const tokens = toToken(input)
const syntaxs = toSyntax(tokens)
console.log(syntaxs);
