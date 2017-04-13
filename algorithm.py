import random

class Algorithm:

    def __init__(self, student_list, run_count=10):
        self.students = student_list
        self.possible = []
        self.iterations = run_count

    def generate(self):
        for i in range(run_count):
            self.possible.append(rand_order(self.students))



    def rand_order(a_list):
        length = len(a_list)

        for i in range(length):
            j = random.randint(i,length-1)
            temp = a_list[i]
            a_list[i] = a_list[j]
            a_list[j] = temp

        return a_list

class Student:
        #A class to wrap all data for a student
        #Format:
        #   name         = String with user name
        #   email        = String of email address
        #   schedule     = String of binary describing acceptable timeslots
        #   skills       = String of ints describing comfort with skills
        #   pref_partner = email of partner to match desired
        #   pref_project = int describing desired project
        
    def __init__(self, answer_dict):
        self.name         = answer_dict["Name"]
        self.email        = answer_dict["Email"]
        self.schedule     = answer_dict["Schedule"]
        self.skills       = answer_dict["Skills"]
        self.pref_partner = answer_dict["Partners"]
        self.pref_project = answer_dict["Project"]
