import sys
import re

'''
    filename: name of CSV file
    returns a 2D list of all results of this format
        [[name, email, [schedule], [skills], [teammate prefs]], [name, email, [schedule], [skills], [teammate prefs]], ...]
'''
def read_data(filename):
    data = list()
    for l in filename[1:]:
        arr = l
        #remove time stamp
        arr.remove(arr[0])
        
        #Replace Yes/No with 1/0
        for each in arr[2:32]:
            cur = arr.index(each)
            if each == "Yes":
                arr[cur] = 1
            else:
                arr[cur] = 0

        #make schedule array
        times_available = list()
        for i in range(2, 32):
            times_available.append(arr[i])

        #make skills array, converted to int
        skills = list()
        for i in range(32, 44):
            skills.append(int(arr[i]))

        #teammate preferences
        teammates = list()
        for i in range(44, len(arr)):
            teammates.append(arr[i].replace(" ", ""))

        complete_arr = list()
        #add name, email, schedule, skills, teammate
        complete_arr.append(arr[0])
        complete_arr.append(arr[1])
        complete_arr.append(times_available)
        complete_arr.append(skills)
        complete_arr.append(teammates)

        data.append(complete_arr)
    
    print(data)
    return data
