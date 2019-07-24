# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Artwork.destroy_all
ArtworkShare.destroy_all

users = User.create([
    {username: "ivopavlov"},
    {username: "aniskhan"}
])

arts = Artwork.create([
    {title: "art1", image_url: "site1", artist_id:1},
    {title: "art2", image_url: "site2", artist_id:2},
    {title: "art3", image_url: "site3", artist_id:1},
    {title: "art4", image_url: "site4", artist_id:2},
    {title: "art5", image_url: "site5", artist_id:1}
])

art_shares = ArtworkShare.create([
    {viewer_id:2, artwork_id: 2},
    {viewer_id:2, artwork_id: 4},
    {viewer_id:1, artwork_id: 1},
    {viewer_id:1, artwork_id: 3},
    {viewer_id:2, artwork_id: 5}
])

# Artwork schema
# t.string "title", null: false
# t.string "image_url", null: false
# t.integer "artist_id", null: false