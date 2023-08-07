class AddAcceptedAndRejectedToProposals < ActiveRecord::Migration[7.0]
  def change
    add_column :proposals, :accepted, :boolean
    add_column :proposals, :rejected, :boolean
  end
end
