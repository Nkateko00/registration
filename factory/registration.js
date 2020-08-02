function regNumbers(registration) {

    var myList = registration || [];

    function selectedTown(regPlate) {

        if (regPlate = "all") {
            return myList;
            //always push to empty list/array
        }
        else {
            var newList = [];
            for (var i = 0; i < myList.length; i++) {
                var current = myList[i];
                if (current.startsWith(regPlate)) {
                    newList.push(current);
                }
            }
            return newList;
            // for-loop is filtering, List stores & retuns new data

        }
    }
    function getRegistration(regNum) {
        // regex  to check if textbox includes the regEx
        // use .test() to  test the regNumber & the regEx
        //list doesnt iclude same number push
        if (regNum !== "") {
            var regularExpression = /C[YJA] \d{3}[\s]? \d{3}[\s]?/g
            if (regularExpression.test(regNum) && !myList.includes(regNum)) {
                myList.push(regNum)
            }
        }
        else {
            return false;
        }
        myList.push(regNum);
    }

    function regDisplay(regis) {
        return myList;

    }

    return {
        selectedTown,
        regDisplay,
        getRegistration

    }
}
