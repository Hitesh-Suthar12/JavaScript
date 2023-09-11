// Scope Chain, Scope and Lexical environment

// Lexical mean - Herarky or in a sequenc

// lexical chain in called scope chain.

/*
Lexical Environment  -  
Lexical environment = EC's Local Memory + Reference to Lexical Environment of its parent.

1) Lexical Environment of its parent is the scope where a function is physically present or defined. So, suppose a function x(), is defined and invoked in the GEC (Global Execution context), when function x()'s EC is pushed in the call stack, it stores a reference to its parent's lexical environment i.e. the GEC's memory.

2) Whenever a new Execution Context is pushed in the Call Stack it holds a reference to the Lexical Environment of its parent, i.e. the EC's memory from where it was invoked.

3) Global execution context holds reference to null.

4)  Javascript engine first looks for the variable/function being accessed in the local scope of the function, and if not found, it keeps on searching the lexical environment of its parent until it finds the variable/function being accessed.

5) The mechanism mentioned in point 4 above is called SCOPE CHAIN.

6) If the variable accessed is not found in the Scope Chain, then you will get the variable is not defined error in the  browser's console.
*/

function a() {
  // this is inside closure of Global context
  // this is lexically inside the Global function
  var b = 10;
  c();
  function c() {
    // here C is inside closure or (a)
    // this is lexicaly inside (a) - bcoz it under the second function or its parent function
    console.log(b);
  } 
}

a();
