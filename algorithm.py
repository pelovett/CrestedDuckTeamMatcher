<<<<<<< HEAD
import random
import copy as cp

class Algorithm:


    def __init__(self, student_list, run_count=5, teamsize=3):
        self.students = student_list
        self.possible = []
        #Possible will hold different cofigs based on indexes into self.students
        self.team_size = teamsize
        self.iterations = run_count
        #The number of teams of +1 size is the modulo of the stu count
        self.large_teams = len(student_list) % teamsize
        #We need to subtract the large teams from the # of normal teams
        self.team_count = len(student_list) // teamsize - self.large_teams
        self.best = [0,0]


    def generate(self):
        #Produce a series of random team assignments
        for i in range(self.iterations):
            self.possible.append(Algorithm.rand_order(self.students))

        #Score each team and set best to point at the best one
        for j in range(len(self.possible)):
            cur_score = self.score(self.possible[j])
            if(cur_score > self.best[1]):
                self.best[1] = cur_score
                self.best[0] = j


    def get_best(self):
        #Produce list of lists containing students
        result = []
        size = self.team_size
        for i in range(self.team_count):
            result.append(self.student_list[size*i:size*(index+1)])
        for i in range(self.large_teams):
            result.append(self.student_list[size*self.team_count+(size+1)*i :
                                            size*self.team_count+(size+1)*(i+1)] )

        #Now replace the student objects with student names
        for team in result:
            for stu in team:
                stu = stu["name"]
        
        #Return list of teams, having names as strings
        return result


    def compare_sched(self, schedA, schedB):
        mySum = 0
        for i in range(len(schedA)):
            if schedA[i] and schedB[i]:
                mySum += 1
        return mySum


    def score(self, config):
        #Pass in possible ordering and return an int score for ordering
        #Start by scoring all normal-sized teams
        size = self.team_size
        team_list = []
        #Now loop through config and populate team_list
        #Slice teams for reg size then large size
        for index in range(self.team_count):
            team_list.append(config[size*index:size*(index+1)])
        for index in range(self.large_teams):
            team_list.append(
                    config[size*self.team_count+(size+1)*index :
                           size*self.team_count+(size+1)*(index+1)] )

        #Now iterate over team_list summing the scores of each team
        total = 0
        for team in team_list:
            count = len(team)
            for mem in range(count):
                cur = int(mem)
                while(cur < count):
                    #Compare team members, we don't need to include the 
                    #previous team members bc already compared to us
                    index_b = team[cur]
                    index_a = team[mem]
                    #TODO Produce real test data and test this
                    total += self.compare_sched(index_a["schedule"], index_b["schedule"])
                    cur += 1

        #Return an integer score of the team configuration
        return total


    def print(self):
        print("Raw students: ")
        for student in self.students:
            print(student)
        print("\nPossibilities: ")
        for team in self.possible:
            print("----")
            for member in team:
                print(member['name'])
        print("\nEnd Possibilities\n")
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

