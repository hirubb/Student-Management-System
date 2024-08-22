const router = require("express").Router();
let Student = require("../models/student");




router.route("/add").post((req,res)=>{ //Arrow function

    const name = req.body.name; //Get front end value as a request through body
    const age = Number(req.body.age);
    const nic = req.body.nic;

    const newStudent = new Student({//creating Student object
        name,
        age,
        nic
       
    })

    newStudent.save().then(()=>{   //pass values to database(Create)
        res.json("Student Added")
    }).catch((err)=>{
        console.log(err);
    }) 

})


router.route("/").get((req,res)=>{
    Student.find().then((students)=>{  //Get all users details(Read)
        
        res.json(students)

    }).catch((err)=>{
        console.log(err)
    })

})

//Check specific user 
router.route("/update/:id").put(async(req,res)=>{    //Update
    let userId = req.params.id; //param(id fetch as a parameter)
    const {name, age, nic} = req.body;

    const updateStudent = {
        name,
        age,
        nic
    }
    const update = await Student.findByIdAndUpdate(userId,updateStudent).then(()=>{ //(Update)
        res.status(200).send({states:"user updated"})

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({states: "Error with updating data",error:err.message});
    })
     
    

})  

router.route("/delete/:id").delete(async(req,res)=>{   //(Delete)
    let userid = req.params.id;

    await Student.findByIdAndDelete(userid)
    .then(()=>{
        res.status(200).send({states: "user deleted"});

    }).catch((err) => {
        console.log(err.message)
        res.status(500).send({states:"Error with delete user",error:err.message});
    })

})

router.route("/get/:id").get(async(req,res) =>{       //Read specific student details
    let userId = req.params.id;
    const user = await Student.findById(userId).then((students)=>{   //findOne(email)
         res.status(200).send({states:"user fetched",students})


    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({states:"error with get user",error:err.message});
    })  
    
})

module.exports = router;