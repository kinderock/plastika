# canvas = new fabric.Canvas("c")
# fabric.Object::transparentCorners = false
# fabric.Image.fromURL "/images/figures/18.svg", (oImg) ->
#   left = Math.floor(Math.random(0, 1000) * 800)
#   oImg.set
#     left: left
#     top: 350
#     angle: 10
#     name: "img18"

#   canvas.add oImg
#   console.log left

# fabric.Image.fromURL "/images/figures/54.svg", (oImg) ->
#   oImg.set name: "img54"
#   canvas.add oImg

# canvas.on "mouse:down", (options) ->
#   console.log options.target.name  if options.target