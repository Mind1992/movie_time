class MoviesController < ApplicationController

  def index
    @movies = Movie.all

    respond_to do |format|
      format.json { render :json => @movies }
    end
  end

  def new
    @movie = Movie.new
  end

  def create
    @movie = Movie.new
    @movie.title = params[:movieTitle]
    if @movie.save
      respond_to do |format|
        format.json { render :json => @movie, :status => 201 }
      end
    else
      respond_to do |format|
        format.json { render :json => @movie.errors, :status => 422 }
      end
    end
  end

  def show
    @movie = Movie.find(params[:id])

    respond_to do |format|
      format.json { render :json => @movie }
    end
  end

  def edit
    @movie = Movie.find(params[:id])
  end

  def update
    @movie = Movie.find(params[:id])
    if @movie.update(movie_params)
      respond_to do |format|
        format.json { head :no_content }
      end
    else
      respond_to do |format|
        format.json { render :json => @movie.errors, :status => 422 }
      end
    end
  end

  def destroy
    @movie = Movie.find(params[:id])
    @movie.destroy

    respond_to do |format|
      format.json { head :no_content}
    end
  end

  private

  def movie_params
    params.require(:movie).permit(:title)
  end
end
