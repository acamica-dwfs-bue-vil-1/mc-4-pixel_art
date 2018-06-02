var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

var paleta = document.getElementById('paleta');
var grilla = document.getElementById('grilla-pixeles');
var indicadorColor = document.getElementById('indicador-de-color');
var mouseClick = false;

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change',
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    $('#indicador-de-color').css('background-color', colorActual);
  })
);

function crearPaleta(){
  for(var i=0 ; i < nombreColores.length ; i++){
    var nuevoDiv = document.createElement('div');
    nuevoDiv.style.backgroundColor = nombreColores[i];
    nuevoDiv.className = 'color-paleta';
    paleta.appendChild(nuevoDiv);
    // nuevoDiv.textContent = nombresDeColores(i);
    // var st = nuevoDiv.style;
    // st.backgroundColor = 'color';
  }
}

function crearGrilla(){
  for (var i = 0; i <= 1748; i++) {
    var pixel = document.createElement('div');
    grilla.appendChild(pixel);
  }
}

$(document).ready(function(){
  crearGrilla();
  crearPaleta();
});

paleta.addEventListener('click',(function(e){
  indicadorColor.style.backgroundColor = e.target.style.backgroundColor;
  // var colorSeleccionado = e.target.style.backgroundColor;
  // colorActivo.style.backgroundColor = colorSeleccionado;
  // var $color = $('#indicador-de-color');
  // colorActivo.style.backgroundColor = $('color-paleta');
  })
);

grilla.addEventListener('mousedown',(function(e){
  mouseClick = true;
  e.target.style.backgroundColor = indicadorColor.style.backgroundColor;
  console.log(mouseClick);
  })
);

grilla.addEventListener('mouseup', function(){
  mouseClick = false;
  console.log(mouseClick);
})

//Asi no funciona
/*grilla.onMouseMove = function(e){
  if (mouseClick == true){
    e.target.style.backgroundColor = indicadorColor.style.backgroundColor;
  }
};*/

//Con los dos = se compara, con uno solo se asigna un valor
grilla.addEventListener('mousemove', function(e){
  if (mouseClick == true){
    e.target.style.backgroundColor = indicadorColor.style.backgroundColor;
  }
});
