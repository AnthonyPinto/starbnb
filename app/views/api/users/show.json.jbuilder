json.( @user, :id, :username, :brief )

json.photo do
  json.id @user.photos.first.id
  json.url @user.photos.first.url
  json.photable_id @user.photos.first.photable_id
  json.photable_type @user.photos.first.photable_type
  json.created_at @user.photos.first.created_at
  json.updated_at @user.photos.first.updated_at
end

json.spaceports @user.spaceports do |spaceport|
  
  json.id spaceport.id
  json.name spaceport.name
  json.address spaceport.address
  json.user_id spaceport.user_id
  json.style spaceport.style
  json.price spaceport.price
  json.staff spaceport.staff
  json.pads spaceport.pads
  json.description spaceport.description
  json.latitude spaceport.latitude
  json.longitude spaceport.longitude
  json.photos spaceport.photos do |photo|
    json.id photo.id
    json.url photo.url
    json.photable_id photo.photable_id
    json.photable_type photo.photable_type
    json.created_at photo.created_at
    json.updated_at photo.updated_at
  end
end



