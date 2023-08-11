# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_08_09_085235) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "access_tokens", force: :cascade do |t|
    t.string "token"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "clients", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "company_name"
    t.text "company_info"
    t.string "profile_picture"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_clients_on_user_id"
  end

  create_table "completed_projects", force: :cascade do |t|
    t.bigint "freelancer_id", null: false
    t.bigint "client_id", null: false
    t.integer "project_status"
    t.date "completed_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "job_listing_id", null: false
    t.string "new_project_status"
    t.index ["client_id"], name: "index_completed_projects_on_client_id"
    t.index ["freelancer_id"], name: "index_completed_projects_on_freelancer_id"
    t.index ["job_listing_id"], name: "index_completed_projects_on_job_listing_id"
  end

  create_table "freelancers", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "name"
    t.text "portfolio"
    t.string "skills"
    t.string "profile_picture"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_freelancers_on_user_id"
  end

  create_table "job_listings", force: :cascade do |t|
    t.bigint "client_id", null: false
    t.string "title"
    t.text "description"
    t.float "budget"
    t.date "deadline"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["client_id"], name: "index_job_listings_on_client_id"
  end

  create_table "mpesas", force: :cascade do |t|
    t.string "phoneNumber"
    t.string "amount"
    t.string "checkoutRequestID"
    t.string "merchantRequestID"
    t.string "mpesaReceiptNumber"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "proposals", force: :cascade do |t|
    t.bigint "freelancer_id", null: false
    t.bigint "job_listing_id", null: false
    t.text "project_details"
    t.float "cost_estimate"
    t.string "timeline"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "accepted"
    t.boolean "rejected"
    t.index ["freelancer_id"], name: "index_proposals_on_freelancer_id"
    t.index ["job_listing_id"], name: "index_proposals_on_job_listing_id"
  end

  create_table "review_ratings", force: :cascade do |t|
    t.bigint "client_id", null: false
    t.bigint "freelancer_id", null: false
    t.integer "rating"
    t.text "review"
    t.bigint "completed_project_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["client_id"], name: "index_review_ratings_on_client_id"
    t.index ["completed_project_id"], name: "index_review_ratings_on_completed_project_id"
    t.index ["freelancer_id"], name: "index_review_ratings_on_freelancer_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "email"
    t.integer "role"
    t.boolean "is_admin", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "clients", "users"
  add_foreign_key "completed_projects", "clients"
  add_foreign_key "completed_projects", "freelancers"
  add_foreign_key "completed_projects", "job_listings"
  add_foreign_key "freelancers", "users"
  add_foreign_key "job_listings", "clients"
  add_foreign_key "proposals", "freelancers"
  add_foreign_key "proposals", "job_listings"
  add_foreign_key "review_ratings", "clients"
  add_foreign_key "review_ratings", "completed_projects"
  add_foreign_key "review_ratings", "freelancers"
end
