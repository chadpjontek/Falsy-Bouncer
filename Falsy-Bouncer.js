//Remove all falsy values from an array.
function bouncer(arr) {
  // filter() calls a provided callback function once for each element in an array, and constructs a new array of all the values for which callback returns a value that coerces to true.**Therefore no falsy values will be added**
  arr = arr.filter(function(element) {
    return element;
  }); 
  return arr;
}
//examples
bouncer([7, "ate", "", false, 9]); // returns [7, "ate", 9].
bouncer(["a", "b", "c"]); // returns ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]); // returns [].
bouncer([1, null, NaN, 2, undefined]); // returns [1, 2].
