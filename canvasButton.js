// ctx.fillStyle = "#000000";
// ctx.fillRect(10, 10, 100, 100);

class canvasButton {

     constructor(x, y, w, h, onclick) {
          this.x = x;
          this.y = y;
          this.width = w;
          this.height = h;
          this.text = "";
          this.font = "";
          this.onclick = "";

     }

     setOnclick(func) {
          this.onclick = func;
     }

     setText(text, font) {
          this.text = text;
          this.font = font;
     }

     drawButton(context) {
          context.fillStyle = "#FFFFFF";
          context.fillRect(this.x, this.y, this.width, this.height);
          context.strokeRect(this.x, this.y, this.width, this.height);

          context.fillStyle = "#000000";
          ctx.textAlign = "center";
          ctx.font = this.font;
          context.fillText(this.text, this.x + this.width / 2, this.y + this.height / 2);
     }

     enableClicking(canvas) {
          var _this = this;
          canvas.addEventListener('click', function(evt) {
               var mousePos = getMousePos(canvas, evt);
               //console.log("mouse x: " + mousePos.x + " mouse y: " + mousePos.y);
               //console.log("X: " + _this.x + " Y: " + _this.y);
               //checks is mouse is in the correct x position for clicking
               if (mousePos.x > _this.x && mousePos.x < _this.x + _this.width) {
                    //console.log("x match");
                    //checks if mouse is in the correct y position for clicking
                    if (mousePos.y > _this.y && mousePos.y < _this.y + _this.height) {
                         //console.log("y match");
                         eval(_this.onclick);
                    }
               }

          }, false);

          function getMousePos(canvas, evt) {
               var rect = canvas.getBoundingClientRect();
               return {
                    x: evt.clientX - rect.left,
                    y: evt.clientY - rect.top
               };
          }
     }
}