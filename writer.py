import csv

'''
data = [[["Peter Lovett", "plovett@uoregon.edu"], ["Cathy Webster", "cwebster@uoregon.edu"]], [["Kathryn Lovett", "klovett2@uoregon.edu"], ["Wyatt Reed", "wyatt@uoregon.edu"], ["Bob Bogus", "bbogus@uoregon.edu"]]]
'''

def csv_writer(data, path):
    with open(path, "w", newline='') as csv_file:
        writer = csv.writer(csv_file, delimiter=',')
        for line in data:
            writer.writerow(line)

#csv_writer(data, "results.csv")