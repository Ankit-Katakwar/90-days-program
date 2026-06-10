# class Person:
#     def __init__(self,name,age,location,):
#         self.name = name
#         self.age = age
#         self.location = location
#     def greet(self):
#             print(f"Hello there, my name is {self.name},and my age is {self.age} and I live in {self.location}.")

  
  
  


# person1 = Person("Ankit",43,"Bhopal")

# person1.greet()

# def greeting(name,age,loc):
#     print(f"My name is {name}, im {age} years old and i live in {loc}.")
    
# greeting("Ankit",43,"Bhopal")
# greeting("Prachi",93,"kallukhapa")




# class Parents:
#     def __init__(self,name,age):
#         self.name = name 
#         self.age = age

#     def show(self):
#         print(f"My name is {self.name} and my age is {self.age}")     

# class Childs(Parents):
#     def __init__(self, name, age, school):
#         super().__init__(name,age)
#         self.school = school
#     def show(self):
#         print(f"My name is {self.name} and my age is {self.age} and I study in {self.school}.")   



# # parent1 = Parents("Ankit","23")
# child1 = Childs("Savvy",32,"Bihari sarkari school.")

# child1.show()


# class GrandFactory:
#     def __init__(self,material):
#         self.material = material
#     def show(self):
#         print(f"I want {self.material}.")

# class ParentFactory(GrandFactory):
#     def __init__(self, material,glasses):
#         super().__init__(material)
#         self.glasses = glasses


# class ChildFactory(ParentFactory):
#     def __init__(self,material,glasses,tyres):
#         super().__init__(material,glasses)
#         self.tyres = tyres
#     def show(self):
#         print(f"I want {self.material} and {self.tyres}")

# lamborgini = ChildFactory("Carbon Fibers",2,4)
# toyota = ChildFactory("Carbon Fibers",4,4)
# lamboFactory = GrandFactory("Iron")

# print(lamborgini.material)
# lamborgini.show()
# lamboFactory.show()
        


class Human :
    def __init__(self,name,age):
        self.name = name
        self.age = age
        
    
    def __add__(self,other):
        sum = 0 
        for i in other:
            sum = sum = other.age
        return f"The age of both the humans are {self.age + sum}"    
    


obj1=Human("Ankit",23)
obj2=Human("Savvy",24)
obj3=Human("Saevvy",2)
obj4=Human("Sravvy",4)
obj5=Human("Savvey",254)
obj6=Human("Sagvvy",294)

print(obj1.age + obj2.age+ obj3.age+ obj4.age+obj5.age+obj6.age)

    

    