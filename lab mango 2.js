//  a)db.instructors.find()


// b)db.instructors.find(
//{ salary:{$gt:4000}
 //   },
//{firstName:1,salary:1,_id:0}//)

//c)db.instructors.find(
//{ age:{$gt:20}
//    })

//d)db.instructors.find(
//{ 
//    "address.city":"mansoura","address.street":{$in:[10,14]}
//    
//    },
//{firstName:1,salary:1,_id:0,address:1}
//)


//e)db.instructors.find(
//{ 
//    courses:{$all:["js","mvc"]}
//    
//    })



//f)db.instructors.find().forEach((document)=>{
//   let c = document.courses.length
//   print(`${document.firstName} ${c}`)
//})


//g)let result = db.instructors.find().sort({firstName:1,lastName:-1})
//
//
//  result.forEach((document)=>{
//      
//      print(`Fullname : ${document.firstName}  ${document.lastName}  Age :  ${document.age}  `) // })


//h)db.instructors.deleteMany(
//{firstName:"ebtesam",courses:{$size:5} }
//);
//  
 

//i)db.instructors.updateMany({},
//  {$set:{active:true}}
//)


//j)db.instructors.updateMany(
//{firstName:"mazen",lastName:"mohammed",courses:"EF"},
//{
//   $set:{"courses.$":"jquery"}//}//)


//k)db.instructors.updateMany(
//{firstName:"noha",lastName:"hesham"},
//{$addToSet:{courses:"jquery"}}//)



//l)db.instructors.updateMany(
//{firstName:"mona",lastName:"ahmed"},
//{$unset:{courses:""}}//)

//m)db.instructors.updateMany(
//{courses:{$size:3}},
//{$inc:{salary:-500}}//)

//n)db.instructors.updateMany(
//{},
//{$rename:{address:"fullAddress"}}//)


//o)db.instructors.updateMany(
//{firstName:"noha",lastName:"hesham"},
//{$set:{"fullAddress.street":20}}//)
  












































