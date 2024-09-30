import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './content-list1.css'

const ContentList1 = (props) => {
  return (
    <div className="content-list1-container thq-section-padding">
      <div className="content-list1-max-width thq-section-max-width">
        <div className="content-list1-content thq-flex-column">
          <ul className="content-list1-ul thq-flex-column">
            <li className="list-item thq-flex-column">
              <h2>
                {props.heading1 ?? (
                  <Fragment>
                    <h2 className="content-list1-text18 thq-heading-2">
                      Academic Excellence
                    </h2>
                  </Fragment>
                )}
              </h2>
              <p>
                {props.content1 ?? (
                  <Fragment>
                    <p className="content-list1-text14 thq-body-small">
                      Our school is committed to providing top-notch education
                      and ensuring academic excellence for all our students.
                    </p>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3>
                {props.heading2 ?? (
                  <Fragment>
                    <h3 className="content-list1-text21 thq-heading-3">
                      Leadership Team
                    </h3>
                  </Fragment>
                )}
              </h3>
              <p>
                {props.content2 ?? (
                  <Fragment>
                    <p className="content-list1-text15 thq-body-small">
                      Meet our dedicated leadership team who are passionate
                      about guiding and supporting our students towards success.
                    </p>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3>
                {props.heading3 ?? (
                  <Fragment>
                    <h3 className="content-list1-text19 thq-heading-3">
                      Class Timetables and Study Materials
                    </h3>
                  </Fragment>
                )}
              </h3>
              <p>
                {props.content3 ?? (
                  <Fragment>
                    <p className="content-list1-text11 thq-body-small">
                      Access our up-to-date class timetables and study materials
                      to stay organized and excel in your academic pursuits.
                    </p>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3>
                {props.heading4 ?? (
                  <Fragment>
                    <h3 className="content-list1-text16 thq-heading-3">
                      Gallery of School Events
                    </h3>
                  </Fragment>
                )}
              </h3>
              <p>
                {props.content4 ?? (
                  <Fragment>
                    <p className="content-list1-text10 thq-body-small">
                      Explore our gallery showcasing the vibrant and engaging
                      events that take place at our school throughout the year.
                    </p>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3>
                {props.heading5 ?? (
                  <Fragment>
                    <h3 className="content-list1-text13 thq-heading-3">
                      Testimonials from Students and Parents
                    </h3>
                  </Fragment>
                )}
              </h3>
              <p>
                {props.content5 ?? (
                  <Fragment>
                    <p className="content-list1-text17 thq-body-small">
                      Read testimonials from our students and parents about
                      their experiences and the impact our school has had on
                      their lives.
                    </p>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3>
                {props.heading6 ?? (
                  <Fragment>
                    <h3 className="content-list1-text20 thq-heading-3">
                      Enrollment Application
                    </h3>
                  </Fragment>
                )}
              </h3>
              <p>
                {props.content6 ?? (
                  <Fragment>
                    <p className="content-list1-text12 thq-body-small">
                      Learn about our school&apos;s history, values, and easily
                      apply for enrollment to become part of our academic
                      community.
                    </p>
                  </Fragment>
                )}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

ContentList1.defaultProps = {
  content4: undefined,
  content3: undefined,
  content6: undefined,
  heading5: undefined,
  content1: undefined,
  content2: undefined,
  heading4: undefined,
  content5: undefined,
  heading1: undefined,
  heading3: undefined,
  heading6: undefined,
  heading2: undefined,
}

ContentList1.propTypes = {
  content4: PropTypes.element,
  content3: PropTypes.element,
  content6: PropTypes.element,
  heading5: PropTypes.element,
  content1: PropTypes.element,
  content2: PropTypes.element,
  heading4: PropTypes.element,
  content5: PropTypes.element,
  heading1: PropTypes.element,
  heading3: PropTypes.element,
  heading6: PropTypes.element,
  heading2: PropTypes.element,
}

export default ContentList1
