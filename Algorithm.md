







1-Step understand the problem



In a factory a printer prints a label for boxes.for the sake of the simplicity , are named with letters form "a" to "m".



The colors used by the printer are recorded in recorded in a control string.

Ex : "good" control string would be "aaabbbbaijjjm"

Sometimes there are problems : Lack of colors, technical malfunction and a "bad" constrol string is produced e.g. "aaaaxbbyyhwawijjwwm" with letters not from "a" to "m" .



Task:



Write a function print_error which given a string will return the error rate of printer as a string representing a rational whose numerator is a number of errors and the denominator the length of the control string.



2-Plan 

Answer these Q.

-No, it uses a console.

-Input we get from user

-to print out the errors rate by the length of the string.





2.1 Algorithm & Pseudo code



Pseudo Code

-we get the input and check  its length , and we use the regex to check if the string contains characters from (a-m) , otherwise check for characters out of range from (n-z) if found such characters out of range count it and output its value.



Algorithm
1-store our input into a variable
2-check its length
3-init a variable to hold the results and set it to "0"
3-use regex to extract out of range characters (n-z) and append returned value to results.
4-output the result / the length of the string.
























