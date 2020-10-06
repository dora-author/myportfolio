import React, { Component } from 'react';
import './styles.css';

class Contact extends Component {
  render() {
    return(
      <section id="contact" class="contact">
         <div class="contact__envelope">
          <h1 class="contact__title title--white">Get in touch<span class="contact__title__dot title__dot--white"></span>
          </h1>
          <h2 class="contact__description">You can reach me via email or find me on social networks.<br></br> I would love to
          hear from you</h2>
          <a class="contact__link" href="mailto:zadora1004@naver.com ">zadora1004@naver.com</a>

          <div class="contact__social-btn__container">
          <a href="https://github.com/ejkim-author" target="_blank" rel="noopener noreferrer" class="contact__btn__link">
            <span class="fa fa-github fa-2x contact__fa-btn"></span>
            <div class="contact__social-btn"></div>
          </a>
          <a href="https://www.linkedin.com/in/%EA%B9%80%EC%9D%80%EC%A0%95-%EC%A0%9C%EC%96%B4sw%ED%94%8C%EB%9E%AB%ED%8F%BC%ED%8C%80-288558b1/" target="_blank"  rel="noopener noreferrer" class="contact__btn__link">
            <span class="fa fa-linkedin-square fa-2x contact__fa-btn"></span>
            <div class="contact__social-btn"></div>
          </a>
          </div>

         </div>
       </section>
    )
  }
}

export default Contact;
