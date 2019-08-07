const input = `body .a {
  color: red;
  border: 1px solid #ccc;
  &:after{
    content: '';
  }
  div {
    color: red;
    .img{
      
    }
  }
}
#app {}`
// background-url: '';
const toToken = require('./toToken')
const toSyntax = require('./toSyntax')

const tokens = toToken(input)
const syntaxs = toSyntax(tokens)
// const obj = toObject(syntaxs)
console.log(syntaxs);


// syntaxs
// [ { id: 1, type: 'selector', value: 'body .a ', fatherId: -1 },
//   { id: 2, type: 'attr', value: '\n  color', fatherId: 1 },
//   { id: 3, type: 'value', value: ' red', fatherId: 1 },
//   { id: 4, type: 'attr', value: '\n  border', fatherId: 1 },
//   { id: 5, type: 'value', value: ' 1px solid #ccc', fatherId: 1 },
//   { id: 6, type: 'selector', value: '\n  &:after', fatherId: 1 },
//   { id: 7, type: 'attr', value: '\n    content', fatherId: 6 },
//   { id: 8, type: 'value', value: " ''", fatherId: 6 },
//   { id: 9, type: 'selector', value: '\n  }\n  div ', fatherId: 1 },
//   { id: 10, type: 'attr', value: '\n    color', fatherId: 9 },
//   { id: 11, type: 'value', value: ' red', fatherId: 9 },
//   { id: 12, type: 'selector', value: '\n    .img', fatherId: 9 },
//   { id: 13,
//     type: 'attr',
//     value: '\n      backgroundurl',
//     fatherId: 12 },
//   { id: 14, type: 'value', value: " ''", fatherId: 12 },
//   { id: 15,
//     type: 'selector',
//     value: '\n    }\n  }\n}\n#app ',
//     fatherId: -1 } ]
