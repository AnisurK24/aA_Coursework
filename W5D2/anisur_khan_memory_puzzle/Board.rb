require_relative "card"

class Board
    

    def initialize
        @grid = Array.new(4) { Array.new(4) }
    end

    # def [](position)
    #     @grid[position[0]][position[1]]
    # end

    def [](pos)
        row, column = pos
        @grid[row][column]
    end

    def []=(pos, value)
        row, column = pos
        @grid[row][column] = value
    end

    # def []=(position, value)
    #     @grid[position[0]][position[1]] = value
    # end

    def populate
        (0...4).each do |idx1|
            (0...4).each do |idx2|
                # position = [idx1, idx2]
                @grid[idx1][idx2] = :A
        # @grid.each do |row|
        #     row.each do |ele|
        #         ele = :A
        end
    end

    def render
        system("clear")
        @grid.each { |row| puts row.join }
    end

    def won?
        @grid.all? do |row|
            row.all? do |ele|
                ele.faceup?
            end
        end
    end

    def reveal(guessed_pos)
        unless @grid[guessed_pos].faceup
            @grid[guessed_pos].value
        end
    end


end