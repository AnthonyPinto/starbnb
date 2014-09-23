# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

anthony = User.create!({username: "anthony", password: "111111"})

appAcademy = anthony.spaces.create({
  name: "AppAcademy", 
  address: "1061 Market St #4, San Francisco, CA 94103",
  style: "planetoid",
  price: 0,
  guests: 25,
  bedrooms: 3,
  beds: 25,
  description: "Not bad if you don't mind the bugs"
})

moon = anthony.spaces.create({
  name: "The Moon", 
  address: "Earth orbit, Sol system, Milky Way",
  style: "moon",
  price: 950000,
  guests: 2,
  bedrooms: 1,
  beds: 1,
  description: "There is a reason this moon is 'the' moon"
})