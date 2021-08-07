import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

const AccordionStyle = styled.div`
.accordion {
  max-width: 600px;
  margin: 2rem auto;
}

.accordion-title{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  background-color: #D6E4F0;
}

.accordion-title:hover {
  background-color: #3ab4cc;
}

.accordion-title,
.accordion-content {
  padding: 1rem;
}

.accordion-content {
  background-color: #F6F6F6;
}

@media screen and (max-width: 700px) {
  

  .accordion {
    width: 90%;
  }
}
`
const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);
  
    return (
      <AccordionStyle className="accordion-item">
        <div className="accordion-title {isActive}" onClick={() => setIsActive(!isActive)}>
          <div>{title}</div>
          <div>{isActive ? '-' : '+'}</div>
        </div>
        {isActive && <div className="accordion-content">{content}</div>}
      </AccordionStyle>
    );
  };
  
Accordion.propTypes  = {
  title : PropTypes.string,
  content : PropTypes.string
}

export default Accordion;