import { css } from 'styled-components';
import theme from '../index';

const { breakpoints } = theme;

export default function breakpointsMedia(cssRuleByBreakpoint) {
  const cssBreakpoints = Object.keys(cssRuleByBreakpoint);
  const cssAttributes = cssBreakpoints.map((breakpoint) => css`
    @media screen and (min-width: ${breakpoints[breakpoint]}px) {
      ${cssRuleByBreakpoint[breakpoint]}
    }
  `);
  return cssAttributes;
}
