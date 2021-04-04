document.addEventListener('DOMContentLoaded', () => {
  const link = $.qs('.js-main-link');
  if (!link) return;
  const circle = $.qs('.main-link-circle', link);

  link.addEventListener('mouseenter', e => {
    const { pageX, pageY } = e;
    const left = link.offsetLeft;
    const top = link.offsetTop;

    const x = pageX - left;
    const y = pageY - top;

    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
  });
});
