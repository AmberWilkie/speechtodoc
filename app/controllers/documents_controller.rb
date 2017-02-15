class DocumentsController < ApplicationController
  before_action :get_documents, only: [:index, :create]

  def index

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

  def get_documents
    @documents = Document.all.reverse
  end

  def sanitized_params
    params.require(:document).permit(:title, :body)
  end
end
