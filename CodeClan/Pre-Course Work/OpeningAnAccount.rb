class Account
  attr_reader :name, :balance
  def initialize(name, balance = 100)
    @name = name
    @balance = balance
  end
  
  public
  def display_balance(pin_number)
    puts pin_number == pin ? "Balance: $#{balance}." : pin_error
  end
  
  public
  def withdraw(pin_number, amount)
    if pin_number == pin
    @balnce -= amount
    puts "Withdrew #{amount}. New balance $#{@balance}."  
    else
    puts pin_error
    end
    
  private
  def pin
    @pin = 1234
  end
  private
  def pin_error
    "Access denied: incorrect PIN."
  end
  end
 end

 checking_account = Account.new("Angelina")