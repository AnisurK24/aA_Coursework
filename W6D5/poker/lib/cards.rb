class Cards 
    SUIT_STRINGS = {
        :clubs    => "♣",
        :diamonds => "♦",
        :hearts   => "♥",
        :spades   => "♠"
      }
    
      VALUE_STRINGS = {
        :deuce => "2",
        :three => "3",
        :four  => "4",
        :five  => "5",
        :six   => "6",
        :seven => "7",
        :eight => "8",
        :nine  => "9",
        :ten   => "10",
        :jack  => "J",
        :queen => "Q",
        :king  => "K",
        :ace   => "A"
      }

        RANKS = [
            :royal_flush,
            :straight_flush,
            :four_of_a_kind,
            :full_house,
            :flush,
            :straight,
            :three_of_a_kind,
            :two_pair,
            :one_pair,
            :high_card
        ]
        attr_reader :suits, :values
      def initialize(suits, value)
        @suits = suits
        @values = VALUE_STRINGS[value]
      end


    # Returns an array of all suits.
    def all_suits
        SUIT_STRINGS.keys
    end

  # Returns an array of all values.
    def all_values
        VALUE_STRINGS.keys
    end

end

