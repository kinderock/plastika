var canvas = this.__canvas = new fabric.Canvas('c');

function getActiveStyle(styleName, object) {
  object = object || canvas.getActiveObject();
  if (!object) return '';

  return (object.getSelectionStyles && object.isEditing)
    ? (object.getSelectionStyles()[styleName] || '')
    : (object[styleName] || '');
};

function setActiveStyle(styleName, value, object) {
  object = object || canvas.getActiveObject();
  if (!object) return;

  if (object.setSelectionStyles && object.isEditing) {
    var style = { };
    style[styleName] = value;
    object.setSelectionStyles(style);
    object.setCoords();
  }
  else {
    object[styleName] = value;
  }

  object.setCoords();
  canvas.renderAll();
};
function deleteObject(){
  canvas.remove(canvas.getActiveObject());
  return false;
};
function layerUpObject(){
  canvas.bringForward(canvas.getActiveObject());
  return false;
};
function layerDownObject(){
  canvas.sendBackwards(canvas.getActiveObject());
  return false;
};

$(function(){
  var canvasItem = $('.canvas_item');
  var canvasList = $('.pl-canvas__pictlist');
  var canvasListLink = $('.pl-pictlist_link');
  var canvasDeleteLink = $('.pl-delete_object_link');
  var canvasLayerUpLink = $('.pl-layerUp_link');
  var canvasLayerDwnLink = $('.pl-layerDwn_link');

  fabric.Object.prototype.transparentCorners = false;

  canvasItem.on('click', function(){
    // alert('ok');
    var itemSrc = $(this).find('img').attr('src');
    var itemIdx = $(this).find('img').attr('id');
    var posLeft = Math.floor(Math.random(0, 900) * 800);
    var posTop = Math.floor(Math.random(0, 600) * 600);

    canvasList.hide();
    fabric.loadSVGFromURL(itemSrc, function(objects, options) {
      var loadedObject = fabric.util.groupSVGElements(objects, options);
      loadedObject.set({
        left: posLeft,
        top: posTop,
        name: itemIdx
        // angle: getRandomInt(-10, 10)
      })
      // .setCoords();
      canvas.add(loadedObject);
    });
  });
  canvasListLink.on('click', function(){
    canvasList.show();
    return false;
  });
  canvasDeleteLink.on('click', function(){
    deleteObject();
    return false;
  });
  canvasLayerUpLink.on('click', function(){
    layerUpObject();
    return false;
  });
  canvasLayerDwnLink.on('click', function(){
    layerDownObject();
    return false;
  });


  $( "#slider-vertical" ).slider({
    orientation: "vertical",
    range: "min",
    min: 0,
    max: 100,
    value: 100,
    slide: function( event, ui ) {
      setActiveStyle('opacity', ui.value / 100);
    }
  });
})
