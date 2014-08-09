class CreateShoes < ActiveRecord::Migration
  def change
    create_table :shoes do |t|
      t.integer :shoe_id
      t.integer :shows
      t.integer :likes

      t.timestamps
    end
  end
end
