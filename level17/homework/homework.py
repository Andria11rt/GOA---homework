# 1)for loop-ის საშუალებით ტერმინალში გამოიტანეთ 30-ჯერ "GOA IS THE BEST"


for i in range(31):
    print("GOA  IS THE BEST")


# 2)for loop-ის საშუალებით ტერმინალში 5-დან 150-ის ჩათვლით ნომრები


for i in range(5,151):
    print(i)


# 3)for loop-ის საშუალებით ტერმინალში გამოიტანეთ 2-დან 50-ის ჩათვლით ნომრები ოღონდ ნაბიჯი იყოს 4
#ანუ ყოველ i-ს თითეულ ნაბიჯზე დაემატოს 4


for i in range(2,51,4):
    print(i)


# 4) for loop-ის საშუალებით ტერმინალში გამოიტანეთ  10-ჯერ ყოველი ( i ელემენტი და გვერდით მიუწერეთ, "GOA")
#i --------- საიტერაციო ცვლადი

for i in range(1,11,):
    print(i,"GOA")

# 5) დაწერეთ პროგრამა for loop-ის გამოყენებით, რომელიც გამოგვიტანს ჯერ ლუწს და შემდეგ კენტს.

for i in range(2,21):
    print(i)

# 6) შექმენით პროგრამა სადაც გამოიყენებთ While loop - ს.
# თქვენი დავალება იქნება ის, რომ მომხამრებელს შემოატანინოთ რიცხვი და თქვენ უნდა გამოიცნოთ ეს რიცხვი,
# ხოლო ყოველ არ გამოცნობილ რიცხვზე ისევ თავიდან უნდა შეგეკითხოთ და შეიყვანოთ რიცხვი.

number = int(input("Enter number:"))

guess_number = int(input("Guess the number:"))

while number != guess_number:
    guess_again_number = int(input("Guess again the namber:"))