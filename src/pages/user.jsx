import React, { useState, useEffect } from 'react';
import MySwiper from '../components/swiper/Swiper';
import axios from 'axios';
export default function User() {
  // const slider = [
  //   {
  //     title: "Discover New Products",
  //     description: "Explore our extensive range of new arrivals and find the latest products to suit your needs.",
  //     image: slider_1
  //   },
  //   {
  //     title: "Exclusive Discounts",
  //     description: "Enjoy exclusive discounts and special offers on your favorite items. Limited time only!",
  //     image: slider_2
  //   },
  //   {
  //     title: "Top Categories",
  //     description: "Browse through our top categories to find what you're looking for quickly and easily.",
  //     image: "https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150104509.jpg?t=st=1715959864~exp=1715963464~hmac=e1d02a88fd5d833fb3951ffbcdb804ec4d135a1578ab3e9d1e633539780537d5&w=1060"
  //   },
  //   {
  //     title: "Customer Favorites",
  //     description: "Check out the products our customers love the most. Tried, tested, and highly rated!",
  //     image: "https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150038911.jpg?t=st=1715959429~exp=1715963029~hmac=2cfaed7bf9c9097bb4c87275206ca79063133c045b821e8d538bc049c5ec1a24&w=900"
  //   },
  //   {
  //     title: "Fast Shipping",
  //     description: "Get your orders delivered fast with our reliable shipping options. Shop now and receive your items quickly.",
  //     image: "https://img.freepik.com/free-photo/red-delivery-car-deliver-express-shipping-fast-delivery-with-arrow-graph-background-3d-rendering_56104-1906.jpg?t=st=1715959546~exp=1715963146~hmac=82cbd1b77c8c0a1d402a508aea4266dd6f75ea752cde91f12bd7efd76620c134&w=1380"
  //   },
  //   {
  //     title: "Secure Payments",
  //     description: "Shop with confidence knowing your transactions are safe and secure with our robust payment system.",
  //     image: "https://img.freepik.com/free-photo/person-paying-using-nfc-technology_23-2149893749.jpg?t=st=1715959607~exp=1715963207~hmac=2927351aa20c4f6ba21906fe0424eee90cdccb563020176e7cdd2591a4d52a71&w=1060"
  //   },
  //   {
  //     title: "Gift Cards",
  //     description: "Give the gift of choice with our customizable gift cards. Perfect for any occasion!",
  //     image: "https://img.freepik.com/free-photo/smartphone-near-shopping-trolley-present-boxes_23-2147957573.jpg?t=st=1715959655~exp=1715963255~hmac=f0228fcdd8a4bda83d133f708977770a734e59dfd0fee251e49c5d0f977c2a4e&w=1060"
  //   },
  //   {
  //     title: "Daily Deals",
  //     description: "Don’t miss out on our daily deals. New offers available every day to help you save more.",
  //     image: "https://img.freepik.com/free-photo/market-trends-concept-with-smartphone_23-2150372420.jpg?t=st=1715959703~exp=1715963303~hmac=e87c98fc452a7564178fa82dcb89fa2b067ba20a756ec61824ecf860d868c880&w=740"
  //   },
  //   {
  //     title: "Customer Support",
  //     description: "We're here to help! Contact our customer support team for any assistance you may need.",
  //     image: "https://img.freepik.com/free-photo/online-help-center_53876-95304.jpg?t=st=1715959748~exp=1715963348~hmac=acce8546e23d1055a328955e0f5ed0ff0ec29d9b363fa146ac1099be11c7bd74&w=740"
  //   },
  //   {
  //     title: "Download Our App",
  //     description: "Get the best shopping experience on the go. Download our app today and start shopping!",
  //     image: "https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169854.jpg?t=st=1715959792~exp=1715963392~hmac=72273321258f8dbd501fb6994b8b49edea0470833507f777f158dd11ba0a4c3c&w=1060"
  //   }
  // ];
  const [data, setData] = useState([]);
  useEffect(()=> {
    fetchData();
  },[]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://node-react-js.vercel.app/api/slider');
      if (response.status === 200) {
        setData(response.data);
        console.log(response); 
      } else {
        console.error('Response not ok:', response.statusText);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  
  return (
    <div className='container'>
        <h1 className='heading'>Marketing App</h1>
        <p className='text'>Discover and shop for the latest products with our market app. Enjoy exclusive discounts, fast shipping, and secure payments. Stay updated with daily deals and new arrivals. Download now for a seamless shopping experience!"</p>
        <MySwiper slider={data} />
    </div>
  );
}
