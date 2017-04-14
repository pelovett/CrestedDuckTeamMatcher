import random
import copy as cp

class Algorithm:

    def __init__(self, student_list, run_count=5, teamsize=3):
        self.students = student_list
        self.possible = []
        #possible will hold different cofigurations based on indexes into self.students
        self.team_size = teamsize
        self.iterations = run_count
        self.large_teams = len(student_list) % teamsize
        #The modulo of the teamsize is the number of +1 size teams
        self.team_count = len(student_list) // teamsize - self.large_teams
        #Total number of teams of the normal size

    def generate(self):
        for i in range(self.iterations):
            self.possible.append(Algorithm.rand_order(self.students))

    def score(self, config):
        #Pass in possible ordering and return an int score for ordering
        #Start by scoring all normal-sized teams
        size = self.team_size
        for index in range(team_count):
            team = config[size*index:size*(index+1)]
            #team is a list of the team member's indexes
            for stud in team:
                student = self.students[stud]

    def print(self):
        print("Raw students: ")
        for student in self.students:
            print(student)
        print("Possibilities: ")
        for team in self.possible:
            print("----")
            print(str(team))
        print("Team size: " + str(self.team_size))

        print("Number of normal teams: " + str(self.team_count))
        print("Number of teams with +1 members: " + str(self.large_teams))

    def set_team_size(self, newsize):
        self.team_size = newsize
        self.team_count = len(self.students) // newsize
        self.team_count += 0 if len(self.students) % newsize else 1

    def rand_order(a_list):
        length = len(a_list)
        temp_list = cp.deepcopy(a_list)
        for i in range(length):
            j = random.randint(i,length-1)
            temp = temp_list[i]
            temp_list[i] = temp_list[j]
            temp_list[j] = temp
        
        return temp_list



