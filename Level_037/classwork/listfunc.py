# len() is used to display the number of valiues in the list 

# values = ["a string", 50, True, 10,5, False]
# print(len(values))


# ===================


# letters = ["a","b", "c"]

# letters += ["f"]

# print(letters)


# ===================

# str = "giorgi"

# str *= 2

# print(str)

# x = "ball"
# y = 10
# print(x * y)


# ==================

# append() is used to add value to list(will be added to the end of the list)


# values = ["a string", 50, True, 10,5, False]

# values.append(1238)
# values.append("this is added value to list")
# print(values)


# =================

# insert() is used to add value to list at specific index.


# values = ["a string", 50, True, 10,5, False]

# values.insert(2, "hello neighbor")
# print(values)


# ================
# index() is used to display the index of the value from the lis.


# values = ["a string", 50, True, 10,5, False]
# print(values.index(True))

# ================
# max(list): Returns the maximum value.
# min(list): Returns the minimum value.

# values = [5, 10, 15, 20, 25]
# print(max(values))
# print(min(values))

# str = ["abc", "a"]
# print(max(str))
# print(min(str))



# ================
# list.count(item): Returns a count of how many times an item occurs in a list.

# values = ["a string", 50, True, 50, 10,5, False, False]

# print(values.count(False))



# ===============

# list.remove(item): Removes an item from a list. 

# values = ["a string", 50, True, 50, 10,5, False]
# values.remove(False)

# print(values)



# ================

# list.reverse(): Reverses items in a list

# values = ["a string", 50, True, 10,5, False]
# values.reverse()
# print(values)








# STRING FUNCTIONS ====================

# format() Strings have a format() function, which enables values to be embedded in it, using placeholders

# nums = [10, 20, 30]

# str = "Number: {0} {1} {2}".format(nums[0], nums[1], nums[2])
# print(str)

# name = "saba"
# age = 14
#=======================================

# format_str = "my name is {} and i am {} years old".format("saba", 14)
# print(format_str)
# =======================================
# format_str = "my name is {name} and i am {age} years old".format(name = "saba",age = 14)
# print(format_str)



# =======================================

# join() joins a list another string as a separator 

x = ", ".join(["spam", "eggs", "ham"])

print(x)

