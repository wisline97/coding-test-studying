import sys

grade_arr = []
total_credit = 0
for get_input in range(20):
  subject, credit, grade = sys.stdin.readline().split()

  if grade == "P":
    continue

  credit = int(credit[0])
  total_credit += credit

  if grade == "A+":
    grade_arr.append(4.5 * credit)
  elif grade == "A0":
    grade_arr.append(4.0 * credit)
  elif grade == "B+":
    grade_arr.append(3.5 * credit)
  elif grade == "B0":
    grade_arr.append(3.0 * credit)
  elif grade == "C+":
    grade_arr.append(2.5 * credit)
  elif grade == "C0":
    grade_arr.append(2.0 * credit)
  elif grade == "D+":
    grade_arr.append(1.5 * credit)
  elif grade == "D0":
    grade_arr.append(1.0 * credit)
  elif grade == "F":
    grade_arr.append(0.0 * credit)

answer = sum(grade_arr) / total_credit
print(answer)