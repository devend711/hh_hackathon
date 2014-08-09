class DummyRows < ActiveRecord::Migration
  def change
    (2..100).each do |num|
      Shoes.create :shoe_id => num
    end
  end
end
