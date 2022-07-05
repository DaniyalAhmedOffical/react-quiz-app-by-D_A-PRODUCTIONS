import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import './Layout.css'

const Layout = ({ children }) => {
  return (
      <div>
        <div className="app-layout" style={{ backgroundImage: "url(https://thumbs.dreamstime.com/z/quiz-seamless-pattern-question-marks-doubt-faq-background-simple-endless-repeating-motif-poll-survey-interrogation-query-template-181035042.jpg)" }}>
         <Header />
          {children}
        </div>
          <Footer />
      </div>
  );
}

export default Layout