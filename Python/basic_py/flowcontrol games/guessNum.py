import random, sys

number = 0

def gen():

    print("pick a starting point (lower number)")
    start = int(input())
    print("pick an end point (higher number)")
    end = int(input())
    print("Guess a number between " + str(start) + " and " +  str(end))
    return random.randint(start,end)
    
def guess():

    generated = gen()
    
    answer = False
    while answer == False:
        
        enter = int(input())
        if enter == generated:
            print("You guessed it! the number is: " + str(enter))
            sys.exit()
        elif enter > generated:
            print(str(enter) + " is too high. Try again")
            continue;
        elif enter < generated:
            print(str(enter) + " is too low. Try again")
            continue;

guess()