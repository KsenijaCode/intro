https://www.codewars.com/kata/57ab2d6072292dbf7c000039/train/javascript

/*
ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
*/

function correctPolishLetters (string) {
    let result = '';

    for (let i=0; i<string.length; i++) {
        const letter = string[i];

        if (letter === 'ą') {
            result += 'a';

        } else if (letter === 'ę') {
            result += 'e';
            
        }else if (letter === 'ć') {
            result += 'c';
            
        } else if (letter === 'ł') {
            result += 'l';
            
        }else if (letter === 'ń') {
            result += 'n';
            
        } else if (letter === 'ó') {
            result += 'o';
            
        }else if (letter === 'ś') {
            result += 's';
            
        } else if (letter === 'ź') {
            result += 'z';
            
        }else if (letter === 'ż') {
            result += 'z';
        } else {
            result += letter;
        }
    }
    return result;
}



console.log(correctPolishLetters("Jędrzej Błądziński"), '-->', "Jedrzej Bladzinski");
console.log(correctPolishLetters("Lech Wałęsa"), '-->', "Lech Walesa");
console.log(correctPolishLetters("Maria Skłodowska-Curie"), '-->', "Maria Sklodowska-Curie");


function polish(string) {
    const polishAbc = 'ąćęłńóśźż';
    const normalAbc = 'acelnoszz';
    let result = '';

    for (let i=0; i<string.length; i++) {
        const letter = string[i];

        let index = -1;
        for (let j=0; j<polishAbc.length; j++) {
            const polishLetter = polishAbc[j];
            if (polishLetter === letter) {
                result += normalAbc[j];
                index = j;
            }
        }
        if (index == -1) {
            result += letter;
        }
    }
}



console.log(correctPolishLetters('Jędrzej Błądziński'), '-->', "Jedrzej Bladzinski");
console.log(correctPolishLetters("Lech Wałęsa"), '-->', "Lech Walesa");
console.log(correctPolishLetters("Maria Skłodowska-Curie"), '-->', "Maria Sklodowska-Curie");