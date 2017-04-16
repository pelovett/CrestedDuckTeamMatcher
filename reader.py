import sys
import re

'''
    filename: name of CSV file
    returns a 2D list of all results of this format
        [[name, email, [schedule], [skills], [teammate prefs]], [name, email, [schedule], [skills], [teammate prefs]], ...]
'''
def read_data(filename):
    f = open(filename, 'r')
    p = re.compile(',')
    data = []
    header = f.readline().strip()
    varnames = p.split(header)
    varnames.remove(varnames[0])
    data = list()
    for l in f:
        #remove quote char, newline char, and whitespaces
        arr = l.replace('"', '').replace("\n", '')
        #split by comma
        arr = list(arr.split(","))
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
        for i in range(2, 32, 6):
            temp = list()
            for i in range(i, i+6):
                temp.append(arr[i])
            times_available.append(temp)

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

    return data

'''
#For testing, you can run python reader.py <results.csv>

def main(argv):
  # Process command line arguments.
  # (You shouldn't need to change this.)
    if (len(argv) != 1):
        print 'Usage: reader.py <results>'
        sys.exit(2)
    csv = read_data(argv[0])
    print csv

if __name__ == "__main__":
  main(sys.argv[1:])
'''
