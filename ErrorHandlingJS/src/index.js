

import * as antlr4 from "antlr4";
import * as Tree from "antlr4/tree/Tree";
import * as Error from "antlr4/error/ErrorListener";

import ArrayInitLexer from './languageDefinition/ArrayInitLexer';
import ArrayInitParser from './languageDefinition/ArrayInitParser';
import ArrayInitListener from './languageDefinition/ArrayInitListener';

var input = "{1, 2, fkjdfsdjf}";

var chars = new antlr4.InputStream(input);
var lexer = new ArrayInitLexer.ArrayInitLexer(chars);
var tokens = new antlr4.CommonTokenStream(lexer);
var parser = new ArrayInitParser.ArrayInitParser(tokens);

var VerboseListener = function() {};
VerboseListener.prototype = Object.create(Error.ErrorListener.prototype);


VerboseListener.prototype.syntaxError = function (recognizer, offendingSymbol, line, charPositionInLine, msg, e) {

    console.log("Offending Symbol: " + offendingSymbol);
    console.log(" charPositionInLine " + charPositionInLine);
    console.log("line " + line);
    console.log("Msg: " + msg);
};

debugger;
parser.removeErrorListeners();
parser.addErrorListener(new VerboseListener());

var tree = parser.init();

console.log("Done Done Done");