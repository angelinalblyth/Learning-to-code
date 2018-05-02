movies = {
  StarWars: 4.8,
  Divergent: 4.7
  }

puts "What would you like to do? "

choice = gets.chomp

case choice
when "add"
  puts "Enter a new movie: "
  title = gets.chomp
  puts "Enter its rating: "
  rating = gets.chomp
  movies[title.to_sym] = rating.to_i
  puts "Added!"
when "update"
  puts "Updated!"
when "display"
  puts "Movies!"
when "delete"
  puts "Deleted!"
else
  puts "Error!"
end
