
let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click',(e) => {
     switch(e.target.innerText){
        case 'CLEAR':
            display.innerText = '';
            break;
            case 'DELETE':
                display.innerText = display.innerText.slice(0,-1);
                break;
        default:
            display.innerText += e.target.innerText;
            
    
    }
    })
})






// function operate(a,b,op){
// switch(op){
//     case '+':
//         return a+b;
//         case '-':
//             return a-b;
//             case '/':
//                 return a/b;
//                 case '*':
//                     return a*b;
//                     default:
//                         return 'invalid arguement';
// };
// };

