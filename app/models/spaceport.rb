# == Schema Information
#
# Table name: spaceports
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
#  latitude    :float            not null
#  longitude   :float            not null
#

class Spaceport < ActiveRecord::Base
  validates( :name, :address, :user_id, :style, :price, :staff, :pads,
    :description, :latitude, :longitude, presence: true )
  validates :price, :numericality => { :greater_than => 0, :less_than_or_equal_to => 20000 }
  validates :staff, :numericality => { :greater_than => 0, :less_than_or_equal_to => 500 }
  validates :pads, :numericality => { :greater_than => 0, :less_than_or_equal_to => 100 }
   
  belongs_to :user
  
  has_many :photos, as: :photable
  has_many :comments, as: :commentable 
end
