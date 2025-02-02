import React, { useEffect } from 'react';
import '../../Components/Navbar/Navbar.css'
import '../Blog/Blog.css'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Sharing from '../../Components/Sharing/Sharing';
import Form from '../../Components/Form/Form';
import subData from '../../utils.js';

function BlogPost4() {

  // browser tab title
  useEffect(() => {
    document.title = 'Why Learn Code? You Solve Problems 50% Faster';
  }, []);

  return (
    <div>
        <Helmet>
            <title>Why Learn Code? You Solve Problems 50% Faster - Andres Choque</title>
            <meta name="description" content="How to learn code in a simple manner." />
            
            {/* OG Tags */}
            <meta property="og:title" content="Why Learn Code? You Solve Problems 50% Faster - Andres Choque" />
            <meta property="og:description" content="How to learn code in a simple manner." />
            <meta property="og:image" content="https://andreschoque.com/static/media/blog4.06225868f1916ba6c67b.jpg" />
            <meta property="og:url" content="https://andreschoque.com/blog/why-learn-code-you-will-solve-problems-50-faster" />
            
            {/* Twitter Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Why Learn Code? You Solve Problems 50% Faster - Andres Choque" />
            <meta name="twitter:description" content="How to learn code in a simple manner." />
            <meta name="twitter:image" content="https://andreschoque.com/static/media/blog4.06225868f1916ba6c67b.jpg" />
            <meta name="twitter:url" content="https://andreschoque.com/blog/why-learn-code-you-will-solve-problems-50-faster"/>
        </Helmet>

        <div className='blog-post-header'>
            <div className='container'>
                <Navbar/>
            </div>
        </div>

        <div className='blog-post-content'>

            <Form
              classes={subData[0].classes}
              title={subData[0].title}
              description={subData[0].description}
            />

            <div className='blog-content-container'>
                <h1><strong>Why Learn Code? You Solve Problems 50% Faster</strong></h1>
                <h2>August 8, 2024 | Andres Choque</h2> 

            <Sharing/>

            <hr />

            <div className='blog-body'>
                <div className='container-blog'>

                    <p>Learning a high value skill is crucial.</p>

                    <br />

                    <p>If you want to become something greater you will need to learn a high value skill.</p>

                    <br />
                    
                    <p>It’s 2024 and if you see the landscape of many countries, you observe that we are currently living through rough times. Many countries are suffering wars, economic downturns, inflation, political turmoil, and other such things.</p>

                    <br />
                    
                    <p>Everything has become volatile. One great example is the stock market. In recent news, the American stock market such as the Dow Jones, and S&P 500 have had record lows for consecutive days. The Japanese markets have also been rocked hard. China has been on an economic downturn for many months now. Their banking systems are failing.</p>

                    <br />
                    
                    <p>Life here in the US has drastically changed in the last four years. Inflation has been high, living expenses have increased, the labor shortages have increased. Many variables have caused major change to the society we currently live in.</p>

                    <br />
                    
                    <p>You can no longer just get a job and be set. The market has changed and has placed more value on people who can offer high value skills. <strong>You need to stand out.</strong></p>

                    <br />
                    
                    <p>What are high value skills you may ask?</p>

                    <br />
                    
                    <p>A high value skill is a skill that helps entities and businesses generate more value for themselves. For a high value skill to be considered as such it much have these criteria:</p>

                    <br />

                    <div className='emphasis'>
                        <p><strong className='newton'>1) It must be dynamic/transferable.</strong></p>

                        <p><strong className='newton'>2) It must be scalable.</strong></p>

                        <p><strong className='newton'>3) It must be market favorable.</strong></p>
                    </div>

                    <br />

                    <p>It must be dynamic/transferable meaning that you can apply this skill anywhere you go meaning you can apply this same skill anywhere from a coffee shop to a software startup.</p>

                    <br />

                    <p>The sill needs to be scalable. The skill must have the capability to be performed multiple times and even when the process is refined, it still has to deliver a favorable outcome.</p>

                    <br />
                    
                    <p>Lastly, the skill needs to be market favorable. The skill needs to be coveted in the market. Businesses, people, and everything in-between see the value of the skill and are willing to pay a pretty penny for it.</p>

                    <br />
                    
                    <p>What does this have anything to do with coding?</p>

                    <br />
                    
                    <p>You see, coding meets all 3 criteria. <strong className='newton'>It is dynamic/transferable, scalable, and market favorable.</strong></p>

                    <br />
                    
                    <p>You probably are sick of the word ‘AI’ but let me tell you one more time how it is revolutionizing today’s market. Simple lines of code have had so much impact that it changed the business landscape we live in today. 
                        OpenAI’s ChatGPT changed the playing field for so many businesses. Now every company has their own AI piece. Thanks to the advancements of AI, AI has allowed non-technical people the ability to learn how to leverage 
                        code.</p>

                    <br />
                    
                    <p>Why does this matter? – it makes you more attractive to the market. You now have a high value skill that businesses and people pay a premium for.</p>

                    <br />
                    
                    <p>You stand out. You will be able to leverage and have growth opportunities.</p>

                    <br />
                    
                    <p>The big question is: <em className='newton'>How can I learn how to code?</em></p>

                    <br />
                    
                    <p>The answer to this is – it depends.  Do you want to become a technical person? If yes, then you will need a roadmap to achieve that goal. If the answer is no, then you can learn how to leverage code to your existing job 
                        and duties.</p>

                    <br />

                    <p>I will focus on the second part.</p>

                    <br />

                    <h3><em className='newton'>How do you leverage code?</em></h3>

                    <br />
                    
                    <p>First, you identify current issues and annoyances you currently face in your job. Once you do that you will need to then brainstorm solutions to it. Once you have a solution you will then find a way to code that solution. </p>

                    <br />

                    <p>Remember this: <strong>You will provide technical solutions to non-technical problems.</strong></p>

                    <br />
                    
                    <p>What resources should you use?</p>

                    <br />

                    <p>Well, the biggest resource you can use are the plenty of AI options such as ChatGPT, Gemini, CoPilot, and others. You can also use YouTube as an assistive tool to help you navigate code. The neat thing about AI tools is that 
                        they provide explanations to their generated code. You can expand on their explanations as well.</p>

                    <br />

                    <p>For example,</p>

                    <br />

                    <p>Let’s say you identified that you take too much time and energy on creating tasks or scheduling your calendar. You want a way to automate that process. To provide a solution for it you can use the Python programming language 
                        and create a ‘script’ to automate that whole process.</p>

                    <br />
                    
                    <p>You can ask the AI tools the following. <em>‘Can you help me create a python script to automate my tasks from word and create calendar events on my Gmail calendar?’</em></p>

                    <br />

                    <p>The AI tool will then begin to provide you with a solution.</p>

                    <br />

                    <p>There you have it. You have now applied coding skills onto your current work. Once you get more practice and more experience from it you will be able to provide larger and more complex solutions which then you can sell as a 
                        service or negotiate for a raise at your job.</p>

                    <br />

                    <p>The point is to provide a technical solution to a non-technical problem and demonstrate how that solution is optimal.</p>

                    <br />

                    <p>I hope this helps you and your new interest in coding.</p>

                    <br />

                    <p>Blessings,</p>

                    <p>- <em> Andres</em></p>

                    <hr />
                </div>
            </div>
            </div>
        </div>

        <div>
            <Link to={'/blog'} className='btn'>Back</Link>
        </div>

        <Footer/>
    </div>

    
  )
}

export default BlogPost4