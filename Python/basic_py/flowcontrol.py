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
        if(count ==0):
            print("Lift off!!")

whileLoop()

## BREAK and CONTINUE statments