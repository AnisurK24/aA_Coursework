
class Stack
    attr_reader :array
    def initialize
        @array = []
    end

    def push(ele)
        array.push(ele)
        ele
    end

    def pop
        array.pop
    end

    def peek
        array.last
    end
    
end



class Queue
    attr_reader :array
    def initialize
        @array = []
    end

    def enqueue(ele)
        array.push(ele)
        ele
    end

    def dequeue
        array.shift
    end

    def peek
        array.first
    end

end


class Map
    attr_reader :array
    def initialize
        @array = []
    end

    def set (key, value)
        key_value = array.index { |pair| pair[0] == key }
        if key_value
            array[key_value][1] = value
        else
            array.push([key, value])
        end
        value
    end

    def get(key)
        array.each do |pair|
            return pair[1] if pair[0] == key
        end
        nil
    end

    def delete(key)
        value = get(gey)
        array.reject! do |pair|
            pair[0] == key
        end
        nil
    end

    def show
        deep_dup(array)
    end

    def deep_dup(array)
        array.map do |ele|
            if ele.is_a?(Array)
                deep_dup(ele)
            else
                ele
            end
        end
    end
end