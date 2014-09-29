# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

anthony = User.create!({
  username: "Anthony", 
  password: "111111",
  brief: "I am a web developer and a San Jose resident. I found myself involved in the business of spaceports rather unexpectedly during my final project at App Academy."

})

anthony.photos.create({
  url: "assets/user/anthony.jpg"
})

app = anthony.spaceports.create({
  name: "AppAcademy", 
  address: "San Francisco, CA USA",
  style: "pad",
  price: 0,
  staff: 8,
  pads: 1,
  description: "I guess you could launch a model rocket out the window if you really wanted",
  latitude: 37.781014,
  longitude: -122.411420
})

app.photos.create({
  url: "assets/spaceport/app.jpg"
})

charles = User.create!({
  username: "Charles", 
  password: "111111",
  brief: "As the current administrator of Nasa It is my pleasure to oversee the finest spaceports on earth. My crews and I would be happy to accomodate your next launch."
})

charles.photos.create({
  url: "assets/user/charles.jpg"
})

canaveral = charles.spaceports.create({
  name: "Cape Canaveral Air Force Station", 
  address: "Cape Canaveral, Florida, USA",
  style: "spaceport",
  price: 950,
  staff: 2,
  pads: 1,
  description: "A luxury launch experience",
  latitude: 28.4889,
  longitude: -80.5778
})

canaveral.photos.create({
  url: "assets/spaceport/canaveral.jpg"
})

kennedy = charles.spaceports.create({
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
  url: "assets/spaceport/kennedy.jpg"
})

oleg = User.create!({
  username: "Oleg", 
  password: "111111",
  brief: "You have not experienced space exploration until you have experienced a Russian space program. I look forward to meeting you and sharing all that the Russian Federal Space Agency has to offer."
})

oleg.photos.create({
  url: "assets/user/oleg.jpg"
})

cosmodrome = oleg.spaceports.create({
  name: "Baikonur Cosmodrome", 
  address: "Kazakh Steppe, Kazakhstan",
  style: "spaceport",
  price: 700,
  staff: 400,
  pads: 3,
  description: "Space exploration straight from the motherland",
  latitude: 45.9650,
  longitude: 63.3050
})

cosmodrome.photos.create({
  url: "assets/spaceport/cosmodrome.jpg"
})

jebs = anthony.spaceports.create({
  name: "Jeb's spaceport and family fun center", 
  address: "Eagle Grove, Iowa, USA",
  style: "spaceport",
  price: 100,
  staff: 4,
  pads: 1,
  description: "Look no further for all of your space-flight needs, bring the whole family",
  latitude: 42.668793,
  longitude: -93.903087
})

jebs.photos.create({
  url: "assets/spaceport/jebs.jpg"
})

smith = User.create!({
  username: "Smith", 
  password: "111111",
  brief: "You don't know who I am, but I know who you are. I cannot go into detail here, but they will be coming for you any day now. Trust no one, and above all remember, project nova must not fail."
})

smith.photos.create({
  url: "assets/user/smith.jpg"
})

area_51 = smith.spaceports.create({
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
  url: "assets/spaceport/area_51.jpg"
})