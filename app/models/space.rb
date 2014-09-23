class Space < ActiveRecord::Base
  validates( :name, :address, :user_id, :style, :price, :guests, :bedrooms, :beds,
    :description, presence: true )
   
   
  belongs_to :user 
end
