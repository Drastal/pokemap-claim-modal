var donationProgress = 60;
var serviceCost = 150;


var modalElement;
var RADIUS = 44;
var CIRCUMFERENCE;
var progressValue;
var progressTextElement;

initializeClaim();

///////////////

function initializeClaim() {
	initializeModal();
	initializeDonationBar();
}

///////////////

function initializeModal() {
	modalElement = document.getElementById('claim-modal');
	// When the user clicks anywhere outside of the modal, close it
	modalElement.onclick = function(event) {
	    if (event.target == modalElement) {
	        closeModal();
	    }
	}

	var serviceCostElement = document.getElementById('service-cost');
	serviceCostElement.innerText = serviceCost;
}

function initializeDonationBar() {
    progressValue = modalElement.querySelector('.progress-value');
    progressTextElement = modalElement.querySelector('.progress-text');

    CIRCUMFERENCE = 2 * Math.PI * RADIUS;

    progressValue.style.strokeDasharray = CIRCUMFERENCE;
    setDonationProgress(donationProgress);
}

function closeModal() {
    modalElement.style.display = "none";
}

function progress(value) {
    var progress = value / 100;
    var dashoffset = CIRCUMFERENCE * (1 - progress);

    progressValue.style.strokeDashoffset = dashoffset;
}

function setDonationProgress(value) {
	console.warn(progressTextElement);
	progressTextElement.innerHTML = value + '%';
    progress(value);
}