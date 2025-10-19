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

function BlogPost1() {

  // browser tab title
  useEffect(() => {
    document.title = 'How to be Intentional After School (With 3 Effective Steps)';
  }, []);

  return (
    <div>

      <Helmet>
        <title>How to be Intentional After School (With 3 Effective Steps) - Andres Choque</title>
        <meta name="description" content="Ways to be Intentional After School." />
        
        {/* OG Tags */}
        <meta property="og:title" content="How to be Intentional After School (With 3 Effective Steps) - Andres Choque" />
        <meta property="og:description" content="Ways to be Intentional After School." />
        <meta property="og:image" content="https://andreschoque.com/static/media/blog1.cf50d92bc2ab70c1d5fa.jpg" />
        <meta property="og:url" content="https://andreschoque.com/blog/how-to-be-intentional-after-school" />
        
        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to be Intentional After School (With 3 Effective Steps) - Andres Choque" />
        <meta name="twitter:description" content="Ways to be Intentional After School." />
        <meta name="twitter:image" content="https://andreschoque.com/static/media/blog1.cf50d92bc2ab70c1d5fa.jpg" />
        <meta name="twitter:url" content="https://andreschoque.com/blog/how-to-be-intentional-after-school"/>
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
          <h1><strong>How to be Intentional After School (With 3 Effective Steps)</strong></h1>
          <h2>June 23, 2024 | Andres Choque</h2> 

          <Sharing/>

          <hr />

          <div className='blog-body'>
            <div className='container-blog'>
            <p>Let's picture this - it's THE fateful day, you wake up get ready and head over to the venue or location your graduation ceremony is being conducted, you feel excited and anxious at the same time. 
              You are about to embark on a new chapter after completing this one. You give a last glance at the long nights of studying, preparing for exams, and late-night hangouts with your friends. The 
              dean/professor or teacher calls your name, all those feelings rush into your system, and you are the happiest after receiving your diploma. Your family is there to cheer you on! Everyone is proud 
              of your accomplishments!</p>

            <br />

            <p>That's it, you did it!</p>

            <br />

            <p>Now, let's fast forward a little bit, you already have your degree, now you landed your job.</p>

            <br />

            <p>The first few months you are excited to learn all about the company and their values and experience the work life you now have. More time has passed by, but now you noticed the 'shing object' isn't 
              as shiny anymore. The day-to-day has become mundane and boring. All the excitement and energy you had has already worn off. Now you have become stuck. Needing the next thing.</p>
            
            <br />

            <p>You notice that your time doom scrolling on Instagram, TikTok, YouTube has increased.</p>

            <br />

            <p>What happened? Where did the momentum go? Where did time go? What happened to my friends? - these are all valid questions.</p>

            <br />

            <p>If you have experienced this, you are not the only one but if you haven't that's great! Keep it up! This, my friend, is what happens to many if not all recent graduates after they finish school.
              Let this moment not discourage you, but instead do the opposite - encourage you. This moment is pivotal since it will force you to act on it.</p>

            <br />

            <p>What do I mean by acting on this 'feeling'? I mean you either take two options:</p>

            <br />

            <div className='emphasis'>
              <p><strong>A) You keep living your life as is and keep feeling 'stuck'.</strong></p>

              <p>Or</p>

              <p><strong>B)	You take a decision that can potentially change your life.</strong></p>
            </div>

            <br />

            <p>Now, keep in mind, both options have their own set of risks and rewards.</p>

            <br />

            <p>If you choose option A, that’s totally ok, but at some point you will face this again. Especially, before the next chapter of your life – being a parent. Life changes when that chapter occurs. Choose wisely.</p>

            <br />

            <p>Now, let’s go over option B. Let’s say you take that decision. Now what?</p>

            <br />

            <p>Your day-to-day will not change dramatically overnight. Instead, it will be a process. BUT, that process cannot start until you take the first step.</p>

            <br />

            <p>Allow me to introduce you a concept that was established back in the 1600s.</p>

            <br />

            <p>Sir Issac Newton, in his search for answers, developed 3 simple, yet thought-provoking concepts about the nature of physics – more specifically, <em>motion</em>.

            I want to highlight the first law – <em>‘An object at rest remains at rest, and an object in motion remains in motion at constant speed and in a straight line unless acted on by an unbalanced force.’ </em>

            What does this mean? Let’s break this idea apart and incorporate it into our conversation.</p>

            <br />

            <p><strong className='newton'>Objects at rest stay at rest:</strong> meaning if something isn’t moving, it will not move on its own. Unless something else changes that state. For example, a book on a table will stay there until you push or pull it.</p>

            <br />

            <p><strong className='newton'>Objects in motion stay in motion:</strong> meaning If something is already moving, it will keep moving in the same direction and at the same speed unless something else makes it change. For example, a ball rolling on the ground will keep rolling until friction, a bump, or someone stops it.</p>

            <br />
            
            <p><strong className='newton'>Unless acted upon by an unbalanced force:</strong> This means that an object's motion (or lack of motion) will only change if something pushes or pulls on it. For example, a soccer ball won't move unless you kick it, and once it's moving, it will eventually stop because of friction with the ground and air resistance.</p>

            <br />
           
            <p>Now, what does physics have anything to do with life?</p>

            <br />

            <p>Well, a lot, actually. This simple physics concept teaches us the value of motion and rest.</p>

            <br />

            <p>Let’s dissect the first part: ‘objects at rest stay at rest’ this concept applied can be detrimental to your life. If you don’t take the initiative to change the very thing that is affecting your life nothing will occur and instead 
              will just simply ‘stay at rest’. That’s why taking action is hard. – you are essentially making yourself go from rest to in motion. It’s in our human nature to stay a little extra in our beds, to procrastinate in completing a task 
              (I procrastinated for 2 weeks before I delivered on this piece). While it is hard it is also rewarding. The hard things are hard because there is fulfillment at the end of it. You were able to accomplish what few people can only dream 
              about.</p>

            <br />

            <p>Now, let’s analyze the second part: ‘objects in motion stay in motion’ this concept applied can be a powerful tool.</p>

            <br />

            <p>Once you take the initiative to change the very thing affecting your life at first nothing occurs and then everything occurs. Think of it as a ‘snowball effect’. Once you take action, sure, it might be very hard at first but then 
              it starts to wear off little by little. You then notice that, ‘hey actually, it’s not that bad’, and the next thing leads to another and at that point you realize: ‘wow’ I just accomplished so many things in that time frame. Now remember, 
              it’s the small actions that build up to the larger actions. You have to build momentum first.</p>

            <br />

            <p>It would be foolish to want to see results now. While it may very well be possible, a great foundation starts will small steps that lead to larger steps.</p>

            <br />

            <p><strong>Once you are in motion, it is easy to stay in motion. </strong></p>

            <br />

            <p>Let’s get into practical ways you can go from ‘rest’ and into ‘motion’.</p>

            <br />

            <h2 className='sub-title'><strong>3 Ways to be Intentional:</strong></h2>

            <br />

            <h3><strong>1) Reflect on Yourself.</strong></h3>

            <br />

            <p>The first order of business is to take a good 1 to 2 hours (possibly even more) to seriously be with yourself and really think about what your life is heading towards. 
              Try to pinpoint all the problems present in your habits, in your relationships with others, and your goals. Remember this should be done in private. I recommend going 
              out for a walk in your neighborhood or apartment complex, this can also be done in your room. Write all your thoughts down on your phone or in a dedicated journal 
              (honestly just get a piece of paper or pen). This will help you reference back any ideas you had previously.</p>

            <br />

            <p>In this reflection you really want to get deep down in your mind. Really think through all the goals and ideas you want to achieve. Really paint the picture. You want 
              to think about what you want to become in the future. You really want to hone into that vision. Let this time be a time where you already see yourself in that position.</p>

            <br />

            <p>Again, there is no limits here. This is your ideal reality. It can be the most bizarre thing you just have to envision it and really feel it. Whether it’s becoming the CEO 
              of company x or becoming a music producer you just have to see it, feel it, acknowledge it, and write it down. Reflecting is not only subjected to the positives but also the 
              negatives. Think about what is hindering you or what is limiting you from achieving that. Again, this practice is not a form of self-harm but instead a self-diagnostic. Again, 
              it helps to get it off your chest. The point is to get it out and keep it on a physical note or a digital note. Remember you want to keep this note close to you as this will be 
              important for the third step of the process.</p>

            <br />

            <h3><strong>2) Join an In-Person Community.</strong></h3>

            <br />

            <p>After successfully writing down all your thoughts. It’s time to get other people’s thoughts as well. Now, I don’t mean you have to tell them your deepest darkest secrets or business 
              ideas, instead you want to hear of what others are doing. Because we live in a hyper technological society. Our phones have become a powerful tool to get information fast, and honestly 
              in some ways have put limits on physical interactions. If you have a phone, you can simply download any social media platform and create a ‘digital’ version of yourself on the internet.
              This can be both harmful and powerful tool at the same time. Choose wisely on how you want to proceed with technology. And you know what’s the most intriguing thing about this? It’s that 
              despite having technology that allows us to be interconnected, it has made us very distant at the same time.</p>

            <br />
            
            <p>I saw a very saddening statistic the other day, the Chamber of Commerce here in the USA have conducted a study analyzing housing data across 170 cities with populations of 150,000 coming 
              from the Census Bureau to identify the loneliest cities in the USA. You can view the article <a className='link' href='https://www.chamberofcommerce.org/loneliest-cities-in-america' target="_blank" rel="noreferrer noopener" aria-label='link-to-article'>here</a>.
              &nbsp;Guess which city ranked the highest? – take a good guess. I’ll give you a hint it’s the nation's capital – Washington D.C. This makes it sad since it’s home. We can get into the specifics 
              of this and provide even my personal take but let’s save that for another blog.</p>

            <br />
              
            <p>The point is there is a value to having physical connections. God created us as social beings. History has shown communities and societies accomplish great things when united not isolated.
              Even if you are ‘introverted’ there is still value in creating connections and having someone else to talk to. With another friend, or family member you can bounce off ideas, discuss plans, 
              vent, begin work ventures, and even push each other as encouragement. Getting plugged into a social community is hard. It’s even harder when you graduate school. School is a great and easy 
              place to make friends. You see the same people over and over – creating those tight bonds and connections. However, once that chapter ends, now instead of it being handed down to you – it 
              takes your own initiative to make friends. If you don’t do it no one else will do it for you.</p>

            <br />
            
            <p>Again, the concept of physics and motion can easily be applied here.</p>

            <br />

            <p>Sure, you can make friends from work and that’s awesome, but what if you are in a remote setting? What do you do now?</p>

            <br />

            <p>Well, allow me to give you some helpful tips for this step.</p>

            <p>First, think about activities you like to do – personally I love to play sports, dance, and build software. Then you go and search on Instagram or TikTok for places, groups that you can attend 
              and make friends there. Over here in DC there is a huge and I mean huge community of runners. While I am not a big fan of running, I do enjoy sports and getting involved with these running clubs 
              is an awesome opportunity to find people and make friends. And if you are brave enough, then you can join an MMA/boxing gym. There you create great friendships and occasionally get hit in the face.</p>

            <br />
           
            <p>Leverage social media to provide you with key information and places to go to.</p>

            <br />
            
            <p>For example, here in D.C., and I stumbled upon the Instagram accounts @yourdcbestie and @devourdc, two amazing content creators showing you activities to do in DC and food places to check out in the city.
              I also highly encourage you to join a church that aligns with your values and beliefs as well. There you can find a great community of like-minded people.</p>

            <br />

            <p>Lastly, go serve. Serving others will drastically change your perception and it allows you to help others in need. This can be at a food bank, hospital, a church, your neighborhood, or any form of community service.
              Being with people and making a positive impact will give you insights and ideas to your existing plan/model. It makes you a well-rounded person. The main point here is to interact with as many people as possible while 
            also <strong>giving and receiving value</strong> from your interactions. This will help you build a support system to help you progress in your life</p>

            <br />
            
            <h3><strong>3) Prioritize Brainstorming then Monetize Later.</strong></h3>

            <br />

            <p>Once you have done step 1 and 2 now it’s the time to begin crafting your plan and getting yourself into ‘motion’</p>

            <br />

            <p>If you have completed step 1 you have your notes with you with all the ideas, goals, dreams, setbacks you written. This will be your key to coming up with a plan. Creating a plan can be difficult but executing it will 
              be by far the most difficult part. Again, you want to be wise and diligent with your goals. Remember change doesn’t happen drastically. It’s a process that takes time and effort. As the writer <strong>Dan Koe </strong> 
              puts it <em>‘Nothing happens and then everything happens’</em>.</p>

            <br />

            <p>This is absolutely true. You will get annoyed that ‘nothing’ happens or at the very least minor things happen. But time allows for those building blocks to compound and create your dream.</p>

            <br />

            <p>With your notes begin drafting a plan for how you are going to attack your goals. I recommend breaking it down by timelines. For the next 3 months, for the next 6 months, and for the next year or two. This way you can 
              easily identify the tasks that need to be addressed sooner and the others can be addressed later. This will also give you a guide on how to track your progress as well and shift your plan if needed.</p>

            <br />

            <p>For example. Let’s say you put for the 3-month mark – ‘I plan to finish reading 2 financial literacy books.’ At the end of the month, you can evaluate whether you hit your goal or not. You can also set higher parameters 
              such as ‘after completing each book I will also create help other by sharing the topics I read’ Or if you didn’t hit your goal then you have to re-evaluate and possibly lower your threshold, for example, ‘I’ll read 1 book 
              and read a page a day.’ That way, you don’t burn out or leave completely. This will kill your momentum, your motion. Remember the goal is to keep in motion, as motion compounds over time. </p>

            <br />

            <p>Now that you have been intentional with surrounding yourself with a community, you can ask for them to be a support system. A support system is not only there to be with you when you are down or are failing but they are 
              there to keep feeding you that ‘motion’ they are there to encourage you and keep you accountable. Find accountability from your community, and most importantly find a mentor.</p>

            <br />

            <p>In my recent conversation with my mother, we discussed about mentorship and about community. One of the things she said stuck with me and it was ‘mentors are there to help you ‘shine’ your skills and abilities’.
              What does that mean? It means that mentors are there to get the best out of you just like a shoe shiner gets the best (“shines”) out of the shoe. With a trusted mentor you can share your ideas, passions, and goals, and if they 
              are quality mentors, they will get the best out of you.</p>

            <br />

            <p>By implementing these 3 steps you will be able to notice differences to your lifestyle. Don’t be worried if the results are not happening quickly.</p>

            <br />
            
            <p>That’s the whole point. These steps are to be completed continuously as you keep progressing and growing as an individual.</p>

            <br />

            <p>I hope this helps you and your journey.</p>

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

export default BlogPost1