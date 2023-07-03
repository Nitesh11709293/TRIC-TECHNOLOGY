import React from 'react'
import "./style.css";
import library from "../../assets/Images/library.jpg";
import pharmacy from "../../assets/Images/pharma.jpg";
import tweet from "../../assets/Images/tweet.png";

const Projects = () => {
  return (
    <>

      <section className='section1' id="project1">
        <h3 style={{}}>Let's explore OUR PROJECTS...</h3>
        <img style={{ border: "none", height: "300px", width: "900px", borderRadius: "20px" }}
          src={library}
          className="img-fluid mt-5 mb-5 home_img_right"
          alt="img"
        />
        <h2>Library Management System</h2>
        <p>A library management system is a software application that is used to manage the resources and services of a library. The library management system was built using HTML, CSS and javaScript. The project had the features like track of the available books, buying of book from online stores, bifurcations of books, journals, newspapers etc., issuing of book, calculation of fine and many other features to help the smooth functioning of a library. The system can be customized to meet the specific needs of a particular library, and can be used to streamline workflows, improve efficiency, and enhance the overall user experience for library patrons. </p>
      </section>
      <section className='section1' id="project2">
        <img style={{ border: "none", height: "300px", width: "900px", borderRadius: "20px" }}
          src={pharmacy}
          className="img-fluid mt-5 mb-5 home_img_right"
          alt="img"

        />
        <h2>Pharmacy Management System</h2>
        <p>The primary purpose of a pharmacy management system is to automate the manual processes that are traditionally performed in a pharmacy, such as tracking inventory, dispensing medication, and managing patient records. By using a pharmacy management system, pharmacists can save time and increase efficiency, allowing them to focus more on patient care. The project was built using java platform and springboot for backend. The front-end was designed using angular framework.</p>
      </section>
      <section className='section1' id="project3">
        <img style={{ border: "none", height: "300px", width: "900px", borderRadius: "20px" }}
          src={tweet}
          className="img-fluid mt-5 mb-5 home_img_right"
          alt="img"

        />
        <h2>Tweet App</h2>
        <p>Tweet App is a social media platform that allows users to post short messages called "tweets" of up to 280 characters in length. Tweets can include text, photos, videos, and links, and can be publicly visible to anyone who follows the user's account or searches for a particular topic using hashtags. Users can follow other accounts to see their tweets in their own feed, and can also "retweet" or share other users' tweets with their own followers. Tweet App also allows users to "like" or "favorite" tweets, which serves as a way to show appreciation or agreement with the content.</p>
      </section>
    </>
  )
}

export default Projects
