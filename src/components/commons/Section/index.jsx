import PropTypes from 'prop-types';
import React from 'react';
import Text from '../../Text';

import SectionWrapper from './style';

export default function Section({ sectionName, children }) {
  const openTag = `< ${sectionName} >`;
  const closeTag = `</ ${sectionName} >`;

  return (
    <SectionWrapper>
      <Text
        as="h2"
        variant="subtitle"
        color="pink"
        font="fira"
      >
        {openTag}
      </Text>
      {children}
      <Text
        as="p"
        variant="subtitle"
        font="fira"
        color="pink"
      >
        {closeTag}
      </Text>
    </SectionWrapper>
  );
}

Section.propTypes = {
  sectionName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
