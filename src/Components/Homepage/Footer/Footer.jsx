
/*
import React from 'react'
import './Footer.css'
import { FaFacebook, FaWhatsapp, FaInstagram, FaTwitter, FaTwitch } from 'react-icons/fa'


const sections = [
  {
    title: 'Who We Are',
    items: ['About the Us', 'Contact Us']
  },
  {
    title: 'Privacy & Terms',
    items: ['Privacy Policy', 'Terms and Conditions']
  },
  {
    title: 'Helpful Resources',
    items: ['Health Resources', 'Support']
  },
  {
    title: 'Community and Support',
    items: ['Social Media Links', 'Feedback', 'Newsletter Subscription']
  },
]

const items = [
  {
    name: 'Facebook',
    icon: FaFacebook,
    link: 'https://www.facebook.com',
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    link: 'https://www.instagram.com',
  },
  {
    name: 'Twitter',
    icon: FaTwitter,
    link: 'https://www.twitter.com',
  },
  {
    name: 'Twitch',
    icon: FaTwitch,
    link: 'https://www.twitch.com',
  },
  {
    name: 'Github',
    icon: FaWhatsapp,
    link: 'https://www.Whatsapp.com',
  },
]


export default function Footer() {
  return (
    <>
    <div className='f1'>
      <div className='f2'>
        {
          sections.map((section, index) => (
            <div key={index} className='footer-section'>
              <h6 className='f3'>
                {section.title}
              </h6>
              <ul>
                {section.items.map((item, i) => (
                  <li key={i} className='f4'>
                    {item}
                  </li>
                 )
                )}
              </ul>
            </div>
           )
          )
        }

        <div className='f5'>
          <p className='f6'>
            Subscribe to Our Newsletter
          </p>
          <p className='f7'>
            The latest updates, articles and resources, sent to your inbox weekly.
          </p>
          <form className='f8'>
            <input type="email" placeholder='Enter email address' className='f9'/>
            <button className='f10'>
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className='f11'>
        <p className='f12'>
          © 2024 Healing Journey. All rights reserved.
        </p>

        <div className='f13'>
          {
            items.map((x, index) =>{
              return <x.icon key={index} className='f14' />
            })
          }
        </div>
      </div>
    </div>
    </>
  )
}


*/



import React, { useState } from 'react'
import './Footer.css'
import { FaFacebook, FaWhatsapp, FaInstagram, FaTwitter, FaTwitch } from 'react-icons/fa'
import PrivacyPolicyPopup from '../Privacy/PrivacyPolicyPopup'

const sections = [
  {
    title: 'Who We Are',
    items: ['About the Us', 'Contact Us']
  },
  {
    title: 'Privacy & Terms',
    items: ['Privacy Policy', 'Terms and Conditions']
  },
  {
    title: 'Helpful Resources',
    items: ['Health Resources', 'Support']
  },
  {
    title: 'Community and Support',
    items: ['Social Media Links', 'Feedback', 'Newsletter Subscription']
  },
]

const items = [
  {
    name: 'Facebook',
    icon: FaFacebook,
    link: 'https://www.facebook.com',
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    link: 'https://www.instagram.com',
  },
  {
    name: 'Twitter',
    icon: FaTwitter,
    link: 'https://www.twitter.com',
  },
  {
    name: 'Twitch',
    icon: FaTwitch,
    link: 'https://www.twitch.com',
  },
  {
    name: 'Github',
    icon: FaWhatsapp,
    link: 'https://www.Whatsapp.com',
  },
]

export default function Footer() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const openPopup = () => setIsPopupVisible(true);
  const closePopup = () => setIsPopupVisible(false);

  return (
    <>
      <div className='f1'>
        <div className='f2'>
          {
            sections.map((section, index) => (
              <div key={index} className='footer-section'>
                <h6 className='f3'>
                  {section.title}
                </h6>
                <ul>
                  {section.items.map((item, i) => (
                    <li
                      key={i}
                      className='f4'
                      onClick={item === 'Privacy Policy' ? openPopup : null} // Open popup on "Privacy Policy"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))
          }

          <div className='f5'>
            <p className='f6'>
              Subscribe to Our Newsletter
            </p>
            <p className='f7'>
              The latest updates, articles and resources, sent to your inbox weekly.
            </p>
            <form className='f8'>
              <input type="email" placeholder='Enter email address' className='f9'/>
              <button className='f10'>
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className='f11'>
          <p className='f12'>
            © 2024 Healing Journey. All rights reserved.
          </p>

          <div className='f13'>
            {
              items.map((x, index) => (
                <x.icon key={index} className='f14' />
              ))
            }
          </div>
        </div>
      </div>

      {/* Render PrivacyPolicyPopup and pass visibility state and close function */}
      <PrivacyPolicyPopup isVisible={isPopupVisible} closePopup={closePopup} />
    </>
  )
}




