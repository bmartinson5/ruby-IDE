(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,n){e.exports=n(239)},105:function(e,t,n){},211:function(e,t,n){},212:function(e,t,n){},217:function(e,t,n){},218:function(e,t,n){},219:function(e,t,n){},239:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(28),o=n.n(s),i=(n(105),n(7)),l=n(6),c=n(10),d=n(8),u=n(9),p=(n(43),n(3)),h=n(32),y=n.n(h),m=(n(211),function(e){function t(e){return Object(i.a)(this,t),Object(c.a)(this,Object(d.a)(t).call(this,e))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"navbar-items"},r.a.createElement("div",{className:"logo"},"Ruby Runner"),r.a.createElement("div",{className:"navbar-item"}),r.a.createElement("div",{className:"navbar-item"})))}}]),t}(a.Component)),g=(n(212),["two_sum","check_palindrome","check_anagram","reverse"]),f=["Two Sum","Palindromes","Anagrams","Reverse Array"],b=n(249),v=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).handleProblemSelection=function(e){n.setState({clickedProblem:e}),n.props.callback(e)},n.state={problems:f,clickedProblem:0},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"problems-list"},r.a.createElement(b.a,{container:!0},r.a.createElement(b.a,{item:!0,xs:!0}),r.a.createElement(b.a,{item:!0,xs:8},r.a.createElement("div",{className:"problem1 header"},r.a.createElement(b.a,{container:!0},r.a.createElement(b.a,{item:!0,xs:3},"Title"),r.a.createElement(b.a,{item:!0,xs:3},"Difficulty"),r.a.createElement(b.a,{item:!0,xs:3},"Something"))),this.state.problems.map(function(t,n){return r.a.createElement("a",{onClick:function(){return e.props.loadProblem(n)}},r.a.createElement("div",{className:"problem".concat(n%2)},r.a.createElement(b.a,{container:!0},r.a.createElement(b.a,{item:!0,xs:3},t),r.a.createElement(b.a,{item:!0,xs:3},t),r.a.createElement(b.a,{item:!0,xs:3},t))))})),r.a.createElement(b.a,{item:!0,xs:!0})))}}]),t}(a.Component),k=(n(217),n(27)),x=(n(218),[]),S=/\b(def|end|if|do|elsif|else|while|for|return|puts|print|p)\b/g,E=/\b([a-z]|[A-Z])+\./g,R=/\.([a-z]|[A-Z])+\b/g,C=/(\b|\.)([a-z]|[A-Z]|\_)+\(/g,w=/"([a-z]|[A-Z])+"/g,O=/\|([a-z]|[A-Z])+\|/g,N=/\b(\_|[a-z]|[0-9]|[A-Z])+( |)\= /g,P=/#.*/g;function j(e,t,n){for(var a,r,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=t.getText();null!==(a=e.exec(o));)r=a.index,"add"===s?n(r+1,r+1+a[0].length-1):"subtract"===s?n(r,r+a[0].length-1):"function"===s?a[0]&&a[0][0]&&"."===a[0][0]?n(++r,r+a[0].length-2):n(r,r+a[0].length-1):n(r,r+a[0].length)}var I=new p.CompositeDecorator([{strategy:function(e,t,n){j(P,e,t,"")},component:function(e){return a.createElement("span",{style:{color:"teal"}},e.children)}},{strategy:function(e,t,n){j(S,e,t)},component:function(e){return a.createElement("span",{style:{color:"purple"}},e.children)}},{strategy:function(e,t,n){j(C,e,t,"function")},component:function(e){return a.createElement("span",{style:{color:"blue"}},e.children)}},{strategy:function(e,t,n){j(R,e,t,"add")},component:function(e){return a.createElement("span",{style:{color:"red"}},e.children)}},{strategy:function(e,t,n){j(E,e,t,"subtract")},component:function(e){return a.createElement("span",{style:{color:"black"}},e.children)}},{strategy:function(e,t,n){j(w,e,t,"")},component:function(e){return a.createElement("span",{style:{color:"green"}},e.children)}},{strategy:function(e,t,n){j(O,e,t,"")},component:function(e){return a.createElement("span",{style:{color:"green"}},e.children)}},{strategy:function(e,t,n){j(N,e,t,"")},component:function(e){var t=e.decoratedText.split(" ")[0];return x.includes(t)||x.push(t),a.createElement("span",{style:{color:"black"}},e.children)}}]),T=[{entityMap:{},blocks:[{key:"5h45a",text:"# @param {Interger Array} arr, {Integer} target",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45b",text:"# @return {Integer Array}",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45c",text:"def two_sum(arr, target)",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45d",text:"    arr.each_with_index do |ele, i|",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45e",text:"        (i+1..arr.length-1).each do |x|",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45f",text:"            if arr[i]+arr[x] == target",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45g",text:"                return [i, x]",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45h",text:"            end",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45i",text:"        end",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45j",text:"    end",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45k",text:"end",type:"unstyled",depth:0,entityRanges:[],data:{}}]},{entityMap:{},blocks:[{key:"5h45a",text:"# @param {String} word",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45b",text:"# @return {Boolean}",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45l",text:"def check_palindrome(word)",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45r",text:"    word = word.downcase",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45x",text:"    word = word.gsub(/[^0-9a-z]/i, '')",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h46x",text:"    return word == word.reverse",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45t",text:"end",type:"unstyled",depth:0,entityRanges:[],data:{}}]},{entityMap:{},blocks:[{key:"5h45a",text:"# @param {String} mixedWord, {String} word",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45b",text:"# @return {Boolean}",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45c",text:"def check_anagram(mixedWord, word)",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45d",text:"    count1 = count_letters(word)",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45e",text:"    count2 = count_letters(mixedWord)",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45f",text:"    return count1 == count2",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45p",text:"end",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45o",text:"    ",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45h",text:"def count_letters(word)",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45i",text:"    count = Hash.new(0)",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45j",text:"    word.split('').each do |letter|",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45k",text:"        count[:letter] += 1",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45l",text:"    end",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45m",text:"    count",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45n",text:"end",type:"unstyled",depth:0,entityRanges:[],data:{}}]},{entityMap:{},blocks:[{key:"5h45a",text:"# @param {Interger array []} arr",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45b",text:"# @return {Integer array []}",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45c",text:"def reverse(arr)",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45d",text:"    reversed_array = []",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45e",text:"    arr.each_with_index do |ele, i|",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45f",text:"        reversed_array.unshift(ele)",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45g",text:"    end",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45h",text:"    reversed_array",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45i",text:"end",type:"unstyled",depth:0,entityRanges:[],data:{}}]}],A=(p.KeyBindingUtil.hasCommandModifier,function(e){var t=p.convertFromRaw(e);return p.EditorState.createWithContent(t,I)}),_=function(e){function t(e){var n;Object(i.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).saveEditorState=function(){var e=n.state.editorState.getCurrentContent(),t=p.convertToRaw(e);n.props.handleSaveEditor(t,n.state.problemIndex)},n.setLineNums=function(){var e=n.state.editorState.getCurrentContent().getBlocksAsArray().length;n.setState({lineNums:e})},n.contentState=function(){var e=n.state.editorState.getCurrentContent(),t=p.convertToRaw(e);JSON.stringify(t,null,1),e.getPlainText()},n.getNewSelection=function(e,t){return n.state.editorState.getSelection().merge({anchorOffset:e,focusOffset:t})},n.setSelection=function(e,t){var a=n.state.editorState,r=a.getSelection().merge({anchorOffset:e,focusOffset:t}),s=p.EditorState.forceSelection(a,r);n.editorStateChanged(s)},n.reverseTab=function(e,t){var a=n.state.editorState,r=a.getSelection().getStartOffset(),s=r-e,o=s-t<0?0:s-t,i=o+e,l=n.getNewSelection(s,r),c=n.getNewSelection(o,i),d=p.Modifier.moveText(a.getCurrentContent(),l,c);n.setState({editorState:p.EditorState.push(a,d,"move-text")})},n.checkForEndKey=function(){var e=n.getCurrentLine(),t=n.getLineText(e).replace(/\s/g,"");return"end"===t?3:"elsif"===t?5:"else"===t?4:0},n.getCurrentWord=function(){var e;return(e=n.getLineText(n.getCurrentLine()))&&(e=e.split(" ").pop()),e},n.editorStateChanged=function(e){n.setState({editorState:e},function(){n.checkForKeys(),n.setLineNums(),n.contentState(),n.checkPossibleSuggestions()})},n.splitCurrentBlock=function(){var e=n.state.editorState,t=p.Modifier.splitBlock(e.getCurrentContent(),e.getSelection());n.setState({editorState:p.EditorState.push(e,t,"insert-characters")})},n.handleReturn=function(e,t){var a=n.getCurrentLine();n.setState({lastWasReturn:!1});var r=n.findScopeIndentationOfLine(a),s=n.state.editorState,o=p.Modifier.replaceText(s.getCurrentContent(),s.getSelection(),r);n.setState({editorState:p.EditorState.push(s,o,"insert-characters")})},n.handleTab=function(e){var t=n.state.possibleSuggestions;e&&e.preventDefault();var a,r=n.state.editorState;if(t.length){var s=n.getCurrentWord(),o=t[0],i=o.substring(s.length,o.length);a=p.Modifier.replaceText(r.getCurrentContent(),r.getSelection(),i)}else a=p.Modifier.replaceText(r.getCurrentContent(),r.getSelection(),"    ");n.setState({editorState:p.EditorState.push(r,a,"insert-characters")})},n.getCurrentLine=function(){var e=n.state.editorState.getSelection().getStartKey();return n.state.editorState.getCurrentContent().getBlockMap().keySeq().findIndex(function(t){return t===e})},n.findScopeIndentationOfLine=function(e){for(var t="",a=0;a<e;++a){var r=n.getLineText(a);n.lineStartedScope(r)&&(t+="    "),n.lineEndedScope(r)&&t.length>0&&(t=t.substring(0,t.length-4))}return t},n.lineStartedScope=function(e){return null!==e.match(/\b(def|if|while|for|do)\b/g)},n.lineEndedScope=function(e){return null!==e.match(/\b(end)\b/g)},n.getLineText=function(e){var t=n.state.editorState.getCurrentContent().getBlocksAsArray()[e];return t?t.text:null},n.checkForKeys=function(){if(n.state.lastWasReturn)n.handleReturn();else if(n.state.lastWasD){n.setState({lastWasD:!1});var e=n.checkForEndKey();0!==e&&n.unIndentLine(n.getCurrentLine(),e)}},n.unIndentLine=function(e,t){var a=n.findScopeIndentationOfLine(e),r=a.length-4<0?0:a.length-4,s=n.getLineText(e).search(/\S/);n.reverseTab(t,s-r)},n.checkPossibleSuggestions=function(){var e=n.getCurrentWord();if(""!==e){var t=[];x.forEach(function(n){n.includes(e)&&t.push(n)}),n.setState({possibleSuggestions:t})}},n.hideShowSolution=function(e){var t,a;e?(a=T[n.props.problemIndex],t=A(a)):(a=n.props.default_editors[n.props.problemIndex],t=A(a)),n.setState({editorState:t,lineNums:a.blocks.length})},n.toggleSolution=function(){var e=!n.state.solutionShow;n.setState({solutionShow:e},n.hideShowSolution(e))},n.keyBindingFn=n.keyBindingFn.bind(Object(k.a)(n));var a=n.props.default_editors[n.props.problemIndex],r=A(a);return n.state={editorState:r,lineNums:a.blocks.length,text:"",lastWasReturn:!1,lastWasD:!0,possibleSuggestions:x,problemIndex:n.props.problemIndex,solutionShow:!1},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e){if(e.problemIndex!==this.props.problemIndex){this.saveEditorState();var t=this.props.default_editors[this.props.problemIndex],n=A(t);this.state.solutionShow&&this.hideShowSolution(!1),this.setState({solutionShow:!1,editorState:n,lineNums:t.blocks.length,problemIndex:this.props.problemIndex})}}},{key:"componentDidUnmount",value:function(){this.saveEditorState()}},{key:"keyBindingFn",value:function(e){return 68!==e.keyCode&&70!==e.keyCode&&69!==e.keyCode||this.setState({lastWasD:!0}),13===e.keyCode&&this.setState({lastWasReturn:!0}),p.getDefaultKeyBinding(e)}},{key:"render",value:function(){for(var e=this,t=[],n=(this.state.possibleSuggestions,1);n<=this.state.lineNums;++n)t.push(a.createElement("div",{className:"line-number",key:n.toString()},n.toString()));return a.createElement("div",{className:"editor"},a.createElement("div",{className:"editor-buttons"},a.createElement("button",{className:"run-button",onClick:function(){return e.props.handleRunCode(e.state.editorState.getCurrentContent())}},"Run Code"),a.createElement("button",{className:"solution-button",onClick:function(){return e.toggleSolution()}},this.state.solutionShow?a.createElement("span",null,"Hide Solution"):a.createElement("span",null,"Show Solution"))),a.createElement("div",{className:"editor-box"},a.createElement("div",{className:"side-numbers"},t),a.createElement(p.Editor,{editorState:this.state.editorState,onChange:this.editorStateChanged,onTab:this.handleTab,keyBindingFn:this.keyBindingFn})))}}]),t}(a.Component),L=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).handleClick=function(){n.props.callback(n.props.index)},n.state={selected:n.props.selected},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e){e.selected!==this.props.selected&&this.setState({selected:this.props.selected})}},{key:"render",value:function(){var e=this,t=this.state.selected?"selected-item":"";return r.a.createElement("div",{className:"problem-list-item ".concat(t),onClick:function(){return e.handleClick()}},this.props.problemName)}}]),t}(r.a.Component),W=(n(219),[{content:"Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution, and you may not use the same element twice.",example:"Given nums = [2, 7, 11, 15], target = 9, Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1]."},{content:"Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases. For the purpose of this problem, we define empty string as valid palindrome.",example:'Input: "A man, a plan, a canal: Panama"\nOutput: true'},{content:"Given two strings s and t , write a function to determine if t is an anagram of s.",example:'Input: s = "anagram", t = "nagaram"\nOutput: true'},{content:"Write a function that reverses a string. The input string is given as an array of characters",example:'Input: ["h","e","l","l","o"]\nOutput: ["o","l","l","e","h"]'}]),B=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).handleProblemChange=function(e){n.setState({clickedProblem:e}),n.props.callback(e)},n.state={problems:f,clickedProblem:n.props.problemIndex},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"problems-list"},this.state.problems.map(function(t,n){return r.a.createElement(L,{callback:e.handleProblemChange,selected:e.state.clickedProblem===n,problemName:e.state.problems[n],index:n})}),r.a.createElement("div",{className:"problem-description"},r.a.createElement("p",null,W[this.state.clickedProblem].content),r.a.createElement("h5",null,"Example: "),r.a.createElement("p",null,W[this.state.clickedProblem].example)))}}]),t}(r.a.Component),M=(a.Component,function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={offset:0,focusOffset:0},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return a.createElement("div",{className:"selection-form"},a.createElement("div",{className:"form-group"},a.createElement("label",{htmlFor:"data",className:"control-label col-sm-6"},"offset"),a.createElement("div",{className:"col-sm-6"},a.createElement("input",{type:"number",className:"form-control",id:"data",placeholder:"data to save",value:this.state.offset,onChange:function(t){return e.setState({offset:Number.parseInt(t.target.value)})}}))),a.createElement("div",{className:"form-group"},a.createElement("label",{htmlFor:"data",className:"control-label col-sm-6"},"end offset"),a.createElement("div",{className:"col-sm-6"},a.createElement("input",{type:"number",className:"form-control",id:"data",placeholder:"data to save",value:this.state.focusOffset,onChange:function(t){return e.setState({focusOffset:Number.parseInt(t.target.value)})}}))),a.createElement("button",{className:"button col-sm-3 col-sm-offset-8",onClick:function(){return e.props.callback(e.state.offset,e.state.focusOffset)}},"set selection state"))}}]),t}(a.Component)),D=[{entityMap:{},blocks:[{key:"5h45a",text:"# @param {Interger Array} arr, {Integer} target",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45b",text:"# @return {Integer Array}",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45l",text:"def two_sum(arr, target)",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45r",text:"    ",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45x",text:"    ",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45t",text:"end",type:"unstyled",depth:0,entityRanges:[],data:{}}]},{entityMap:{},blocks:[{key:"5h45a",text:"# @param {String} word",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45b",text:"# @return {Boolean}",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45l",text:"def check_palindrome(word)",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45r",text:"    ",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45x",text:"    ",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45t",text:"end",type:"unstyled",depth:0,entityRanges:[],data:{}}]},{entityMap:{},blocks:[{key:"5h45a",text:"# @param {String} mixedWord, {String} word",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45b",text:"# @return {Boolean}",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45l",text:"def check_anagram(mixedWord, word)",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45r",text:"    ",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45x",text:"    ",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45t",text:"end",type:"unstyled",depth:0,entityRanges:[],data:{}}]},{entityMap:{},blocks:[{key:"5h45a",text:"# @param {Interger array []} arr",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45b",text:"# @return {Integer array []}",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45l",text:"def reverse(arr)",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45r",text:"    ",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45x",text:"    ",type:"unstyled",depth:0,entityRanges:[],data:{}},{key:"5h45t",text:"end",type:"unstyled",depth:0,entityRanges:[],data:{}}]}],F=[["([3, 3, 1], target=6)","([-4, 6, -8, 1], target=-3)","([-3, -2, -1, -9], target=-10)"],["tower","hannah","A man, a plan, a canal: Panama"],['("eroh", "hero")','("HleOl", "HellO")','("not", "aword")'],["[1,2,3]","[1,2,3,4]","[-1, -2, -3]"]],z=[["All Positive Numbers","Includes Negative Numbers","All Negative"],["Not an Palindrome","All Lowercase Letters","Mixed Cases and Includes Punctuation"],["All lowercase","Mix of Cases","Not an Anagram"],["Simple increasing array","Jumbled Array","Array with Negative Numbers"]],K=[["[0, 1]","[0, 3]","[2, 3]"],["false","true","true"],["true","true","false"],["[3, 2, 1]","[4, 6, 8, 1]","[-3, -2, -1]"]],Z=n(98),G=n.n(Z),H=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).handleRunCode=function(e){var t=p.convertToRaw(e),a=n.state.currentProblem;n.setState({loading:!0}),y.a.post("https://ruby-runner-api.herokuapp.com/run",{function_name:g[a].toLowerCase(),content:t,problem_index:n.state.currentProblem}).then(function(e){n.setState({loading:!1,firstCallToAPi:!1}),console.log("response ",e.data),n.formatCodeOutput(e.data)}).catch(function(e){n.setState({codeOutput:"Server Error",loading:!1,firstCallToAPi:!1}),console.log("error",e.response)})},n.formatCodeOutput=function(e){var t=[],a=0,s=0;e.forEach(function(e,o){var i=F[n.state.currentProblem][o],l=z[n.state.currentProblem][o],c=e||"No output or return statement",d=K[n.state.currentProblem][o],u=d==c;u?++a:++s;var p=u?"green":"red";t.push(r.a.createElement("p",null,"Test Description: ",l)),t.push(r.a.createElement("p",null,"Input: ",i)),t.push(r.a.createElement("p",{style:{color:p}},"Expected Output: ",d)),t.push(r.a.createElement("p",{style:{color:p}},"Output: ",c)),t.push(r.a.createElement("br",null))});var o=0===s?"green":"red";t.unshift(r.a.createElement("p",null," Tests Passed:",r.a.createElement("span",{style:{color:o}},a,"/",a+s),r.a.createElement("br",null))),n.setState({codeOutput:t})},n.handleProblemChange=function(e){var t=n.state,a=t.currentProblem,r=t.savedTests,s=t.codeOutput,o=r.slice();o[a]=s;var i=r[e];n.setState({currentProblem:e,codeOutput:i,savedTests:o})},n.handleSaveEditor=function(e,t){var a=n.state.savedEditors.slice();a[t]=e,n.setState({savedEditors:a})},console.log(n.props.selectedProblem),n.state={currentProblem:n.props.selectedProblem,codeOutput:"",savedTests:["","","","",""],loading:!1,firstCallToAPi:!0,savedEditors:D},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"editor-container"},r.a.createElement(b.a,{container:!0,direction:"row"},r.a.createElement(b.a,{item:!0,xs:!0},r.a.createElement(B,{callback:this.handleProblemChange,problemIndex:this.state.currentProblem})),r.a.createElement(b.a,{item:!0,xs:6},r.a.createElement(_,{handleRunCode:this.handleRunCode,default_editors:this.state.savedEditors,handleSaveEditor:this.handleSaveEditor,problemIndex:this.state.currentProblem})),r.a.createElement(b.a,{item:!0,xs:!0},r.a.createElement("div",{className:"code-runner"},r.a.createElement("div",{className:"test-output"},this.state.loading?r.a.createElement("div",{style:{width:"100%",height:"100",display:"block",justifyContent:"center",alignItems:"center"}},r.a.createElement(G.a,{type:"ThreeDots",color:"#2BAD60",height:"100",width:"100"}),this.state.firstCallToAPi&&r.a.createElement("p",null," Starting the server: Might take a few seconds")):this.state.codeOutput?this.state.codeOutput:r.a.createElement("span",{style:{color:"grey"}},"Run some code to display tests"))))))}}]),t}(a.Component),J=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).changePage=function(e){n.setState({currentPage:e})},n.loadProblem=function(e){n.setState({currentPage:"editor",selectedProblem:e})},n.state={selectedProblem:0,currentPage:"editor"},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){y.a.get("https://ruby-runner-api.herokuapp.com/contents").then(console.log("server started")).catch(function(e){console.log("server error on start")})}},{key:"render",value:function(){return r.a.createElement("div",{className:"app-container"},r.a.createElement(b.a,{container:!0,direction:"column",spacing:30},r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(m,{changePage:this.changePage})),r.a.createElement(b.a,{item:!0,xs:12},"problemsList"===this.state.currentPage&&r.a.createElement(v,{loadProblem:this.loadProblem}),"editor"===this.state.currentPage&&r.a.createElement(H,{selectedProblem:this.state.selectedProblem})),r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement("footer",null))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},43:function(e,t,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.de38cc4e.chunk.js.map