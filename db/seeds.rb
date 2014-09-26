# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

anthony = User.create!({username: "anthony", password: "111111"})

anthony.photos.create({
  url: "assets/user/anthony.jpg"
})

app = anthony.ports.create({
  name: "AppAcademy", 
  address: "1061 Market St #4, San Francisco, CA 94103",
  style: "pad",
  price: 0,
  staff: 8,
  pads: 1,
  description: "I guess you could launch a model rocket out the window if you really wanted",
  latitude: 37.781014,
  longitude: -122.411420
})

app.photos.create({
  url: "assets/port/app.jpg"
})

canaveral = anthony.ports.create({
  name: "Cape Canaveral Air Force Station", 
  address: "Cape Canaveral, Florida, USA",
  style: "port",
  price: 950,
  staff: 2,
  pads: 1,
  description: "A luxury launch experience",
  latitude: 28.4889,
  longitude: -80.5778
})

canaveral.photos.create({
  url: "assets/port/canaveral.jpg"
})

kennedy = anthony.ports.create({
  name: "Kennedy Space Center", 
  address: "Merritt Island, Florida, USA",
  style: "field",
  price: 500,
  staff: 8,
  pads: 5,
  description: "No nonsense space program offerings",
  latitude: 28.574687,
  longitude: -80.638674
})

kennedy.photos.create({
  url: "assets/port/kennedy.jpg"
})

cosmodrome = anthony.ports.create({
  name: "Baikonur Cosmodrome", 
  address: "Kazakh Steppe, Kazakhstan",
  style: "port",
  price: 700,
  staff: 400,
  pads: 3,
  description: "Space exploration straight from the motherland",
  latitude: 45.9650,
  longitude: 63.3050
})

cosmodrome.photos.create({
  url: "assets/port/cosmodrome.jpg"
})

jebs = anthony.ports.create({
  name: "Jeb's discount space-port and family fun center", 
  address: "Eagle Grove, Iowa, USA",
  style: "port",
  price: 100,
  staff: 4,
  pads: 1,
  description: "Look no further for all of your space-flight needs, bring the whole family",
  latitude: 42.668793,
  longitude: -93.903087
})

jebs.photos.create({
  url: "assets/port/jebs.jpg"
})

area_51 = anthony.ports.create({
  name: "Area 51", 
  address: "Bald Mountain, Nevada, USA",
  style: "field",
  price: 15,
  staff: 50,
  pads: 3,
  description: "Perfect location for a discreet get away",
  latitude: 37.2350,
  longitude: -115.8111
})

area_51.photos.create({
  url: "assets/port/area_51.jpg"
})