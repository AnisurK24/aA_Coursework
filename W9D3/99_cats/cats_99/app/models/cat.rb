require "action_view"

class Cat < ApplicationRecord
    include ActionView::Helpers::DateHelper

    validates :color, inclusion: %w(White Black Grey Brown Purple Blonde)
    validates :sex, inclusion: ["M", "F"]
    validates :sex, :birth_date, :name, :color, presence: true

    def age
        time_ago_in_words(birth_date)
    end

end
