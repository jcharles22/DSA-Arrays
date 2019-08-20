

function removeChar(str, remv) {    
    let remove = '';
    for(let i = 0; i< remv.length; i++) {
        remove += remv[i] + '|';
    }
    return str.replace(new RegExp(remove, 'g'), '')
    
}1


console.log(removeChar('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'))