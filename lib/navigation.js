export const navigate = (sectionId) => {
  if (sectionId === 'landing') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetPosition = element.offsetTop - 16;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
};

export const copyText = (text, setCopiedLink) => {
  navigator.clipboard.writeText(text)
    .then(() => {
      setCopiedLink(text);
      setTimeout(() => setCopiedLink(""), 2000);
    })
    .catch(err => console.error('Failed to copy: ', err));
};
