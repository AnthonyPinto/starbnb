class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save
      render "show"
    else
      render json: @comment.errors.full_messages, status: :unprocessable_entity
    end
  end
  
  def comment_params 
    params.require(:comment).permit(:user_id, :body, :commentable_type, :commentable_id)
  end
end