module Api
  module V1
  class LikesController < ApplicationController
    skip_before_filter :verify_authenticity_token
    respond_to :json

    def render_if_saved(color)
      if color.save
        respond_to do |format|
          format.json {render :json => color}
        end
      end
    end

    def increment_shows

    end


  end
    end
end