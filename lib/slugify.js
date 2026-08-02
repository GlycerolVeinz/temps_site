const CHAR_MAP = { ß: 'ss', ø: 'o', ł: 'l', æ: 'ae', œ: 'oe', đ: 'd', þ: 'th' };

export const slugify = (input = '') =>
  input
    .normalize('NFKD')                           // decompose é into e + combining mark
    .replace(/\p{M}/gu, '')                      // strip the combining marks
    .toLowerCase()
    .replace(/[ßøłæœđþ]/g, (c) => CHAR_MAP[c])   // chars NFKD will not decompose
    .replace(/[^a-z0-9]+/g, '-')                 // any run of punctuation becomes one hyphen
    .replace(/^-+|-+$/g, '')
    .slice(0, 96)
    .replace(/-+$/, '');