require "byebug"

# # def range(start, ending)
# #     return [] if ending <= start
# #     range(start, ending - 1) << (ending - 1)
# #     # (start...ending).to_a
# # end
# # # Examples
# # p range(1, 5) #=> [1, 2, 3, 4]

# # def exp(b, n)
# #     return 1 if n == 0
    
# #     #recursion 1
# #     # b * exp(b, n - 1)

# #     # recursion 2

# #     if n.even?
# #         exp(b, n / 2) ** 2
# #     else
# #         b * (exp(b, (n - 1) / 2) ** 2)
# #     end
# # end

# # p exp(4, 3)   #=> 64
# # p exp(3, 6)   #=> 81

# # class Array 
# #     def deep_dup
# #         new_arr = []
# #         self.each do |el|
# #             if !el.is_a?(Array)
# #                 new_arr << el  
# #             else
# #                 new_arr << el.deep_dup
# #             end
# #         end
# #         new_arr
# #     end
# # end

# # p [["nuts", "bolts", "washers"],["capacitors", "resistors", "inductors"]].deep_dup
# # # p deep_dup(robot_parts)


# # def fibonacci(n)   #[0,1,1]
# #     # return [0] if n == 0 
# #     # return [0,1] if n == 1 
# #     # return [0,1,1] if n == 2
# #     return [0, 1].take(n) if n <= 2

# #     previous = fibonacci(2)[-1] + fibonacci(2)[-2]
# #     fibonacci(2) << previous
# # end
# # #  Examples
# # p fibonacci(0)


def bsearch(arr, target)
    return nil if arr.length < 1
    index = arr.length / 2
    middle = arr[index]
    
    left = arr[0...index]
    right = arr[index + 1..-1]  #[5, 9], 5
    
    if middle == target
        return index
    elsif target < middle
        bsearch(left, target)
    elsif target > middle
        if bsearch(right, target).nil?
            return nil 
        else
            bsearch(right, target) + left.length + 1
        end
    end
end
p bsearch([1, 2, 3], 1) # => 0
p bsearch([2, 3, 4, 5], 3) # => 1
p bsearch([2, 4, 6, 8, 10], 6) # => 2
p bsearch([1, 3, 4, 5, 9], 5) # => 3
p bsearch([1, 2, 3, 4, 5, 6], 6) # => 5
p bsearch([1, 2, 3, 4, 5, 6], 0) # => nil
p bsearch([1, 2, 3, 4, 5, 7], 6) # => nil
[38, 27, 43, 3, 9, 82, 10]

def merge_sort(array)
    
    return [] if array.length == 0
    return array if array.length == 1
    middle_idx = array.length / 2
    left = array[0...middle_idx]
    right = array[middle_idx..-1]
    merge_left = merge_sort(left)
    merge_right = merge_sort(right)
    merge(merge_left, merge_right)
    
end

def merge(arr1, arr2)
    new_arr = []
    i = 0
    j = 0 

    while i < arr1.length && j < arr2.length
        if arr1[i] < arr2[j]
            new_arr << arr1[i]
            i += 1
        else
            new_arr << arr2[j]
            j += 1
        end
    end

    while i < arr1.length 
        new_arr << arr1[i]
        i += 1
    end
    
    while j < arr2.length 
        new_arr << arr2[j]
        j += 1
    end

    new_arr
end


p merge_sort([38, 27, 43, 3, 9, 82, 10])    #=> [3, 9, 10, 27, 38, 43, 82]

class Array
  def subsets
    debugger
    return [[]] if empty?
    subs = take(count - 1).subsets
    subs.concat(subs.map { |sub| sub + [last] })
  end
end

# p [].subsets # => [[]]
# p [1].subsets # => [[], [1]]
# p [1,2].subsets # => [[], [1], [2], [1, 2]]
p [1,2,3].subsets # => [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
# [1, 12, 123, 2, 23, 3]

def permutations(arr)
    
end