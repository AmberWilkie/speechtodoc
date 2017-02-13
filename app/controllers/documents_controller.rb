class DocumentsController < ApplicationController

  def index
    # gon.clear
    # gon.document_text = 'default text'
    # @document_text = gon.document_text
  end

  def create
    binding.pry
    @document_text = Gon.global.document_text
    render 'index'
  end
end
