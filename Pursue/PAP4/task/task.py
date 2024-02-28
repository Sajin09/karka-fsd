# def remove_and_replace(nums):
#     nums[:] = ['*' if num == 3 else num for num in nums]
#     nums = [num for num in nums if num != '*']
#     print(nums)
# input_list = [3, 2, 2, 3]
# remove_and_replace(input_list)

# def digital_root(num):
#     while num >= 10:
#         num = sum(int(digit) for digit in str(num))
#     return num

# input_number = int(input("Enter an integer: "))

# result = digital_root(input_number)
# print("Digital root:", result)

# nums=[3,2,2,3]
# for i in nums:
#     if i==3:
#         nums.remove(3)
#         nums.append("*")
# print(nums)

# num1 = [1,2,2,1]
# num2 = [2]
# intersection = list(set(num1) & set(num2))
# print(intersection)
# input = [[1, 2], [3, 4]]
# result = sum([sum(row) for row in input])
# print("Output:", result)


# import re
# def is_strong_password(password):
#     if len(password) < 8:
#         return False
#     if not re.search(r'[a-z]', password):
#         return False
#     if not re.search(r'[A-Z]', password):
#         return False
#     if not re.search(r'\d', password):
#         return False
#     if not re.search(r'[!@#$%^&*(),.?":{}|<>]', password):
#         return False
#     return True
# password = input("Enter your password: ")
# if is_strong_password(password):
#     print("Your password is strong!")
# else:
#     print("Your password does not meet the criteria for a strong password.")


# nums=[0,1,0,3,12]
# for i in nums:
#     if i==0:
#         nums.remove(0)
#         nums.append("0")
# print(nums)

# list1=[5,10,20,2,0,33,100,90]
# list2=[]

# for i in range(0,len(list1),2):
#     if i+1<len(list1):
#         list2.extend([list1[i],list1[i+1],list1[i]+list1[i+1]])
# print(list2)


# num1=int(input("Enter the value of A: "))
# num2=int(input("Enter the value of B: "))

# num1=num1+num2
# num2=num1-num2
# num1=num1-num2

# print(num1)
# print(num2
# )

def fibonacci_with_loop(n):
    fib_series = [0, 1]
    for i in range(2, n):
        fib_series.append(fib_series[i - 1] + fib_series[i - 2])
    return fib_series

n = 10  # Change the value of n to the desired length of the Fibonacci series
result = fibonacci_with_loop(n)
print(result)
