
# function purpose: function should  print text: "HI"

# def say_hi():
     #print("HI")

# say_hi()

# 

# for i in range(1, 100,10):
     # print(i)
# for i in range(1, 100,10):
     # print(i)
# for i in range(1, 100,10):
     # print(i)
# for i in range(1, 100,10):
     # print(i)



# way 2 - with function

# def counts_num():
     # for i in range(1, 100, 10):
          # print(i)

# counts_num()
# counts_num()
# counts_num()
# counts_num()

















# def sum(a, b):
     # print(a + b)
     # print(a - b)
     # print(a * b)
     # print(a // b)

# sum(10, 15)
# sum(101, 125)









#საკლასო სამუშაო:


# 1. შექმენით ფუნქცია, რომელიც გამოიტანს x და y ჯამს, მოახდინეთ ოპერაცია შემდეგ ოპერატორებზე: +, -. *. //



def sum(x, y):
      print(x + y)
      print(x - y)
      print(x * y)
      print(x // y)

sum(12, 5)




# 2. შექმენით ფუნქცია, რომელიც მიესალმება მომხმარებელს.
# ტექსტი: 'გამარჯობა {სახელი}, კეთილი იყოს შენი მობრძანება,  გისურვებ წარმატებას და წინ სვლას"



def hello(name):
      print(" გამარჯობა ", name, " კეთილი იყოს შენი მობრძანება,  გისურვებ წარმატებას და წინ სვლას " )
      
name1 = str(input("Enter your name:"))
hello(name1)




# 3.შექმენით ფუნქცია, რომელიც სიყვარულის წერილს მიუძღვნის მომხმარებელს:

# ტექსტი თქვენ მოიფიქრეთ.

# ტექსტის ბოლოს აუცილებლად ჩაამატეთ ეს ნაწილი: 'სიყვარულით {სახელი}'


def love(name):
      print(" შენ ხარ ანგელოზი ეს არის შენთვის პოემა სიყვარულით ", name)

name2 = str(input("Enter your name:"))
hello(name2)






# default valius

def info(name, last_name, city="Unknow"):
      print(" my name is " + name + "  " + last_name, " I live in " + city)

info("temo", "jafarize", "tbilisi")








