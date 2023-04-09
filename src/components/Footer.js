import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
  return (
      <footer>
        <section className='contact'>
            <h4>Email:</h4> <a href='mailto:maddel89@gmail.com' target='_blank'>MaddeL89@gmail.com</a>
            <br/><br/>
            <h4>Social media:</h4>
            <div className='contact-socialmedia'>
            <SocialIcon url="https://www.linkedin.com/in/madde-lundstr%C3%B6m-143925269/" target='_blank' />
            <SocialIcon url="https://www.instagram.com/spiritualmaddie/" target='_blank' />
            <SocialIcon url="https://github.com/SpiritualMaddie" target='_blank' />
            </div>
        </section>
        <br/><br/>
          <p>&copy; {new Date().getFullYear()} Madde Lundström. All rights reserved.</p>
        </footer>
  );
}