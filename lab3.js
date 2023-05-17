//use inventory
//show collections

//************************1*********
//db.employee.aggregate([
// {$lookup:{
//         from:"department",
//         localField:"department_id",
//         foreignField:"department_id",
//         as:"departmentObject"
//     }  },
//      {"$unwind":"$departmentObject"},
//     {$project:{_id:0,full_name:1,des:"$departmentObject.department_description"}  }
//
//])
 
 //*******************************************************


//*********************2************
// db.employee.find(
// {position_title:"VP Country Manager"},
// {full_name:1,salary:1,_id:0} //)
// 
// ********************************


//*************************4**************
//db.product.find(
//{brand_name:"Washington"}
// )
//
//******************************************


//*******************************3**********
//db.customer.aggregate([
// {$lookup:{
//         from:"region",
//         localField:"address.customer_region_id",
//         foreignField:"region_id",
//         as:"reginObject"
//     }  },
//     {"$unwind":"$reginObject"},
//     {$project:{fullname:1,reg:"$reginObject.sales_region"}  }
//
//])
//
//
//***************************************

 depart.id to int  *****  convert


