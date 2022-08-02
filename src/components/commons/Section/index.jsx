import PropTypes from 'prop-types';
import React from 'react';

import SectionStyle from './style';

export default function Section({
  sectionName,
  color,
  children,
  id,
}) {
  return (
    <SectionStyle.Wrapper id={id}>
      <SectionStyle.Name
        tag="h2"
        variant="title"
        color={color}
        font="fira"
      >
        {sectionName}
      </SectionStyle.Name>
      <SectionStyle.Content>
        {children}
      </SectionStyle.Content>
      <SectionStyle.Name
        tag="p"
        variant="title"
        font="fira"
        color={color}
        closeTag
      >
        {sectionName}
      </SectionStyle.Name>
    </SectionStyle.Wrapper>
  );
}

Section.propTypes = {
  sectionName: PropTypes.string.isRequired,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};

Section.defaultProps = {
  color: 'pink',
};
