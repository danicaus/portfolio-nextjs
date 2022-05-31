import PropTypes from 'prop-types';
import React from 'react';

export default function SectionTitle({ sectionName, isCloseTag }) {
  const openTag = `< ${sectionName} >`;
  const closeTag = `</ ${sectionName} >`;

  return (
    <h2>{isCloseTag ? closeTag : openTag}</h2>
  );
}

SectionTitle.propTypes = {
  sectionName: PropTypes.string.isRequired,
  isCloseTag: PropTypes.bool,
};

SectionTitle.defaultProps = {
  isCloseTag: false,
};
