puts "Enter: "
text = gets.chomp

words = text.split(" ")

frequencies = Hash.new(0)
words.each do
  |words| frequencies[words] += 1
end
