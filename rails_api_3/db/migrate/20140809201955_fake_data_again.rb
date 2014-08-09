class FakeDataAgain < ActiveRecord::Migration
  def change
    (1..100).each do |num|
      Shoes.create :shoe_id => num
    end
  end
end
