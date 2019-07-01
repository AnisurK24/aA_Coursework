class Card
    attr_accessor :faceup, :value
    attr_reader 

    VALUES = ['a', 'b', 'c', 'd']     #[A, A, B, B, C, C, D, D, E, E, F, F, G, G, H, H]

    def intialize
        @value = 256
        @faceup = faceup
    end

    def hide
        @faceup = false
    end

    def reveal
        @faceup = true
        return @value
    end

    def faceup?
        @faceup
    end

    def to_s

    end

    def ==(other_value)
        @value == other_value
    end


end
