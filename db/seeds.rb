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
  price: 950,
  guests: 2,
  bedrooms: 1,
  beds: 1,
  description: "There is a reason this moon is 'the' moon"
})

deathstar = anthony.spaces.create({
  name: "The Deathstar", 
  address: "A galaxy far far away",
  style: "space station",
  price: 899,
  guests: 8,
  bedrooms: 3,
  beds: 5,
  description: "Cozy rooms, big swishy doors"
})

bab5 = anthony.spaces.create({
  name: "Babylon 5", 
  address: "The edge of human space",
  style: "space station",
  price: 40,
  guests: 4,
  bedrooms: 2,
  beds: 2,
  description: "Exciting cultural exchange"
})

mars = anthony.spaces.create({
  name: "Mars", 
  address: "Mars, Sol system, Milky Way",
  style: "planetoid",
  price: 1250,
  guests: 13,
  bedrooms: 5,
  beds: 10,
  description: "Easy walk from the mysterious ruins of the long dead martian empire"
})

sun = anthony.spaces.create({
  name: "Sol", 
  address: "Sol, Sol system, Milky Way",
  style: "star",
  price: 15,
  guests: 2,
  bedrooms: 1,
  beds: 1,
  description: "Looking for a real hot spot? ultra modern design"
})