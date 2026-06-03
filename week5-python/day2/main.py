 


# a = int(input("Tell your number."))
# copy = a

# rev = 0

# while a > 0:
#    rev = rev * 10 + a % 10
#    a = a // 10
   
# print(rev)

# if copy == rev :
#    print(f"{copy} is a palandrome number.")
# else:
#    print(f"{copy} is not a palandrome number.")




import random 

num = random.randint(1,10)  
print(num)

tries = 0
while True:

    guess = int(input("Guess a number between 1 to 10."))

    if guess == num :
        tries +=1 
        print(f"Yeeah!! You have correctly predicted the random number. you tried {tries} times")
        break
    else:
        print("Sorry you have failed , try again.")
        tries += 1
