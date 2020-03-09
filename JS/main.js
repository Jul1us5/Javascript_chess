"use strict";

const eilutes = 8;
const stulpeliai = 8;
let pirmaSpalva = 'white';
let antraSpalva = 'black';

let spalva = '';
let HTML = '';

let lenta = document.querySelector('.lenta');

for (let y = 1; y <= eilutes; y++) {
    HTML += `<div class="eilutes" 
                  style="height: calc(100% / ${ eilutes } );   
               background-color: ${ spalva }; ">`;

    for (let x = 1; x <= stulpeliai; x++ ) {
        if ( (x + y) % 2 === 0 ) {
            spalva = pirmaSpalva;
        } else {
            spalva = antraSpalva;
        }
        HTML += `<div class="stulpeliai" 
                      style="width: calc(100% / ${ stulpeliai } ); 
                  background-color: ${ spalva }; "></div> `;
    }
    HTML += `</div>`;
}






lenta.innerHTML = HTML;