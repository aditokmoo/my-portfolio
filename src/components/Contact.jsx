import { useState } from 'react'
import emailjs from 'emailjs-com'

function Contact() {
    const [res, setRes] = useState(false);

    const handleSubmit = (e) => {

        e.preventDefault();

        emailjs.sendForm('service_vmwz285', 'template_v37e09q', e.target, 'bZbOze-KU2WxlnLph')
        .then(res => {
            console.log(res)
        }).catch(err => console.log(err))

        e.target.reset();
        setRes(true);
    }
    
    return (
        <div className="form">
            <div className="sideForm">
                <h2>Contact</h2>
                <ul>
                    <li><i className='fa fa-envelope'></i> aditokmoo18@gmail.com</li>
                    <li><i className='fa fa-globe'></i> Bosnia and Herzegovina, Kakanj</li>
                    <li><a href="https://www.linkedin.com/in/adi-tokmo-475287234/" rel="noreferrer" target='_blank'><i className='fab fa-linkedin'></i> LinkedIn</a></li>
                    <li><a href="https://github.com/aditokmoo" rel="noreferrer" target='_blank'><i className='fab fa-github'></i> Github</a></li>
                </ul>
            </div>
            <div className="mainForm">
                <form onSubmit={handleSubmit}>
                    <div className="info">
                        <div>
                            <label>Name</label>
                            <input type="text" name='name' id='firstName' className='firstNameInput' required/>
                        </div>
                                        
                        <div>
                            <label>Email</label>
                            <input type="email" id='email' name='email' className='emailInput' required/>
                        </div>

                        <div>
                            <label>Subject</label>
                            <input type="text" id='subject' name='subject' className='emailInput' required/>
                        </div>
                    </div>
           
                    <div className='message'>
                        <label>Message</label>
                        <textarea name='message' tabIndex="5" placeholder='Write your message...' required></textarea>
                    </div>

                    <input type="submit" value="Send" id='sendBtn' className='send-btn' />
                </form>
            </div>
        </div>
    )
}

export default Contact