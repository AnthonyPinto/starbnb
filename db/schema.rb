# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20141002003538) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: true do |t|
    t.integer  "user_id"
    t.text     "body"
    t.integer  "commentable_id"
    t.string   "commentable_type"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "photos", force: true do |t|
    t.integer  "photable_id"
    t.string   "photable_type"
    t.string   "url"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "spaceports", force: true do |t|
    t.string   "name",        null: false
    t.string   "address",     null: false
    t.integer  "user_id",     null: false
    t.string   "style",       null: false
    t.integer  "price",       null: false
    t.integer  "staff",       null: false
    t.integer  "pads",        null: false
    t.string   "description", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.float    "latitude",    null: false
    t.float    "longitude",   null: false
  end

  create_table "users", force: true do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text     "brief"
  end

end
