require "cards"

describe Cards do 
    subject(:card) { Cards.new(:spade, :ten) }

    describe "initialize" do
        it "takes in a suit" do
            expect(card.suits).to eq(:spade)
        end

        it "takes a value" do
            expect(card.values).to eq("10")
        end
    end




end