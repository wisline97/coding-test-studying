import sys
n = int(input())

for i in range(n):
    word1, word2 = sys.stdin.readline().split()
    print(word1,"&",word2, end=" ")
    word1 = sorted(list(word1))
    word2 = sorted(list(word2))

    if word1 == word2:
        print("are anagrams.")
    else:
        print("are NOT anagrams.")