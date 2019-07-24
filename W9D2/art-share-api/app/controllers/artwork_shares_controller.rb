class ArtworkSharesController < ApplicationController
    
	def create
			share = ArtworkShare.new(artwork_share_params)
			if share.save
			render json: share
			else
			render json: share.errors.full_messages, status: :unprocessable_entity
			# 422 is the status code for an unprocessable entity.
			# You can either pass the status code or status symbol.
			# In other words, you can also return:
			# render json: share.errors.full_messages, status: 422
			end
	end

	def destroy
    share = ArtworkShare.find(params[:id])
    share.destroy
    render json: share
  end

  private

	def artwork_share_params
    params.require(:artwork_share).permit(:viewer_id, :artwork_id)
  end

end