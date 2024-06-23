import React, { useState } from 'react'
import "./Home.css"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../Components/Navbar/Navbar'
import AbtPic from './Images/Andres-Choque-small.jpg'
import workpic1 from './Images/tactica.png'
import workpic2 from './Images/drontec.png'
import workpic3 from './Images/creotec.png'
import workpic4 from './Images/cfl.png'
import workpic5 from './Images/github-projects.png'
import workpic6 from './Images/andres-website.png'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faPenRuler, faMicrochip, faLink, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedin, faGithub, faXTwitter} from '@fortawesome/free-brands-svg-icons'
import { Helmet } from 'react-helmet';

function Home() {
  
  // Preview description: 
  <div>
    <Helmet>
      <title>Home - Andres Choque</title>
      <meta property="og:title" content="Andres Choque's Website" />
      <meta property="og:description" content="Let's build solutions together." />
      <meta property="og:image" content="https://andreschoque.com/static/media/background-header.35708e91d89ba76f59f2.jpg" />
      <meta property="og:url" content="https://andreschoque.com" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Andres Choque's Website" />
      <meta name="twitter:description" content="Let's build solutions together." />
      <meta name="twitter:image" content="https://andreschoque.com/static/media/background-header.35708e91d89ba76f59f2.jpg" />
    </Helmet>
    <h1>Home - Andres Choque</h1>
  </div>

  // About section functionality

  const [activeTab, setActiveTab] = useState('skills');

    const openTab = (tabName) => {
        setActiveTab(tabName);
    };

    const handleDownloadResume = async () => {
      try {
          // Fetch the resume file from the public folder
          const response = await fetch('/Andres-Choque-Resume.pdf');
          const blob = await response.blob();

          // Create a URL for the blob object
          const url = window.URL.createObjectURL(new Blob([blob]));

          // Create an anchor element with the URL and trigger download
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'Andres-Choque-Resume.pdf');
          document.body.appendChild(link);
          link.click();

          // Cleanup
          link.parentNode.removeChild(link);
          window.URL.revokeObjectURL(url);
      } catch (error) {
          console.error('Error downloading resume:', error);
          toast.error('Error downloading resume')
      }
  };

  // View more functionality

  const [showMore, setShowMore] = useState(false);

    const handleViewMore = () => {
        setShowMore(true);
    };

    const handleHide = () => {
        setShowMore(false);
    };

  // Contact form functionality

  const scriptURL = 'https://script.google.com/macros/s/AKfycbyiMFJxNG-Oe1735pct_MGwOk1EhP7t5LKAu9u4KHLdk_NqJIPJiSrXQrbs6Lzco8j7/exec';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
        const response = await fetch(scriptURL, {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            toast.success('Form submitted successfully!')
            e.target.reset();
        } else {
            toast.error('Form submission failed');
            throw new Error('Failed to submit message');
        }
    } catch (error) {
        console.error('Error!', error.message);
        toast.error('Error', error.message);
    }
};

  // Icon library

  library.add(faCode, faPenRuler, faMicrochip, faLink, faEnvelope, faInstagram, faLinkedin, faGithub, faXTwitter)


  return (
    <div>
        <div className='header-section' id='header'>
          <div className='container'>
            <Navbar/>
            <div className='header-text'>
              <p>Hi, I'm</p>
              <h1>Andres Choque</h1>
              <h2>Let's build solutions together.</h2>
              <a href="#contact" className="header-btn" aria-label='Get-started-button'>Get started</a> 
            </div>
          </div>
        </div>

        <div className='about-section' id='about'>
          <div className='container'>
            <div className='row'>
              <div className='abt-col-1'>
                <img src={AbtPic} alt="Andres-Choque-Professional" />
              </div>
              <div className="abt-col-2">
                      <h1 className="sub-header">Who am I</h1>
                      <p>I am a Software Engineer with a passion for technology, business, travel, and leadership. My specialty is on the <strong>Front-End (UX / UI)</strong>.
                          I believe that any product's quality begins at the User's Experience.
                      </p>

                      <div className="tabs">
                        <p className={`tab-links ${activeTab === 'skills' ? 'act-link' : ''}`} onClick={() => openTab('skills')}><strong>Skills</strong></p>
                        <p className={`tab-links ${activeTab === 'experience' ? 'act-link' : ''}`} onClick={() => openTab('experience')}><strong>Experience</strong></p>
                        <p className={`tab-links ${activeTab === 'education' ? 'act-link' : ''}`} onClick={() => openTab('education')}><strong>Education</strong></p>
                      </div>

                      <div className={`tab-conts ${activeTab === 'skills' ? 'act-tab' : ''}`} id="skills">
                          <ul>
                              <li><span>Languages</span><br/>English and Spanish</li>
                              <li><span>Front-End</span><br/>React, Angular, Vue,  HTML, CSS, Bootstrap, JavaScript, TypeScript</li>
                              <li><span>Back-End</span><br/>Node, Express, Python, Django, PHP, Laravel, Ruby, Rails</li>
                              <li><span>Database</span><br/>MongoDB, MySQL, SQL Server</li>
                              <li><span>Tools</span><br/>Git, GitHub, BitBucket, Azure DevOps, Jira, Postman, Selenium</li>
                              <li><span>Operating Systems</span><br/>Windows, Ubuntu, MacOS, FreeBSD</li>
                          </ul>
                      </div>

                      <div className={`tab-conts ${activeTab === 'experience' ? 'act-tab' : ''}`} id="experience">
                          <ul>
                              <li><span>Oct. 2023 &nbsp;-&nbsp; Present</span><br/>Freelance Web Developer</li>
                              <li><span>Sep. 2023 &nbsp;-&nbsp; Present</span><br/>Junior Software Engineer | CyberZek</li>
                              <li><span>July 2023 &nbsp;-&nbsp; Sep 2023</span><br/>Software Engineer Intern | CyberZek</li>
                              <li><span>May 2022 &nbsp;-&nbsp; Aug 2022</span><br/>Software Developer Intern | Samaritan's Purse</li>
                              <li><span>May 2021 &nbsp;-&nbsp; Jul 2021</span><br/>Web Developer Intern | CREOTEC</li>
                          </ul>
                      </div>

                      <div className={`tab-conts ${activeTab === 'education' ? 'act-tab' : ''}`} id="education">
                          <ul>
                              <li><span>May 2023</span><br/>BS in Computer Science | Liberty University</li>
                              <li><span>March 2023</span><br/>Certification Responsive Web Design | FreeCodeCamp</li>
                          </ul>
                      </div>
                  </div>
                  <div className="resume">
                      <button onClick={handleDownloadResume} className="btn" aria-label='Download-resume-button'>Download Resume</button>
                  </div>
            </div>
          </div> 

        </div>

        <div className='services-section' id='services'>
          <div className='container'>
            <h1 className="sub-header">Services</h1>

            <div className="services-list">
                <div>
                    <FontAwesomeIcon icon={faCode}/>
                    <h2><strong>Web & App Development</strong></h2>
                    <p>Web Applications are key for a quality product. I enjoy writing in multiple languages helping the client to reach their goals.</p>
                </div>

                <div>
                    <FontAwesomeIcon icon={faPenRuler}/>
                    <h2><strong>Web Design</strong></h2>
                    <p>User Experience (UX) is the most important aspect of a quality product. I love designing products using multiple design tools.</p>
                </div>

                <div>
                    <FontAwesomeIcon icon={faMicrochip}/>
                    <h2><strong>AI Development</strong></h2>
                    <p>With the growth of Artificial Intelligence it's a priority to build software and integrate AI solutions to keep up with innovation.</p>
                </div>
            </div>

          </div>
        </div>

        <div className='portfolio-section' id='portfolio'>
          <div className='container'>
            <h1 className='sub-header'>Portfolio</h1>

            <div className='work-list'>
                <div className="work">
                    <img src={workpic1} alt='Tactica-ministries' />
                    <div className="layer">
                       <h3><strong>TACTICA Ministries</strong></h3>
                       <p>TACTICA Ministries trains and helps the public safety community internationally.</p>
                       <a href="https://tacticaministries.org/" target="_blank" rel="noreferrer noopener" aria-label='Tactica-ministries-website-link'> <FontAwesomeIcon icon={faLink}/></a>
                    </div>
                </div>

                <div className="work">
                    <img src={workpic2} alt='Drontec' />
                    <div className="layer">
                       <h3><strong>Drontec</strong></h3>
                       <p>Drontec allows customers to purchase highly specialized drones for any task.</p>
                       <a href="https://drontec.org/" target="_blank" rel="noreferrer noopener" aria-label='Drontec-website-link'> <FontAwesomeIcon icon={faLink}/></a> 
                    </div>
                </div>

                <div className="work">
                    <img src={workpic3} alt='Creotec' />
                    <div className="layer">
                        <h3><strong>CREOTEC</strong></h3>
                        <p>CREOTEC allows customers to purchase prosthetics for the people in need.</p>
                        <a href="https://creo-tec.com/" target="_blank" rel="noreferrer noopener" aria-label='Creotec-website-link'> <FontAwesomeIcon icon={faLink}/></a> 
                     </div>
                </div>
            </div>

            {showMore && (
            <div className="work-list-2">          
                <div className="work">
                    <img src={workpic4} alt='Center-for-financial-literacy' />
                    <div className="layer">
                        <h3><strong>Center for Financial Literacy App</strong></h3>
                        <p>CFL App allows you to visualize and budget your finances.</p>
                        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7061417643429257216/" target="_blank" rel="noreferrer noopener" aria-label='Center-for-financial-literacy-linkedin-link'> <FontAwesomeIcon icon={faLink}/></a> 
                     </div>
                </div>

                <div className="work">
                    <img src={workpic5} alt='Andres-Choque-Github' />
                    <div className="layer">
                        <h3><strong>School Projects</strong></h3>
                        <p>Holds a collection of software built for school.</p>
                        <a href="https://github.com/andreschoque3/LU-School-Projects" target="_blank" rel="noreferrer noopener" aria-label='Andres-choque-github-webpage'> <FontAwesomeIcon icon={faLink}/></a> 
                     </div>
                </div>

                <div className="work">
                    <img src={workpic6} alt='Andres-Choque-website' />
                    <div className="layer">
                        <h3><strong>Business Website</strong></h3>
                        <p>The website that showcases all the software & solutions provided.</p>
                        <a href="https://andreschoque.com/" target="_blank" rel="noreferrer noopener" aria-label='Andres-choque-website-link'> <FontAwesomeIcon icon={faLink}/></a> 
                     </div>
                </div>
            </div>
            )}

            <div className="button-container">
              {!showMore && <button className="btn" id="view-more" aria-label='View-more-button' onClick={handleViewMore}>View more</button>}
              {showMore && <button className="btn" id="hide" aria-label='Hide-button' onClick={handleHide}>Hide</button>}
            </div>

          </div>
        </div>

        {/* <div className='review-section' id='reviews'>
          <div className='container'>
            <h1 className='sub-header'>Reviews</h1>

            <div className="services-list">
                <div>
                    
                </div>

                <div>
                    
                </div>

                <div>
                    
                </div>
            </div>
          </div>
        </div> */}

        <div className='contact-section' id='contact'>
          <div className='container'>
            <div className='row'>
                <div className="contact-l">
                    <h1 className="sub-header">Let's Connect</h1>
                    <p><FontAwesomeIcon icon={faEnvelope}/> andreschoque71@gmail.com</p>
                    <div className="social">
                        <a href="https://www.instagram.com/andres.choque23/" target="_blank" rel="noreferrer noopener" aria-label='Andres-choque-instagram-account'><FontAwesomeIcon icon={faInstagram}/></a>
                        <a href="https://twitter.com/andres_choque23" target='_blank' rel='noreferrer noopener' aria-label='Andres-choque-twitter-account'><FontAwesomeIcon icon={faXTwitter}/></a>
                        <a href="https://www.linkedin.com/in/andreschoque23/" target="_blank" rel="noreferrer noopener" aria-label='Andres-choque-linkedin-account'><FontAwesomeIcon icon={faLinkedin}/></a>
                        <a href="https://github.com/andreschoque3" target="_blank" rel="noreferrer noopener" aria-label='Andres-choque-github-account'><FontAwesomeIcon icon={faGithub}/></a>
                    </div>
                </div>

                <div className="contact-r">
                    <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
                        <input type="text" name="Name" placeholder="Name" required/>
                        <input type="email" name="Email" placeholder="Email" required/>
                        <textarea name="Message" id=""  rows="6" placeholder="Message"></textarea>
                        <button type="submit" className="btn btncv">Submit</button>
                    </form>
                    <span id="submit-msg"></span>
                </div>

            </div>
          </div>

          <div className="copyright">
            <p>©️ 2024 Andres Choque. All rights reserved.</p>
          </div>
        </div>

    </div>
  )
}

export default Home