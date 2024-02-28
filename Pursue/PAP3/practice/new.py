# resume = [
#     {
#         "Name" : "Sajin",
#         "DOB" : "09/04/1999",
#         "Place" : "Nagercoil",
#         "Mob_Num" : [9585123409,7777778888],
#         "Skills" : ["Team lead","Motivater","Dancer"],
#         "Degree" : "B.E(ECE)"
#     },

#     {
#         "Name" : "Siva",
#         "DOB" : "22/08/2001",
#         "Place" : "Vadasery",
#         "Mob_Num" : [9123456789,9551515558],
#         "Skills" : ["Team lead","Motivater","Good Communicator"],
#         "Degree" : "B.E(CSE)"
#     },

#     {
#         "Name" : "Vikas",
#         "DOB" : "12/01/2001",
#         "Place" : "Puthery",
#         "Mob_Num" : [9442032546,9488800638],
#         "Skills" : ["Basic Skills","Reader","Fast learner"],
#         "Degree" : "B.Tech(IT)"
#     },

#     {
#         "Name" : "Saju",
#         "DOB" : "13/12/2000",
#         "Place" : "Chennai",
#         "Mob_Num" : [4552425252,82777778888],
#         "Skills" : ["Team lead","Motivater","Dancer"],
#         "Degree" : "B.E(EEE)"
#     }


# ]

# # print(resume)



# # resume = [
# #     {
# #         "Name" : "Sajin",
# #         "DOB" : "09/04/1999",
# #         "Place" : "Nagercoil",
# #         "Mob_Num" : [9585123409,7777778888],
# #         "Skills" : ["Team lead","Motivater","Dancer"],
# #         "Degree" : "B.E(ECE)"
# #     },
    
# #     {
# #         "Name" : "Siva",
# #         "DOB" : "22/08/2001",
# #         "Place" : "Vadasery",
# #         "Mob_Num" : [9123456789,9551515558],
# #         "Skills" : ["Team lead","Motivater","Good Communicator"],
# #         "Degree" : "B.E(CSE)"
# #     },
   
# #     {
# #         "Name" : "Vikas",
# #         "DOB" : "12/01/2001",
# #         "Place" : "Puthery",
# #         "Mob_Num" : [9442032546,9488800638],
# #         "Skills" : ["Basic Skills","Reader","Fast learner"],
# #         "Degree" : "B.Tech(IT)"
# #     },

# #     {
# #         "Name" : "Saju",
# #         "DOB" : "13/12/2000",
# #         "Place" : "Chennai",
# #         "Mob_Num" : [4552425252,82777778888],
# #         "Skills" : ["Team lead","Motivater","Dancer"],
# #         "Degree" : "B.E(EEE)"
# #     }

# # ]
# # for i in resume:
# #     print(i["Name"])

# # # for i in range (len(resume)):
# # #     print(resume[i]["Name"])
    


# list=[
#     {
#         "name":"Sanjay",
#         "age":22,
#         "Degree":["BE","B.Sc"],
#         "hobbies":["Playing","Cooking"],
#         "Place":"NGL"
#     },
#     {
#         "name":"Siva",
#         "age":24,
#         "Degree":["B.Sc","MBA"],
#         "hobbies":["listening Music","Cooking","Coading"],
#         "Place":"Vadasery"
#     },
#     {
#         "name":"Hari",
#         "age":26,
#         "Degree":["B.Tech","B.Sc"],
#         "hobbies":["Playing","Browsing"],
#         "Place":"KK"
#     },
#     {
#         "name":"Ajay",
#         "age":25,
#         "Degree":["BA","B.Tech"],
#         "hobbies":["Playing","Cooking","Coading"],
#         "Place":"KK"
#     }
# ]

# print(list)
# for i in list:
#     print(i["name"])

# for i in range(len(list)):
#     if("BE" in list[i]["Degree"]):
#         print(list[i]["name"])

# for i in list:
#     if("BE" in i["Degree"]) and ("Cooking" in i["hobbies"]):
#         print(i["name"])

# previous_number = 0
# for i in range(1, 11):
#     current_number = i
#     current_sum = current_number + previous_number
#     print(f"Current Number: {current_number}, Previous Number: {previous_number}, Sum: {current_sum}")
#     previous_number = current_number

# even = 0
# odd = 0
# for number in range(10, 56):
#     if number % 2 == 0:
#         even += 1
#     else:
#         odd += 1
# print(f"Occurrences of even numbers: {even}")
# print(f"Occurrences of odd numbers: {odd}")

def sum(array):
    for i in range(len(array)):
        if array[i] % 2 != 0:
            array[i] = 0 
input_array = [5, 10, 15, 20, 22, 23]
print("Original Array:", input_array)
sum(input_array)
print("Modified Array:", input_array)