require_relative "board"
require_relative "card"
require_relative "player"

class Game

    def initialize
        @board = Board.new
        @pgp = pgp
        @player_1 = Player.new
        @player_2 = Player.new
        @current_player = player_1
    end

    def play
        unless board.won?
            make_guess
        end
    end

    def over?

    end

    def make_guess
        puts "Enter your move (ex. 1 1) :"
        guessed_pos = gets.chomp.split.map(&:to_i)
    end

    def start_game
        @board.populate
    end

end