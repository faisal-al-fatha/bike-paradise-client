import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/Authprovider";


const useVerifyRole = email =>{
    const { setUserRole } = useContext(AuthContext);
    const [role, setRole] = useState('');
    const [verifyLoading, setVerifyLoading] = useState(true)
   useEffect(()=>{
    if(email){
        fetch(`https://bike-paradise-server-faisal-al-fatha.vercel.app/users/role/${email}`)
    .then(res => res.json())
    .then(data=>{
        console.log(data.role);
        setUserRole(data.role);
        setRole(data.role);
        setVerifyLoading(false)

    })
    }
   }, [email, setUserRole])
   return [role]
}

export default useVerifyRole;