import React from "react";
import { BsTwitter,  BsLinkedin, BsGithub, } from "react-icons/bs";

 const url= {
   twitter: "https://x.com/maick_moren",
   linkedin: "https://www.linkedin.com/in/ewirlin-smith-83773a280/",
   github: "https://github.com/DevSaga532/DevSaga532"
 }
const SocialMedia = () => (
  
  <div className="app__social">
    
    <div>
      <BsTwitter onClick={() => window.open(url.twitter, "_blank")}   />
    </div>
    <div>
      <BsLinkedin onClick={() => window.open(url.linkedin, "_blank")} />
    </div>
    <div>
      <BsGithub onClick={() => window.open(url.github, "_blank")} />
    </div>

   
  </div>
);

export default SocialMedia;
