#1) დაწერეთ პითონის პროგრამა, რომელიც მოუწოდებს მომხმარებელს შეიყვანოს ორი რიცხვი და შემდეგ დაბეჭდოს მათი ჯამი.

number1 = int(input("Enter number 1:"))
number2 = int(input("Enter number 2:"))
print(number1 + number2)



#2)დაწერეთ პითონის პროგრამა, რომელიც ითვლის მართკუთხედის ფართობს. 
#პროგრამამ უნდა სთხოვოს მომხმარებელსმართკუთხედის სიგანე და სიმაღლე.

width = int(input("Enter the widh of the rectangle:"))
height = int(input("Enter the height of the rectangle:"))
area1 = width * height
print("The area of the rectangle is:",area1)

#3) დაწერეთ პითონის პროგრამა, რომელიც მოუწოდებს მომხმარებელს შეიყვანოს რიცხვი და შემდეგ დაბეჭდოს ამ რიცხვის ორმაგი.

number = int(input("Enter number:"))
print(number * 2)

#4)დაწერეთ პითონის პროგრამა, რომელიც ითვლის მართკუთხედის პერიმეტრს.
#პროგრამამ უნდა სთხოვოს მომხმარებელს მართკუთხედის სიგანე და სიმაღლე.

lenght = int(input("Enter lenght of rectangle:"))
width = int(input("Enter width of rectamgle:"))
result = ((lenght + width)* 2 )
print(result)

#5) დაწერეთ პითონის პროგრამა, რომელიც მოუწოდებს მომხმარებელს შეიყვანოს რიცხვი და 
#შემდეგ დაბეჭდოს ამ რიცხვის კვადრატი(გამოიყენეთ ** - ოპერატორი)

num1 = int(input("Enter number 1:"))
print(num1 ** 2)