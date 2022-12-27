###Math operations

# exponent = **
# modulus = %
# addition = +
# subtraction = -
# multiplication = *
# division = /
# floored division = //

# print(2/5)
# print(2//5)
# print(5/2)
# print(5//2)


## operational data types

#integers = 1
#floating points = 1.25
#strings = "hey"

#print( "my" +  " " +"food")

#STORING VALUES IN VARIABLES
word1 = "text"
word2 = "here"

def printName(first, last):
    print("What is your middle name? (enter below)")
    middleName = input()
    #the input() function pauses the function to receive input from the user, the continues the function/program
    print("Length of middle name: " + str(len(middleName))) 
    #the str() function converts the inner data into a string
    #the int() function converts a valid string into an integer
    #the float() function returns an integer with decimals, if needed
    return first + " " + last + ", Middle name: " + middleName
myName = printName("Jordon", "Harris")
print(myName)


