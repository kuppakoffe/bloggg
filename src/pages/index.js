import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

function Index() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <Helmet>
        <title>Sumit</title>
      </Helmet>
      <h1>Last week this happened!</h1>
      <h2>
       Hey there! I tried something exciting or found something exciting, I write about it here.
      </h2>
      <br />
      
    </main>
  );
}

export default Index;
