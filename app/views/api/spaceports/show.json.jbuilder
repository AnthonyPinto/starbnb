


json.( @spaceport, :id, :name, :address, :user_id, :style, :price, :staff, :pads, :description, :created_at, :updated_at, :latitude, :longitude)

json.photos @spaceport.photos do |photo|
  json.id photo.id
  json.url photo.url
  json.photable_id photo.photable_id
  json.photable_type photo.photable_type
  json.created_at photo.created_at
  json.updated_at photo.updated_at
end

json.user do
  json.id @spaceport.user.id
  json.username @spaceport.user.username
end

json.user_photo do
  json.id @spaceport.user.photos.first.id
  json.url @spaceport.user.photos.first.url
  json.photable_id @spaceport.user.photos.first.photable_id
  json.photable_type @spaceport.user.photos.first.photable_type
  json.created_at @spaceport.user.photos.first.created_at
  json.updated_at @spaceport.user.photos.first.updated_at
end