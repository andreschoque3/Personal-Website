import React from 'react'
import './Form.css'
import { toast } from 'react-toastify';

const Form = ({ title, description, classes }) => {

  const apiKey = process.env.REACT_APP_WEB3FORMS_API_KEY

    // Email functionality
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", apiKey);

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
        <div className={classes}>
            <h1>{title}</h1>
            <p>{description}</p>
            <div className='form-container'>
                <form onSubmit={onSubmit}>
                        <input type="email" name="Blog-Subcriber-Email" id="" placeholder='Your Email' required />
                        <button type='submit'>Join</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Form