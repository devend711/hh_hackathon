module Api
  class ShoesController < ApplicationController
    respond_to :json

    def render_if_saved(record)
      if record.save
        respond_to do |format|
          format.json {render :json => record}
        end
      end
    end

    def index
      respond_with(Shoes.all)
    end

    def show
      respond_with(Shoes.find(params[:id]))
    end

    def create
      @shoe = Shoe.new(shoe_params)
      @shoe.save
      render_if_saved(@shoe)
    end

    def inc_likes
      @shoe = Shoes.find(params[:id])
      @shoe.likes += 1
      @shoe.save
      render_if_saved(@shoe)
    end

    def inc_shows
      @shoe = Shoes.find(params[:id])
      @shoe.shows += 1
      @shoe.save
      render_if_saved(@shoe)
    end

    def destroy
      respond_with Shoe.destroy(params[:id])
    end
  end
end