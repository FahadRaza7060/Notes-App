import axios from "axios";


const api_url="http://localhost:8000/api/auth/"
// Register user

const Register = async(userData)=>{
    console.log(userData);
const response =await axios.post(api_url + "createuser",userData)
return response.formdata
}
// Login User
const login=async(userData)=>{
const response=await axios.post(api_url+"login",userData)
console.log(userData);
if (response.data)
{
    localStorage.setItem("user",JSON.stringify(response.data))
    const getdata = localStorage.getItem("user");
    console.log("getdata",getdata)
    console.log("response.data",response.data)
}    
return response.data
}

const authservice={
    Register,
    login
}

export default authservice;