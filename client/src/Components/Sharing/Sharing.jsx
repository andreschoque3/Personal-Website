import React from 'react'
import './Sharing.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareNodes } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faXTwitter, faFacebookSquare} from '@fortawesome/free-brands-svg-icons'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  LinkedinShareButton,
  TwitterShareButton,
  FacebookShareButton,
} from 'react-share';

function Sharing() {

  //copy link to clipboard

  const currentUrl = window.location.href;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl);
    toast.success('Link copied to clipboard')
  };

  return (
    <div>
        <div className='socials'>
            <LinkedinShareButton url={currentUrl}>
                <a href="#linkedin-share"><FontAwesomeIcon icon={faLinkedin} /></a>
            </LinkedinShareButton>
            <TwitterShareButton url={currentUrl}>
                <a href='#twitter-share'><FontAwesomeIcon icon={faXTwitter}/></a>
            </TwitterShareButton>
            <FacebookShareButton url={currentUrl}>
                <a href="#facebook-share"><FontAwesomeIcon icon={faFacebookSquare}/></a>
            </FacebookShareButton>
                <a href="#copy-link"><FontAwesomeIcon icon={faShareNodes} onClick={copyToClipboard}/></a>
        </div>
    </div>
  )
}

export default Sharing