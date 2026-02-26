/**
 * Generate a DOM-safe id for a band member.
 *
 * @param {{ firstName: string, lastName: string }} member
 * @returns {string}
 */
export function getMemberId(member) {
  return `member-${member.firstName.toLowerCase()}-${member.lastName.toLowerCase()}`;
}

/**
 * Generate a DOM-safe id (slug) for an EP / album.
 *
 * @param {{ title: string }} ep
 * @returns {string}
 */
export function getEpId(ep) {
  return `ep-${ep.title.toLowerCase().replace(/\s+/g, '-')}`;
}
