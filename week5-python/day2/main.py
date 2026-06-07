


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




# import random

# num = random.randint(1,10)
# print(num)

# tries = 0
# while True:

#     guess = int(input("Guess a number between 1 to 10."))

#     if guess == num :
#         tries +=1
#         print(f"Yeeah!! You have correctly predicted the random number. you tried {tries} times")
#         break
#     else:
#         print("Sorry you have failed , try again.")
#         tries += 1



# def greet(name):
#     print(f"Hello {name}, how are you.")


# greet("ankit")


# l = [1,2,3,4,5,6,7,8,9,]
# copy = l.copy()

# slice = l[1:5:2]

# # find_index = l.index(6)
# # pop = l.pop(len(l)-1)
# # l.extend([10,11,12,13,14,15,2,2,2,2])
# # count = l.count(2)
# # l.sort()
# # l.reverse()
# # l.clear()

# # print(find_index)
# print(l)
# print(slice)
# # print(pop)




# n = [45,-56,90,84,-48,-372,4894,739,-583,-34]
# p = []
# np=[]
# n.sort()



# for i in n :
#   if i > 0 :
#     p.append(i)
#   else:
#     np.append(i)



#     print(p,np)



# n =[1.5, 2.5, 3.5, 4.5]

# sum = 0


# for i in range(0,len(n)):
#     sum = sum + n[i]

# mean = sum/len(n)
    

    
# print(mean)
    
    
    
    

    
    
# n = [ 1200,42,5,234,5623,352,54,345,83,786,3,57,4,0,]

# greatest = n[0] 
# second = n[0] 



# for i in range(0,len(n)):
#     if n[i] > greatest:
#         second = greatest
#         greatest = n[i]
#     elif n[i] > second:
#         second = n[i]
        
# print(greatest,second)

# for i in range(0 , len(n)):
#     if n[i] > greatest:
#         greatest = n[i]
#         index  = i
        
# n.remove(greatest)
# print(greatest)
 
# for i in range(0 , len(n)):
#     if n[i] > second:
#         second = n[i]
#         index = i
        
        
        
# print(second)


# n = [1,2,3,4,5,6,7,88]


# for i in range(len(n)-1):
#     if n[i] < n[i+1]:
#         continue
#     else:
#         print("Your list is not sorted ji.")
#         break


# else:
#     print("You list is sorted.")
    

# a = (1)


# print(b)












# a = {1,2,3,4,5,6}
# b = {4,5,6,7,8,9}

####a[1] = 76

# a-=b
# b-=b


# print(a)
# print(b)






# user = {
#     "name":"Ankit katakwar",
#     "age" :24 ,
#     "status":"Not married",
#     "address":{
#         "city":"Bhopal",
#         "Pincode":461775
#     }
# }

# for key , value in user.items():
#     print(key,":",value)


# for i in d2:
#     d[i] = d2[i]

# print(d[1])
# print(d2)


# d = {1:100,2:200,3:300,} 
# sum= 0
# for key,value in d.items():
#     sum = sum+ value
# print(sum)


# sum=0
# for i in d:
#     sum = sum + d[i]
    
# print(sum)

# l = [1,1,1,2,2,2,3,3,4,4,4,5,6,6,7,8,,88,9,8,7,6,5,4,3,212,212,1,3,5,65,76,78,8]
# d={}
# for i in l:
#     if i in d.keys():
#         d[i] += 1
#     else:
#         d[i] = 1
# print(d)

d1 = {1:100,2:200,3:300,} 
d2 = {3:200,4:400}


for i in d2:
    if i in d1.keys():
        d1[i] = d1[i] + d2[i]
        
    else:
        d1[i] = d2[i]
        
        
        
        
print(d1)