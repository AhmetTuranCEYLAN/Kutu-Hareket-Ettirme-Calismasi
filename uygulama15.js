
var x1=0,x2=451,vakit1,vakit2;

vakit1=window.setInterval("ilerle1()",30);

function ilerle1(){
    document.getElementById("kutu1").style.left=x1+"px";
    if (x1==401) {
        durdur();
        
        
    }
    x1++;
    

}

function durdur() {
    window.clearInterval(vakit1);
    vakit2=window.setInterval("ilerle2()",30);

}



function ilerle2() {
    document.getElementById("kutu2").style.left=x2+"px";
    if (x2==902) {
        durdur2();
    }
    x2++;
}

function durdur2() {
    window.clearInterval(vakit2);
    vakit2=window.setInterval("geri1()",30);
}

function geri1() {
    document.getElementById("kutu2").style.left=x2+"px";
    if (x2==451) {
        durdur3();
        
    }
    x2--;
}

function durdur3() {
    window.clearInterval(vakit2);
    vakit1=window.setInterval("geri2()",30);
}

function geri2(){
    document.getElementById("kutu1").style.left=x1+"px";
    if (x1==0) {
        durdur4();
    }
    x1--;
}
function durdur4() {
    window.clearInterval(vakit1);
    
}


document.write("<div id='kutu1'></div>");
document.write("<div id='kutu2'></div>");