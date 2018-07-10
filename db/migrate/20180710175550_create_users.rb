class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name, null:false
      t.string :last_name, null:false
      t.string :username, null:false
      t.string :email, null:false
      t.string :session_token, null:false
      t.string :password_digest, null:false
      t.integer :home_location_id, null:false
      t.string :user_status
      t.integer :age
      t.string :bio


      t.timestamps

    end
    add_index :users, [:username], unique: true
    add_index :users, [:email], unique: true
  end
end
