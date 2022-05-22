import axios from 'axios';
import React, { useEffect, useState } from 'react';
import fetcher from '../api/axios_common_url';

const Services = () => {
  const [services, setServices] = useState([]);
  console.log(services);
  useEffect(() => {
    // axios.get('http://localhost:5000/services').then(res => setServices(res.data));

    (async () => {
      const res = await fetcher.get('/services');
      setServices(res.data);
    }
    )()
  }, [])
  return (
    <div>
      <h3>Some services{services.length}</h3>
    </div>
  );
};

export default Services;