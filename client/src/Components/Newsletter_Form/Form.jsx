import React from 'react'
import './Form.css'
import { toast } from 'react-toastify';

function Form() {

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
      toast.success("Email successfully sent.", 
        {style: {
            backgroundColor: 'black',
            color: 'white'
        }})
      event.target.reset();
    }
    else {
      console.log("Error", res)
      toast.error("Error while sending email.", 
        {style: {
            backgroundColor: 'black',
            color: 'white'
        }})
    }
  };

  return (
    <div>
        <div className='form-container'>
            <form onSubmit={onSubmit}>
                <input type="email" name="Blog-Subcriber-Email" id="" placeholder='Your Email' required />
                <button type='submit'>Join</button>
            </form>
        </div>
    </div>
  )
}

export default Form