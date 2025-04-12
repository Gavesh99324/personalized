
import React from 'react';
import './Journal.css';
import Appointment from '../../Assets/Appointment.jpg';
import Doc from '../../Assets/Doc.jpg';
import Anxity from '../../Assets/Anxity.jpg';
import EMDR from '../../Assets/EMDR.jpg';
import Therapy from '../../Assets/Therapy.jpg';
import ShakeHand from '../../Assets/ShakeHand.jpg';
import { IoLogoApple } from "react-icons/io";
import LayerPic from '../../Assets/LayerPic.jpg';
import { IoPeopleOutline, IoSearch } from "react-icons/io5";
import Emily from '../../Assets/Emily.jpeg';


import { FaRegHandshake } from "react-icons/fa";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdSlowMotionVideo } from "react-icons/md";
import { TbMessage2 } from "react-icons/tb";
import { motion } from 'framer-motion';


import AppointmentForm from './AppointmentForm';
import MediaCard from './MediaCard';
import TherapistBooking from './TherapistBooking';
import SearchBar from './SearchBar';
import DetailCard from './DetailCard';


export default function Journal() {
  const header = [
    { icon: <FaRegHandshake className='icon-style-same' />, title: 'Start Your Healing Journey', information: 'Discover essential steps to enhance your mental health, leading to peaceful and balanced life.' },
    { icon: <HiOutlineQuestionMarkCircle className='icon-style' />, title: 'Mental Health FAQs', information: 'Access answers to frequently asked questions about mental wellness, treatment options, and available support services.' },
    { icon: <HiOutlineLightBulb className='icon-style' />, title: 'Wellness Knowledge Base', information: 'Explore a wide range of resources and articles to empower your mental health journey and wellbeing.' },
    { icon: <MdSlowMotionVideo className='icon-style-same' />, title: 'Guided Videos', information: 'Engage with videos that offer relaxation, mindfulness, and meditation techniques to improve mental wellness.' },
    { icon: <HiOutlineQuestionMarkCircle className='icon-style' />, title: 'My Mental Health Questions', information: 'Review your submitted inquiries, track responses, and receive personalized mental health support and guidance.' },
    { icon: <TbMessage2 className='icon-style' />, title: 'Live Support Chat', information: 'Get immediate assistance and personalized advice from a mental health professional through real-time chat.' },
  ];

  return (
    <>
      <div className="header-image">
        <img className="journal-image" src={Appointment} alt="Appointment" />
        <motion.h2 
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400 }} 
          className="journal-header">Appointment
        </motion.h2>
        <motion.h6 
           initial={{ width: 0 }}
           animate={{ width: 'fit-content' }}
           style={{ translateX: '-50%', translateY: '-50%' }}
           transition={{ duration: 1, ease: 'linear' }}
           className="journal-subheader typing-subtitle">
            Secure Your Spot for Healing and Support
        </motion.h6>
      </div>

      <AppointmentForm Doc={Doc} />

      <div className="ap-header">
        <h2 className='topic'>Healing Narratives: See the</h2>
        <h2 className='topic'>Impact of Our Approach</h2>
      </div>

      <MediaCard Anxity={Anxity} Therapy={Therapy} EMDR={EMDR} />

      <TherapistBooking ShakeHand={ShakeHand} IoLogoApple={IoLogoApple} LayerPic={LayerPic} Emily={Emily} IoPeopleOutline={IoPeopleOutline} />

      <SearchBar IoSearch={IoSearch} />

      <div className='detail-cards-container'>
        {header.map((item, index) => (
          <DetailCard key={index} icon={item.icon} title={item.title} information={item.information} />
        ))}
      </div>
    </>
  );
}























