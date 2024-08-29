import React from 'react'
import './BlogSubscriber.css'
import { toast } from 'react-toastify';

function BlogSubscriber() {

    // Email functionality
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "efae9b3c-bf15-4bd7-91ed-ff9435feb4d9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      toast.success("Email successfully sent.")
      event.target.reset();
    }
    else {
      console.log("Error", res)
      toast.error("Error while sending email.")
    }
  };


  return (
    <div>
        <div className='subscriber-container'>
            <h1>Haven't subscribed yet?</h1>
            <p>Join to get a dose of inspiration, insights, and a fresh perspective on life and business.</p>
            <form onSubmit={onSubmit}>
                <input type="email" name="Blog-Subcriber-Email" id="" placeholder='Your Email' required />
                <button type='submit'>Join</button>
            </form>
        </div>
    </div>
  )
}

export default BlogSubscriber