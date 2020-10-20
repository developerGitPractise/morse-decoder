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
        const dotsDashCoder = elem => {
            let dotsDashResult = '';
            if (elem.indexOf('*') === -1 && elem.indexOf('1') !== -1) {
                let fromThisPosition = 0;
                while (fromThisPosition <= elem.length - 1) { 
                    let oneSearcher = elem.indexOf(1, fromThisPosition);
                    if (elem[oneSearcher + 1] === '0') { 
                        dotsDashResult += '.'; 
                        fromThisPosition = oneSearcher + 2;
                    } else if (elem[oneSearcher + 1] === '1'){
                        dotsDashResult += '-'; 
                        fromThisPosition = oneSearcher + 2;
                    }; 
                };
            };
            return dotsDashResult;
        };        
        const isMorseCode = element => {
            if (MORSE_TABLE.hasOwnProperty(element) === true) {
                return MORSE_TABLE[element];
            } else {
                return ' ';
            };    
        };       
        let arrOfEveryTenSymbols = initialString.split(reg).filter(element => element !== '').map(dotsDashCoder);
        let translateText = arrOfEveryTenSymbols.map(isMorseCode).join('');
        return translateText;
    }

    module.exports = {
        decode
    }