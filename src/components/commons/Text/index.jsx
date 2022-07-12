import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';

import breakpointsMedia from '../../themes/utils/breakpointsMedia';

const textStyleVariants = {
  title: css`
    ${breakpointsMedia({
    xs: css`
        font-size: ${({ theme }) => theme.typographyVariants.titleXS.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.titleXS.fontWeight};
        line-height: ${({ theme }) => theme.typographyVariants.titleXS.lineHeight};
      `,
    md: css`
        font-size: ${({ theme }) => theme.typographyVariants.title.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.title.fontWeight};
        line-height: ${({ theme }) => theme.typographyVariants.title.lineHeight};
      `,
  })}  
  `,
  subtitle: css`
    font-size: ${({ theme }) => theme.typographyVariants.subtitle.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.subtitle.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.subtitle.lineHeight};
  `,
  paragraph: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.paragraph.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.paragraph.lineHeight};
  `,
  smallestException: css`
    font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.smallestException.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.smallestException.lineHeight};
  `,
};

const TextBase = styled.p`
  ${({ variant }) => textStyleVariants[variant]}
  color: ${({ theme, color }) => get(theme, `colors.${color}`)};
  font-family: ${({ theme, font }) => get(theme, `fonts.${font}`)};
`;

export default function Text({
  children,
  tag,
  variant,
  color,
  font,
}) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      color={color}
      font={font}
    >
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.oneOf(['h2', 'h3', 'h4', 'h5', 'p', 'span']),
  variant: PropTypes.string,
  font: PropTypes.string,
  color: PropTypes.string,
};

Text.defaultProps = {
  variant: 'paragraph',
  tag: 'p',
  font: '\'Roboto\', sans-serif',
  color: 'gray100',
};
