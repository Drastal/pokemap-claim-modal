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
	appendModal();

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

function appendModal() {
	var modalNode =
    '<div id="claim-modal" class="modal">' +
    '    <div class="modal-content">' +
    '        <div class="modal-header">' +
    '            <h2>PokeMap a besoin de vous</h2>' +
    '        </div>' +
    '        <div class="modal-body">' +
    '            <p class="italic">Le service ne pourrait pas exister sans l\'aide de ses contributeurs &hearts;' +
    '                <br/> Le coup moyen mensuel est de <span id="service-cost" class="bold">100</span>&euro;</p>' +
    '            <p>Ce mois de décembre, nous en sommes à</p>' +
    '            <div class="donation-bar text-center">' +
    '                <svg class="progress" width="100" height="100" viewBox="0 0 100 100">' +
    '                    <circle class="progress-meter" cx="50" cy="50" r="44" stroke-width="12" />' +
    '                    <circle class="progress-value" cx="50" cy="50" r="44" stroke-width="12" />' +
    '                    <text class="progress-text" x="50%" y="50%" text-anchor="middle" stroke="#000" stroke-width="1px" dy=".4em"></text>' +
    '                </svg>' +
    '            </div>' +
    '            <div class="button-bar">' +
    '                <input type="button" class="close" onclick="closeModal()" value="Fermer"/>' +
    '                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">' +
    '                    <input name="cmd" value="_s-xclick" type="hidden">' +
    '                    <input name="hosted_button_id" value="KPMN8UN2EZJ56" type="hidden">' +
    '                    <input name="submit" type="button" class="donate" value="&hearts; Faire un don">' +
    '                </form>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>';

    var bodyElement = document.getElementsByTagName("BODY")[0];

    bodyElement.insertAdjacentHTML('beforeend', modalNode);
}