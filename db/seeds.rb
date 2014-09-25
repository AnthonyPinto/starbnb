# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

anthony = User.create!({username: "anthony", password: "111111"})

appAcademy = anthony.ports.create({
  name: "AppAcademy", 
  address: "1061 Market St #4, San Francisco, CA 94103",
  style: "pad",
  price: 0,
  staff: 0,
  pads: 1,
  description: "I bet you could launch a bottle rocket out the window if you wanted"
})

moon = anthony.ports.create({
  name: "Cape Canaveral", 
  address: "Earth orbit, Sol system, Milky Way",
  style: "port",
  price: 950,
  staff: 2,
  pads: 1,
  description: "A luxury space-launch experience"
})

deathstar = anthony.ports.create({
  name: "Kennedy", 
  address: "A galaxy far far away",
  style: "field",
  price: 500,
  staff: 8,
  pads: 5,
  description: "No nonsense space program offerings"
})

bab5 = anthony.ports.create({
  name: "Cosmodrone", 
  address: "The edge of human space",
  style: "port",
  price: 700,
  staff: 4,
  pads: 2,
  description: "Space exploration straight from the motherland"
})

mars = anthony.ports.create({
  name: "Jeb's discount space-port and gifts", 
  address: "Mars, Sol system, Milky Way",
  style: "port",
  price: 100,
  staff: 13,
  pads: 10,
  description: "Look no further for all of your space-flight needs, fun for the whole family"
})

sun = anthony.ports.create({
  name: "Area 51", 
  address: "Venus, Sol system, Milky Way",
  style: "field",
  price: 15,
  staff: 2,
  pads: 1,
  description: "Perfect location for a discreet get away"
})