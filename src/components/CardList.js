import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import '../styles/components/CardList.css';

export default function CardList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get('https://images-api.nasa.gov/search?q=apollo%2011')
      .then(function (response) {
        setData(response.data.collection.items);
      })
      .catch(function (error) {
        console.log(`"Lo siento, falló" ${error.message}`);
      })
      .finally(function () {
        setLoading(false);
      });
  }, []);
  console.log(data);
  return (
    <div className='container-list'>
      {loading ? (
        <p>Loading</p>
      ) : (
        data.slice(0, 10).map((data) => {
          return (
            <Card
              title={data.data[0].title}
              description={data.data[0].description}
              image={data.links ? data.links[0].href : null}
            />
          );
        })
      )}
    </div>
  );
}
