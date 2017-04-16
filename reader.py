import sys
import re

# Load data from a file
def read_data(filename):
    f = open(filename, 'r')
    p = re.compile(',')
    data = []
    header = f.readline().strip()
    varnames = p.split(header)
    data = list()
    for l in f:
        arr = list(l.split(","))
        complete_arr = list()
        for each in arr[1:]:
            complete_arr.append(each.replace('"', ''))
        data.append(complete_arr)
    return data

def main(argv):
  # Process command line arguments.
  # (You shouldn't need to change this.)
    if (len(argv) != 1):
        print 'Usage: perceptron.py <results>'
        sys.exit(2)
    csv = read_data(argv[0])
    print csv

if __name__ == "__main__":
  main(sys.argv[1:])
