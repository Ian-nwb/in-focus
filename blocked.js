var FLOATIES = [
  // Large cloud
  { svg: '<svg width="40" height="28" viewBox="0 0 80 54" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="40" cy="42" rx="34" ry="12" fill="#c4dcf5"/><ellipse cx="30" cy="36" rx="20" ry="14" fill="#daeefb"/><ellipse cx="50" cy="33" rx="18" ry="14" fill="#daeefb"/><ellipse cx="40" cy="26" rx="16" ry="16" fill="#eef6fd"/><ellipse cx="28" cy="30" rx="10" ry="10" fill="#f5fbff"/><ellipse cx="52" cy="28" rx="9" ry="9" fill="#f5fbff"/></svg>', anim: 'floatUp' },
  // Blue 5-point star
  { svg: '<svg width="28" height="28" viewBox="0 0 16 16" fill="#a8d5f5" xmlns="http://www.w3.org/2000/svg"><polygon points="8,1 9.5,6 15,6 10.5,9.5 12,14.5 8,11 4,14.5 5.5,9.5 1,6 6.5,6"/></svg>', anim: 'spinUp' },
  // Pink 5-point star
  { svg: '<svg width="24" height="24" viewBox="0 0 16 16" fill="#f4c2cf" xmlns="http://www.w3.org/2000/svg"><polygon points="8,1 9.5,6 15,6 10.5,9.5 12,14.5 8,11 4,14.5 5.5,9.5 1,6 6.5,6"/></svg>', anim: 'spinUp' },
  // Pink heart
  { svg: '<svg width="28" height="26" viewBox="0 0 32 29" fill="#f4a7b9" xmlns="http://www.w3.org/2000/svg"><path d="M16 27 C16 27 2 18 2 9 C2 4.6 5.6 2 9 2 C12 2 14.5 3.8 16 6.2 C17.5 3.8 20 2 23 2 C26.4 2 30 4.6 30 9 C30 18 16 27 16 27Z"/></svg>', anim: 'wobbleUp' },
  // Small cloud
  { svg: '<svg width="28" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="13" cy="13" rx="11" ry="5" fill="#c4dcf5"/><ellipse cx="10" cy="11" rx="7" ry="5" fill="#daeefb"/><ellipse cx="16" cy="10" rx="6" ry="5" fill="#daeefb"/><ellipse cx="13" cy="8" rx="5" ry="5" fill="#eef6fd"/></svg>', anim: 'floatUp' },
  // Blue heart
  { svg: '<svg width="26" height="24" viewBox="0 0 32 29" fill="#a8d5f5" xmlns="http://www.w3.org/2000/svg"><path d="M16 27 C16 27 2 18 2 9 C2 4.6 5.6 2 9 2 C12 2 14.5 3.8 16 6.2 C17.5 3.8 20 2 23 2 C26.4 2 30 4.6 30 9 C30 18 16 27 16 27Z"/></svg>', anim: 'wobbleUp' },
  // Blue 4-point sparkle
  { svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="#cbe3f7" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 13.5,10.5 22,12 13.5,13.5 12,22 10.5,13.5 2,12 10.5,10.5"/></svg>', anim: 'spinUp' },
  // Pink 4-point sparkle
  { svg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="#f9c8d8" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 13.5,10.5 22,12 13.5,13.5 12,22 10.5,13.5 2,12 10.5,10.5"/></svg>', anim: 'spinUp' },
  // 6-point star blue
  { svg: '<svg width="26" height="26" viewBox="0 0 24 24" fill="#7aaed4" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 14,9 21,9 15.5,13.5 17.5,21 12,16.5 6.5,21 8.5,13.5 3,9 10,9"/></svg>', anim: 'zigzagUp' },
  // 6-point star pink
  { svg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="#f4a7b9" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 14,9 21,9 15.5,13.5 17.5,21 12,16.5 6.5,21 8.5,13.5 3,9 10,9"/></svg>', anim: 'zigzagUp' },
  // Tiny lavender circle (bubble)
  { svg: '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="8" fill="#e8d8f5" fill-opacity="0.8" stroke="#d4b8ef" stroke-width="1"/></svg>', anim: 'floatUp' },
  // Tiny pink circle (bubble)
  { svg: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="7" cy="7" r="6" fill="#fce4ec" fill-opacity="0.85" stroke="#f4a7b9" stroke-width="1"/></svg>', anim: 'wobbleUp' },
  // Diamond
  { svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="#b8dff5" xmlns="http://www.w3.org/2000/svg"><polygon points="10,1 19,10 10,19 1,10"/></svg>', anim: 'spinUp' },
  // Pink diamond
  { svg: '<svg width="16" height="16" viewBox="0 0 20 20" fill="#f9c8d8" xmlns="http://www.w3.org/2000/svg"><polygon points="10,1 19,10 10,19 1,10"/></svg>', anim: 'spinUp' }
];

// Inject keyframe animations into the page once
(function injectStyles() {
  var style = document.createElement('style');
  style.textContent = [
    '@keyframes floatUp {',
    '  0%   { transform: translateY(0)   scale(var(--s)) rotate(0deg);   opacity: 1; }',
    '  70%  { opacity: 0.85; }',
    '  100% { transform: translateY(-340px) scale(calc(var(--s)*0.6)) rotate(15deg); opacity: 0; }',
    '}',
    '@keyframes spinUp {',
    '  0%   { transform: translateY(0)   scale(var(--s)) rotate(0deg);   opacity: 1; }',
    '  100% { transform: translateY(-300px) scale(calc(var(--s)*0.5)) rotate(360deg); opacity: 0; }',
    '}',
    '@keyframes wobbleUp {',
    '  0%   { transform: translateY(0)    scale(var(--s)) rotate(-8deg);  opacity: 1; }',
    '  25%  { transform: translateY(-80px)  scale(var(--s)) rotate(8deg); }',
    '  50%  { transform: translateY(-160px) scale(var(--s)) rotate(-6deg); }',
    '  75%  { transform: translateY(-240px) scale(calc(var(--s)*0.8)) rotate(5deg); opacity: 0.6; }',
    '  100% { transform: translateY(-320px) scale(calc(var(--s)*0.4)) rotate(0deg); opacity: 0; }',
    '}',
    '@keyframes zigzagUp {',
    '  0%   { transform: translate(0, 0)       scale(var(--s)) rotate(0deg);   opacity: 1; }',
    '  20%  { transform: translate(30px, -70px)  scale(var(--s)) rotate(45deg); }',
    '  40%  { transform: translate(-20px, -140px) scale(var(--s)) rotate(-30deg); }',
    '  60%  { transform: translate(25px, -210px) scale(calc(var(--s)*0.8)) rotate(20deg); opacity: 0.7; }',
    '  80%  { transform: translate(-15px, -270px) scale(calc(var(--s)*0.6)) rotate(-10deg); opacity: 0.3; }',
    '  100% { transform: translate(10px,  -330px) scale(calc(var(--s)*0.3)) rotate(5deg);  opacity: 0; }',
    '}',
    '.floatie {',
    '  position: fixed;',
    '  pointer-events: none;',
    '  z-index: 9999;',
    '}'
  ].join('\n');
  document.head.appendChild(style);
})();

function spawnFloatie(index) {
  var item = FLOATIES[Math.floor(Math.random() * FLOATIES.length)];

  var el = document.createElement('span');
  el.className = 'floatie';
  el.innerHTML = item.svg;

  var x = Math.random() * window.innerWidth;
  var y = window.innerHeight * 0.15 + Math.random() * window.innerHeight * 0.85;

  var scale = 0.6 + Math.random() * 1.3;
  var duration = 1.6 + Math.random() * 1.6;

  el.style.left = x + 'px';
  el.style.top  = y + 'px';
  el.style.setProperty('--s', scale);
  el.style.animationName = item.anim;
  el.style.animationDuration = duration + 's';
  el.style.animationDelay = (index * 0.05) + 's';
  el.style.animationTimingFunction = 'ease-out';
  el.style.animationFillMode = 'forwards';

  document.body.appendChild(el);

  setTimeout(function() {
    if (el.parentNode) el.parentNode.removeChild(el);
  }, (duration + index * 0.05 + 0.5) * 1000);
}

document.getElementById('okayBtn').addEventListener('click', function() {
  for (var i = 0; i < 40; i++) {
    spawnFloatie(i);
  }
});