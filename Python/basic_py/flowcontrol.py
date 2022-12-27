#boolean values

yes = True
no = False

print(yes == (2 == 2))
print(no == (2 != 2))
#############################################
##comparison operators
#==
#!=
# <
# >
# <=
# >=
##

#boolean operators
#and
#or
#not, best if determining if something is NOT TRUE or False

print(not False)

#FLOW CONTROL STATEMENTS
#if
#else
#elif

def digit(value):
    print("function has started running")
    print(type(value))
    if(type(value) == type("text")):
        print("A string was accepted by the function")
    elif(type(value) == type(1)):
        print("A number was accepted by the function")
    else:
        print("the function was passed an object; either an array or object")

##digit([])

##WHILE LOOPS

def whileLoop():
    count = 5;
    while count > 0:
        print("T-minus: " + str(count))
        count = count -1
        if(count == 0):
            print("Lift off!!")
##whileLoop()

################ BREAK and CONTINUE statments######################


##Break cause the loop to end early
def breaking():
    count = 5
    while count > 0:
        if count == 3:
            print("3 was reached")
            count = count -1
            break
        print("We are at" + str(count))
        count= count-1
##breaking()


##continue statements skip the current iteration, running the loop again
def cont():
    count = 5
    while count > 0:
        if count == 3:
            print("3 was reached")
            count = count -1
            continue
        print("We are at" + str(count))
        count= count-1
##cont()

################ FOR LOOPS AND RANGE ######################

names = [1,3,5,7,9,11]
def forLoop():
    for i in names:
        print(str(i) + " from the list")

    for j in range(1,5):
        print(str(j) + " from the range defined")
##forLoop()

###range can accept three arguments
    ##first, the number to start at
    ##the number to end at, but will not include
    ##the amount to iterate by each time the loop restarts
##e.g.
# for i in range(0,101,20):
#     print(i) ##will print 0,20,40,60,80,100


################ IMPORTING MODULES ######################

##usig a simple import statement
    #this is the random.py module
import random
for i in range(5):
    print(random.randint(10,20))

##using an import statement to import a specific function from a module
from math import sqrt
print(sqrt(16))

################ END A PROGRAM EARLY ######################
## sys.exit() can terminate a function ealry if need be
##can be seeen as similar to the break statement
import sys
for i in range(5):
    if i == 3:
        sys.exit()
    else:
        print(i)
