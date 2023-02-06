module.exports = function toReadable (number) {
    let listNumber = number.toString().split('');
    const simpleNumber = (num) => {
        switch (num) {
            case 1:
                return 'one';
            case 2:
                return 'two';
            case 3:
                return 'three';
            case 4:
                return 'four';
            case 5:
                return 'five';
            case 6:
                return 'six';
            case 7:
                return 'seven';
            case 8:
                return 'eight';
            case 9:
                return 'nine';
        }
    }
    const teenNumber = (num) => {
        switch (num) {
            case 10:
                return 'ten';
            case 11:
                return 'eleven';
            case 12:
                return 'twelve';
            case 13:
                return 'thirteen';
            case 14:
                return 'fourteen';
            case 15:
                return 'fifteen';
            case 16:
                return 'sixteen';
            case 17:
                return 'seventeen';
            case 18:
                return 'eighteen';
            case 19:
                return 'nineteen';
        }
        /*if (number >= 14 && number < 20 && number !== 15 && number !== 18) {
            return `${simpleNumber(+listNumber[1])}teen`;
    }*/
    }
    const DozensNumber = (num) => {
        switch (num) {
            case 20:
                return 'twenty';
            case 30:
                return 'thirty';
            case 40:
                return 'forty';
            case 50:
                return 'fifty';
            case 60:
                return 'sixty';
            case 70:
                return 'seventy';
            case 80:
                return 'eighty'
            case 90:
                return 'ninety'
        }
    }
    if (number === 0) {
        return 'zero';
    } else if (number.toString().length === 1) {
        return simpleNumber(number);
    } else if (number >= 10 && number < 20) {
        return teenNumber(number);
    } else if (number.toString().length === 2 && Number(listNumber[1]) === 0) {
        return `${DozensNumber(Number(listNumber[0]) * 10)}`;
    } else if (number.toString().length === 2 && Number(listNumber[1]) > 0)  {
        return `${DozensNumber(Number(listNumber[0]) * 10)} ${simpleNumber(Number(listNumber[1]))}`;
    } else if (number.toString().length === 3 && Number(listNumber[1]) === 0 && Number(listNumber[2]) === 0) {
        return `${simpleNumber(Number(listNumber[0]))} hundred`
    } else if (number.toString().length === 3 && Number(listNumber[1]) === 0 && Number(listNumber[2]) !== 0) {
        return `${simpleNumber(Number(listNumber[0]))} hundred ${simpleNumber(Number(listNumber[2]))}`;
    } else if (number.toString().length === 3 && Number(listNumber[1]) === 1) {
        return `${simpleNumber(Number(listNumber[0]))} hundred ${teenNumber(Number((listNumber[1]+listNumber[2])))}`;
    }  else if (number.toString().length === 3 && Number(listNumber[1]) > 1 && +listNumber[2] === 0) {
        return `${simpleNumber(Number(listNumber[0]))} hundred ${DozensNumber(Number((listNumber[1]+listNumber[2])))}`;
    } else {
        return `${simpleNumber(Number(listNumber[0]))} hundred ${DozensNumber(Number(listNumber[1] * 10))} ${simpleNumber(Number(listNumber[2]))}`
    }}

// console.log(toReadable(1))


// function inWords (number) {
//     if ((number = number.toString()).length > 9) return 'overflow';
//     n = ('000000000' + number).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
//     if (!n) return; var str = '';
//     str += (n[1] != 0) ? (a[numberber(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
//     str += (n[2] != 0) ? (a[numberber(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
//     str += (n[3] != 0) ? (a[numberber(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
//     str += (n[4] != 0) ? (a[numberber(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
//     str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[numberber(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
//     return str;
// }
