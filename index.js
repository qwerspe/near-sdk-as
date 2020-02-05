!function(i,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("assemblyscript")):"function"==typeof define&&define.amd?define(["assemblyscript"],e):"object"==typeof exports?exports.transformer=e(require("assemblyscript")):i.transformer=e(i.assemblyscript)}("undefined"!=typeof self?self:this,(function(i){return function(i){var e={};function t(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return i[s].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=i,t.c=e,t.d=function(i,e,s){t.o(i,e)||Object.defineProperty(i,e,{enumerable:!0,get:s})},t.r=function(i){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},t.t=function(i,e){if(1&e&&(i=t(i)),8&e)return i;if(4&e&&"object"==typeof i&&i&&i.__esModule)return i;var s=Object.create(null);if(t.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:i}),2&e&&"string"!=typeof i)for(var n in i)t.d(s,n,function(e){return i[e]}.bind(null,n));return s},t.n=function(i){var e=i&&i.__esModule?function(){return i.default}:function(){return i};return t.d(e,"a",e),e},t.o=function(i,e){return Object.prototype.hasOwnProperty.call(i,e)},t.p="",t(t.s=3)}([function(i,e,t){"use strict";function s(i){for(var t in i)e.hasOwnProperty(t)||(e[t]=i[t])}Object.defineProperty(e,"__esModule",{value:!0}),s(t(1)),s(t(5))},function(e,t){e.exports=i},function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=t(1),n=t(8);class r extends n.AbstractVisitor{constructor(){super(...arguments),this.depth=0}_visit(i){switch(i.kind){case s.NodeKind.SOURCE:this.visitSource(i);break;case s.NodeKind.NAMEDTYPE:this.visitNamedTypeNode(i);break;case s.NodeKind.FUNCTIONTYPE:this.visitFunctionTypeNode(i);break;case s.NodeKind.TYPENAME:this.visitTypeName(i);case s.NodeKind.TYPEPARAMETER:this.visitTypeParameter(i);break;case s.NodeKind.FALSE:case s.NodeKind.NULL:case s.NodeKind.SUPER:case s.NodeKind.THIS:case s.NodeKind.TRUE:case s.NodeKind.CONSTRUCTOR:case s.NodeKind.IDENTIFIER:this.visitIdentifierExpression(i);break;case s.NodeKind.ASSERTION:this.visitAssertionExpression(i);break;case s.NodeKind.BINARY:this.visitBinaryExpression(i);break;case s.NodeKind.CALL:this.visitCallExpression(i);break;case s.NodeKind.CLASS:this.visitClassExpression(i);break;case s.NodeKind.COMMA:this.visitCommaExpression(i);break;case s.NodeKind.ELEMENTACCESS:this.visitElementAccessExpression(i);break;case s.NodeKind.FUNCTION:this.visitFunctionExpression(i);break;case s.NodeKind.INSTANCEOF:this.visitInstanceOfExpression(i);break;case s.NodeKind.LITERAL:this.visitLiteralExpression(i);break;case s.NodeKind.NEW:this.visitNewExpression(i);break;case s.NodeKind.PARENTHESIZED:this.visitParenthesizedExpression(i);break;case s.NodeKind.PROPERTYACCESS:this.visitPropertyAccessExpression(i);break;case s.NodeKind.TERNARY:this.visitTernaryExpression(i);break;case s.NodeKind.UNARYPOSTFIX:this.visitUnaryPostfixExpression(i);break;case s.NodeKind.UNARYPREFIX:this.visitUnaryPrefixExpression(i);break;case s.NodeKind.BLOCK:this.visitBlockStatement(i);break;case s.NodeKind.BREAK:this.visitBreakStatement(i);break;case s.NodeKind.CONTINUE:this.visitContinueStatement(i);break;case s.NodeKind.DO:this.visitDoStatement(i);break;case s.NodeKind.EMPTY:this.visitEmptyStatement(i);break;case s.NodeKind.EXPORT:this.visitExportStatement(i);break;case s.NodeKind.EXPORTDEFAULT:this.visitExportDefaultStatement(i);break;case s.NodeKind.EXPORTIMPORT:this.visitExportImportStatement(i);break;case s.NodeKind.EXPRESSION:this.visitExpressionStatement(i);break;case s.NodeKind.FOR:this.visitForStatement(i);break;case s.NodeKind.IF:this.visitIfStatement(i);break;case s.NodeKind.IMPORT:this.visitImportStatement(i);break;case s.NodeKind.RETURN:this.visitReturnStatement(i);break;case s.NodeKind.SWITCH:this.visitSwitchStatement(i);break;case s.NodeKind.THROW:this.visitThrowStatement(i);break;case s.NodeKind.TRY:this.visitTryStatement(i);break;case s.NodeKind.VARIABLE:this.visitVariableStatement(i);break;case s.NodeKind.WHILE:this.visitWhileStatement(i);break;case s.NodeKind.CLASSDECLARATION:this.visitClassDeclaration(i);break;case s.NodeKind.ENUMDECLARATION:this.visitEnumDeclaration(i);break;case s.NodeKind.ENUMVALUEDECLARATION:this.visitEnumValueDeclaration(i);break;case s.NodeKind.FIELDDECLARATION:this.visitFieldDeclaration(i);break;case s.NodeKind.FUNCTIONDECLARATION:this.visitFunctionDeclaration(i);break;case s.NodeKind.IMPORTDECLARATION:this.visitImportDeclaration(i);break;case s.NodeKind.INDEXSIGNATUREDECLARATION:this.visitIndexSignatureDeclaration(i);break;case s.NodeKind.INTERFACEDECLARATION:this.visitInterfaceDeclaration(i);break;case s.NodeKind.METHODDECLARATION:this.visitMethodDeclaration(i);break;case s.NodeKind.NAMESPACEDECLARATION:this.visitNamespaceDeclaration(i);break;case s.NodeKind.TYPEDECLARATION:this.visitTypeDeclaration(i);break;case s.NodeKind.VARIABLEDECLARATION:this.visitVariableDeclaration(i);break;case s.NodeKind.DECORATOR:this.visitDecoratorNode(i);break;case s.NodeKind.EXPORTMEMBER:this.visitExportMember(i);break;case s.NodeKind.PARAMETER:this.visitParameter(i);break;case s.NodeKind.SWITCHCASE:this.visitSwitchCase(i);break;default:assert(!1)}}visitSource(i){for(const e of i.statements)this.depth++,this.visit(e),this.depth--}visitTypeNode(i){}visitTypeName(i){this.visit(i.identifier),i.next&&this.visit(i.next)}visitNamedTypeNode(i){this.visit(i.name),this.visit(i.typeArguments)}visitFunctionTypeNode(i){for(let e of i.parameters)this.visit(e);this.visit(i.returnType)}visitTypeParameter(i){this.visit(i.name),i.extendsType&&this.visit(i.extendsType),i.defaultType&&this.visit(i.defaultType)}visitIdentifierExpression(i){}visitArrayLiteralExpression(i){i.elementExpressions.map(i=>{i&&this.visit(i)})}visitObjectLiteralExpression(i){if(i.values&&i.names){assert(i.values.length==i.names.length);for(let e=0;e<i.values.length;e++)this.visit(i.names[e]),this.visit(i.values[e])}}visitAssertionExpression(i){i.toType&&this.visit(i.toType),this.visit(i.expression)}visitBinaryExpression(i){this.visit(i.left),this.visit(i.right)}visitCallExpression(i){this.visit(i.expression),this.visit(i.typeArguments),this.visit(i.arguments)}visitClassExpression(i){this.visit(i.declaration)}visitCommaExpression(i){this.visit(i.expressions)}visitElementAccessExpression(i){this.visit(i.elementExpression),this.visit(i.expression)}visitFunctionExpression(i){this.visit(i.declaration)}visitLiteralExpression(i){}visitFloatLiteralExpression(i){}visitInstanceOfExpression(i){this.visit(i.expression),this.visit(i.isType)}visitIntegerLiteralExpression(i){}visitStringLiteral(i,e){}visitStringLiteralExpression(i){}visitRegexpLiteralExpression(i){}visitNewExpression(i){this.visit(i.expression),this.visit(i.typeArguments),this.visit(i.arguments)}visitParenthesizedExpression(i){this.visit(i.expression)}visitPropertyAccessExpression(i){this.visit(i.property),this.visit(i.expression)}visitTernaryExpression(i){this.visit(i.condition),this.visit(i.ifThen),this.visit(i.ifElse)}visitUnaryExpression(i){this.visit(i.operand)}visitUnaryPostfixExpression(i){this.visit(i.operand)}visitUnaryPrefixExpression(i){this.visit(i.operand)}visitSuperExpression(i){}visitFalseExpression(i){}visitTrueExpression(i){}visitThisExpression(i){}visitNullExperssion(i){}visitConstructorExpression(i){}visitNodeAndTerminate(i){}visitBlockStatement(i){this.depth++,this.visit(i.statements),this.depth--}visitBreakStatement(i){i.label&&this.visit(i.label)}visitContinueStatement(i){i.label&&this.visit(i.label)}visitClassDeclaration(i,e){this.visit(i.name),this.depth++,this.visit(i.decorators),assert(i.isGeneric?null!=i.typeParameters:null==i.typeParameters),i.isGeneric&&this.visit(i.typeParameters),i.extendsType&&this.visit(i.extendsType),this.visit(i.implementsTypes),this.visit(i.members),this.depth--}visitDoStatement(i){this.visit(i.condition),this.visit(i.statement)}visitEmptyStatement(i){}visitEnumDeclaration(i,e){this.visit(i.name),this.visit(i.decorators),this.visit(i.values)}visitEnumValueDeclaration(i){this.visit(i.name),i.initializer&&this.visit(i.initializer)}visitExportImportStatement(i){this.visit(i.name),this.visit(i.externalName)}visitExportMember(i){this.visit(i.localName),this.visit(i.exportedName)}visitExportStatement(i){i.path&&this.visit(i.path),this.visit(i.members)}visitExportDefaultStatement(i){this.visit(i.declaration)}visitExpressionStatement(i){this.visit(i.expression)}visitFieldDeclaration(i){this.visit(i.name),i.type&&this.visit(i.type),i.initializer&&this.visit(i.initializer),this.visit(i.decorators)}visitForStatement(i){i.initializer&&this.visit(i.initializer),i.condition&&this.visit(i.condition),i.incrementor&&this.visit(i.incrementor),this.visit(i.statement)}visitFunctionDeclaration(i,e){this.visit(i.name),this.visit(i.decorators),i.isGeneric&&this.visit(i.typeParameters),this.visit(i.signature),this.depth++,i.body&&this.visit(i.body),this.depth--}visitFunctionCommon(i){}visitIfStatement(i){this.visit(i.condition),this.visit(i.ifTrue),i.ifFalse&&this.visit(i.ifFalse)}visitImportDeclaration(i){this.visit(i.foreignName),this.visit(i.name),this.visit(i.decorators)}visitImportStatement(i){i.namespaceName&&this.visit(i.namespaceName),this.visit(i.declarations)}visitIndexSignatureDeclaration(i){}visitInterfaceDeclaration(i,e){this.visit(i.name),i.isGeneric&&this.visit(i.typeParameters),this.visit(i.implementsTypes),i.extendsType&&this.visit(i.extendsType),this.depth++,this.visit(i.members),this.depth--}visitMethodDeclaration(i){this.visit(i.name),i.isGeneric&&this.visit(i.typeParameters),this.visit(i.signature),this.visit(i.decorators),this.depth++,i.body&&this.visit(i.body),this.depth--}visitNamespaceDeclaration(i,e){this.visit(i.name),this.visit(i.decorators),this.visit(i.members)}visitReturnStatement(i){i.value&&this.visit(i.value)}visitSwitchCase(i){i.label&&this.visit(i.label),this.visit(i.statements)}visitSwitchStatement(i){this.visit(i.condition),this.depth++,this.visit(i.cases),this.depth--}visitThrowStatement(i){this.visit(i.value)}visitTryStatement(i){this.visit(i.statements),i.catchVariable&&this.visit(i.catchVariable),this.visit(i.catchStatements),this.visit(i.finallyStatements)}visitTypeDeclaration(i){this.visit(i.name),this.visit(i.decorators),this.visit(i.type),this.visit(i.typeParameters)}visitVariableDeclaration(i){this.visit(i.name),i.type&&this.visit(i.type),i.initializer&&this.visit(i.initializer)}visitVariableStatement(i){this.visit(i.decorators),this.visit(i.declarations)}visitWhileStatement(i){this.visit(i.condition),this.depth++,this.visit(i.statement),this.depth--}visitVoidStatement(i){}visitComment(i){}visitDecoratorNode(i){this.visit(i.name),this.visit(i.arguments)}visitParameter(i){this.visit(i.name),i.implicitFieldDeclaration&&this.visit(i.implicitFieldDeclaration),i.initializer&&this.visit(i.initializer),this.visit(i.type)}}e.BaseVisitor=r},function(i,e,t){"use strict";const s=t(4);i.exports=s.JSONTransformer},function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=t(0),n=t(6),r=t(9);class a extends s.Transform{get program(){return this.parser.program}afterParse(i){this.parser=i;const e=this.writeFile,t=this.baseDir;let s=n.JSONBindingsBuilder.nearFiles(i);a.isTest=s.map(i=>i.normalizedPath).some(i=>i.includes("spec")),s.forEach(s=>{let r=s.text.substr(0,s.text.indexOf("\n")).includes("out");i.donelog.delete(s.internalPath),i.seenlog.delete(s.internalPath),i.program.sources=i.program.sources.filter(i=>i!==s);let a=n.JSONBindingsBuilder.build(i,s);r&&e("out/"+s.normalizedPath,a,t),i.parseFile(a,(n.isEntry(s)?"":"./")+s.normalizedPath,n.isEntry(s))}),this.parser.parseFile('import "near-bindgen-as"',"nearFile",!0),a.isTest||r.TypeChecker.check(i)}afterCompile(i){a.isTest||r.TypeChecker.checkBinary(i)}}e.JSONTransformer=a,a.isTest=!1},function(i,e){e.Transform=function(){}},function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=t(0),n=t(7),r=t(2);function a(i){return i.text.includes("@nearfile")||h(i)}function o(i){return n.ASTBuilder.build(i)}function h(i){return(i.kind==s.NodeKind.SOURCE?i:i.range.source).sourceKind==s.SourceKind.USER_ENTRY}function d(i){return i.kind==s.NodeKind.CLASSDECLARATION}function p(i){return i.kind==s.NodeKind.FIELDDECLARATION}e.isEntry=h;class v extends r.BaseVisitor{constructor(){super(...arguments),this.sb=[],this.exportedClasses=new Map,this.wrappedFuncs=new Set}static build(i,e){return(new v).build(e)}static nearFiles(i){return i.program.sources.filter(a)}visitClassDeclaration(i){this.exportedClasses.has(o(i.name))||this.exportedClasses.set(o(i.name),i),super.visitClassDeclaration(i)}visitFunctionDeclaration(i){!h(i)||this.wrappedFuncs.has(o(i.name))||!i.is(s.CommonFlags.EXPORT)||0==function(i){return i.signature.parameters.length}(i)&&function(i){return"void"===o(i.signature.returnType)}(i)?super.visitFunctionDeclaration(i):(this.generateWrapperFunction(i),i.flags=i.flags^s.CommonFlags.EXPORT,this.wrappedFuncs.add(o(i.name)),super.visit(i))}generateWrapperFunction(i){let e=i.signature,t=e.parameters,s=e.returnType,n=o(s).split("|").map(i=>i.trim()).filter(i=>"null"!==i).join("|"),r=o(s).includes("null"),a=i.name.symbol;this.sb.push(`function __wrapper_${a}(): void {`),t.length>0&&this.sb.push("  const obj = getInput();"),"void"!==o(s)?this.sb.push(`  let result: ${o(s)} = ${a}(`):this.sb.push(`  ${a}(`),t.length>0&&(this.sb[this.sb.length-1]+=t.map(i=>l(i)).join(", ")),this.sb[this.sb.length-1]+=");","void"!==o(s)&&this.sb.push(`  const val = encode<${n}>(${r?`changetype<${n}>(result)`:"result"});\n  value_return(val.byteLength, <usize>val.buffer);`),this.sb.push(`}\nexport { __wrapper_${a} as ${a} }`)}typeName(i){if(!d(i))return n.ASTBuilder.build(i);let e=o((i=i).name);return i.isGeneric&&(e+="<"+i.typeParameters.map(o).join(", ")+">"),e}build(i){return this.sb=[],this.visit(i),i.statements.map(i=>{let e=n.ASTBuilder.build(i);if(d(i)){let t=i;if(e=e.slice(0,e.lastIndexOf("}")),t.members.filter(p).map(i=>i).some(i=>null==i.type))throw new Error("All Fields must have explict type declaration.");let s=this.typeName(t);e+=`\n  decode<V = Uint8Array>(buf: V): ${s} {\n    let json: JSON.Obj;\n    if (buf instanceof Uint8Array) {\n      json = JSON.parse(buf);\n    } else {\n      assert(buf instanceof JSON.Obj, "argument must be Uint8Array or Json Object");\n      json = <JSON.Obj> buf;\n    }\n    return this._decode(json);\n  }\n\n  static decode(buf: Uint8Array): ${s} {\n    return decode<${s}>(buf);\n  }\n\n  private _decode(obj: JSON.Obj): ${s} {\n    ${function(i){return i.members.filter(p).map(i=>{const e=o(i.name);return l(i,`this.${e} = obj.has("${e}") ? `)+`: this.${e};`})}(t).join("\n    ")}\n    return this;\n  }\n\n  _encode(name: string | null = "", _encoder: JSONEncoder | null = null): JSONEncoder {\n    let encoder = (_encoder == null ? new JSONEncoder() : _encoder)!;\n    encoder.pushObject(name);\n    ${function(i){return i.members.filter(p).map(i=>{let e=o(i.type),t=o(i.name);return`encode<${e}, JSONEncoder>(this.${t}, "${t}", encoder);`})}(t).join("\n    ")}\n    encoder.popObject();\n    return encoder;\n  }\n  encode(): Uint8Array {\n    return this._encode().serialize();\n  }\n\n  serialize(): Uint8Array {\n    return this.encode();\n  }\n\n  toJSON(): string {\n    return this._encode().toString();\n  }\n}`}return e}).concat(this.sb).join("\n")}}function l(i,e=""){return`${e}decode<${o(i.type)}, JSON.Obj>(obj, "${o(i.name)}")`}e.JSONBindingsBuilder=v},function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=t(0);class n{constructor(){this.sb=[],this.indentLevel=0}static build(i){var e=new n;return e.visitNode(i),e.finish()}visitNode(i){switch(i.kind){case s.NodeKind.SOURCE:this.visitSource(i);break;case s.NodeKind.NAMEDTYPE:this.visitNamedTypeNode(i);break;case s.NodeKind.FUNCTIONTYPE:this.visitFunctionTypeNode(i);break;case s.NodeKind.TYPEPARAMETER:this.visitTypeParameter(i);break;case s.NodeKind.FALSE:case s.NodeKind.NULL:case s.NodeKind.SUPER:case s.NodeKind.THIS:case s.NodeKind.TRUE:case s.NodeKind.CONSTRUCTOR:case s.NodeKind.IDENTIFIER:this.visitIdentifierExpression(i);break;case s.NodeKind.ASSERTION:this.visitAssertionExpression(i);break;case s.NodeKind.BINARY:this.visitBinaryExpression(i);break;case s.NodeKind.CALL:this.visitCallExpression(i);break;case s.NodeKind.CLASS:this.visitClassExpression(i);break;case s.NodeKind.COMMA:this.visitCommaExpression(i);break;case s.NodeKind.ELEMENTACCESS:this.visitElementAccessExpression(i);break;case s.NodeKind.FUNCTION:this.visitFunctionExpression(i);break;case s.NodeKind.INSTANCEOF:this.visitInstanceOfExpression(i);break;case s.NodeKind.LITERAL:this.visitLiteralExpression(i);break;case s.NodeKind.NEW:this.visitNewExpression(i);break;case s.NodeKind.PARENTHESIZED:this.visitParenthesizedExpression(i);break;case s.NodeKind.PROPERTYACCESS:this.visitPropertyAccessExpression(i);break;case s.NodeKind.TERNARY:this.visitTernaryExpression(i);break;case s.NodeKind.UNARYPOSTFIX:this.visitUnaryPostfixExpression(i);break;case s.NodeKind.UNARYPREFIX:this.visitUnaryPrefixExpression(i);break;case s.NodeKind.BLOCK:this.visitBlockStatement(i);break;case s.NodeKind.BREAK:this.visitBreakStatement(i);break;case s.NodeKind.CONTINUE:this.visitContinueStatement(i);break;case s.NodeKind.DO:this.visitDoStatement(i);break;case s.NodeKind.EMPTY:this.visitEmptyStatement(i);break;case s.NodeKind.EXPORT:this.visitExportStatement(i);break;case s.NodeKind.EXPORTDEFAULT:this.visitExportDefaultStatement(i);break;case s.NodeKind.EXPORTIMPORT:this.visitExportImportStatement(i);break;case s.NodeKind.EXPRESSION:this.visitExpressionStatement(i);break;case s.NodeKind.FOR:this.visitForStatement(i);break;case s.NodeKind.IF:this.visitIfStatement(i);break;case s.NodeKind.IMPORT:this.visitImportStatement(i);break;case s.NodeKind.RETURN:this.visitReturnStatement(i);break;case s.NodeKind.SWITCH:this.visitSwitchStatement(i);break;case s.NodeKind.THROW:this.visitThrowStatement(i);break;case s.NodeKind.TRY:this.visitTryStatement(i);break;case s.NodeKind.VARIABLE:this.visitVariableStatement(i);break;case s.NodeKind.WHILE:this.visitWhileStatement(i);break;case s.NodeKind.CLASSDECLARATION:this.visitClassDeclaration(i);break;case s.NodeKind.ENUMDECLARATION:this.visitEnumDeclaration(i);break;case s.NodeKind.ENUMVALUEDECLARATION:this.visitEnumValueDeclaration(i);break;case s.NodeKind.FIELDDECLARATION:this.visitFieldDeclaration(i);break;case s.NodeKind.FUNCTIONDECLARATION:this.visitFunctionDeclaration(i);break;case s.NodeKind.IMPORTDECLARATION:this.visitImportDeclaration(i);break;case s.NodeKind.INDEXSIGNATUREDECLARATION:this.visitIndexSignatureDeclaration(i);break;case s.NodeKind.INTERFACEDECLARATION:this.visitInterfaceDeclaration(i);break;case s.NodeKind.METHODDECLARATION:this.visitMethodDeclaration(i);break;case s.NodeKind.NAMESPACEDECLARATION:this.visitNamespaceDeclaration(i);break;case s.NodeKind.TYPEDECLARATION:this.visitTypeDeclaration(i);break;case s.NodeKind.VARIABLEDECLARATION:this.visitVariableDeclaration(i);break;case s.NodeKind.DECORATOR:this.serializeDecorator(i);break;case s.NodeKind.EXPORTMEMBER:this.visitExportMember(i);break;case s.NodeKind.PARAMETER:this.serializeParameter(i);break;case s.NodeKind.SWITCHCASE:this.visitSwitchCase(i);break;default:assert(!1)}}visitSource(i){var e=i.statements;for(let i=0,t=e.length;i<t;++i)this.visitNodeAndTerminate(e[i])}visitTypeNode(i){switch(i.kind){case s.NodeKind.NAMEDTYPE:this.visitNamedTypeNode(i);break;case s.NodeKind.FUNCTIONTYPE:this.visitFunctionTypeNode(i);break;default:assert(!1)}}visitTypeName(i){this.visitIdentifierExpression(i.identifier);for(var e=this.sb,t=i.next;t;)e.push("."),this.visitIdentifierExpression(t.identifier),t=t.next}visitNamedTypeNode(i){this.visitTypeName(i.name);var e=i.typeArguments;if(e){let t=e.length,s=this.sb;if(t){s.push("<"),this.visitTypeNode(e[0]);for(let i=1;i<t;++i)s.push(", "),this.visitTypeNode(e[i]);s.push(">")}i.isNullable&&s.push(" | null")}}visitFunctionTypeNode(i){var e=i.isNullable,t=this.sb;t.push(e?"((":"(");var s=i.explicitThisType;s&&(t.push("this: "),this.visitTypeNode(s));var n=i.parameters,r=n.length;if(r){s&&t.push(", "),this.serializeParameter(n[0]);for(let i=1;i<r;++i)t.push(", "),this.serializeParameter(n[i])}var a=i.returnType;a?(t.push(") => "),this.visitTypeNode(a)):t.push(") => void"),e&&t.push(") | null")}visitTypeParameter(i){this.visitIdentifierExpression(i.name);var e=i.extendsType;e&&(this.sb.push(" extends "),this.visitTypeNode(e));var t=i.defaultType;t&&(this.sb.push("="),this.visitTypeNode(t))}visitIdentifierExpression(i){i.isQuoted?this.visitStringLiteral(i.text):this.sb.push(i.text)}visitArrayLiteralExpression(i){var e=this.sb;e.push("[");var t=i.elementExpressions,s=t.length;if(s){t[0]&&this.visitNode(t[0]);for(let i=1;i<s;++i)e.push(", "),t[i]&&this.visitNode(t[i])}e.push("]")}visitObjectLiteralExpression(i){var e=this.sb,t=i.names,n=i.values,r=t.length;if(assert(r==n.length),r){e.push("{\n"),s.indent(e,++this.indentLevel),this.visitNode(t[0]),e.push(": "),this.visitNode(n[0]);for(let i=1;i<r;++i){e.push(",\n"),s.indent(e,this.indentLevel);let r=t[i],a=n[i];r===a?this.visitNode(r):(this.visitNode(r),e.push(": "),this.visitNode(a))}e.push("\n"),s.indent(e,--this.indentLevel),e.push("}")}else e.push("{}")}visitAssertionExpression(i){var e=this.sb;switch(i.assertionKind){case s.AssertionKind.PREFIX:e.push("<"),this.visitTypeNode(assert(i.toType)),e.push(">"),this.visitNode(i.expression);break;case s.AssertionKind.AS:this.visitNode(i.expression),e.push(" as "),this.visitTypeNode(assert(i.toType));break;case s.AssertionKind.NONNULL:this.visitNode(i.expression),e.push("!");break;default:assert(!1)}}visitBinaryExpression(i){var e=this.sb;this.visitNode(i.left),e.push(" "),e.push(s.operatorTokenToString(i.operator)),e.push(" "),this.visitNode(i.right)}visitCallExpression(i){var e=this.sb;this.visitNode(i.expression);var t=i.typeArguments;if(t){let i=t.length;if(i){e.push("<"),this.visitTypeNode(t[0]);for(let s=1;s<i;++s)e.push(", "),this.visitTypeNode(t[s]);e.push(">(")}}else e.push("(");var s=i.arguments,n=s.length;if(n){this.visitNode(s[0]);for(let i=1;i<n;++i)e.push(", "),this.visitNode(s[i])}e.push(")")}visitClassExpression(i){var e=i.declaration;this.visitClassDeclaration(e)}visitCommaExpression(i){var e=i.expressions,t=assert(e.length);this.visitNode(e[0]);var s=this.sb;for(let i=1;i<t;++i)s.push(","),this.visitNode(e[i])}visitElementAccessExpression(i){var e=this.sb;this.visitNode(i.expression),e.push("["),this.visitNode(i.elementExpression),e.push("]")}visitFunctionExpression(i){var e=i.declaration;e.arrowKind?assert(0==e.name.text.length):e.name.text.length?this.sb.push("function "):this.sb.push("function"),this.visitFunctionCommon(e)}visitLiteralExpression(i){switch(i.literalKind){case s.LiteralKind.FLOAT:this.visitFloatLiteralExpression(i);break;case s.LiteralKind.INTEGER:this.visitIntegerLiteralExpression(i);break;case s.LiteralKind.STRING:this.visitStringLiteralExpression(i);break;case s.LiteralKind.REGEXP:this.visitRegexpLiteralExpression(i);break;case s.LiteralKind.ARRAY:this.visitArrayLiteralExpression(i);break;case s.LiteralKind.OBJECT:this.visitObjectLiteralExpression(i);break;default:assert(!1)}}visitFloatLiteralExpression(i){this.sb.push(i.value.toString(10))}visitInstanceOfExpression(i){this.visitNode(i.expression),this.sb.push(" instanceof "),this.visitTypeNode(i.isType)}visitIntegerLiteralExpression(i){this.sb.push(i64_to_string(i.value))}visitStringLiteral(i,e=!1){var t=this.sb,s=0,n=e?"'":'"';t.push(n);var r=0;for(let n=i.length;r<n;)switch(i.charCodeAt(r)){case 0:r>s&&t.push(i.substring(s,s=r+1)),t.push("\\0"),s=++r;break;case 8:r>s&&t.push(i.substring(s,r)),s=++r,t.push("\\b");break;case 9:r>s&&t.push(i.substring(s,r)),s=++r,t.push("\\t");break;case 10:r>s&&t.push(i.substring(s,r)),s=++r,t.push("\\n");break;case 11:r>s&&t.push(i.substring(s,r)),s=++r,t.push("\\v");break;case 12:r>s&&t.push(i.substring(s,r)),s=++r,t.push("\\f");break;case 13:r>s&&t.push(i.substring(s,r)),t.push("\\r"),s=++r;break;case 34:e?++r:(r>s&&t.push(i.substring(s,r)),t.push('\\"'),s=++r);break;case 39:e?(r>s&&t.push(i.substring(s,r)),t.push("\\'"),s=++r):++r;break;case 92:r>s&&t.push(i.substring(s,r)),t.push("\\\\"),s=++r;break;default:++r}r>s&&t.push(i.substring(s,r)),t.push(n)}visitStringLiteralExpression(i){this.visitStringLiteral(i.value)}visitRegexpLiteralExpression(i){var e=this.sb;e.push("/"),e.push(i.pattern),e.push("/"),e.push(i.patternFlags)}visitNewExpression(i){this.sb.push("new "),this.visitCallExpression(i)}visitParenthesizedExpression(i){var e=this.sb;e.push("("),this.visitNode(i.expression),e.push(")")}visitPropertyAccessExpression(i){this.visitNode(i.expression),this.sb.push("."),this.visitIdentifierExpression(i.property)}visitTernaryExpression(i){var e=this.sb;this.visitNode(i.condition),e.push(" ? "),this.visitNode(i.ifThen),e.push(" : "),this.visitNode(i.ifElse)}visitUnaryExpression(i){switch(i.kind){case s.NodeKind.UNARYPOSTFIX:this.visitUnaryPostfixExpression(i);break;case s.NodeKind.UNARYPREFIX:this.visitUnaryPrefixExpression(i);break;default:assert(!1)}}visitUnaryPostfixExpression(i){this.visitNode(i.operand),this.sb.push(s.operatorTokenToString(i.operator))}visitUnaryPrefixExpression(i){this.sb.push(s.operatorTokenToString(i.operator)),this.visitNode(i.operand)}visitNodeAndTerminate(i){this.visitNode(i);var e=this.sb;if(e.length&&i.kind!=s.NodeKind.VARIABLE&&i.kind!=s.NodeKind.EXPRESSION){let i=e[e.length-1],t=i.length-1;t>=0&&(125==i.charCodeAt(t)||59==i.charCodeAt(t))?e.push("\n"):e.push(";\n")}else e.push(";\n")}visitBlockStatement(i){var e=this.sb,t=i.statements,n=t.length;if(n){e.push("{\n");let i=++this.indentLevel;for(let r=0;r<n;++r)s.indent(e,i),this.visitNodeAndTerminate(t[r]);s.indent(e,--this.indentLevel),e.push("}")}else e.push("{}")}visitBreakStatement(i){var e=i.label;e?(this.sb.push("break "),this.visitIdentifierExpression(e)):this.sb.push("break")}visitContinueStatement(i){var e=i.label;e?(this.sb.push("continue "),this.visitIdentifierExpression(e)):this.sb.push("continue")}visitClassDeclaration(i,e=!1){var t=i.decorators;if(t)for(let i=0,e=t.length;i<e;++i)this.serializeDecorator(t[i]);var n=this.sb;e?n.push("export default "):this.serializeExternalModifiers(i),i.is(s.CommonFlags.ABSTRACT)&&n.push("abstract "),i.name.text.length?(n.push("class "),this.visitIdentifierExpression(i.name)):n.push("class");var r=i.typeParameters;if(r&&r.length){n.push("<"),this.visitTypeParameter(r[0]);for(let i=1,e=r.length;i<e;++i)n.push(", "),this.visitTypeParameter(r[i]);n.push(">")}var a=i.extendsType;a&&(n.push(" extends "),this.visitTypeNode(a));var o=i.implementsTypes;if(o){let i=o.length;if(i){n.push(" implements "),this.visitTypeNode(o[0]);for(let e=1;e<i;++e)n.push(", "),this.visitTypeNode(o[e])}}var h=i.members;if(h.length){n.push(" {\n");let i=++this.indentLevel;for(let e=0,t=h.length;e<t;++e){let t=h[e];(t.kind!=s.NodeKind.FIELDDECLARATION||t.parameterIndex<0)&&(s.indent(n,i),this.visitNodeAndTerminate(t))}s.indent(n,--this.indentLevel),n.push("}")}else n.push(" {}")}visitDoStatement(i){var e=this.sb;e.push("do "),this.visitNode(i.statement),i.statement.kind==s.NodeKind.BLOCK?e.push(" while ("):(e.push(";\n"),s.indent(e,this.indentLevel),e.push("while (")),this.visitNode(i.condition),e.push(")")}visitEmptyStatement(i){}visitEnumDeclaration(i,e=!1){var t=this.sb;e?t.push("export default "):this.serializeExternalModifiers(i),i.is(s.CommonFlags.CONST)&&t.push("const "),t.push("enum "),this.visitIdentifierExpression(i.name);var n=i.values.length;if(n){t.push(" {\n");let e=++this.indentLevel;s.indent(t,e),this.visitEnumValueDeclaration(i.values[0]);for(let r=1;r<n;++r)t.push(",\n"),s.indent(t,e),this.visitEnumValueDeclaration(i.values[r]);t.push("\n"),s.indent(t,--this.indentLevel),t.push("}")}else t.push(" {}")}visitEnumValueDeclaration(i){this.visitIdentifierExpression(i.name),i.value&&(this.sb.push(" = "),this.visitNode(i.value))}visitExportImportStatement(i){var e=this.sb;e.push("export import "),this.visitIdentifierExpression(i.externalName),e.push(" = "),this.visitIdentifierExpression(i.name)}visitExportMember(i){this.visitIdentifierExpression(i.localName),i.exportedName.text!=i.localName.text&&(this.sb.push(" as "),this.visitIdentifierExpression(i.exportedName))}visitExportStatement(i){var e=this.sb;i.isDeclare&&e.push("declare ");var t=i.members;if(t&&t.length){let i=t.length;e.push("export {\n");let n=++this.indentLevel;s.indent(e,n),this.visitExportMember(t[0]);for(let r=1;r<i;++r)e.push(",\n"),s.indent(e,n),this.visitExportMember(t[r]);--this.indentLevel,e.push("\n}")}else e.push("export {}");var n=i.path;n&&(e.push(" from "),this.visitStringLiteralExpression(n)),e.push(";")}visitExportDefaultStatement(i){var e=i.declaration;switch(e.kind){case s.NodeKind.ENUMDECLARATION:this.visitEnumDeclaration(e,!0);break;case s.NodeKind.FUNCTIONDECLARATION:this.visitFunctionDeclaration(e,!0);break;case s.NodeKind.CLASSDECLARATION:this.visitClassDeclaration(e,!0);break;case s.NodeKind.INTERFACEDECLARATION:this.visitInterfaceDeclaration(e,!0);break;case s.NodeKind.NAMESPACEDECLARATION:this.visitNamespaceDeclaration(e,!0);break;default:assert(!1)}}visitExpressionStatement(i){this.visitNode(i.expression)}visitFieldDeclaration(i){var e=i.decorators;if(e)for(let i=0,t=e.length;i<t;++i)this.serializeDecorator(e[i]);this.serializeAccessModifiers(i),this.visitIdentifierExpression(i.name);var t=this.sb;i.flags&s.CommonFlags.DEFINITE_ASSIGNMENT&&t.push("!");var n=i.type;n&&(t.push(": "),this.visitTypeNode(n));var r=i.initializer;r&&(t.push(" = "),this.visitNode(r))}visitForStatement(i){var e=this.sb;e.push("for (");var t=i.initializer;t&&this.visitNode(t);var s=i.condition;s?(e.push("; "),this.visitNode(s)):e.push(";");var n=i.incrementor;n?(e.push("; "),this.visitNode(n)):e.push(";"),e.push(") "),this.visitNode(i.statement)}visitFunctionDeclaration(i,e=!1){var t=this.sb,s=i.decorators;if(s)for(let i=0,e=s.length;i<e;++i)this.serializeDecorator(s[i]);e?t.push("export default "):(this.serializeExternalModifiers(i),this.serializeAccessModifiers(i)),i.name.text.length?t.push("function "):t.push("function"),this.visitFunctionCommon(i)}visitFunctionCommon(i){var e=this.sb;this.visitIdentifierExpression(i.name);var t=i.signature,n=i.typeParameters;if(n){let i=n.length;if(i){e.push("<"),this.visitTypeParameter(n[0]);for(let t=1;t<i;++t)e.push(", "),this.visitTypeParameter(n[t]);e.push(">")}}if(2==i.arrowKind){let i=t.parameters;assert(1==i.length),assert(!t.explicitThisType),this.serializeParameter(i[0])}else{e.push("(");let i=t.parameters,s=i.length,n=t.explicitThisType;if(n&&(e.push("this: "),this.visitTypeNode(n)),s){n&&e.push(", "),this.serializeParameter(i[0]);for(let t=1;t<s;++t)e.push(", "),this.serializeParameter(i[t])}}var r=i.body,a=t.returnType;i.arrowKind?r?(2==i.arrowKind?assert(s.isTypeOmitted(a)):s.isTypeOmitted(a)?e.push(")"):(e.push("): "),this.visitTypeNode(a)),e.push(" => "),this.visitNode(r)):(assert(!s.isTypeOmitted(a)),e.push(" => "),this.visitTypeNode(a)):(s.isTypeOmitted(a)||i.isAny(s.CommonFlags.CONSTRUCTOR|s.CommonFlags.SET)?e.push(")"):(e.push("): "),this.visitTypeNode(a)),r&&(e.push(" "),this.visitNode(r)))}visitIfStatement(i){var e=this.sb;e.push("if ("),this.visitNode(i.condition),e.push(") ");var t=i.ifTrue;this.visitNode(t),t.kind!=s.NodeKind.BLOCK&&e.push(";\n");var n=i.ifFalse;n&&(t.kind==s.NodeKind.BLOCK?e.push(" else "):e.push("else "),this.visitNode(n))}visitImportDeclaration(i){var e=i.foreignName,t=i.name;this.visitIdentifierExpression(e),e.text!=t.text&&(this.sb.push(" as "),this.visitIdentifierExpression(t))}visitImportStatement(i){var e=this.sb;e.push("import ");var t=i.declarations,n=i.namespaceName;if(t){let i=t.length;if(i){e.push("{\n");let n=++this.indentLevel;s.indent(e,n),this.visitImportDeclaration(t[0]);for(let r=1;r<i;++r)e.push(",\n"),s.indent(e,n),this.visitImportDeclaration(t[r]);--this.indentLevel,e.push("\n} from ")}else e.push("{} from ")}else n&&(e.push("* as "),this.visitIdentifierExpression(n),e.push(" from "));this.visitStringLiteralExpression(i.path)}visitIndexSignatureDeclaration(i){var e=this.sb;e.push("[key: "),this.visitTypeNode(i.keyType),e.push("]: "),this.visitTypeNode(i.valueType)}visitInterfaceDeclaration(i,e=!1){var t=i.decorators;if(t)for(let i=0,e=t.length;i<e;++i)this.serializeDecorator(t[i]);var n=this.sb;e?n.push("export default "):this.serializeExternalModifiers(i),n.push("interface "),this.visitIdentifierExpression(i.name);var r=i.typeParameters;if(r&&r.length){n.push("<"),this.visitTypeParameter(r[0]);for(let i=1,e=r.length;i<e;++i)n.push(", "),this.visitTypeParameter(r[i]);n.push(">")}var a=i.extendsType;a&&(n.push(" extends "),this.visitTypeNode(a)),n.push(" {\n");var o=++this.indentLevel,h=i.members;for(let i=0,e=h.length;i<e;++i)s.indent(n,o),this.visitNodeAndTerminate(h[i]);--this.indentLevel,n.push("}")}visitMethodDeclaration(i){var e=i.decorators;if(e)for(let i=0,t=e.length;i<t;++i)this.serializeDecorator(e[i]);this.serializeAccessModifiers(i),i.is(s.CommonFlags.GET)?this.sb.push("get "):i.is(s.CommonFlags.SET)&&this.sb.push("set "),this.visitFunctionCommon(i)}visitNamespaceDeclaration(i,e=!1){var t=i.decorators;if(t)for(let i=0,e=t.length;i<e;++i)this.serializeDecorator(t[i]);var n=this.sb;e?n.push("export default "):this.serializeExternalModifiers(i),n.push("namespace "),this.visitIdentifierExpression(i.name);var r=i.members;if(r.length){n.push(" {\n");let i=++this.indentLevel;for(let e=0,t=r.length;e<t;++e)s.indent(n,i),this.visitNodeAndTerminate(r[e]);s.indent(n,--this.indentLevel),n.push("}")}else n.push(" {}")}visitReturnStatement(i){var e=i.value;e?(this.sb.push("return "),this.visitNode(e)):this.sb.push("return")}visitSwitchCase(i){var e=this.sb,t=i.label;t?(e.push("case "),this.visitNode(t),e.push(":\n")):e.push("default:\n");var n=i.statements,r=n.length;if(r){let i=++this.indentLevel;s.indent(e,i),this.visitNodeAndTerminate(n[0]);for(let t=1;t<r;++t)s.indent(e,i),this.visitNodeAndTerminate(n[t]);--this.indentLevel}}visitSwitchStatement(i){var e=this.sb;e.push("switch ("),this.visitNode(i.condition),e.push(") {\n");var t=++this.indentLevel,n=i.cases;for(let i=0,r=n.length;i<r;++i)s.indent(e,t),this.visitSwitchCase(n[i]),e.push("\n");--this.indentLevel,e.push("}")}visitThrowStatement(i){this.sb.push("throw "),this.visitNode(i.value)}visitTryStatement(i){var e=this.sb;e.push("try {\n");var t=++this.indentLevel,n=i.statements;for(let i=0,r=n.length;i<r;++i)s.indent(e,t),this.visitNodeAndTerminate(n[i]);var r=i.catchVariable;if(r){s.indent(e,t-1),e.push("} catch ("),this.visitIdentifierExpression(r),e.push(") {\n");let n=i.catchStatements;if(n)for(let i=0,r=n.length;i<r;++i)s.indent(e,t),this.visitNodeAndTerminate(n[i])}var a=i.finallyStatements;if(a){s.indent(e,t-1),e.push("} finally {\n");for(let i=0,n=a.length;i<n;++i)s.indent(e,t),this.visitNodeAndTerminate(a[i])}s.indent(e,t-1),e.push("}")}visitTypeDeclaration(i){var e=i.decorators;if(e)for(let i=0,t=e.length;i<t;++i)this.serializeDecorator(e[i]);var t=this.sb;this.serializeExternalModifiers(i),t.push("type "),this.visitIdentifierExpression(i.name);var s=i.typeParameters;if(s){let i=s.length;if(i){t.push("<");for(let e=0;e<i;++e)this.visitTypeParameter(s[e]);t.push(">")}}t.push(" = "),this.visitTypeNode(i.type)}visitVariableDeclaration(i){this.visitIdentifierExpression(i.name);var e=i.type,t=this.sb;i.flags&s.CommonFlags.DEFINITE_ASSIGNMENT&&t.push("!"),e&&(t.push(": "),this.visitTypeNode(e));var n=i.initializer;n&&(t.push(" = "),this.visitNode(n))}visitVariableStatement(i){var e=i.decorators;if(e)for(let i=0,t=e.length;i<t;++i)this.serializeDecorator(e[i]);var t=this.sb,n=i.declarations,r=assert(n.length),a=n[0];this.serializeExternalModifiers(a),t.push(a.is(s.CommonFlags.CONST)?"const ":a.is(s.CommonFlags.LET)?"let ":"var "),this.visitVariableDeclaration(i.declarations[0]);for(let e=1;e<r;++e)t.push(", "),this.visitVariableDeclaration(i.declarations[e])}visitWhileStatement(i){var e=this.sb;e.push("while ("),this.visitNode(i.condition),i.statement.kind==s.NodeKind.EMPTY?e.push(")"):(e.push(") "),this.visitNode(i.statement))}serializeDecorator(i){var e=this.sb;e.push("@"),this.visitNode(i.name);var t=i.arguments;if(t){e.push("(");let i=t.length;if(i){this.visitNode(t[0]);for(let s=1;s<i;++s)e.push(", "),this.visitNode(t[s])}e.push(")\n")}else e.push("\n");s.indent(e,this.indentLevel)}serializeParameter(i){var e=this.sb,t=i.parameterKind,n=i.implicitFieldDeclaration;n&&this.serializeAccessModifiers(n),t==s.ParameterKind.REST&&e.push("..."),this.visitIdentifierExpression(i.name);var r=i.type,a=i.initializer;r&&(t!=s.ParameterKind.OPTIONAL||a||e.push("?"),s.isTypeOmitted(r)||(e.push(": "),this.visitTypeNode(r))),a&&(e.push(" = "),this.visitNode(a))}serializeExternalModifiers(i){var e=this.sb;i.is(s.CommonFlags.EXPORT)?e.push("export "):i.is(s.CommonFlags.IMPORT)?e.push("import "):i.is(s.CommonFlags.DECLARE)&&e.push("declare ")}serializeAccessModifiers(i){var e=this.sb;i.is(s.CommonFlags.PUBLIC)?e.push("public "):i.is(s.CommonFlags.PRIVATE)?e.push("private "):i.is(s.CommonFlags.PROTECTED)&&e.push("protected "),i.is(s.CommonFlags.STATIC)?e.push("static "):i.is(s.CommonFlags.ABSTRACT)&&e.push("abstract "),i.is(s.CommonFlags.READONLY)&&e.push("readonly ")}finish(){var i=this.sb.join("");return this.sb=[],i}}e.ASTBuilder=n},function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.AbstractVisitor=class{visit(i){var e;if(null!=i)if(i instanceof Array)i.map(i=>{this.visit(i)});else if(i instanceof Map)for(let[e,t]of i.entries())this.visit(t);else if(null!=(e=i)&&"function"==typeof e[Symbol.iterator])for(let e of i)this.visit(e);else this._visit(i)}}},function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=t(2),n=["builtin",".spec","dataview","date","math","number","string","typedarray","bindings/Date","bindings/Math"];class r extends s.BaseVisitor{check(i){i.text.substring(0,i.text.indexOf("\n")).includes("ignore")||n.some(e=>i.normalizedPath.includes(e))||this.visit(i)}static check(i){const e=new r;for(let t=0;t<i.program.sources.length;t++)e.check(i.program.sources[t])}visitTypeName(i){/f32|f64/.test(i.identifier.text)&&r.floatsFound.push(i.range.source.normalizedPath+" line: "+i.range.line+" "+i.range.source.text.split("\n")[i.range.line-1])}static checkBinary(i){const e=i.toText();if(/f32|f64/.test(e))throw new Error("Floating point numbers are not allowed in smart contracts: Check\n"+r.floatsFound.join("\n"))}}e.TypeChecker=r,r.floatsFound=[]}])}));