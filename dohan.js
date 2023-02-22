window.onload = function() {
  
    // Get a reference to the canvas object
    var canvas = document.getElementById('myCanvas');
    canvas.width = 1200;
    canvas.height = 500;
  
    // Create an empty project and a view for the canvas:
    paper.setup(canvas);
  
    // Create a Paper.js Path to draw a line into it:
    var path = new paper.Path({
      strokeColor: '#7D16FF',
      strokeWidth: 3
    });
  
    var point1 = new paper.Point(100, 150);
    var point2 = new paper.Point(300, 200);
    var point3 = new paper.Point(500, 150);
    var point4 = new paper.Point(700, 200);
    var point5 = new paper.Point(900, 150);
  
    // Move to start and draw a line from there
    path.add(point1);
    path.add(point2);
    path.add(point3);
    path.add(point4);
    path.add(point5);
  
  
    // Timelines, with infinite loop
    // Moving Points don't have any effect on the Path, we need to move points of Segments
    var tl1 = new TimelineLite({
      onComplete: function () {
        this.restart();
      }
    });
    tl1.to(path.segments[0].point, 1.5, { y: "+=50", ease: Power1.easeInOut });
    tl1.to(path.segments[0].point, 1.5, { y: "-=50", ease: Power1.easeInOut });
  
    var tl2 = new TimelineLite({delay: 0.75,
      onComplete: function () {
        this.restart();
      }
    });
    tl2.to(path.segments[1].point, 1.5, { y: "-=50", ease: Power1.easeInOut });
    tl2.to(path.segments[1].point, 1.5, { y: "+=50", ease: Power1.easeInOut });
    
    var tl3 = new TimelineLite({delay: 1.5,
      onComplete: function () {
        this.restart();
      }
    });
    tl3.to(path.segments[2].point, 1.5, { y: "+=50", ease: Power1.easeInOut });
    tl3.to(path.segments[2].point, 1.5, { y: "-=50", ease: Power1.easeInOut });
    
    
    var tl4 = new TimelineLite({delay: 2.25,
      onComplete: function () {
        this.restart();
      }
    });
    tl4.to(path.segments[3].point, 1.5, { y: "-=50", ease: Power1.easeInOut });
    tl4.to(path.segments[3].point, 1.5, { y: "+=50", ease: Power1.easeInOut });
    
    var tl5 = new TimelineLite({delay: 3,
      onComplete: function () {
        this.restart();
      }
    });
    tl5.to(path.segments[4].point, 1.5, { y: "+=50", ease: Power1.easeInOut });
    tl5.to(path.segments[4].point, 1.5, { y: "-=50", ease: Power1.easeInOut });
  
  
    // Used for redraw canvas every frame
    paper.view.onFrame = function(event) {
      path.smooth({type: 'continuous'});
    }
  }
  