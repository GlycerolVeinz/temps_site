/**
 * Smooth-scroll to a section by its DOM id.
 * Pass 'landing' to scroll to the very top of the page.
 *
 * @param {string} sectionId - The id attribute of the target section.
 * @param {object} [options]
 * @param {number} [options.offset=16] - Pixels to subtract from the scroll target.
 */
export function scrollToSection(sectionId, { offset = 16 } = {}) {
  if (sectionId === 'landing') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const element = document.getElementById(sectionId);
  if (element) {
    const offsetPosition = element.offsetTop - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
}
