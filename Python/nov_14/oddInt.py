#Given an array of integers, find the one that appears an odd number of times.
#There will always be only one integer that appears an odd number of times.
#[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).


def find_it(seq):
  
    seq.sort() ;
    odd = [];
    count = 1;
    x = 0
    
    while x < len(seq):
        if(x==len(seq)-1):
            break;
        else:
            if(seq[x] == seq[x+1]):
                count+=1
            else:
                if(count%2!=0):
                    odd.append(seq[x])
                count = 1
        x+=1
    print(f"original => {seq}")
    print(f"odd => {odd}")
    

find_it([20,1,1,2,2,3,3,5,5,2,4,20,4,5])