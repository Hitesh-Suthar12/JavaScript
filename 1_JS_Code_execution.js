/*
Everything happen in JS in execution context -

when we run the code, execution context is created. 

When u execute/run the code, Global execution is created.

Excution is created in 2 phases -
- first is Memory creation phase 
- second is code excution phase

CODE-
var n = 2;
function square (num) {
    var ans = num * num;
    return ans;
}
var square2 = square(n);
var square4 = square(4);


in the 1st phase,JS allocated memory to all the variables and functions
- Memory allocate phase

in 1st phase - 'var n' is undefine
next whole function 'square' will copy to memory space
next square2 = undefine
next square4 = undefine

- code excution phase

now JS code excute line by line- top to buttom

now the value of var n = 2 will be allocate

next 'square2' function will be involk - then again new execution context is created

in new execution context - again 2 phases are created
1st is Memory allocated phase
2nd is Code execution code

Now again Memory will be allocated to every variable and function

Now in the function 
num = undefine - phase 1
ans = undefine  - phase 1

here in the function - square function (num)  -> num is the parameter of the function
and where the value will be pass - eg - square(n) -> here  n is the argument of the function 

after that in Code execution is run
num = 2 is allocate
ans = num * num  (2 * 2  = 4)
now ans  = 4;

after the excute the code, whole execution context is deleted

now n = 2
square2 = 4
square4 =16

Now whole execution context will be deleted from call stack.

************ ************ ************* ************* ************ ************

Call stack are other different name

1. Execution context Stack
2. Program  Stack
3. Control Stack
4. Runtime Stack
5. Machine Stack





*/
