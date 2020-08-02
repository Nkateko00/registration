var storingData = localStorage['getPlates'] ? JSON.parse(localStorage['getPlates']) : [];

const regNumberEntered = document.querySelector(".regNumberEntered");
const regNumbers = document.querySelector(".regNumbers");
const addRegNumberBtn = document.querySelector(".addRegNumber");
const message = document.querySelector(".message");
const latestList = document.querySelector(".mainList");
const clearScreen = document.querySelector(".clearBtn");
const display = document.getElementById("showReg");

var regContainer = regNumbers(storingData);

function displayReg() {
	var stored = regContainer.regDisplay();

	for (var i = 0; i < stored.length; i++) {
		var latestStored = stored[i];
		var docDisplay = document.createElement("li");

		docDisplay.innerHTML = latestStored;
		latestList.appendChild(docDisplay);

	}
}

function addBtnClick() {
	displayReg();
	latestList.innerHTML("");
	addRegNumberBtn.addEventListener("click", function () {

		if (regNumberEntered.value == "") {
			message.innerHTML = "Please enter a registration number";
			return;
		}

		regNumber.innerHTML = regNumberEntered.value;
	});
}
