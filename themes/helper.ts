export const breakpoints = {
  pad: '480',
  desktop: '768',
};

/**
 * @param {string} threshold
 * @param {string} displayWay 'max' or 'min'
 */
export const media = (
  threshold: 'pad' | 'desktop',
  displayWay: string = 'min',
) => {
  const breakpoint = breakpoints[threshold];
  return `@media (${displayWay}-width: ${breakpoint}px)`;
};
