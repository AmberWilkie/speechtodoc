class DocumentsController < ApplicationController

  def index
    @documents = Document.all
  end

  def show
    @document = Document.find(params[:id])
  end

  def new
    @document = Document.new
  end

  def create
    @document = Document.create(sanitized_params)
    render 'index'
  end

  private

  def sanitized_params
    params.require(:document).permit(:title, :body)
  end
end
