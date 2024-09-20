function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const navButtons = document.querySelector('.nav-buttons');
    navLinks.classList.toggle('active');
    navButtons.classList.toggle('active');
}

// Function to navigate to the next step
function nextStep(step) {
    document.querySelectorAll('.step').forEach(function(element) {
        element.style.display = 'none'; // Hide all steps
    });
    document.getElementById(`step-${step}`).style.display = 'block'; 
}


function previousStep(step) {
    document.querySelectorAll('.step').forEach(function(element) {
        element.style.display = 'none'; 
    });
    document.getElementById(`step-${step}`).style.display = 'block';
}


function calculateTax() {
    
    const annualIncome = parseFloat(document.getElementById('annual-income').value) || 0;
    const otherIncome = parseFloat(document.getElementById('other-income').value) || 0;
    const deductions = parseFloat(document.getElementById('deductions').value) || 0;

    // Calculate total income
    const totalIncome = annualIncome + otherIncome;

    // Calculate taxable income
    const taxableIncome = totalIncome - deductions;

   
    let tax = 0;

    if (taxableIncome <= 250000) {
        tax = 0;
    } else if (taxableIncome > 250000 && taxableIncome <= 500000) {
        tax = (taxableIncome - 250000) * 0.05;
    } else if (taxableIncome > 500000 && taxableIncome <= 1000000) {
        tax = 12500 + (taxableIncome - 500000) * 0.2;
    } else if (taxableIncome > 1000000) {
        tax = 112500 + (taxableIncome - 1000000) * 0.3;
    }

    // Display result
    document.getElementById('result').innerText = `Your total tax is: ₹${tax.toFixed(2)}`;
}
