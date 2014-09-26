# == Schema Information
#
# Table name: photos
#
#  id            :integer          not null, primary key
#  photable_id   :integer
#  photable_type :string(255)
#  url           :string(255)
#  created_at    :datetime
#  updated_at    :datetime
#

class Photo < ActiveRecord::Base
  validates :photable_id, :photable_type, :url, presence: true
  
  belongs_to :photable, polymorphic: true
end
