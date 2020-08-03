// var storeRegistration = localStorage["getPlates"];
// var allReg = [];
// if (storeRegistration) {
//     allReg = JSON.parse(storeRegistration);
// }
var data = localStorage['getPlates'] ? JSON.parse(localStorage['getPlates']) : [];

const regNumberEntered = document.querySelector(".regNumberEntered");
const regNumbers = document.querySelector(".regNumbers");
const addRegNumberBtn = document.querySelector(".addRegNumber");
const message = document.querySelector(".message");
const latestList = document.querySelector(".mainList");
const clearScreen = document.querySelector(".clearBtn");
const display = document.getElementById("showReg");

var regContainer = regNumbers(data);

function displayReg() {
	var stored = regContainer.regDisplay();

	for (var i = 0; i < stored.length; i++) {
		var latestStored = stored[i];
		var docDisplay = document.createElement("li");

		docDisplay.innerHTML = latestStored;
		latestList.appendChild(docDisplay);

	}
}

addRegNumberBtn.addEventListener("click", function () {
	regNumber.innerHTML = regNumberEntered.value;
	var radioButton = document.querySelector("input[name ='town']:checked");
	latestList.innerHTML("");
	if (regNumberEntered.value === "") {
		message.innerHTML = "Please enter a registration number";

	}
	if (regNumberEntered.value === false) {
		message.innerHTML = "Invalid Registration"
	}
	setTimeout(function(){
        message.innerHTML = "";
    },4000);

	var reg = regContainer.regDisplay();
	displayReg();
	localStorage["getPlates"] = JSON.stringify(reg);

	if (radioButton) {
		latestList.innerHTML = "";
		var filteredReg = radioButton.value;
		var latestData = regContainer.selectedTown(filteredReg);

		var newFiltered = document.createElement("li");
		newFiltered.innerHTML = latestData;
		latestList.appendChild(newFiltered);
}
});
resetButton.addEventListener("click", function () {
	regContainer.clearData();
	localStorage.clear();
	location.reload();

});
