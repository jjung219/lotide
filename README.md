# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jjung219/lotide`

**Require it:**

`const _ = require('@jjung219/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters(sentence)`: take in a sentence as a string and then return a count of each of the letters in that sentence as an object
* `countOnly(allItems, itemsToCount)`: take in a collection of items and return counts for a specific subset of those items
* `eqArrays(arr1, arr2)`: compares the length and values of the two arrays and returns true or false
* `eqObjects(obj1, obj2)`: compares the values of the two objects and returns true or false 
* `findKey(obj, callback)`: takes in an object and a callback. Scans the object and return the first key for which the callback returns a truthy value. Returns undefined when no key is found
* `findKeyByValue(obj, value)`: takes in an object and the value you're looking for. Returns the object key that has the value.
* `flatten(arr)`: takes in an array and if the array has arrays within the array, function takes all the elements out of the array and returns as just one array with all the elements.
* `head(arr)`: takes in an array and returns the first element of the array
* `letterPoisitions(str)`: takes in a string and returns an object with letters as keys and index positions of the letters as values as an array
* `middle(arr)`: takes in an array and returns middle element(s). If there is only one element, it returns an empty array
* `tail(arr)`: takes in an array and retuns an array with all the elements except for the first element
* `takeUntil(arr, callback)`: The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value
* `without(sourceArr, itemsToRemove)`: take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array
