import React, { useContext, useEffect, useState } from "react"; // Import useContext
import NavbarComponent from "./NavbarComponent";
import { AuthContext } from "../context/AuthContext";
import slide1 from "../assets/img/slide1.jpg";
import slide2 from "../assets/img/slide2.jpg";
import slide3 from "../assets/img/slide3.jpg";
import Footer from "./Footer";

const slides = [slide1, slide2, slide3];

export default function Home() {
  const { current_user } = useContext(AuthContext);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  // Check if user is null or undefined
  if (!current_user || !current_user.username) {
    // Redirect the user to the login page or display a message
    return (
      <div>
        {/* You can add a redirect logic here or show a link to the login page */}
        <h1>Please log in to access the Home page.</h1>
      </div>
    );
  }

  // Render the Home component content if the user is not null and has a valid username
  return (
    <>
    <div>
      <NavbarComponent />

      {/* Slideshow */}
      <div
        style={{
          position: "relative",
          height: "calc(100vh - 70px)", // Subtracting the navbar height to avoid overlapping
          overflow: "hidden",
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "90%",
              backgroundImage: `url(${slide})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              zIndex: index === currentSlideIndex ? 1 : 0,
              opacity: index === currentSlideIndex ? 1 : 0,
              transition: "opacity 1s",
            }}
          />
        ))}

        {/* Text to be displayed on each slide */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "Blue",
            fontSize: "2.5rem",
            zIndex: 2, 
          }}
        >
          Welcome, {current_user.username}
          <br />
          to the Free Gigs Freelancing Platform
        </div>
      </div>

      <div id="features-container">
        <div id="features-section">
        </div>
      </div>

      <div id="about-container">
        <div id="about-section">
          <h3>About FreeGigs</h3>
          <p>
            FreeGigs is a leading freelancing platform that connects clients with talented freelancers from around the world. Our mission is to empower businesses and individuals to achieve their goals by providing access to a vast network of skilled professionals.
          </p>
          <p>
            With years of experience in the freelancing industry, we understand the challenges faced by both clients and freelancers. Our platform is designed to streamline the process of finding the right talent for any project while ensuring a seamless and secure working environment.
          </p>
          <p>
            At FreeGigs, we believe in fostering a collaborative and transparent community, where clients and freelancers can build lasting relationships and achieve success together. Whether you are looking for a short-term gig or a long-term partnership, FreeGigs is here to support you every step of the way.
          </p>
        </div>
      </div>

      <div id="testimonials-container">
        <div id="testimonials-section">
          <h2>What Our Users Say</h2>
          <div className="testimonial">
            <blockquote>
              "FreeGigs has been a game-changer for our company. We've found incredible freelancers that have helped us scale our projects efficiently."
            </blockquote>
            <p>- Allan Losenge, CEO of XYZ Inc.</p>
          </div>
          <div className="testimonial">
            <blockquote>
              "As a freelancer, FreeGigs has given me access to a wide range of exciting projects. The platform is user-friendly, and I love the transparent bidding process."
            </blockquote>
            <p>- Jerry Mutua, Graphic Designer</p>
          </div>
          <div className="testimonial">
            <blockquote>
              "I highly recommend FreeGigs to anyone looking for quality freelancers. The payment system is reliable, and the support team is always ready to assist."
            </blockquote>
            <p>- Gabriel Mwenda, Marketing Manager</p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
