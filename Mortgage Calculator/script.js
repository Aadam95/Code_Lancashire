function selectMortgageType(element) {
    // Remove selected class from all options
    document.querySelectorAll('.radio-option').forEach(opt => opt.classList.remove('selected'));
    // Add selected class to clicked option
    element.closest('.radio-option').classList.add('selected');
}

// Add click event listeners to radio buttons
document.querySelectorAll('input[name="mortgageType"]').forEach(radio => {
    radio.addEventListener('change', function() {
        selectMortgageType(this);
    });
});

function clearForm() {
    document.getElementById('loanAmount').value = '';
    document.getElementById('loanTerm').value = '';
    document.getElementById('interestRate').value = '';
    document.getElementById('repayment').checked = true;
    selectMortgageType(document.getElementById('repayment'));
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount);
}

function calculateMortgage() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const annualInterestRate = parseFloat(document.getElementById('interestRate').value);
    const loanTermYears = parseInt(document.getElementById('loanTerm').value);
    const mortgageType = document.querySelector('input[name="mortgageType"]:checked').value;

    const monthlyInterestRate = (annualInterestRate / 100) / 12;
    const numberOfPayments = loanTermYears * 12;

    let monthlyPayment;
    let totalPayment;

    if (mortgageType === 'interestOnly') {
        monthlyPayment = loanAmount * monthlyInterestRate;
        totalPayment = (monthlyPayment * numberOfPayments) + loanAmount;
    } else {
        monthlyPayment = loanAmount * 
            (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
            (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
        totalPayment = monthlyPayment * numberOfPayments;
    }

    document.getElementById('monthlyPayment').textContent = formatCurrency(monthlyPayment);
    document.getElementById('totalPayment').textContent = formatCurrency(totalPayment);
}

// Calculate initial values
calculateMortgage();