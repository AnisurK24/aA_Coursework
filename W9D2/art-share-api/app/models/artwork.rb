# t.string "title", null: false
# t.string "image_url", null: false
# t.integer "artist_id", null: false
# t.datetime "created_at", null: false
# t.datetime "updated_at", null: false
# t.index ["artist_id"], name: "index_artworks_on_artist_id"

class Artwork < ApplicationRecord
  validates :title, uniqueness: { scope: :artist_id }, presence: true
	validates :title, :image_url,  presence: true

	belongs_to :artist,
		class_name: "User",
		primary_key: :id,
		foreign_key: :artist_id

	has_many :art_shares,
		class_name: "ArtworkShare",
		primary_key: :id,
		foreign_key: :artwork_id

	has_many :shared_veiwers,
		through: :art_shares,
		source: :viewer

end

