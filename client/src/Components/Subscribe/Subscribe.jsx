import React from 'react'
import './Subscribe.css'
import { toast } from 'react-toastify';

function Subscribe() {

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
        <div className='sub-container'>
            <div className='sub-container'>
                <h1>Beyond Boundaries</h1>
                <p>Get a fresh perspective on business, technology, and lifestyle every week. Join a growing community of curious minds who want more than just updates—they want insights.</p>
                <form onSubmit={onSubmit}>
                    <input type="email" name="Blog-Subcriber-Email" id="" placeholder='Your Email' required />
                    <button type='submit'>Subscribe</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Subscribe