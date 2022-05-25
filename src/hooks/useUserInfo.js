import { useEffect, useState } from "react";

const useUserInfo = (email) => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect( ()=> {
      fetch(`http://localhost:5000/user/${email}`, {
        method: 'GET',
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        }
      })
      .then(res => res.json())
      .then(data => {
        setUserInfo(data);
      })
  }, [email]);

  return [userInfo];
  
};

export default useUserInfo;