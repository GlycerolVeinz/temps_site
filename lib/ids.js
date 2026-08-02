import { slugify } from './slugify';

/**
 * Generate a DOM-safe id for a band member.
 *
 * @param {{ firstName: string, lastName: string }} member
 * @returns {string}
 */
export function getMemberId(member) {
  return `member-${slugify(`${member.firstName} ${member.lastName}`)}`;
}

/**
 * Generate a DOM-safe id (slug) for an EP / album.
 *
 * @param {{ title: string }} ep
 * @returns {string}
 */
export function getEpId(ep) {
  return `ep-${slugify(ep.title)}`;
}
