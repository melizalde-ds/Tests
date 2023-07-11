let p = 0;
let m = 0;
let s = 0;
let op = 0;
let st = 0;

function num(n) {
    if (st == 0) {
        let disp = document.getElementById('display');
        let result = disp.textContent += n;
        disp.textContent = result;
    }
    else {
        let disp = document.getElementById('display');
        disp.textContent = '';
        let result = disp.textContent += n;
        disp.textContent = result;
        st = 0;
    }
}

function point() {
    if (p == 0) {
        let disp = document.getElementById('display');
        let result = disp.textContent += '.';
        disp.textContent = result;
        p = 1;
    }
    else {
        return;
    }
}

function clearInp() {
    let disp = document.getElementById('display');
    disp.textContent = '0';
    p = 0;
    s = 0;
}

function clearAll() {
    let disp = document.getElementById('display');
    disp.textContent = '0';
    p = 0;
    m = 0;
    s = 0;
}

function signC() {
    if (s == 0) {
        let disp = document.getElementById('display');
        let result = disp.textContent = '-' + disp.textContent;
        disp.textContent = result;
        s = 1;
    }
    else {
        let disp = document.getElementById('display');
        let result = disp.textContent = disp.textContent.replace('-', '');
        disp.textContent = result;
        s = 0;
    }
}

function opp(n) {
    let disp = document.getElementById('display');
    if (p == 1) {
        m = parseFloat(disp.textContent);
    }
    else {
        m = parseInt(disp.textContent);
    }
    disp.textContent = '0';
    op = n;
}

function resultOpp() {
    let disp = document.getElementById('display');
    let result;
    switch (op) {
        case 1:
            result = m + parseFloat(disp.textContent);
            disp.textContent = result;
            break;
        case 2:
            result = m - parseFloat(disp.textContent);
            disp.textContent = result;
            break;
        case 3:
            result = m * parseFloat(disp.textContent);
            disp.textContent = result;
            break;
        case 4:
            result = m / parseFloat(disp.textContent);
            disp.textContent = result;
            break;
        default:
            break;
    }
    op = 0;
    s = 0;
    p = 0;
    m = 0;
    st = 1;
}