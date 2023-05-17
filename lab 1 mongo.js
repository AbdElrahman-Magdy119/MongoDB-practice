//show dbs
//use iti
//b.getName()
//db.createCollection("instructors")
//show collections
 let instructorsArray=[{_id:6,firstName:"noha",lastName:"hesham",

                 age:21,salary:3500,

                 address:{city:"cairo",street:10,building:8},

                 courses:["js","mvc","signalR","expressjs"]},

                 

                 {_id:7,firstName:"mona",lastName:"ahmed",

                 age:21,salary:3600,

                 address:{city:"cairo",street:20,building:8},

                 courses:["es6","mvc","signalR","expressjs"]},

                 

                 {_id:8,firstName:"mazen",lastName:"mohammed",

                 age:21,salary:7040,

                 address:{city:"Ismailia",street:10,building:8},

                 courses:["asp.net","mvc","EF"]},

                 

                 {_id:9,firstName:"ebtesam",lastName:"hesham",

                 age:21,salary:7500,

               address:{city:"mansoura",street:14,building:3},

                courses:["js","html5","signalR","expressjs","bootstrap"]} ];
                 
                 
//db.instructors.insertMany(instructorsArray)

//db.instructors.find()

//db.instructors.insertOne({_id:2 , age:32})



//db.instructors.find({})

//db.instructors.findOne()

//db.instructors.find().constructor.name

//db.instructors.find({}).forEach((document)=>{
  
// print(`${document.firstName} ${document.salary}`)

//})
 
 

 let min= instructorsArray[0].salary
 
 let max= instructorsArray[0].salary
 
 let count=0
 
 let sum=0


db.instructors.find({}).forEach((document)=>{
  
      if(min > document.salary)
       {
           min = document.salary       }
       
       if(max < document.salary )
       {
           max = document.salary       }
    
     count++;
     sum +=document.salary
       
})


print(min)
print(max)
print(sum/count)



















