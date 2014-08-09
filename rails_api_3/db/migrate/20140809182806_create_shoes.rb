class CreateShoes < ActiveRecord::Migration
  def change
    create_table :shoes do |t|
      t.integer :likes
      t.integer :shows

      t.timestamps
    end
  end
end
