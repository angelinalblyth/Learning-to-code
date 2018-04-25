def alphabetize(arr, rev=false)
  if rev
  return arr.reverse!
    else
    return arr.sort!
end
end
numbers = [1, 3, 6, 4]

puts alphabetize(numbers) 
