import { useEffect, useState } from "react";

const useReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect( ()=> {
    fetch('https://robotics-parts-store.herokuapp.com/reviews', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      }
    })
    .then(res => res.json())
    .then(data => setReviews(data?.reverse()))
  }, []);

  return [reviews, setReviews];
};

export default useReviews;