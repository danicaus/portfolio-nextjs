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
  ${breakpointsMedia({
    xs: css`
      font-size: ${({ theme }) => theme.typographyVariants.subtitleXS.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.subtitleXS.fontWeight};
      line-height: ${({ theme }) => theme.typographyVariants.subtitleXS.lineHeight};
    `,
    md: css`
      font-size: ${({ theme }) => theme.typographyVariants.subtitle.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.subtitle.fontWeight};
      line-height: ${({ theme }) => theme.typographyVariants.subtitle.lineHeight};
    `,
  })}
  `,
  paragraph: css`
  ${breakpointsMedia({
    xs: css`
      font-size: ${({ theme }) => theme.typographyVariants.paragraphXS.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.paragraphXS.fontWeight};
      line-height: ${({ theme }) => theme.typographyVariants.paragraphXS.lineHeight};
    `,
    md: css`
      font-size: ${({ theme }) => theme.typographyVariants.paragraph.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.paragraph.fontWeight};
      line-height: ${({ theme }) => theme.typographyVariants.paragraph.lineHeight};
    `,
  })}
  `,
  smallestException: css`
    font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.smallestException.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.smallestException.lineHeight};
  `,
};

const TextStyle = styled.p`
  ${({ variant }) => textStyleVariants[variant]}
  color: ${({ theme, color }) => get(theme, `colors.${color}`)};
  font-family: ${({ theme, font }) => get(theme, `fonts.${font}`)};
`;

export default TextStyle;
