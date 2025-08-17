// Billing Toggle Logic

const toggle = document.getElementById('toggleBilling');
const priceValues = document.querySelectorAll('.price-value');
const billingUnits = document.querySelectorAll('.billing-unit');

toggle.addEventListener('click', function(e) {
  if (e.target.classList.contains('toggle-option')) {
    toggle.querySelectorAll('.toggle-option').forEach(opt => opt.classList.remove('active'));
    e.target.classList.add('active');
    const billing = e.target.getAttribute('data-billing');
    priceValues.forEach(pv => {
      pv.textContent = pv.getAttribute('data-' + billing);
    });
    billingUnits.forEach(lbl => {
      lbl.textContent = (billing === 'bedrock' ? 'Bedrock' : 'Java');
    });
  }
});

// Users Slider Label Logic

const userRange = document.getElementById('userRange');
const sliderLabel = document.getElementById('sliderLabel');

function formatNumber(val) {
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function updateSliderLabel() {
  let val = +userRange.value;
  sliderLabel.textContent = formatNumber(val) + ' Users';
  const min = +userRange.min;
  const max = +userRange.max;
  const percent = (val - min) / (max - min);
  sliderLabel.style.left = `calc(${percent * 100}% - 60px)`;
}

userRange.addEventListener('input', updateSliderLabel);
window.addEventListener('resize', updateSliderLabel);
updateSliderLabel();
