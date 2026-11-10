// ==========================================================
// Angle of attack demo (with stall)
// ==========================================================
const CRITICAL_ANGLE = 15;   // degrees: above this the wing stalls

const slider     = document.getElementById('angle');
const angleText  = document.getElementById('angleValue');
const liftText   = document.getElementById('liftValue');
const stallAlert = document.getElementById('stallAlert');
const diagram    = document.querySelector('.wing-diagram');
const wing       = document.querySelector('.wing');
const liftArrow  = document.querySelector('.lift-arrow');
const topFlows   = document.querySelectorAll('.airflow-top');

function getLiftLabel(angle) {
  if (angle > CRITICAL_ANGLE) return 'Collapsing (stall)';
  if (angle <= 1)  return 'Almost none';
  if (angle <= 4)  return 'Low';
  if (angle <= 8)  return 'Medium';
  if (angle <= 12) return 'High';
  return 'Very high';
}

function updateDemo() {
  const angle   = Number(slider.value);
  const stalled = angle > CRITICAL_ANGLE;

  angleText.textContent = angle;
  liftText.textContent  = getLiftLabel(angle);
  liftText.classList.toggle('danger', stalled);
  diagram.classList.toggle('stalled', stalled);
  stallAlert.hidden = !stalled;

  // Tilt the wing (negative = nose up)
  wing.style.transformBox    = 'fill-box';
  wing.style.transformOrigin = 'center';
  wing.style.transform       = `rotate(${-angle}deg)`;

  // Faster air on top as the angle grows; slow and messy once stalled
  const topSpeed = stalled ? 1.6 : 1.2 - angle * 0.04;
  topFlows.forEach(line => { line.style.animationDuration = `${topSpeed}s`; });

  // Lift arrow grows with angle, then drops sharply after the stall
  const arrowLength = stalled
    ? Math.max(12, 70 - (angle - CRITICAL_ANGLE) * 10)
    : 20 + angle * 3.5;
  liftArrow.setAttribute('y2', 165 - arrowLength);
}

slider.addEventListener('input', updateDemo);
updateDemo();

// ==========================================================
// Myth cards: click / Enter / Space flips them (works on touch)
// ==========================================================
document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', () => card.classList.toggle('flipped'));
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      card.classList.toggle('flipped');
    }
  });
});