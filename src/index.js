    const MORSE_TABLE = {
        '.-':     'a',
        '-...':   'b',
        '-.-.':   'c',
        '-..':    'd',
        '.':      'e',
        '..-.':   'f',
        '--.':    'g',
        '....':   'h',
        '..':     'i',
        '.---':   'j',
        '-.-':    'k',
        '.-..':   'l',
        '--':     'm',
        '-.':     'n',
        '---':    'o',
        '.--.':   'p',
        '--.-':   'q',
        '.-.':    'r',
        '...':    's',
        '-':      't',
        '..-':    'u',
        '...-':   'v',
        '.--':    'w',
        '-..-':   'x',
        '-.--':   'y',
        '--..':   'z',
        '.----':  '1',
        '..---':  '2',
        '...--':  '3',
        '....-':  '4',
        '.....':  '5',
        '-....':  '6',
        '--...':  '7',
        '---..':  '8',
        '----.':  '9',
        '-----':  '0',
    };

    function decode(expr) {
        let initialString = expr;
        let reg = /([0-1\*]{10})/;
        const dotsDashCoder = (elem) => {
            let dotsDashResult = '';             
            // если в строке нету *, т.е. потенциального пробела, то проверяем
            if (elem.indexOf('*') === -1 && elem.indexOf('1') !== -1) {
                let fromThisPosition = 0;
                while (fromThisPosition <= elem.length - 1) { 
                    let oneSearcher = elem.indexOf(1, fromThisPosition); // ищу 1
                    if (elem[oneSearcher + 1] === '0') { //если следующий за ним элемент 0, то 10
                        dotsDashResult += '.'; // 10 это точка
                        fromThisPosition = oneSearcher + 2;
                    } else if (elem[oneSearcher + 1] === '1'){ //если следующий за ним элемент 1, то 11
                        dotsDashResult += '-'; // 11 это тире
                        fromThisPosition = oneSearcher + 2;
                    }; 
                };
            };
            return dotsDashResult;
        };
        // where search   [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", "-----"]
        const isMorseCode = (element) => {
            if (MORSE_TABLE.hasOwnProperty(element) === true) {
                return MORSE_TABLE[element];
            } else {
                return ' ';
            };    
        };
        // what search   ["....", ".", ".-..", ".-..", "---", "", ".--", "---", ".-.", ".-..", "-.."]
        let arrOfEveryTenSymbols = initialString.split(reg).filter(element => element !== '').map(dotsDashCoder);
        let translateText = arrOfEveryTenSymbols.map(isMorseCode).join('');
        return translateText;
    }

    module.exports = {
        decode
    }