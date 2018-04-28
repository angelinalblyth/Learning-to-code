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
  if movies[title.to_sym].nil?
  movies[title.to_sym] = rating.to_i
  puts "Added!"
    else
    puts "already on the system"
  end
when "update"
  puts "Enter a Movie title to update: "
  title = gets.chomp
  if movies[title.to_sym].nil?
    puts "Please add new title"
    else
    puts "Enter its new rating: "
    rating = gets.chomp
    movies[title.to_sym] = rating.to_i
  end
when "display"
 movies.each do |title,rating|
  puts "#{title}: #{rating}"
 end
when "delete"
  puts "Deleted!"
else
  puts "Error!"
end
