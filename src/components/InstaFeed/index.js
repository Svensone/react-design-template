import React from 'react'
import InstagramEmbed from "react-instagram-embed";

import './style.css';

export const Instagram = () => {
  return (
      <div className="insta-main">
      
      <div className="instagram">
      <InstagramEmbed url="https://www.instagram.com/p/BqH2ZikAg8o/"
      maxWidth={320}
      hideCaption={false}
      containerTagName="div"
      protocol=""
      injectScript
      onLoading={() => {}}
      onSuccess={() => {}}
      onAfterRender={() => {}}
      onFailure={() => {}} 
      
      />
      </div>
      </div>
  );
};
