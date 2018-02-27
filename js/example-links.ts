export var exampleHeaderHtml = ``

export var pythonExamplesHtml = `<div class="enjoy-css" onclick="exampleCodeAction('python')">Python Examples</div>
<div id="python">
<p style="margin-top: 10px;"><div class="subheading">Basic</div><br/>

<a class="codelink" id="aliasExampleLink" href="#">hello</a>
<a class="codelink" id="happyExampleLink" href="#">happy</a>
<a class="codelink" id="tutorialExampleLink" href="#">intro</a>
<a class="codelink" id="filterExampleLink" href="#">filter</a>
<a class="codelink" id="strtokExampleLink" href="#">tokenize</a>
<a class="codelink" id="insSortExampleLink" href="#">insertion sort</a>
<a class="codelink" id="forElseLink" href="#">for-else</a>
<a class="codelink" id="rawInputExampleLink" href="#">user input</a>
</p>

<p style="margin-top: 15px;"><div class="subheading">Math</div><br/>
<a class="codelink" id="factExampleLink" href="#">factorial</a>
<a class="codelink" id="fibonacciExampleLink" href="#">fibonacci</a>
<a class="codelink" id="memoFibExampleLink" href="#">memoized fibonacci</a>
<a class="codelink" id="newtonExampleLink" href="#">square root</a>
<a class="codelink" id="pwGcdLink" href="#">gcd</a>
<a class="codelink" id="towersOfHanoiLink" href="#">towers of hanoi</a>
</p>


<p style="margin-top: 15px;"><div class="subheading">Objects</div><br/>

<a class="codelink" id="oop1ExampleLink" href="#">OOP 1</a>
<a class="codelink" id="oop2ExampleLink" href="#">OOP 2</a>
<a class="codelink" id="oopSmallExampleLink" href="#">OOP 3</a>
<a class="codelink" id="inheritanceExampleLink" href="#">inheritance</a>

</p>

<p style="margin-top: 15px;"><div class="subheading">Linked Lists</div><br/>
<a class="codelink" id="ll1Link" href="#">LL 1</a>
<a class="codelink" id="ll2Link" href="#">LL 2</a>
<a class="codelink" id="sumListLink" href="#">LL sum</a>
</p>

<p style="margin-top: 15px;"><div class="subheading">Pointer Aliasing</div><br/>
<a class="codelink" id="aliasing1Link" href="#">aliasing1</a>
<a class="codelink" id="aliasing2Link" href="#">aliasing2</a>
<a class="codelink" id="aliasing3Link" href="#">aliasing3</a>
<a class="codelink" id="aliasing4Link" href="#">aliasing4</a>
<a class="codelink" id="aliasing5Link" href="#">aliasing5</a>
<a class="codelink" id="aliasing6Link" href="#">aliasing6</a>
<a class="codelink" id="aliasing7Link" href="#">aliasing7</a>
<a class="codelink" id="aliasing8Link" href="#">aliasing8</a>
<a class="codelink" id="pwSumListLink" href="#">sumList</a>
</p>

<p style="margin-top: 15px;"><div class="subheading">Higher Order Functions</div><br/>

<a class="codelink" id="closure1Link" href="#">closure1</a>
<a class="codelink" id="closure2Link" href="#">closure2</a>
<a class="codelink" id="closure3Link" href="#">closure3</a>
<a class="codelink" id="closure4Link" href="#">closure4</a>
<a class="codelink" id="closure5Link" href="#">closure5</a>
<a class="codelink" id="mapExampleLink" href="#">list map</a>
<a class="codelink" id="sumExampleLink" href="#">summation</a>
<a class="codelink" id="lambdaParamLink" href="#">lambda param</a>

</p>

<p style="margin-top: 15px;"><div class="subheading">Advanced</div><br/>
<a class="codelink" id="listCompLink" href="#">list comp</a>
<a class="codelink" id="compsLink" href="#">list/set/dict comp</a>
<a class="codelink" id="decoratorsLink" href="#">decorator</a>
<a class="codelink" id="genPrimesLink" href="#">generator</a>
<a class="codelink" id="genExprLink" href="#">genexpr</a>
<a class="codelink" id="varargsLink" href="#">varargs</a>
<a class="codelink" id="pwTryFinallyLink" href="#">exception</a>
<a class="codelink" id="metaclassLink" href="#">metaclass</a>
</p></div>`;

export var PY2_EXAMPLES = {
  tutorialExampleLink: "py_tutorial.txt",
  strtokExampleLink: "strtok.txt",
  listCompLink: "list-comp.txt",
  compsLink: "comprehensions.txt",
  fibonacciExampleLink: "fib.txt",
  memoFibExampleLink: "memo_fib.txt",
  factExampleLink: "fact.txt",
  filterExampleLink: "filter.txt",
  insSortExampleLink: "ins_sort.txt",
  aliasExampleLink: "aliasing.txt",
  happyExampleLink: "happy.txt",
  newtonExampleLink: "sqrt.txt",
  oopSmallExampleLink: "oop_small.txt",
  mapExampleLink: "map.txt",
  rawInputExampleLink: "raw_input.txt",
  oop1ExampleLink: "oop_1.txt",
  oop2ExampleLink: "oop_2.txt",
  inheritanceExampleLink: "oop_inherit.txt",
  sumExampleLink: "sum.txt",
  pwGcdLink: "wentworth_gcd.txt",
  pwSumListLink: "wentworth_sumList.txt",
  towersOfHanoiLink: "towers_of_hanoi.txt",
  pwTryFinallyLink: "wentworth_try_finally.txt",
  sumCubesLink: "sum-cubes.txt",
  decoratorsLink: "decorators.txt",
  genPrimesLink: "gen_primes.txt",
  genExprLink: "genexpr.txt",
  closure1Link: "closures/closure1.txt",
  closure2Link: "closures/closure2.txt",
  closure3Link: "closures/closure3.txt",
  closure4Link: "closures/closure4.txt",
  closure5Link: "closures/closure5.txt",
  lambdaParamLink: "closures/lambda-param.txt",
  aliasing1Link: "aliasing/aliasing1.txt",
  aliasing2Link: "aliasing/aliasing2.txt",
  aliasing3Link: "aliasing/aliasing3.txt",
  aliasing4Link: "aliasing/aliasing4.txt",
  aliasing5Link: "aliasing/aliasing5.txt",
  aliasing6Link: "aliasing/aliasing6.txt",
  aliasing7Link: "aliasing/aliasing7.txt",
  aliasing8Link: "aliasing/aliasing8.txt",
  ll1Link: "linked-lists/ll1.txt",
  ll2Link: "linked-lists/ll2.txt",
  sumListLink: "sum-list.txt",
  varargsLink: "varargs.txt",
  forElseLink: "for-else.txt",
  metaclassLink: "metaclass.txt",
};


export var javaExamplesHtml = `<div class="enjoy-css" onclick="exampleCodeAction('java')">Java Examples</div>
<div id="java">
<p>
<div class="subheading">Basic</div><br/>
<a class="codelink" id="javaVarLink" href="#">Variables</a>
<a class="codelink" id="javaCFLink" href="#">ControlFlow</a>
<a class="codelink" id="javaSqrtLink" href="#">Sqrt</a>
<a class="codelink" id="javaExecLimitLink" href="#">ExecLimit</a>
<a class="codelink" id="javaStringsLink" href="#">Strings</a>
</p>

<p>
<div class="subheading">Methods</div><br/>
<a class="codelink" id="javaPassByValLink" href="#">PassByValue</a>
<a class="codelink" id="javaRecurLink" href="#">Recursion</a>
<a class="codelink" id="javaSOLink" href="#">StackOverflow</a>
</p>

<p>
<div class="subheading">Object Oriented Programming</div><br/>
<a class="codelink" id="javaRolexLink" href="#">Rolex</a>
<a class="codelink" id="javaPersonLink" href="#">Person</a>
<a class="codelink" id="javaComplexLink" href="#">Complex</a>
<a class="codelink" id="javaCastingLink" href="#">Casting</a>
</p>

<p><div class="subheading">Data Structures</div><br/>
<a class="codelink" id="javaLLLink" href="#">LinkedList</a>
<a class="codelink" id="javaStackQueueLink" href="#">StackQueue</a>
<a class="codelink" id="javaPostfixLink" href="#">Postfix</a>
<a class="codelink" id="javaSTLink" href="#">SymbolTable</a>
</p>

<p>
<div class="subheading">Java Features</div><br/>
<a class="codelink" id="javaToStringLink" href="#">ToString</a>
<a class="codelink" id="javaReflectLink" href="#">Reflect</a>
<a class="codelink" id="javaExceptionLink" href="#">Exception</a>
<a class="codelink" id="javaExceptionFlowLink" href="#">ExceptionFlow</a>
<a class="codelink" id="javaTwoClassesLink" href="#">TwoClasses</a>
</p>

<p>
<div class="subheading">Misc</div><br/>
<a class="codelink" id="javaForestLink" href="#">Forest</a>
<a class="codelink" id="javaKnapsackLink" href="#">Knapsack</a>
<a class="codelink" id="javaStaticInitLink" href="#">StaticInitializer</a>
<a class="codelink" id="javaSyntheticLink" href="#">Synthetic</a>
</p></div>`;

export var JAVA_EXAMPLES = {
  javaVarLink: 'Variables.java',
  javaCFLink: 'ControlFlow.java',
  javaSqrtLink: 'Sqrt.java',
  javaExecLimitLink: 'ExecLimit.java',
  javaStringsLink: 'Strings.java',

  javaPassByValLink: 'PassByValue.java',
  javaRecurLink: 'Recursion.java',
  javaSOLink: 'StackOverflow.java',

  javaRolexLink: 'Rolex.java',
  javaPersonLink: 'Person.java',
  javaComplexLink: 'Complex.java',
  javaCastingLink: 'Casting.java',

  javaLLLink: 'LinkedList.java',
  javaStackQueueLink: 'StackQueue.java',
  javaPostfixLink: 'Postfix.java',
  javaSTLink: 'SymbolTable.java',

  javaToStringLink: 'ToString.java',
  javaReflectLink: 'Reflect.java',
  javaExceptionLink: 'Exception.java',
  javaExceptionFlowLink: 'ExceptionFlow.java',
  javaTwoClassesLink: 'TwoClasses.java',

  javaForestLink: 'Forest.java',
  javaKnapsackLink: 'Knapsack.java',
  javaStaticInitLink: 'StaticInitializer.java',
  javaSyntheticLink: 'Synthetic.java',
};


export var cExamplesHtml = `<div class="enjoy-css" onclick="exampleCodeAction('cp')">C Examples</div>
<div id="cp">
<p style="margin-top: 5px;">
  <a class="codelink" id="cMengThesisLink" href="#">Thesis</a>
  <a class="codelink" id="cGlobalsLink" href="#">Globals</a>
  <a class="codelink" id="cStructLink" href="#">Structs</a>
  <a class="codelink" id="cNestedStructLink" href="#">Nested structs</a>
  <a class="codelink" id="cArrOverflowLink" href="#">Array overflow</a>
  <a class="codelink" id="cArrParamLink" href="#">Array param</a>
  <p/>
  <a class="codelink" id="cStringRevLink" href="#">String reverse</a>
  <a class="codelink" id="cPtrLevelsLink" href="#">Pointer levels</a>
  <a class="codelink" id="cPtrChainLink" href="#">Pointer chain</a>
  <a class="codelink" id="cPtrWildLink" href="#">Pointers wild</a>
  <a class="codelink" id="cTypedefLink" href="#">Typedef</a>
</p></div>`;

export var C_EXAMPLES = {
  cArrOverflowLink: 'array-overflow.c',
  cArrParamLink: 'array-param.c',
  cNestedStructLink: 'fjalar-NestedStructTest.c',
  cPtrLevelsLink: 'fjalar-pointer-levels.c',
  //cStringArraysLink: 'fjalar-string-arrays.c',
  cGlobalsLink: 'globals.c',
  cMengThesisLink: 'meng-thesis-example.c',
  cPtrChainLink: 'pointer-chain.c',
  cPtrWildLink: 'pointers-gone-wild.c',
  cStringRevLink: 'string-reverse-inplace.c',
  cStructLink: 'struct-basic.c',
  cTypedefLink: 'typedef-test.c',
};


export var cppExamplesHtml = `<div class="enjoy-css" onclick="exampleCodeAction('cpp')">C++ Examples</div>
<div id = "cpp">
<p style="margin-top: 5px;">
  <a class="codelink" id="cppFirstLink" href="#">Basic</a>
  <a class="codelink" id="cppPassRefLink" href="#">Pass by ref</a>
  <a class="codelink" id="cppClassLink" href="#">Class</a>
  <a class="codelink" id="cppClassPtrLink" href="#">Class pointer</a>
  <a class="codelink" id="cppDateLink" href="#">Date class</a>
  <a class="codelink" id="cppInheritLink" href="#">Inheritance</a>
  <a class="codelink" id="cppVirtualLink" href="#">Virtual method</a>
</p></div>`;

export var CPP_EXAMPLES = {
  cppClassLink: 'cpp-class-basic.cpp',
  cppDateLink: 'cpp-class-date.cpp',
  cppClassPtrLink: 'cpp-class-pointers.cpp',
  cppFirstLink: 'cpp-first.cpp',
  cppInheritLink: 'cpp-inheritance.cpp',
  cppPassRefLink: 'cpp-pass-by-ref.cpp',
  cppVirtualLink: 'cpp-virtual-method.cpp',
};
