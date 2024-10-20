let count = 1;
const counterDisplay = document.getElementById('countDisplay'); // Fix: correct ID
const incrementBtn = document.getElementById('inc');
const decrementBtn = document.getElementById('dec');
const clearBtn = document.getElementById('clr');
const errorMessage = document.querySelector('.error-message'); // Fix: use querySelector to target the error message class

function updateCounterDisplay() {
    counterDisplay.textContent = count;
    decrementBtn.disabled=count===0;
    if (count === 0) {
        clearBtn.style.display = 'none';
    } else {
        clearBtn.style.display = 'inline-block';

    }
}

incrementBtn.addEventListener('click', () => {
    count += 1;
    updateCounterDisplay();
    errorMessage.style.display = 'none'; // Hide error when count is incremented
});

decrementBtn.addEventListener('click', () => {
    if (count > 0) {
        count -= 1;
        if(count===0)
        errorMessage.style.display = 'block';
        updateCounterDisplay();
       
    } 
});

clearBtn.addEventListener('click', () => {
    count = 0;
    updateCounterDisplay();
    errorMessage.style.display = 'block'; // Clear any error messages
    
});

