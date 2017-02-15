# Andelabs Home Day Three

## Problems

1. Firstly, you are to create three functions, as prototypes to the Array class to return the following:
>`toTwenty()` returns `[1, 2, 3 . . . 20]`
>`toForty()` returns `[2, 4, 6 . . . 40]`
>`toOneThousand()` returns `[10, 20, 30 . . . 1000]`
Once you are done, create another prototype(d) function called `.search`, it will take just one argument which is the number you are to find. The search function should return an object, which contains
>`.count`, the number of times your function iterated to find the index of the number in question
>`.index`, the index of the number in question
>`.length`, the length of the original array
The `.search` function should implement the _binary search algorithm_. Each time you iterate, you should increase the count, to test how efficient your implementation is.

2. You are presented with two arrays, all containing positive integers. Create a function *findMissing(arr1, arr2)*  that takes in two arguments, both of which are arrays. One of the arrays will have one extra number, see below:
>`[1,2,3]` and `[1,2,3,4]` should return `4`
>`[4,66,7]` and `[66,77,7,4]` should return `77`

+ Language: Javascript

+ Tools: NodeJs, Jasmine

## How to Run this Lab
### Run in the browser
+ Clone the repository
+ Navigate to the root folder of a problem
+ Open **index.html** in your browser 

### Run in the console
+ Clone the repository
+ Navigate to the root folder of a problem
+ Run  `npm install -g jasmine`
+ Run  `jasmine`