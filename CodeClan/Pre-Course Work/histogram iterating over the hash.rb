puts "Enter a phrase you'd like to analyze: "
text = gets.chomp

words = text.split

frequencies = Hash.new(0)

words.each { |word| frequencies[word] += 1 }

frequencies = frequencies.sort_by { |a, b| b}

frequencies.reverse!

frequencies.each {|a,b| b
  puts a + " " + b.to_s
  }
