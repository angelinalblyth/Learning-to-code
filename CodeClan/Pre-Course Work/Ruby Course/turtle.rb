strings = ["leonardo", "donatello", "raphael", "michaelangelo"]
# Write your code below this line!

symbolize = lambda { |turtles| turtles.to_sym}

# Write your code above this line!
symbols = strings.collect(&symbolize)
print symbols
