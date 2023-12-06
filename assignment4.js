function cubeNumber(number) {
    if (typeof number == 'number') {
        const cubeOfNumber = number * number * number;
        return cubeOfNumber;
    }
    else {
        return "Please provide a number";
    }
}

function matchFinder(string1, string2) {
    if (typeof string1 == 'string' && typeof string2 == 'string') {
        return string1.includes(string2);

    }
    else {
        return "Please provide string";
    }

}



function sortMaker(arr) {
    if (arr[0] > 0 && arr[1] > 0) {
        let firstIndex = arr[0];
        for (let i = 1; i <= arr.length; i++) {
            if (arr[i] > firstIndex) {
                return [arr[0], arr[1]] = [arr[1], arr[0]];

            }
            else if (arr[i] === firstIndex) {
                return "Equal";
            }
            else {
                return arr;

            }
        }
    }
    else {
        return "Invalid input";

    }
}

function findAddress(obj) {

    const street = obj.street || "__"
    const house = obj.house || "__"
    const society = obj.society || "__"

    return street + "," + house + "," + society;
}

function canPay(changeArray, totalDue) {
    let sum = 0;
    if (changeArray.length === 0) {
        return "Please give some taka";
    }
    else {
        for (let i = 0; i < changeArray.length; i++) {
            sum = sum + changeArray[i];

        }
        if (sum >= totalDue) {
            return true;
        }
        else {
            return false;
        }
    }
}


