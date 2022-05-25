import { useContext, useEffect, useState } from "react";
import { NameContext } from "../App";

const useToken = user => {
  const [token, setToken] =  useState('');
  const [userName] = useContext(NameContext);

  useEffect( ()=> {
    const email = user?.user?.email;
    const role = "user";
    const currentUser = { email: email, name: userName, role: role };
    
    if(email){
      fetch(`http://localhost:5000/user/${email}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const accessToken = data.token;
        localStorage.setItem('accessToken', accessToken);
        setToken(accessToken);
      })
    }
  }, [user, userName])

  return [token];
}

export default useToken;