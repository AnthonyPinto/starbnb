json.array! @ports do |port|
  
  json.( port, :id, :name, :address, :user_id, :style, :price, :staff, :pads,  :description, :created_at, :updated_at, :latitude, :longitude)

  json.photos port.photos do |photo|
    json.id photo.id
    json.url = photo.url
    json.photable_id photo.photable_id
    json.photable_type photo.photable_type
    json.created_at photo.created_at
    json.updated_at photo.updated_at
  end

  json.user do
    json.id = port.user.id
    json.username = port.user.username
  end

  json.user_photo do
    json.id port.user.photos.first.id
    json.url = port.user.photos.first.url
    json.photable_id port.user.photos.first.photable_id
    json.photable_type port.user.photos.first.photable_type
    json.created_at port.user.photos.first.created_at
    json.updated_at port.user.photos.first.updated_at
  end
end