class DocumentsController < ApplicationController

  def index
    # gon.clear
    # gon.document_text = 'default text'
    @document_text = gon.document_text
  end

  def create
    render 'index'
  end
end
