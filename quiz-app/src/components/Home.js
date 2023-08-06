import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Navigation from './Navigation';
import ProgressBar from './ProgressBar';
import Separator from './Separator';
import Footer from './Footer';
import { AiOutlineSafetyCertificate } from 'react-icons/ai';
import { FaRegChartBar } from 'react-icons/fa';
import { IoIosAirplane } from 'react-icons/io';
import { BsGraphUp } from 'react-icons/bs';
import { HiOutlineColorSwatch } from 'react-icons/hi';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f0f0f0;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 20px;
`;

const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Home = () => {
  const topics = [
    {
      id: 1,
      icon: <AiOutlineSafetyCertificate />,
    },
    {
      id: 2,
      icon: <FaRegChartBar />,
    },
    {
      id: 3,
      icon: <IoIosAirplane />,
    },
    {
      id: 4,
      icon: <BsGraphUp />,
    },
    {
      id: 5,
      icon: <BsGraphUp />,
    },
    {
      id: 6,
      icon: <HiOutlineColorSwatch />,
    },
  ];

  const progressItems = [
    {
      title: 'Progress 1',
      icon: <BsGraphUp />,
      color: '#e74c3c',
      value: 25,
    },
    {
      title: 'Progress 2',
      icon: <BsGraphUp />,
      color: '#3498db',
      value: 50,
    },
    {
      title: 'Progress 3',
      icon: <BsGraphUp />,
      color: '#27ae60',
      value: 75,
    },
    {
      title: 'Progress 4',
      icon: <BsGraphUp />,
      color: '#f39c12',
      value: 90,
    },
  ];

  return (
    <AppContainer>
      <Header />
      <Separator height={20} /> {/* Add 20px of space */}
      <ResponsiveContainer>
        <Navigation topics={topics} />
        <ProgressBar progressItems={progressItems} />
      </ResponsiveContainer>
      <HomeContainer>
       
      </HomeContainer>
      <Footer />
    </AppContainer>
  );
};

export default Home;
