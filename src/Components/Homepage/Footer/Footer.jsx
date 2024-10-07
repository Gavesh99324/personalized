import React from 'react'
import './Footer.css'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaTwitch } from 'react-icons/fa'


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
    items: ['Mental Health Resources', 'Support/Help']
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
    icon: FaGithub,
    link: 'https://www.github.com',
  },
]


export default function Footer() {
  return (
    <div>
      Footer
    </div>
  )
}
