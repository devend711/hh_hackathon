class AddDefaultValsToShoes < ActiveRecord::Migration
  def change
    change_column :shoes, :likes, :integer, :default => 0
    change_column :shoes, :shows, :integer, :default => 0
  end
end
