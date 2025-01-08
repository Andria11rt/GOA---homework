
# 1)for loop - ის დახმარებით, 126 - დან, 0 - მდე, საპირისპირო მიმართულებით გამოიტანეთ რიცხვები,
#  ჯერ 1 ნაბიჯით, შემდეგ 2 ნაბიჯით და შემდეგ 3 ნაბიჯით.(126, 125, 124 და ა.შ)

for i in range(126,0,-1):
    print(i)



for i in range(126,0,-2):
    print(i)


for i in range(126,0,-3):
    print(i)


# 2)for loop - ის დახმარებით 1 - დან 47 - მდე გამოიტანეთ რიცხვების ჯამი,
#  გამოიყენეთ ( + )ოპერატორი, ხოლო შემდეგ განახორციელეთ იგივე რამ, ( * ) - ოპერატორზე.


total = 0
for i in range(1,47):
    total+=1

    print(total)



total = 0
for i in range(1,47):
    total*=1

    print(total)





# 3)while loop  - ის დახმარებით, დაითვალეთ რიცხვი 100 - დან 1 - მდე.

count = 1
while count <= 100:
    count -= 1
    print(count)
