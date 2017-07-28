import isStandardSyntaxSelector from "stylelint/lib/utils/isStandardSyntaxSelector";
import hasInterpolation from "stylelint/lib/utils/hasInterpolation";
/**
 * Check whether a selector is standard
 *
 * @param {string} selector
 * @return {boolean} If `true`, the selector is standard
 */
export default function(selector) {
  const standardSyntaxSelector = isStandardSyntaxSelector(selector);

  // SCSS placeholder selectors
  if (!standardSyntaxSelector) {
    if (selector.indexOf("%") === 0 && !hasInterpolation(selector)) {
      return true;
    }
  }

  return standardSyntaxSelector;
}
