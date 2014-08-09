class AddShoeId < ActiveRecord::Migration
  def change
    add_column :shoes, :shoe_id, :integer, default:nil
  end
end
