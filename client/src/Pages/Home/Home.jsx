import React, { useState, useEffect } from 'react'
import "./Home.css"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer';
import AbtPic from './Images/Andres-Choque-small.jpg'
import workpic7 from './Images/java-loco.png'
import workpic1 from './Images/tactica.png'
import workpic2 from './Images/drontec.png'
import workpic4 from './Images/cfl.png'
import workpic5 from './Images/github-projects.png'
import workpic6 from './Images/andres-website-2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faPenRuler, faScrewdriverWrench, faGraduationCap, faBriefcase, faUsers, faFileArrowDown, faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedin, faGithub, faXTwitter} from '@fortawesome/free-brands-svg-icons'
import { Helmet } from 'react-helmet';
import { ReactTyped } from 'react-typed';
import ServiceBox from '../../Components/Divs/ServiceBox';
import TestBox from '../../Components/Divs/TestBox';


function Home() {

  // browser tab title
  useEffect(() => {
    document.title = 'Home - Andres Choque';
  }, []);

  // About section functionality
  const [activeTab, setActiveTab] = useState('skills');

    const openTab = (tabName) => {
        setActiveTab(tabName);
    };

    const handleDownloadResume = async () => {
      try {
          // Fetch the resume file from the public folder
          const response = await fetch('/Andres_Choque_Resume_2024.pdf');
          const blob = await response.blob();

          // Create a URL for the blob object
          const url = window.URL.createObjectURL(new Blob([blob]));

          // Create an anchor element with the URL and trigger download
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', "Andres Choque Resume 2024.pdf");
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

  // Services data
  const servicesData = [
    {
      icon: faCode,
      title: "Web Development",
      description: "Web applications are essential to a quality product. I specialize in coding across multiple languages to help clients achieve their goals."
    },
    {
      icon: faPenRuler,
      title: "Web Design",
      description: "User Experience (UX) is at the heart of quality design. I craft intuitive and engaging products using a range of design tools."
    },
    {
      icon: faUsers,
      title: "Mentorship",
      description: "I guide technology professionals in achieving their career goals by offering tailored mentorship and clear career roadmaps."
    }
  ];

  // Testimonial data 
    const testimonialsData = [
      {
        author: "Ryan & Gretchen",
        description: "Andres worked hard to bring our (complex!) vision to life, and we couldn’t be more pleased with the result. Thank you, for your contributions, patience, and for setting a new standard of excellence with this launch!"
      },
      {
        author: "Antonio",
        description: "Andres was a great young professional to work alongside with. His eye for design allowed our vision to come about. He communicates effectively, works in a timely manner, and demonstrated a high level of skill for this project."
      },
      {
        author: "Robert",
        description: "Andres brought a strong level of technical aptitude to this project. I am grateful to have him be a part of the project. His level of dedication and humility has made him a strong and effective member of our team."
      }
    ];

  // Contact form functionality
  const scriptURL = process.env.REACT_APP_GOOGLE_SCRIPT;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Immediately show a loading message
    toast.info('Submitting your message...',
      {style: {
          backgroundColor: 'black',
          color: 'white'
      }});

    try {
        const response = await fetch(scriptURL, {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            toast.success('Form submitted successfully!', 
            {style: {
                backgroundColor: 'black',
                color: 'white'
            }})
            e.target.reset();
        } else {
            toast.error('Form submission failed');
            throw new Error('Failed to submit message');
        }
    } catch (error) {
        console.error('Error!', error.message);
        toast.error('Error occurred while submitting the form.', error.message);
    }
};

  return (
    <div>

        <Helmet>
          <title>Home - Andres Choque</title>
          <meta name='description' content="Let's build solutions together." />

           {/* OG Tags */}
          <meta property="og:title" content="Andres Choque's Website" />
          <meta property="og:description" content="Let's build solutions together." />
          <meta property="og:image" content="https://andreschoque.com/static/media/background-header.35708e91d89ba76f59f2.jpg" />
          <meta property="og:url" content="https://andreschoque.com" />
          <meta property="og:type" content="website" />

          {/* Twitter Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Andres Choque's Website" />
          <meta name="twitter:description" content="Let's build solutions together." />
          <meta name="twitter:image" content="https://andreschoque.com/static/media/background-header.35708e91d89ba76f59f2.jpg" />
          <meta name="twitter:url" content="https://andreschoque.com"/>
        </Helmet>


        <div className='header-section' id='header'>
          <div className='container'>
            <Navbar/>
            <div className='header-text'>
              <p>Hi, I'm</p>
              <h1>Andres Choque</h1>
              <h2>
                <ReactTyped
                  strings={["Software Engineer", "Tech Consultant", "Let's build solutions together."]}
                  typeSpeed={40}
                  backSpeed={20}
                  loop
                />
              </h2>
              <a href="#contact" id='Get-started' className="header-btn" aria-label='Get-started-button'>Get started</a> 
            </div>
          </div>
        </div>
        
        <div className='about-section' id='about'>
          <div className='container'>
            <h1 className="sub-header">About Me</h1>
            <div className='row'>
              <div className='abt-col-1'>
                <img src={AbtPic} alt="Andres-Choque-Professional" />
                <div className="resume">
                  <button onClick={handleDownloadResume} id='Download-resume' className="btn" aria-label='Download-resume-button'>Download Resume &nbsp; <FontAwesomeIcon icon={faFileArrowDown}/></button>
                </div>
              </div>
              <div className="abt-col-2">
                      <p>I am a Software Engineer with a passion for technology, business, travel, and leadership. My specialty is on the <strong>Front-End (UX / UI)</strong>.
                          I believe that any product's quality begins at the User Experience.
                      </p>
                      <div className="tabs">
                        <p className={`tab-links ${activeTab === 'skills' ? 'act-link' : ''}`} onClick={() => openTab('skills')}><strong><FontAwesomeIcon className='tools' icon={faScrewdriverWrench}/> &nbsp; Skills</strong></p>
                        <p className={`tab-links ${activeTab === 'experience' ? 'act-link' : ''}`} onClick={() => openTab('experience')}><strong> <FontAwesomeIcon className='briefcs' icon={faBriefcase}/> &nbsp; Experience</strong></p>
                        <p className={`tab-links ${activeTab === 'education' ? 'act-link' : ''}`} onClick={() => openTab('education')}><strong><FontAwesomeIcon className='grad' icon={faGraduationCap}/> &nbsp; Education</strong></p>
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
                              <li><span>Nov 2024 &nbsp;-&nbsp; Present</span><br/>Technology Consultant | 616 Solutions Limited</li>
                              <li><span>Jul 2023 &nbsp;-&nbsp; Oct 2024</span><br/>Software Engineer II | CyberZek</li>
                              <li><span>May 2022 &nbsp;-&nbsp; Aug 2022</span><br/>Software Developer | Samaritan's Purse</li>
                              <li><span>May 2021 &nbsp;-&nbsp; Jul 2021</span><br/>Web Developer | CREOTEC</li>
                          </ul>
                      </div>

                      <div className={`tab-conts ${activeTab === 'education' ? 'act-tab' : ''}`} id="education">
                          <ul>
                              <li><span>May 2023</span><br/>BS in Computer Science | Liberty University</li>
                              <li><span>March 2023</span><br/>Certification Responsive Web Design | FreeCodeCamp</li>
                          </ul>
                      </div>
              </div>
            </div>
          </div>
        </div>

        <div className='services-section' id='services'>
          <div className='container'>
            <h1 className="sub-header">Services</h1>

            <div className="services-list">
              {servicesData.map((service, index) => (
                <ServiceBox 
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  containerClass="service-box"
                  iconClass="ser-icon"
                  titleClass="service-title"
                  descriptionClass="service-description"
                />
              ))}
            </div>
          </div>
        </div>

        <div className='portfolio-section' id='portfolio'>
          <div className='container'>
            <h1 className='sub-header'>Portfolio</h1>

            <div className='work-list'>
                <div className="work">
                    <img src={workpic7} alt='Java-loco' />
                    <div className="layer">
                       <h3><strong>Java Loco</strong></h3>
                       <a href="https://andreschoque3.github.io/Coffee_website/" target="_blank" rel="noreferrer noopener" aria-label='Tactica-ministries-website-link'> <FontAwesomeIcon icon={faLocationArrow}/></a>
                    </div>
                </div>

                <div className="work">
                    <img src={workpic1} alt='Tactica-ministries' />
                    <div className="layer">
                       <h3><strong>TACTICA Ministries</strong></h3>
                       <a href="https://tacticaministries.org/" target="_blank" rel="noreferrer noopener" aria-label='Tactica-ministries-website-link'> <FontAwesomeIcon icon={faLocationArrow}/></a>
                    </div>
                </div>

                <div className="work">
                    <img src={workpic2} alt='Drontec' />
                    <div className="layer">
                       <h3><strong>Drontec</strong></h3>    
                       <a href="https://drontec.org/" target="_blank" rel="noreferrer noopener" aria-label='Drontec-website-link'> <FontAwesomeIcon icon={faLocationArrow}/></a> 
                    </div>
                </div>
            </div>

            {showMore && (
            <div className="work-list">          
                <div className="work">
                    <img src={workpic4} alt='Center-for-financial-literacy' />
                    <div className="layer">
                        <h3><strong>Finance App</strong></h3>
                        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7061417643429257216/" target="_blank" rel="noreferrer noopener" aria-label='Center-for-financial-literacy-linkedin-link'> <FontAwesomeIcon icon={faLocationArrow}/></a> 
                     </div>
                </div>

                <div className="work">
                    <img src={workpic5} alt='Andres-Choque-Github' />
                    <div className="layer">
                        <h3><strong>School Projects</strong></h3>
                        <a href="https://github.com/andreschoque3/LU-School-Projects" target="_blank" rel="noreferrer noopener" aria-label='Andres-choque-github-webpage'> <FontAwesomeIcon icon={faLocationArrow}/></a> 
                     </div>
                </div>

                <div className="work">
                    <img src={workpic6} alt='Andres-Choque-website' />
                    <div className="layer">
                        <h3><strong>Personal Brand</strong></h3>
                        <a href="https://andreschoque.com/" target="_blank" rel="noreferrer noopener" aria-label='Andres-choque-website-link'> <FontAwesomeIcon icon={faLocationArrow}/></a> 
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

        <div className='reviews-section' id='reviews'>
            <div className='container'>
              <h1 className='sub-header'>Testimonials</h1>

              <div className='testimonials'>
                {testimonialsData.map((testimonial, index) => (
                    <TestBox 
                      key={index}
                      author={testimonial.author} 
                      description={testimonial.description} 
                    />
                ))}
              </div>

            </div>
        </div>

        <div className='contact-section' id='contact'>
          <div className='container'>
            <h1 className="sub-header">Let's Get in Touch</h1>

            <div className='column'>
                <div className="contact-t">
                    {/* <p><FontAwesomeIcon icon={faEnvelope}/>andreschoque71@gmail.com</p> */}
                    <div className="social">
                        <a href="https://www.instagram.com/andres.choque23/" id='Instagram' target="_blank" rel="noreferrer noopener" aria-label='Andres-choque-instagram-account'><FontAwesomeIcon icon={faInstagram}/></a>
                        <a href="https://twitter.com/andres_choque23" id='Twitter' target='_blank' rel='noreferrer noopener' aria-label='Andres-choque-twitter-account'><FontAwesomeIcon icon={faXTwitter}/></a>
                        <a href="https://www.linkedin.com/in/andreschoque23/" id='LinkedIn' target="_blank" rel="noreferrer noopener" aria-label='Andres-choque-linkedin-account'><FontAwesomeIcon icon={faLinkedin}/></a>
                        <a href="https://github.com/andreschoque3" id='GitHub' target="_blank" rel="noreferrer noopener" aria-label='Andres-choque-github-account'><FontAwesomeIcon icon={faGithub}/></a>
                    </div>
                </div>

                <div className="contact-b">
                    <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
                        <input type="text" name="Name" placeholder="Name" id='Name' required/>
                        <input type="email" name="Email" placeholder="Email" id='Email' required/>
                        <textarea name="Message" id="Message"  rows="6" placeholder="Message" className='no-resize'></textarea>
                        <div className='align-btn'>
                          <button id='Submit' type="submit" className="btn btncv">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
          </div>
        </div>

        <Footer/>

    </div>
  )
}

export default Home