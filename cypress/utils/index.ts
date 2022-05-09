import axe from "axe-core";

/**
 * Create selector for data-test attribute value
 * @param {String} selectorValue - Value of selector
 * @return {String} String containing selector and value
 */
export function createSelector(selectorValue: string): string {
  return `[data-test=${selectorValue}]`;
}

/**
 * Create selector for data-test-id attribute value
 * @param {String} selectorValue - Value of selector
 * @return {String} String containing selector and value
 */
export function createIdSelector(selectorValue: string): string {
  return `[data-test-id=${selectorValue}]`;
}

/**
 * Create selector for data-test-value attribute value
 * @param {String} selectorValue - Value of selector
 * @return {String} String containing selector and value
 */
export function createValueSelector(selectorValue: string): string {
  return `[data-test-value=${selectorValue}]`;
}

export function terminalLog(violations: axe.Result[]) {
  cy.task(
    "log",
    `${violations.length} accessibility violation${
      violations.length === 1 ? "" : "s"
    } ${violations.length === 1 ? "was" : "were"} detected`
  );
  // pluck specific keys to keep the table readable
  const violationData = violations.map(
    ({ id, impact, description, nodes }) => ({
      id,
      impact,
      description,
      nodes: nodes.length,
    })
  );

  cy.task("table", violationData);
}
