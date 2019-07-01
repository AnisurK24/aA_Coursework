#Problem 1: 

def sum_recur(array)
    return 0 if array.length == 0
    array[0] + sum_recur(array[1..-1])

end

p sum_recur([1,2,3,4])

#Problem 2: 

def includes?(array, target)
    return true if target == array[0]
    return false if array.empty?
    includes?(array[1..-1], target)
end

p includes?([1,2,3,4], 5)

# Problem 3: 

def num_occur(array, target)
    count = 0
    count += 1 if target == array[0]
    return count if array.empty?
    count + num_occur(array[1..-1], target)
end

p num_occur([1,3,1,2,4,1], 1)

# Problem 4: 

def add_to_twelve?(array)
    return true if array[0] + array[1] == 12
    return false if array.length == 1
    add_to_twelve?(array[1..-1])
    
end

p add_to_twelve?([2, 4, 6, 6, 2, 4])


# Problem 5: 

def sorted?(array)
return true if array.length == 1
return false if array[0] > array[1]
# return true if array[0] < array[1]
sorted?(array[1..-1])

end

p sorted?([1, 2, 3, 4, 2])

# Problem 6: 

def reverse(string)
end
