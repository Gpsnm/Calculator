
let display = document.getElementById('display');
let buttons = document.getElementsByClassName('button');




function operate(a,b,op){
switch(op){
    case '+':
        return a+b;
        case '-':
            return a-b;
            case '/':
                return a/b;
                case '*':
                    return a*b;
                    default:
                        return 'invalid arguement';
};
};

