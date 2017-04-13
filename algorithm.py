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


