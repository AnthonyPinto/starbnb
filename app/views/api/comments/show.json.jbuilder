json.( @comment, :id, :user_id, :body, :commentable_id, :commentable_type )

json.photo_url @comment.user.photos.first.url
json.username @comment.user.username



