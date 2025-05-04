
# განსაზღვრეთ ფუნქცია სახელწოდებით simple_calculator, რომელიც იღებს სამ არგუმენტს:

# num1: პირველი რიცხვი (მთლიანი ან float).
# num2: მეორე რიცხვი (მთლიანი ან float).

# ოპერაცია: სტრიქონი, რომელიც განსაზღვრავს შესასრულებლად ოპერაციას.
# ის შეიძლება იყოს „დამატება“, „გამოკლება“, „გამრავლება“ ან „გაყოფა“.
# ფუნქციის შიგნით,

# გამოიყენეთ if და elif განცხადებები, რათა დაადგინოთ
# რომელი ოპერაცია უნდა შეასრულოთ ოპერაციის არგუმენტის მნიშვნელობიდან გამომდინარე.

# ფუნქციამ უნდა დააბრუნოს ოპერაციის შედეგი.

# თუ ოპერაცია არის „გაყოფა“ და num2 არის 0, ფუნქციამ უნდა დააბრუნოს „შეცდომა: ნულზე გაყოფა შეუძლებელია“.
# ჩაწერეთ კოდი, რომ გამოიძახოთ ფუნქცია სხვადასხვა ოპერაციებით და დაბეჭდოთ შედეგები.


num1 = float(input("Enter number:"))

num2  = float(input("Enter number:"))

do = input("Enter your choice of calculetion:")

def simple_calculator(num1,num2,do):
    
 if do == "-":

    oper = num1 - num2
    print(oper)

 elif do == "+":

    oper = num1 + num2
    print(oper)

 elif do =="*":

    oper = num1 * num2
    print(oper)

 elif do =="/":
    oper = num1 / num2
    print(oper)

 else:
    print("wrong inpyt try again:")

simple_calculator(num1, num2, do)