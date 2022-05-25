import { useEffect, useState } from "react";

const useParts = () => {
  const [parts, setParts] = useState([]);

  useEffect( ()=> {
    fetch('http://localhost:5000/parts', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      }
    })
    .then(res => res.json())
    .then(data => setParts(data))
  }, []);

  return [parts, setParts];
};

export default useParts;