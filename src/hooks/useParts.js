import { useEffect, useState } from "react";

const useParts = () => {
  const [parts, setParts] = useState([]);

  useEffect( ()=> {
    fetch('https://robotics-parts-store.herokuapp.com/parts', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      }
    })
    .then(res => res.json())
    .then(data => setParts(data.reverse()))
  }, []);

  return [parts, setParts];
};

export default useParts;