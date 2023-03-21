const studentControllers = {}
const students = []

const search = (studentId) =>{

    for(let index = 0;index<students.length;index++){
        if(students[index].id==studentId){
            return [true,index]
        }
    }

    return [false,-1]
}


studentControllers.sendStudentDetails = (req,res)=>{

    const studentId = req.params
    const [found,dataIndex] = search(studentId)
    if(found){
        res.send(students[dataIndex])
    }
    else{
        res.send("Student Details Not Found")
    }


}

studentControllers.addStudentDetails = (req,res)=>{

    const data = req.body 
    students.push(data)
    res.send("Successfully Submited")

}

studentControllers.updateStudentDetails = (req,res)=>{

    const id = req.params
    const updateData = req.body 
    const [found,dataIndex] = search(id)
    if(found){
        students[dataIndex] = updateData
    }
    else{
        res.send("Student Details Not Found")
    }

}

studentControllers.deleteStudentDetails =(req,res)=>{

    const id = req.params 
    const [found,dataIndex] = search(id)
    if(found){
        students.slice(dataIndex,dataIndex)
        res.send(
            "Successfully Deleted the Student Details"
        )
    }
    else{
        res.send("Not Found the Details ")
    }
    
}



module.exports = studentControllers