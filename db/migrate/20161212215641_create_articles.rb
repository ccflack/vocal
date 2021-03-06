class CreateArticles < ActiveRecord::Migration[5.0]
  def change
    create_table :articles do |t|
      t.string :title
      t.string :link
      t.text :description
      t.string :source
      t.datetime :date

      t.timestamps
    end
  end
end
