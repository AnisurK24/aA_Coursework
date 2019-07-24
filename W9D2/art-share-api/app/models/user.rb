# t.datetime "created_at", null: false
# t.datetime "updated_at", null: false
# t.string "username", null: false

class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true

	has_many :arts,
		class_name: "Artwork",
		primary_key: :id,
    foreign_key: :artist_id,
    dependent: :destroy

	has_many :arts_viewed,
		class_name: "ArtworkShare",
		primary_key: :id,
    foreign_key: :viewer_id
    
  has_many :shared_artworks,
    through: :arts_viewed,
    source: :art,
    dependent: :destroy

end
