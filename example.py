x = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

y = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
]

result = [[0 for a in range(3)] for b in range(3)]

for i in range(len(x)):
    for j in range(len(y[0])):
        for k in range(len(y)):
            result[i][j] += x[i][k] * x[k][j]

for r in result:
    print r
