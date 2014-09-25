# == Schema Information
#
# Table name: ports
#
#  id          :integer          not null, primary key
#  name        :string(255)      not null
#  address     :string(255)      not null
#  user_id     :integer          not null
#  style       :string(255)      not null
#  price       :integer          not null
#  staff       :integer          not null
#  pads        :integer          not null
#  description :string(255)      not null
#  created_at  :datetime
#  updated_at  :datetime
#

class Port < ActiveRecord::Base
  validates( :name, :address, :user_id, :style, :price, :staff, :pads,
    :description, presence: true )
   
   
  belongs_to :user 
end
