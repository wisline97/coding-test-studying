num = list(map(int, input().split()))
diff = [[num[0]-0,num[1]-0], [num[2]-num[0],num[3]-num[1]]]
mindiff = [min(diff[0]),min(diff[1])]
print(min(mindiff))