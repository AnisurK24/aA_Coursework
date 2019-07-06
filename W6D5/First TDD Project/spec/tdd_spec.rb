require "tdd"


describe "Remove Dups" do
    it "removes array duplicates" do
        expect(remove_dups).to receive([1, 2, 2, 3, 3, 4])
        # array = [1, 2, 2, 3, 3, 4]
        expect(remove_dups([1, 2, 2, 3, 3, 4])).to eq([1, 2, 3, 4])
        # expect(array).to eq([1, 2, 3, 4])
    end
end


# describe "#dups" do
#   it "solves a simple example" do
#     expect([1, 3, 0, 1].dups).to eq({ 1 => [0, 3] })
#   end

#   it "finds two dups" do
#     expect([1, 3, 0, 3, 1].dups).to eq({ 1 => [0, 4], 3 => [1, 3] })
#   end

#   it "finds multi-dups" do
#     expect([1, 3, 4, 3, 0, 3].dups).to eq({ 3 => [1, 3, 5] })
#   end

#   it "returns {} when no dups found" do
#     expect([1, 3, 4, 5].dups).to eq({})
#   end
# end