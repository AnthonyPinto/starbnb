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

anthony.photos.create!({
  url: "assets/user/anthony.jpg"
})

app = anthony.spaceports.create!({
  name: "AppAcademy", 
  address: "San Francisco, CA USA",
  style: "pad",
  price: 1,
  staff: 2,
  pads: 1,
  description: "I guess you could launch a model rocket out the window if you really wanted",
  latitude: 37.781014,
  longitude: -122.411420
})

app.photos.create!({
  url: "assets/spaceport/app.jpg"
})

richard = User.create!({
  username: "Richard", 
  password: "111111",
  brief: "I am the founder of Virgin group, and it is always my pleasure to introduce newcomers to the unparalleled amenities of Virgin Galactic"
})

richard.photos.create!({
  url: "assets/user/richard.jpg"
})

america = richard.spaceports.create!({
  name: "Spaceport America", 
  address: "NM, USA",
  style: "pad",
  price: 3500,
  staff: 35,
  pads: 2,
  description: "The cutting edge of space exploration technology",
  latitude: 32.9903,
  longitude: -106.9697
})

america.photos.create!({
  url: "assets/spaceport/america.jpg"
})

chen = User.create!({
  username: "Chen", 
  password: "111111",
  brief: "The CNSA is leading into the future of space travel and research. I am excited to be able to offer truly exceptional launch options."
})

chen.photos.create!({
  url: "assets/user/chen.jpg"
})

jiuquan = chen.spaceports.create!({
  name: "Jiuquan Satellite Launch Center", 
  address: "Gobi Desert, China",
  style: "field",
  price: 4000,
  staff: 300,
  pads: 4,
  description: "Chinas oldest and most prolific spaceport. Come be part of a proud tradition of excellence.",
  latitude: 40.9606,
  longitude: 100.2983
})

jiuquan.photos.create!({
  url: "assets/spaceport/jiuquan.jpg"
})


charles = User.create!({
  username: "Charles", 
  password: "111111",
  brief: "As the current administrator of Nasa It is my pleasure to oversee the finest spaceports on earth. My crews and I would be happy to accommodate your next launch."
})

charles.photos.create!({
  url: "assets/user/charles.jpg"
})

canaveral = charles.spaceports.create!({
  name: "Cape Canaveral Air Force Station", 
  address: "Cape Canaveral, Florida, USA",
  style: "spaceport",
  price: 9000,
  staff: 2,
  pads: 1,
  description: "A luxury launch experience",
  latitude: 28.4889,
  longitude: -80.5778
})

canaveral.photos.create!({
  url: "assets/spaceport/canaveral.jpg"
})

kennedy = charles.spaceports.create!({
  name: "Kennedy Space Center", 
  address: "Merritt Island, Florida, USA",
  style: "field",
  price: 3000,
  staff: 8,
  pads: 5,
  description: "No nonsense space program offerings",
  latitude: 28.574687,
  longitude: -80.638674
})

kennedy.photos.create!({
  url: "assets/spaceport/kennedy.jpg"
})

oleg = User.create!({
  username: "Oleg", 
  password: "111111",
  brief: "You have not experienced space exploration until you have experienced a Russian space program. I look forward to meeting you and sharing all that the Russian Federal Space Agency has to offer."
})

oleg.photos.create!({
  url: "assets/user/oleg.jpg"
})

cosmodrome = oleg.spaceports.create!({
  name: "Baikonur Cosmodrome", 
  address: "Kazakh Steppe, Kazakhstan",
  style: "spaceport",
  price: 7500,
  staff: 400,
  pads: 3,
  description: "Space exploration straight from the motherland, a true classic",
  latitude: 45.9650,
  longitude: 63.3050
})

cosmodrome.photos.create!({
  url: "assets/spaceport/cosmodrome.jpg"
})

smith = User.create!({
  username: "Smith", 
  password: "111111",
  brief: "You don't know who I am, but I know who you are. I cannot go into detail here, but they will be coming for you any day now. Trust no one, and above all remember, project nova must not fail."
})

smith.photos.create!({
  url: "assets/user/smith.jpg"
})

area_51 = smith.spaceports.create!({
  name: "Area 51", 
  address: "Bald Mountain, Nevada, USA",
  style: "field",
  price: 6500,
  staff: 50,
  pads: 3,
  description: "Perfect location for a discreet get away",
  latitude: 37.2350,
  longitude: -115.8111
})

area_51.photos.create!({
  url: "assets/spaceport/area_51.jpg"
})

guest = User.create!({
  username: "Guest", 
  password: "111111",
  brief: "A new explorer"
})

guest.photos.create!({
  url: "assets/user/guest.jpg"
})

jebs = guest.spaceports.create!({
  name: "Jeb's spaceport and family fun center", 
  address: "Eagle Grove, Iowa, USA",
  style: "spaceport",
  price: 999,
  staff: 4,
  pads: 1,
  description: "Look no further for all of your space-flight needs, bring the whole family",
  latitude: 42.668793,
  longitude: -93.903087
})

jebs.photos.create!({
  url: "assets/spaceport/jebs.jpg"
})