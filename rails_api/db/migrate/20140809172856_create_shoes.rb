class CreateShoes < ActiveRecord::Migration
  def change
    create_table :shoes do |t|
      t.integer :shoe_id, null:false
      t.integer :shows, default:0
      t.integer :likes, default:0
    end
  end
end
