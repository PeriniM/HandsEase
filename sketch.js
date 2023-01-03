let canvas;

let sketch = function(p){
  let detect_hands = {};

  let old_detection_left = {};
  let new_detection_left = {};
  let old_detection_right = {};
  let new_detection_right = {};

  let old_detection_norm_left = 0.0;
  let old_detection_norm_right = 0.0;
  let new_detection_norm_left = 0.0;
  let new_detection_norm_right = 0.0;

  p.setup = function(){
    canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    canvas.id("canvas");
    p.colorMode(p.HSB);
    //mirror the canvas so that the user can see themselves
    p.scale(-1, 1);
  }

  p.draw = function(){
    p.clear();
    if(detections != undefined){
      if(detections.multiHandLandmarks != undefined){ 
        p.handsCalculations(detections.multiHandLandmarks);
      }
    }
  }
  
  p.handsCalculations = function(detect_hands){
    // for each hand
    for(let i=0; i<detect_hands.length; i++){

      // if left hand
      if(detections.multiHandedness[i].label == "Left"){
        new_detection_left = detect_hands[i];
        new_detection_norm_left = p.hands_norm(new_detection_left);
        console.log(new_detection_norm_left - old_detection_norm_left);

        if(Math.abs(new_detection_norm_left - old_detection_norm_left) > 0.01){
          p.drawHands(new_detection_left);
          old_detection_left = new_detection_left;
          old_detection_norm_left = new_detection_norm_left;
        }
        else{
          p.drawHands(old_detection_left);
        }
      }

      // if right hand
      else if(detections.multiHandedness[i].label == "Right"){
        new_detection_right = detect_hands[i];
        new_detection_norm_right = p.hands_norm(new_detection_right);
        console.log(new_detection_norm_right - old_detection_norm_right);

        if(Math.abs(new_detection_norm_right - old_detection_norm_right) > 0.01){
          p.drawHands(new_detection_right);
          old_detection_right = new_detection_right;
          old_detection_norm_right = new_detection_norm_right;
        }
        else{
          p.drawHands(old_detection_right);
        }
      }
    }
  }

  p.drawHands = function(detect){
    
    for(let j=0; j<detect.length; j++){
      let x = detect[j].x * p.width;
      let y = detect[j].y * p.height;
      let z = detect[j].z;
      p.stroke(255);
      p.strokeWeight(10);
      p.point(x, y);

      p.drawLines(detect,[0, 5, 9, 13, 17, 0]);//palm
      p.drawLines(detect,[0, 1, 2, 3 ,4]);//thumb
      p.drawLines(detect,[5, 6, 7, 8]);//index finger
      p.drawLines(detect,[9, 10, 11, 12]);//middle finger
      p.drawLines(detect,[13, 14, 15, 16]);//ring finger
      p.drawLines(detect,[17, 18, 19, 20]);//pinky
    }
    
  }

//create a function that takes in two consecutive multihandlandmarks and calculate the distance between them, then return the distance
  p.hands_norm = function(detect){
    let norm = 0.0; 
      for(let j=0; j<detect.length; j++){
        norm += Math.sqrt(detect[j].x**2 + detect[j].y**2 + detect[j].z**2);
      }
    return norm;
  }

  p.drawLines = function(detect,index){
    p.stroke(0, 0, 255);
    p.strokeWeight(3);
      for(let j=0; j<index.length-1; j++){
        let x = detect[index[j]].x * p.width;
        let y = detect[index[j]].y * p.height;
        // let z = detections.multiHandLandmarks[i][index[j]].z;

        let _x = detect[index[j+1]].x * p.width;
        let _y = detect[index[j+1]].y * p.height;
        // let _z = detections.multiHandLandmarks[i][index[j+1]].z;
        p.line(x, y, _x, _y);
      }
  }
}

let myp5 = new p5(sketch);
