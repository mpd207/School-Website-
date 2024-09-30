import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './gallery1.css'

const Gallery1 = (props) => {
  return (
    <div className="gallery1-gallery3 thq-section-padding">
      <div className="gallery1-max-width thq-section-max-width">
        <div className="gallery1-section-title">
          <h2>
            {props.heading1 ?? (
              <Fragment>
                <h2 className="gallery1-text4 thq-heading-2">School Events</h2>
              </Fragment>
            )}
          </h2>
          <span>
            {props.content1 ?? (
              <Fragment>
                <span className="gallery1-text3 thq-body-large">
                  Explore our school events through these pictures.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="gallery1-content">
          <div className="gallery1-container1">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="thq-img-ratio-4-3"
            />
          </div>
          <div className="gallery1-container2">
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="thq-img-ratio-4-3"
            />
          </div>
          <div className="gallery1-container3">
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="thq-img-ratio-4-3"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery1.defaultProps = {
  image3Src:
    'https://images.unsplash.com/photo-1551822620-ac3afd8acd1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzcwNjkyMnw&ixlib=rb-4.0.3&q=80&w=1080',
  content1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzcwNjkyMnw&ixlib=rb-4.0.3&q=80&w=1080',
  image3Alt: 'School Event 3',
  image2Alt: 'School Event 2',
  image2Src:
    'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzcwNjkyMnw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
  image1Alt: 'School Event 1',
}

Gallery1.propTypes = {
  image3Src: PropTypes.string,
  content1: PropTypes.element,
  image1Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image2Src: PropTypes.string,
  heading1: PropTypes.element,
  image1Alt: PropTypes.string,
}

export default Gallery1
