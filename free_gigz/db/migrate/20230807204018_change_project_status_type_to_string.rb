class ChangeProjectStatusTypeToString < ActiveRecord::Migration[7.0]
  def up
    add_column :completed_projects, :new_project_status, :string
  end

  def down
    remove_column :completed_projects, :new_project_status
  end
end
