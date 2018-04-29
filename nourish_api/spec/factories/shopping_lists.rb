# shopping list factory
# spec/factories/shopping_lists.rb

FactoryBot.define do
  factory :shopping_list do
    name { Faker::Lorem.word }
    user_id nil
  end
end
