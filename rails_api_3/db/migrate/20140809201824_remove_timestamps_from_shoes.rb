class RemoveTimestampsFromShoes < ActiveRecord::Migration
  def change
    remove_column :shoes, :created_at, :string
    remove_column :shoes, :updated_at, :string
  end
end
