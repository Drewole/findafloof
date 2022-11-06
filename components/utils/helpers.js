// abbreviate class name with a prefix
export const _classes = (styles) => (name) => {
  if (typeof name === 'string') {
    return styles[name] || name || '';
  }

  if (Array.isArray(name)) {
    return name.map((n) => styles[n] || n || '').join(' ');
  }

  return '';
};
