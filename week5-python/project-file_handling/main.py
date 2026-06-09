
from pathlib import Path
def viewAllFiles():
    path = Path(r"")
    items = list(path.rglob('*'))
    
    for i , item in enumerate(items):
       print(f"{i}:{item}")
    
    
    
 


def createfile():
    viewAllFiles()
    try:
        name = input("Please Enter the name of the file you want to create.")
        p=Path(name)
        
        if not p.exists():
            with open(p,'w') as fn:
                data = input("Please enter the data for the file.")
                fn.write(data)
                
                fn.close()
                print("File created successfully.")
        else:
            print("This file already exists.")
    except Exception as err:
        print(f"There is an err occured as {err}")


def readfile():
    viewAllFiles()
    try:
        name = input("Enter the name of the file you want to open.")
        p = Path(name)
        if p.exists():
            with open(p) as fn:
                data = fn.read()
                print(data)
        else:
            print("This file does not exists.")
        
    except Exception as err:
        print(f"There is an err as {err}")


def updatefile():
    viewAllFiles()
    name = input("Please enter the name of the file you want to update.")
    p=Path(name)
    if p.exists():
        print("Press 1 if you want to overwrite a file")
        print("Press 2 if you want to append data in a file")
        
        updatenum = int(input("Please enter the preferred option."))
        
        if updatenum == 1:
            with open(p, "w") as fn:
                data = input("Please enter the data you want to overwrite.")
                fn.write(data)
                print("The entire file has been updated successfully.")
                
        if updatenum == 2 :
            with open(p,"a") as fn:
                data = input("Please enter the data you want to append.")
                fn.write(data)
                print("The data has been added in the file successfully")
             
    else:
        print("This file does not exist.")    
    
    
    
print("press 1 to Create a file.")
print("press 2 to Read a file.")
print("press 3 to Update a file.")
print("press 4 to Delete a file.")


num = int(input("Please enter a preferd number :- "))


if num == 1:
    createfile()
if num == 2:
    readfile()
if num == 3:
    updatefile()