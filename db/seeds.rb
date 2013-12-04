# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#
# User.create!([
#   {username: "adam", password: "123456"},
#   {username: "anthony", password: "123456"},
#   {username: "benjamin", password: "123456"},
#   {username: "russell", password: "123456"}
# ])

Photo.create!(
  {owner_id: 1,url: "http://placekitten.com/200/300",title: "cat pic 1"},
)