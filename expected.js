const add = (a, b) => a + b
add(1, 2) //> 3
add(-1, 1) //> 0
const result = add(1, 1) + add(2, 2)

// compute 2 * 5 + 3
const add3 = x => x + 3
const mul5 = x => x * 5
add3(mul5(2)) //> 13
