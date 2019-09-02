import * as React from "react";
import * as Draft from "draft-js";

export const variableNames = [];
const KEYWORD_REGEX = /\b(def|end|if|do|elsif|else|while|for|return|puts|print|p)\b/g;
const OBJECT_REGEX = /\b([a-z]|[A-Z])+\./g;
const METHOD_REGEX = /\.([a-z]|[A-Z])+\b/g;
const FUNCTION_REGEX = /(\b|\.)([a-z]|[A-Z])+\(/g;
const STRING_REGEX = /"([a-z]|[A-Z])+"/g;
const WALL_REGEX = /\|([a-z]|[A-Z])+\|/g;
const VARIABLE_REGEX = /\b(\_|[a-z]|[0-9]|[A-Z])+( |)\= /g;

const KeywordSpan = props => {
  return <span style={{ color: "purple" }}>{props.children}</span>;
};

const ObjectSpan = props => {
  return <span style={{ color: "black" }}>{props.children}</span>;
};

const MethodSpan = props => {
  return <span style={{ color: "red" }}>{props.children}</span>;
};

const FunctionSpan = props => {
  return <span style={{ color: "blue" }}>{props.children}</span>;
};

const StringSpan = props => {
  return <span style={{ color: "green" }}>{props.children}</span>;
};

const WallSpan = props => {
  return <span style={{ color: "green" }}>{props.children}</span>;
};

const VariableSpan = props => {
  const variable = props.decoratedText.split(" ")[0];
  if (!variableNames.includes(variable)) variableNames.push(variable);
  return <span style={{ color: "black" }}>{props.children}</span>;
};

function keywordStrategy(contentBlock, callback, contentState) {
  findWithRegex(KEYWORD_REGEX, contentBlock, callback);
}

function objectStrategy(contentBlock, callback, contentState) {
  findWithRegex(OBJECT_REGEX, contentBlock, callback, "subtract");
}

function methodStrategy(contentBlock, callback, contentState) {
  findWithRegex(METHOD_REGEX, contentBlock, callback, "add");
}

function functionStrategy(contentBlock, callback, contentState) {
  findWithRegex(FUNCTION_REGEX, contentBlock, callback, "function");
}

function stringStrategy(contentBlock, callback, contentState) {
  findWithRegex(STRING_REGEX, contentBlock, callback, "");
}

function wallStrategy(contentBlock, callback, contentState) {
  findWithRegex(WALL_REGEX, contentBlock, callback, "");
}

function variableStrategy(contentBlock, callback, contentState) {
  findWithRegex(VARIABLE_REGEX, contentBlock, callback, "");
}

function findWithRegex(regex, contentBlock, callback, message = "") {
  const text = contentBlock.getText();
  let matchArr, start;
  while ((matchArr = regex.exec(text)) !== null) {
    start = matchArr.index;
    if (message === "add") {
      callback(start + 1, start + 1 + matchArr[0].length - 1);
    } else if (message === "subtract") {
      callback(start, start + matchArr[0].length - 1);
    } else if (message === "function") {
      if (matchArr[0] && matchArr[0][0] && matchArr[0][0] === ".") {
        ++start;
        callback(start, start + matchArr[0].length - 2);
      } else {
        callback(start, start + matchArr[0].length - 1);
      }
    } else {
      callback(start, start + matchArr[0].length);
    }
  }
}

export const compositeDecorator = new Draft.CompositeDecorator([
  {
    strategy: keywordStrategy,
    component: KeywordSpan
  },
  {
    strategy: functionStrategy,
    component: FunctionSpan
  },
  {
    strategy: methodStrategy,
    component: MethodSpan
  },
  {
    strategy: objectStrategy,
    component: ObjectSpan
  },
  {
    strategy: stringStrategy,
    component: StringSpan
  },
  {
    strategy: wallStrategy,
    component: WallSpan
  },
  {
    strategy: variableStrategy,
    component: VariableSpan
  }
]);
