function regNumbers(registration) {

    var myList = registration || [];

    function regList(regPlate) {
        var newList = [];
        for (var i = 0; i < myList.length; i++) {
            var current = myList[i];
            if (current.startsWith("CA")) {
                newList.push(current);
                //always push to empty list/array
            }
            if (current.startsWith("CK")) {
                newList.push(current);
            }
            if (current.startsWith("CY")) {
                newList.push(current);
            }
        }
    }
    function getRegistration(regNum) {
        //regex
        if(regNum !== ""){
            var regularExpression
            if()
        }
        myList.push(regNum);
    }

    function regDisplay(regis) {
        return myList;

    }

    return {
        regList,
        regDisplay,
        getRegistration

    }
}
