import React, { useState, useEffect } from 'react';
import { Button, Card } from "antd";
import Banner from '../component/Banner';
import SecondCart from '../component/SecondCart';
import Footer from '../component/Footer';
import { Link } from 'react-router-dom';
const { Meta } = Card;

function Home() {
  const [furnitureProducts, setFurnitureProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Track loading state

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading state to true
      try {
        const response = await fetch("https://dummyjson.com/products/category/furniture");
        const data = await response.json();
        setFurnitureProducts(data.products); // Update state with fetched products
      } catch (error) {
        console.error("Error fetching furniture products:", error);
      } finally {
        setIsLoading(false); // Set loading state to false (even on errors)
      }
    };

    fetchData();
  }, []); // Empty dependency array to fetch data on component mount

  return (
    <>
      <Banner />
      <SecondCart />
      <div className=' '>
        <h1 className='text-center text-2xl font-bold m-4'>Our Products</h1>
        {isLoading ? (
          <p>Loading furniture products...</p>
        ) : (
          <div>

            <div className="furniture-cards flex   gap-4 m-4 flex-wrap">
              {/* Add a class for styling */}
              {furnitureProducts.map((data) => (
                <Card
                  key={data.id}
                  hoverable
                  style={{ width: 300 }}
                  cover={<img alt="example" src={data.images[0]} />}
                >
                  <Meta title={data.title} description={data.brand} />
                  <div className='flex justify-end'>


                    <Link to={`/Home/${data.id}`}>
                      <Button>View Details</Button>
                    </Link>
                  </div>

                </Card>
              ))}


            </div>
            <div className="flex flex-wrap m-4 inline-block">
              {furnitureProducts.map((data) => (
                <Card
                  key={data.id}
                  hoverable
                  style={{ width: 300 }}
                  cover={<img alt="example" src={data.images[0]} />}
                >
                  <Meta title={data.title} description={data.brand} />
                  <div className='flex justify-end'>
                    <Link to={`/Home/${data.id}`}>
                      <Button>View Details</Button>
                    </Link>
                  </div>

                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Home;