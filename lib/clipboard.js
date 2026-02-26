/**
 * Copy text to the clipboard and invoke a callback on success.
 *
 * @param {string}   text       - The text to copy.
 * @param {function} onCopied   - Called with the copied text on success.
 * @param {number}   [timeout=2000] - ms after which onCopied is called with "" to clear.
 */
export function copyToClipboard(text, onCopied, timeout = 2000) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      onCopied(text);
      setTimeout(() => onCopied(""), timeout);
    })
    .catch((err) => console.error('Failed to copy: ', err));
}
