# age=[71,12,18,23,81,24,32]
# vote=[]
# for i in range (len(age)):
#     if(age[i]>=18):
#         vote.append(age[i])
# print(vote)

# age=[71,12,18,23,81,24,32]
# vote=[]
# for i in range (len(age)):
#     if(age[i]>=18) and (age[i]%2==0):
#         vote.append(age[i])
# print(vote)

# tamil=int(input("Enter the Value of Tamil"))
# english=int(input("Enter the Value of English"))
# maths=int(input("Enter the Value of Maths"))
# science=int(input("Enter the Value of Science"))
# social=int(input("Enter the Value of Social"))
# def sum():
#     total=tamil+english+maths+science+social
#     avg=total/5
#     print("Total Marks:", total)
#     print("Average",avg)
# sum()

# for i in range(1,31,1):
#     if(i%3==0) and (i%5==0):
#         print("FizzBuzz")
#     elif(i%5==0):
#         print("Buzz")
#     elif(i%3==0):
#         print("Fizz")
#     else:
#         print(i)

# sum=0
# for i in range (5):
#     num=int(input("Enter the value"))
#     sum=sum+num
# print("Sum is", sum)    

# a=[5,10,15,20,25,5,10,1,2,1,2]
# b=[]
# for i in range (0,len(a)):
#     duplicate=False
#     for j in range (0,len(b)):
#         if a[i]==b[j]:
#             duplicate=True
#     if duplicate==False:
#         b.append(a[i])
# print(b)

# a=[5,10,15,20,25,5,10,1,2,1,2]
# b=[]
# for i in a:
#     if a.count(i)==1:
#         b.append(i)
# print(b)

my_resume = {
    "name" : "Sajin",
    "DOB" : "09-04-1999",
    "degree": "B.E ECE",
    "phone_number": [9585123409,7339676673,],
    "Skills" : ["Team lead","Hard worker","Dancer"]
}
print(my_resume)


