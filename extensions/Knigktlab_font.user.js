// ==UserScript==
// @name         Knigktlab font
// @version      1
// @match        https://cdn.knightlab.com/*
// ==/UserScript==

var head, style;
head = document.getElementsByTagName('head')[0];

style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = `
    *{font-family: "calibri" !important; cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAADsAAAA7AF5KHG9AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAuJJREFUWIW91UtsTFEcx/HvOffOo9NOS1OaNOKxEI924RnKgopIEKmVSCa0imgXNBIRwYKFNBZeFYSKZ8SbiJ1HSMQCTSmNVqSqibYTpSHDmM70zt+CiUeVqd47v9W55/4Xn/xyTo4qDyz4MnRIzrVRI7LLV6zf+4EUR1WWLmrt6Pw4vCscj08aN/zeqLzcQMXWPW2pAuiCkSNnNrV0kO3T+vaDF7NetQWbrRdnt8nTM4NTAVAAa5ctDF6+/Ti3tLiQzeXF+LxugJCIOq4tVaXylwSdAmiAEcMGzZlXOIb1S2fgkmjin18pWSfS0SwPFx90CqASi0jdkZs90chcAJfXhystA3reot5Xg/UBoFwVvTtsN0AnFnHtKVVKC0AsEsb6WI9q2QfRUGLkkNzJWeMYwDehpE2brvsARvgV5pvzYAHhdIgb8K0t2xH65w+l3WVm92vxNl6GoAUiIAo+p4PlDEL9vmFdm92gW5rzAXBryDNAKVACvs9gWCDEUWqlKuo8MVCA/n3DKL5bQLa1H4BoHNp/aiL8vQmFBjlmRxO9GkhETuVV02WsBfpuAgSoGMjt6BOQKsRfAalA/BPgNCIpgJOIpAFOIfoFcALRb0DSCCGOkjJV9P6k7QA7Ef8NsAsxIIAdiF5vQX+jlrevS+btCGn/sara7XttBySDCEsGJYOr9dH0QOXGuj01tgP+hhAU2/0beOIuIK40Esxc1bNl2hHbAX9CdL7LIODfxMWM+QAUt95j5/FLGPU5q2XT1Bqw4RD+KXI672D7p9yKwtG7CFkGptdLINzE7qPnUN1GYgomvq10BABQcWNX7TmmTEZg+fPHVF2/SprP/+vQkHDIMQBA6a0DDVnPYvk7Ll5ARDBdLryZmT8GXJY4CgCIlExvjL3UYxEBQJsmnrQ0tGkiWZFuxwEA0cDUhu4WV34CkYhndOyJrbegr7jPPCrwjo9cMTxalALt1njGxB64T9VO/ApHA4cwTM9JOQAAAABJRU5ErkJggg==), auto !important; text-transform: none !important;}
    h2,p{white-space: pre-wrap !important;}
    .tl-timeline .tl-headline-date, .tl-timeline h3.tl-headline-date{font-family: "calibri" !important;}
    .tl-slidenav-next .tl-slidenav-icon:before{content: "\u2192" !important;}
    .tl-slidenav-previous .tl-slidenav-icon:before{content: "\u2190" !important;}
    .tl-icon-image:after{content: "\u2022" !important;}
    .tl-icon-zoom-in:after{content: "\u002B" !important;}
    .tl-icon-zoom-out:after{content: "\u002D" !important;}
    .tl-icon-goback:after{content: "\u2199" !important;}`;
head.appendChild(style);