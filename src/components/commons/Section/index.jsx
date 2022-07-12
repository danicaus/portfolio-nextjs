import PropTypes from 'prop-types';
import React from 'react';
import Text from '../Text';

import { SectionWrapper, SectionContent } from './style';

export default function Section({ sectionName, children, id }) {
  const openTag = `< ${sectionName} >`;
  const closeTag = `</ ${sectionName} >`;

  return (
    <SectionWrapper id={id}>
      <Text
        as="h2"
        variant="subtitle"
        color="pink"
        font="fira"
      >
        {openTag}
      </Text>
      <SectionContent>
        {children}
      </SectionContent>
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
  id: PropTypes.string.isRequired,
};
