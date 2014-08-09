class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.integer :user_id
      t.integer :shoes_liked_id
      t.integer :shoe1_dislliked_id
      t.integer :shoe2_disliked_id
      t.integer :shoe3_disliked_id

      t.timestamps
    end
  end
end
