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

function BlogPost5() {

// browser tab title
useEffect(() => {
    document.title = 'The Power of Walking (10,000 Steps a day Changed My Life)';
  }, []);

  return (
    <div>
        <Helmet>
            <title>The Power of Walking (10,000 Steps a day Changed My Life) - Andres Choque</title>
            <meta name="description" content="How to learn code in a simple manner." />
            
            {/* OG Tags */}
            <meta property="og:title" content="The Power of Walking (10,000 Steps a day Changed My Life) - Andres Choque" />
            <meta property="og:description" content="What to learn from going on long walks." />
            <meta property="og:image" content="https://andreschoque.com/static/media/blog5.e739eb5b601d11800327.jpg" />
            <meta property="og:url" content="https://andreschoque.com/blog/the-power-of-walking" />
            
            {/* Twitter Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="The Power of Walking (10,000 Steps a day Changed My Life) - Andres Choque" />
            <meta name="twitter:description" content="What to learn from going on long walks." />
            <meta name="twitter:image" content="https://andreschoque.com/static/media/blog5.e739eb5b601d11800327.jpg" />
            <meta name="twitter:url" content="https://andreschoque.com/blog/the-power-of-walking"/>
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
                <h1><strong>The Power of Walking (10,000 Steps a day Changed My Life)</strong></h1>
                <h2>February 3, 2025 | Andres Choque</h2> 

            <Sharing/>

            <hr />

            <div className='blog-body'>
                <div className='container-blog'>

                    <p>It feels like an eternity since I have posted. It's time to get going.</p>

                    <br />

                    <p>After spending time on doing other projects and going through life events, I was trying out other ways to increase productivity and mindfulness.</p>

                    <br />

                    <p>That's where I found out about a tried and tested option: <em>walking</em>.</p>

                    <br />

                    <p className='newton'>What's the fuss about it? Aren't we all doing that every day? What's so special about it?</p>

                    <br />

                    <p>Great questions. Allow me to paint this picture:</p>

                    <br />

                    <p>Growing up my mom reinforced me and my sister, the habit of walking. Not just to get the steps in but to enjoy what outdoors has to offer. It was a time to breathe 
                        fresh air and a time to enjoy a nice conversation and un-plug from work or school. Of course, I felt lazy a lot of days and preferred not to walk. However, it wasn't 
                        until I moved to college that I was forced to walk everywhere. Sure, there were other means of transportation such as the college bus, scooters, bikes, skateboards, 
                        etc. But it never was the 'magical' feel as it was in my childhood.</p>

                    <br />

                    <p>It was until I left college where slowly I got to the same terrible habits of being lazy and neglecting walking.</p>

                    <br />

                    <p>As a young professional myself, most of my time is spent working behind a laptop. After working all those hours, you feel tired and just want to go back to your place 
                        and just knock out. You don't want to do anything else other than just relax.</p>

                    <br />

                    <p>Now that's the point, living a life like that became monotonous and even a reality that our society began to slowly accept as normality.</p>

                    <br />

                    <p>How sad of a life is that? Honestly, I cannot comprehend how this has become normal. I get it, some people have tougher jobs that require more physical output.</p>

                    <br />

                    <p>But I am talking about the normal day to day corporate job where you sit at an office for 8 almost 9 hours straight.</p>

                    <br />

                    <p>There is no room for air - no pun intended. As humans God created us to engage in physical activity.</p>

                    <br />

                    <p>Now why am I sharing how walking is this magical solution to your problems?</p>

                    <br />

                    <p>The secret of a lean body is to walk. The secret of a healthy mind is to walk. Walking drastically improves your health.</p>

                    <br />

                    <p>Let's break this down.</p>

                    <br />

                    <h3 className='newton'>Walking To Improve <em>Physical</em> Health</h3>

                    <br />

                    <p>Did you know that walking and running the same distance burn roughly the same number of calories? It's crazy to think but it's true. I encourage you to look it up.</p>

                    <br />

                    <p>Walking is by far the best form of cardio of how easy it is and how you can manage it.</p>

                    <br />

                    <p>The problem with running as your main form of cardio is that it requires time to heal properly, especially from long distances.</p>

                    <br />

                    <p>Running also takes tolls on your knees causing nagging issues and consultations with your PT.</p>

                    <br />

                    <p>That's why walking is more sustainable in the long term.</p>

                    <br />

                    <p>Walking also allows you to get outside, which then fills your body with the oxygen it desires from being indoors all day.</p>

                    <br />

                    <p>The more we are outside, the less we engage with blue light. Blue light does more harm than anything else. The best way to combat that is to get natural sunlight.</p>

                    <br />

                    <p>The best time to catch the sunlight is in the morning when the sunrise comes along. There's quite a laundry list of scientific research on how effective getting this 
                        sunlight is to your body. Again, go and look at the research out there.</p>

                    <br />

                    <h3 className='newton'>Walking To Improve <em>Mental</em> Health</h3>

                    <br />

                    <p>There are days in our lives that simply suck, and you wish it were over. The best way to remedy that is to go on a walk.</p>

                    <br />

                    <p>This is because you allow your brain to breathe properly. Many times, when we face difficult situations, we are overthinking which leads to stress and anxiety. This in turn 
                        disrupts our breathing pattern.</p>

                    <br />

                    <p>When we walk, we let our body heal itself and release the tension and stress you endure.</p>

                    <br />

                    <p>Your mind begins to reflect and think more clearly. You begin to provide more thoughtfulness to your situation.</p>

                    <br />

                    <p>You also begin to have more creativity. Don't take this lightly. You can get the best ideas while just casually walking.</p>

                    <br />

                    <p>There's a running joke in the coding community where the software developer bangs his head while trying to solve an issue. 
                        It wasn't until he went on a walk or did something completely different that the solution came to mind. </p>

                    <br />

                    <p>The same phenomenon occurs when you begin walking more frequently. You will get doses of creativity and mental clarity.</p>

                    <br />

                    <h3 className='newton'>How Do You Get Into The Habit Of Walking?</h3>

                    <br />

                    <p>Like with every habit you begin slow and in small increments and then you gradually increase the frequency and the intensity.</p>

                    <br />

                    <p>You never want to go in cold turkey because you will lose the fun of it and it becomes like a chore.</p>

                    <br />

                    <p>Think of it like this - make walking a game. Set your first goal to try to achieve 1000 steps in a day and then increase it by 100 steps each day until you get to 10,000 steps a day.</p>

                    <br />

                    <p>This way you see walking more as a game than a chore. And the next thing you know you will love to go on long walks.</p>

                    <br />

                    <p>Take advantage as well to listen to your favorite podcasts, go on the phone and talk your family, or even just listen to your favorite tracks.</p>

                    <br />

                    <p>Let your creativity go wild as well. The more time you spend on walking the clearer your goals and trajectory becomes.</p>

                    <br />

                    <p>Let's make 2025 the year you will begin to use the most powerful tool in your toolset: <em><strong>walking</strong></em>.</p>

                    <br />

                    <p>Now, go out and start walking.</p>

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

export default BlogPost5