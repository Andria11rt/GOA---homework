# First way

# name = "Dato"
# last_name = "janzashvili"

# info = "Hello my name is " + name + "  " +  "my last name is " + last_name

# print(info)

# Second way

# name = "Dato"
# last_name = "janzashvili"

#                    {0} = daviti        {1} = janzashvili
# info = "Hello my name is {0} and my last name is{1}".format(name, last_name)
# print(info)

# Third way





# abouth_me = ["daviti", "Janezashvili"]


# name = "Dato"
# last_name = "janzashvili"

# info = f"Hello my name is {abouth_me} and my last name is {} "
# print(info)








# =======================================

# join() გამოიყენება იმისთვის,
# რომ ჩვენ ერთმანეთისგან გამოვყოთ მნიშნელობები ან ასობგერები სიმბოლოებით, რიცხვებით ან სტრინგებით



# x = " apple ".join(["spam", "eggs", "ham"])
# print(x)


# with string

# txt = "-".join("hello world")
# print(txt)







# =======================================
# split() გამოიყენება იმისთვის, რომ ჩვენ სტრინგიდან ამოვიღოთ ისეთი სიმბოლოები რომლებიც არ გვინდა,
# არამარტო სიმბოლოები, არამედ ასობგერები ან თუნდაც რიცხვები

# txt = "this#is#text#for#split"

# updeated_txt = txt.split("#",3)

# convert_str = "".join(updeated_txt)

# print(convert_str)



# =======================================


# replace() გამოიყვენება იმისთვის, რომ სტრინგში შეცვალოთ სიტყვები სხვა სიტყვებით 

# greet = "Hello group 30"

# change_value = greet.replace("30", "25")
# print(change_value)


# =======================================

# upper() გამოიყენება იმისთვის, რომ ასობგერები გაადიდოს

# lower() გამოიყენება იმისთვის, რომ ასობგერები დააპატარაოს

# x = "hello world"
# print(x.upper)

# x = "HELLO WORLD"
# print(x.upper)