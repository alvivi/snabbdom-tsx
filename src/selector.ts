
export interface Selector {
  tagName?: string;
  id?: string;
  className?: string;
}

export function selectorToString(sel: Selector) {
  const id = sel.id ? `#${sel.id.trim()}` : '';
  const tag = sel.tagName ? sel.tagName.trim() : '';
  const className = sel.className || '';
  const classes = className.split(' ').map(s => s ? `.${s}` : '').join('');
  return `${tag}${id}${classes}`;
}
