$(function(){
  var canvasItem = $('.canvas_item');
  var canvasList = $('.pl-canvas__pictlist');
  var canvas = this.__canvas = new fabric.Canvas('c');
  fabric.Object.prototype.transparentCorners = false;

  canvasList.on('click', 'img', function(){
    alert('ok');
    var src = $(this).attr('src');
    var idx = $(this).attr('id');
    console.log($(this));
  //   var left = Math.floor(Math.random(0, 900) * 800);
  //   var top = Math.floor(Math.random(0, 700) * 700);
  //   canvasList.hide();

  //   fabric.loadSVGFromURL(src, function(objects, options) {
  //     var loadedObject = fabric.util.groupSVGElements(objects, options);
  //     loadedObject.set({
  //       left: left,
  //       top: top,
  //       // angle: getRandomInt(-10, 10)
  //     })
  //     .setCoords();
  //     canvas.add(loadedObject);
  //   });
  });
})