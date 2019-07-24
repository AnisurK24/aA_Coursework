# t.integer "artwork_id", null: false
# t.integer "viewer_id", null: false
# t.datetime "created_at", null: false
# t.datetime "updated_at", null: false

class ArtworkShare < ApplicationRecord
  validates :artwork_id, :viewer_id, presence: true

	belongs_to :viewer,
		class_name: "User",
		primary_key: :id,
		foreign_key: :viewer_id

	belongs_to :art,
		class_name: "Artwork",
		primary_key: :id,
		foreign_key: :artwork_id

end