## Hash Tables

The basic idea of a hashtable is the ability to store the key into this data structure, and quickly retrieve the value. This is done through what we call a hash. A hash is the ability to encode the key that will eventually map to a specific location in the data structure that we can look at directly to retrieve the value.

## Challenge

Implement a Hashtable

## Approach & Efficiency

create a list with 1024 None elements than whenever the user add a value checks if their is and element in the location other than hte none if there is not it will create a linked list and add to it else will add to the existing linked list
Big O of time --> O(1) Big O of space --> O(1

## API

add method that takes in both the key and value and add them to their location get method that takes in the key and returns the value from the table. contains method that takes in the key and returns a boolean, indicating if the key exists in the table already. hash method that is being used by other metods to know or decide the location of the values
