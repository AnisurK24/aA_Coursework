

# O(n**2)

def sluggish_octopus(array)

    sorted = false
    while !sorted
        sorted = true

        (0...array.length - 1).each do |i|
            if array[i].length > array[i + 1].length
                array[i], array[i + 1] = array[i + 1], array[i]
            end
        end
    end
    array[-1]
end

p sluggish_octopus(['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']) #=> "fiiiissshhhhhh"

#----------------------------------------------------------------------------
# O(n log n)

def dominant_octopus(array)
    return array if array.length <= 1

    midpoint = array.length / 2
    sorted_left = dominant_octopus(array.take(midpoint))
    sorted_right = dominant_octopus(array.drop(midpoint))

    merge(sorted_left, sorted_right)
    
  end

def merge(left, right)
    merged = []

    until left.empty? || right.empty?
        case left.first <= right.first
        when true
        merged << left.shift
        when false
        merged << right.shift
        end
    end
    merged + left + right
    merged
end

p dominant_octopus(['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']) #=> "fiiiissshhhhhh"

#----------------------------------------------------------------------------
# O(n)

def clever_octopus(fishes)
  #hold the biggest fish
  biggest_fish = fishes.first

  fishes.each do |fish|
    if fish.length > biggest_fish.length
      #update the biggest fish
      biggest_fish = fish
    end
  end

  biggest_fish
end

p clever_octopus(['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']) #=> "fiiiissshhhhhh"

#----------------------------------------------------------------------------
def slow_dance(direction, tiles_array)
  tiles_array.each_with_index do |tile, index|
    return index if tile == direction
  end
end


#----------------------------------------------------------------------------
tiles_hash = {
    "up" => 0,
    "right-up" => 1,
    "right"=> 2,
    "right-down" => 3,
    "down" => 4,
    "left-down" => 5,
    "left" => 6,
    "left-up" => 7
}

def fast_dance(direction, tiles_hash)
  tiles_hash[direction]
end
#----------------------------------------------------------------------------