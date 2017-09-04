

import * as antlr4 from "antlr4";

import * as Tree from "antlr4/tree/Tree";

import ArrayInitLexer from './languageDefinition/ArrayInitLexer';
import ArrayInitParser from './languageDefinition/ArrayInitParser';
import ArrayInitListener from './languageDefinition/ArrayInitListener';

var input = "{1, 2, 3}";
var chars = new antlr4.InputStream(input);
var lexer = new ArrayInitLexer.ArrayInitLexer(chars);
var tokens = new antlr4.CommonTokenStream(lexer);

var parser = new ArrayInitParser.ArrayInitParser(tokens);
parser.buildParseTrees = true;
var tree = parser.init();

var ShortToUnicodeString = function () {

    this.hex = "";
};

ShortToUnicodeString.prototype = Object.create(ArrayInitListener.ArrayInitListener.prototype);

ShortToUnicodeString.prototype.enterInit = function (ctx) {

    this.hex += "\"";
};

ShortToUnicodeString.prototype.exitInit = function (ctx) {

    this.hex += "\"";
};

ShortToUnicodeString.prototype.enterValue = function (val) {

    var hexVal = "\\u0000";
    var hexUnformatted = (val.INT().getText() * 1).toString(16);

    this.hex += hexVal.substring(0, hexVal.length - hexUnformatted.length) + hexUnformatted;
};

var ref = new ShortToUnicodeString();
new Tree.ParseTreeWalker().walk(ref, tree);

console.log(ref.hex);

