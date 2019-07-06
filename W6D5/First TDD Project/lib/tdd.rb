
def remove_dups(array)
    new_arr = array.map { |ele| ele unless new_arr.include?(ele) }  
end