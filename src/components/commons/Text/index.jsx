import React from 'react';
import PropTypes from 'prop-types';

import TextStyle from './style';

export default function Text({
  children,
  tag,
  href,
  blank,
  variant,
  color,
  font,
  className,
}) {
  if (href) {
    return (
      <TextStyle
        className={className}
        as="a"
        variant={variant}
        color={color}
        font={font}
        href={href}
        target={blank}
        rel="noreferrer"
      >
        {children}
      </TextStyle>
    );
  }

  return (
    <TextStyle
      className={className}
      as={tag}
      variant={variant}
      color={color}
      font={font}
    >
      {children}
    </TextStyle>
  );
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  tag: PropTypes.oneOf(['h2', 'h3', 'h4', 'h5', 'p', 'span']),
  href: PropTypes.string,
  blank: PropTypes.string,
  variant: PropTypes.oneOf(['title', 'subtitle', 'paragraph', 'smallestException']),
  font: PropTypes.string,
  color: PropTypes.string,
};

Text.defaultProps = {
  className: '',
  variant: 'paragraph',
  tag: 'p',
  href: '',
  blank: '_blank',
  font: '\'Roboto\', sans-serif',
  color: 'gray100',
};
