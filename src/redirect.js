const types = [
  'anyTypeAnnotation',
  'arrayExpression',
  'arrayPattern',
  'arrayTypeAnnotation',
  'arrowFunctionExpression',
  'assignmentExpression',
  'assignmentPattern',
  'awaitExpression',
  'binaryExpression',
  'bindExpression',
  'blockStatement',
  'booleanLiteral',
  'booleanLiteralTypeAnnotation',
  'booleanTypeAnnotation',
  'breakStatement',
  'callExpression',
  'catchClause',
  'classBody',
  'classDeclaration',
  'classExpression',
  'classImplements',
  'classMethod',
  'classProperty',
  'conditionalExpression',
  'continueStatement',
  'debuggerStatement',
  'declareClass',
  'declareExportDeclaration',
  'declareFunction',
  'declareInterface',
  'declareModule',
  'declareModuleExports',
  'declareOpaqueType',
  'declareTypeAlias',
  'declareVariable',
  'decorator',
  'directive',
  'directiveLiteral',
  'doExpression',
  'doWhileStatement',
  'emptyStatement',
  'emptyTypeAnnotation',
  'existentialTypeParam',
  'exportAllDeclaration',
  'exportDefaultDeclaration',
  'exportDefaultSpecifier',
  'exportNamedDeclaration',
  'exportNamespaceSpecifier',
  'exportSpecifier',
  'expressionStatement',
  'file',
  'forAwaitStatement',
  'forInStatement',
  'forOfStatement',
  'forStatement',
  'functionDeclaration',
  'functionExpression',
  'functionTypeAnnotation',
  'functionTypeParam',
  'genericTypeAnnotation',
  'identifier',
  'ifStatement',
  'import',
  'importDeclaration',
  'importDefaultSpecifier',
  'importNamespaceSpecifier',
  'importSpecifier',
  'interfaceDeclaration',
  'interfaceExtends',
  'intersectionTypeAnnotation',
  'jSXAttribute',
  'jSXClosingElement',
  'jSXElement',
  'jSXEmptyExpression',
  'jSXExpressionContainer',
  'jSXIdentifier',
  'jSXMemberExpression',
  'jSXNamespacedName',
  'jSXOpeningElement',
  'jSXSpreadAttribute',
  'jSXSpreadChild',
  'jSXText',
  'labeledStatement',
  'logicalExpression',
  'memberExpression',
  'metaProperty',
  'mixedTypeAnnotation',
  'newExpression',
  'noop',
  'nullLiteral',
  'nullLiteralTypeAnnotation',
  'nullableTypeAnnotation',
  'numberTypeAnnotation',
  'numericLiteral',
  'numericLiteralTypeAnnotation',
  'objectExpression',
  'objectMethod',
  'objectPattern',
  'objectProperty',
  'objectTypeAnnotation',
  'objectTypeCallProperty',
  'objectTypeIndexer',
  'objectTypeProperty',
  'objectTypeSpreadProperty',
  'opaqueType',
  'parenthesizedExpression',
  'program',
  'qualifiedTypeIdentifier',
  'regExpLiteral',
  'restElement',
  'restProperty',
  'returnStatement',
  'sequenceExpression',
  'spreadElement',
  'spreadProperty',
  'stringLiteral',
  'stringLiteralTypeAnnotation',
  'stringTypeAnnotation',
  'super',
  'switchCase',
  'switchStatement',
  'taggedTemplateExpression',
  'templateElement',
  'templateLiteral',
  'thisExpression',
  'thisTypeAnnotation',
  'throwStatement',
  'tryStatement',
  'tupleTypeAnnotation',
  'typeAlias',
  'typeAnnotation',
  'typeCastExpression',
  'typeParameter',
  'typeParameterDeclaration',
  'typeParameterInstantiation',
  'typeofTypeAnnotation',
  'unaryExpression',
  'unionTypeAnnotation',
  'updateExpression',
  'variableDeclaration',
  'variableDeclarator',
  'voidTypeAnnotation',
  'whileStatement',
  'withStatement',
  'yieldExpression',
];

export default url => {
  url = url.split('')[0].toLowerCase().join('');
  if (types.includes(url)) {
    window.location.replace(
      'https://babeljs.io/docs/core-packages/babel-types/#api' +
        url.replace(/([A-Z])/g, '-$1').toLowerCase()
    );
  }
};
