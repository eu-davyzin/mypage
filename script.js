window.onload = disp();

function disp(){
    if (screen.width < 640 || screen.height < 480) {
        // sirva a versão pra celular
        var video = document.getElementById('video')
        video.style.cssText +=
            'margin-right: 1px;'+
            'margin-top: 5px;'+
            'width: 360px;'+
            'height: 250px;';
    } else if (screen.width < 1900 || screen.height < 1024) {
        // talvez seja uma boa usar versão pra tablet
        var link1 = document.getElementById('link1')
        link1.style.cssText +=
            'margin-left: 0px;'+
            'margin-right:800px;';
        var link2 = document.getElementById('link2')
        link2.style.cssText +=
            'margin-left: 0px;'+
            'margin-right:800px;';
        var link3 = document.getElementById('link3')
        link3.style.cssText +=
            'margin-left: 0px;'+
            'margin-right:800px;';
        var link4 = document.getElementById('link4')
        link4.style.cssText +=
            'margin-left: 0px;'+
            'margin-right:800px;';
        
        var video = document.getElementById('video')
        video.style.cssText +=
            'margin-left:400px;'+
            'margin-top:-480px;'+
            'margin-right:50px;'+
            'width:700px;'+
            'height:360px;';
    }else {
        // sirva a versão normal
        var link1 = document.getElementById('link1')
        link1.style.cssText +=
            'margin-left: 0px;'+
            'margin-right:800px;';
        var link2 = document.getElementById('link2')
        link2.style.cssText +=
            'margin-left: 0px;'+
            'margin-right:800px;';
        var link3 = document.getElementById('link3')
        link3.style.cssText +=
            'margin-left: 0px;'+
            'margin-right:800px;';
        var link4 = document.getElementById('link4')
        link4.style.cssText +=
            'margin-left: 0px;'+
            'margin-right:800px;';
        var container = document.getElementsById('container')
        container.style.cssText +=
            'display: inline;';

        var video = document.getElementsById('video')
        video.style.cssText +=
            'width: 750px;'+
            'heigth: 360px;'+
            'margin-top: 500px;'+
            'margin-left: 1000px;';
    }
}


/*
// alterando uma propriedade
el.style.color = 'red';
// varias propriedades
el.style.cssText =
    'color: blue;' +
    'background-color: yellow;' +
    'border: 1px solid magenta';*/