import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import CTA3 from '../components/cta3'
import Gallery1 from '../components/gallery1'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import ContentList1 from '../components/content-list1'
import Testimonial17 from '../components/testimonial17'
import ContactForm2 from '../components/contact-form2'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Accurate Shrill Porcupine</title>
        <meta property="og:title" content="Accurate Shrill Porcupine" />
      </Helmet>
      <Navbar8
        page4Description={
          <Fragment>
            <span className="home-text10 thq-body-small">
              Page Four Description
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text11">Main Action</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text12 thq-link thq-body-small">
              About Us
            </span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text13 thq-body-large">Home</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text14 thq-link thq-body-small">Home</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text15 thq-body-large">Gallery</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text16 thq-body-large">About Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text17 thq-link thq-body-small">Gallery</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text18 thq-body-small">
              Page One Description
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text19 thq-body-small">
              Page Two Description
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text20 thq-link thq-body-small">
              Academics
            </span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text21 thq-body-large">Academics</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text22 thq-body-small">
              Page Three Description
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text23">Contact Us</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text24 thq-body-small">Learn More</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text25 thq-heading-1">
              Welcome to Mahek Public School
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text26 thq-body-large">
              Welcome to Mahek Public School! We are delighted to have you
              explore our vibrant school community. At Mahek Public School, we
              are committed to providing a nurturing environment where students
              thrive academically and personally. Our website is designed to
              offer a seamless experience, whether you&apos;re seeking
              information on academics, school events, or ways to connect with
              us. We invite you to discover all that we have to offer and become
              a part of our dedicated learning family!
            </span>
          </Fragment>
        }
        image1Src="https://images.unsplash.com/photo-1499914485622-a88fac536970?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzcwNjM2OHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
        image2Src="https://images.unsplash.com/photo-1508768088800-43c68b8ea271?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzcwNjQwMHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
        image3Src="https://images.unsplash.com/photo-1561379982-c9f0e54ff067?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzcwNjQxOXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
        image7Src="https://images.unsplash.com/photo-1581056771085-3ce30d907416?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzcwNjQ0M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
        image8Src="https://images.unsplash.com/photo-1511629091441-ee46146481b6?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzcwNjUyMnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
        image9Src="https://images.unsplash.com/photo-1585915253494-71494d242f0e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzcwNjUzOXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
      ></Hero17>
      <CTA3
        action2={
          <Fragment>
            <span className="home-text27">
              <span>Next</span>
              <br></br>
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text30 thq-heading-2">Announcements</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text31 thq-body-small">
              <span>
                We are hosting a Music competition this Sunday! Make sure to
                participate and stand out!
              </span>
              <br></br>
              <br></br>
              <span>Date: 6/10/24</span>
              <br></br>
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text37">
              <span>Previous</span>
              <br></br>
            </span>
          </Fragment>
        }
        image1Src="https://images.unsplash.com/photo-1531402581960-f0a304148a1c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzcwNzgyOXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
      ></CTA3>
      <Gallery1
        content1={
          <Fragment>
            <span className="home-text40 thq-body-large">
              Explore our school events through these pictures.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text41 thq-heading-2">School Events</span>
          </Fragment>
        }
      ></Gallery1>
      <Features24
        feature3Description={
          <Fragment>
            <span className="home-text42 thq-body-small">
              Meet our dedicated leadership team
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text43 thq-heading-2">Leadership Team</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text44 thq-body-small">
              Access class timetable and study materials
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text45 thq-heading-2">About Us</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text46 thq-body-small">
              Learn more about our school and its values
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text47 thq-heading-2">Academics</span>
          </Fragment>
        }
        feature1ImgSrc="https://images.unsplash.com/photo-1542587227-8802646daa56?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzcwNjY1M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
      ></Features24>
      <CTA26
        heading1={
          <Fragment>
            <span className="home-text48 thq-heading-2">
              Join our school community today!
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text49 thq-body-large">
              Explore our programs and facilities to see why we are the best
              choice for your child&apos;s education.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text50">Apply Now</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature3Description={
          <Fragment>
            <span className="home-text51 thq-body-small">
              View and download the class timetable to stay organized with your
              studies.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text52 thq-body-small">
              Learn about our school&apos;s history, mission, and values.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text53 thq-heading-2">Leadership Team</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text54 thq-heading-2">School Info</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text55 thq-body-small">
              Meet our dedicated leadership team members who drive our
              school&apos;s success.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text56 thq-heading-2">Class Timetable</span>
          </Fragment>
        }
        rootClassName="features25root-class-name"
        feature1ImgSrc="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzcwNzg1OXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
        button={
          <Fragment>
            <span className="home-text57">Download</span>
          </Fragment>
        }
        button1={
          <Fragment>
            <span className="home-text58">Watch the video</span>
          </Fragment>
        }
        button2={
          <Fragment>
            <span className="home-text59">Download</span>
          </Fragment>
        }
      ></Features25>
      <ContentList1
        content4={
          <Fragment>
            <span className="home-text60 thq-body-small">
              Explore our gallery showcasing the vibrant and engaging events
              that take place at our school throughout the year.
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="home-text61 thq-body-small">
              Access our up-to-date class timetables and study materials to stay
              organized and excel in your academic pursuits.
            </span>
          </Fragment>
        }
        content6={
          <Fragment>
            <span className="home-text62 thq-body-small">
              Learn about our school&apos;s history, values, and easily apply
              for enrollment to become part of our academic community.
            </span>
          </Fragment>
        }
        heading5={
          <Fragment>
            <span className="home-text63 thq-heading-3">
              Testimonials from Students and Parents
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text64 thq-body-small">
              Our school is committed to providing top-notch education and
              ensuring academic excellence for all our students.
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text65 thq-body-small">
              Meet our dedicated leadership team who are passionate about
              guiding and supporting our students towards success.
            </span>
          </Fragment>
        }
        heading4={
          <Fragment>
            <span className="home-text66 thq-heading-3">
              Gallery of School Events
            </span>
          </Fragment>
        }
        content5={
          <Fragment>
            <span className="home-text67 thq-body-small">
              Read testimonials from our students and parents about their
              experiences and the impact our school has had on their lives.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text68 thq-heading-2">
              Academic Excellence
            </span>
          </Fragment>
        }
        heading3={
          <Fragment>
            <span className="home-text69 thq-heading-3">
              Class Timetables and Study Materials
            </span>
          </Fragment>
        }
        heading6={
          <Fragment>
            <span className="home-text70 thq-heading-3">
              Enrollment Application
            </span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <span className="home-text71 thq-heading-3">Leadership Team</span>
          </Fragment>
        }
      ></ContentList1>
      <Testimonial17
        author2Position={
          <Fragment>
            <span className="home-text72 thq-body-small">Student</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text73 thq-body-small">Parent</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text74 thq-body-large">John Doe</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text75 thq-body-large">Emily Johnson</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text76 thq-body-small">
              I love the variety of extracurricular activities offered at this
              school. It has helped me discover new interests and make lifelong
              friends.
            </span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text77 thq-body-large">Jane Smith</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text78 thq-body-small">Alumnus</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text79 thq-body-large">Michael Brown</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text80 thq-body-small">
              Read what our students and parents have to say about their
              experience with our school.
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text81 thq-body-small">Parent</span>
          </Fragment>
        }
        review1={
          <Fragment>
            <span className="home-text82 thq-body-small">
              My child has been attending this school for a year now, and I have
              seen tremendous growth in both academics and personal development.
              The teachers are dedicated and caring.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text83 thq-heading-2">Testimonials</span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text84 thq-body-small">
              Choosing this school for my child was the best decision I made.
              The supportive environment and focus on holistic education have
              made a significant impact on my child&apos;s learning journey.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text85 thq-body-small">
              Attending this school laid a strong foundation for my future
              academic pursuits. The values instilled here continue to guide me
              in my career.
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <ContactForm2
        content1={
          <Fragment>
            <span className="home-text86 thq-body-large">
              <span>Have a question or need more information?</span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        email={
          <Fragment>
            <span className="home-text89 thq-body-small">
              help@awesomeschool.com
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text90 thq-body-small">
              Feel free to reach out to us using the form.
            </span>
          </Fragment>
        }
        action={
          <Fragment>
            <span className="home-text91 thq-body-small">Submit</span>
          </Fragment>
        }
        phone={
          <Fragment>
            <span className="home-text92 thq-body-small">+1234567890</span>
          </Fragment>
        }
        adress={
          <Fragment>
            <span className="home-text93 thq-body-small">
              789 Test St, Bucharest
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text94 thq-heading-2">Contact Us</span>
          </Fragment>
        }
      ></ContactForm2>
    </div>
  )
}

export default Home
