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
var colorPersonalizado = document.getElementById('color-personalizado');
var mouseClick = false;


function crearPaleta(){
  for(var i=0 ; i < nombreColores.length ; i++){
    var color = document.createElement('div');
    color.style.backgroundColor = nombreColores[i];
    color.className = 'color-paleta';
    paleta.appendChild(color);
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
  })
);

colorPersonalizado.addEventListener('change',(function(){
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    $('#indicador-de-color').css('background-color', colorActual);
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

grilla.addEventListener('mousemove', function(e){
  if (mouseClick == true){
    e.target.style.backgroundColor = indicadorColor.style.backgroundColor;
  }
});


$('#borrar').click(function(){
  $('#grilla-pixeles').children().animate({'background-color': '#ffffff'}, 1000);
});

//lo de "eval" me lo copie de Eitan
$('.imgs img').click(function(){
  var $imagen = eval($(this).attr('id'));
  console.log($imagen);
  cargarSuperheroe($imagen);
})

$('#guardar').click(function(){
  guardarPixelArt();
});

//primer intento de cargar héroes
// $('#batman').click(function(){
//   cargarSuperheroe(batman);
// });
//
// $('#wonder').click(function(){
//   cargarSuperheroe(wonder);
// });
//
// $('#flash').click(function(){
//   cargarSuperheroe(flash);
// });
//
// $('#invisible').click(function(){
//   cargarSuperheroe(invisible);
// });
