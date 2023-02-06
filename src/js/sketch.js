let canvas;

let sketch = function(p){
  
  let old_detection_left = {};
  let new_detection_left = {};
  let old_detection_right = {};
  let new_detection_right = {};

  let old_detection_norm_left = 0.0;
  let old_detection_norm_right = 0.0;
  let new_detection_norm_left = 0.0;
  let new_detection_norm_right = 0.0;

  let l_threshold = 0.001;
  let r_threshold = 0.001;
  let indeces = [];
  let index_l = [];
  let index_r = [];
  let index_sorted = [];
  p.setup = function(){
    canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    canvas.id("canvas");
    //flip canvas horizontally
    canvas.style('transform', 'scale(-1, 1)');
    canvas.style('filter', 'FlipH');
    canvas.style('-moz-transform', 'scale(-1, 1)');
    canvas.style('-webkit-transform', 'scale(-1, 1)');
    canvas.style('-o-transform', 'scale(-1, 1)');
    
    p.colorMode(p.HSB);
    
  }

  p.draw = function(){
    p.clear();
    if(detections != undefined){
      if(detections.multiHandLandmarks != undefined){ 
        indeces = p.handsCalculations(detections.multiHandLandmarks);
        indeces[0].push('l');
        indeces[1].push('r');
        if (indeces[2]<40.0){
          index_l.push(indeces[0]);
        }
        if (indeces[3]<40.0){
          index_r.push(indeces[1]);
        }
        index_sorted = index_l.concat(index_r);
        index_sorted.sort(function(a, b){return Math.abs(a[2]) - Math.abs(b[2])});
        
        for (let i = 0; i < index_sorted.length; i++) {
          if (index_sorted[i][3] == 'l') {
            p.stroke('red');
          }
          else if (index_sorted[i][3] == 'r') {
            p.stroke('blue');
          }
          p.strokeWeight(Math.abs(index_sorted[i][2] * 400));
          p.point(index_sorted[i][0], index_sorted[i][1]);
         
        }
      
      }
    }
    //show fps
    //console.log(p.frameRate().toFixed(2));
  }

  p.handsCalculations = function(detect_hands){
    let tip_index_r = [0,0,0];
    let tip_index_l = [0,0,0];
    let tip_thumb_r = [0,0,0];
    let tip_thumb_l = [0,0,0];
    let dist_it_l;
    let dist_it_r;
    // for each hand
    for(let i=0; i<detect_hands.length; i++){

      // if left hand
      if(detections.multiHandedness[i].label == "Left"){
        new_detection_left = detect_hands[i];
        new_detection_norm_left = p.hands_norm(new_detection_left);
        //console.log(new_detection_norm_left - old_detection_norm_left);

        if(Math.abs(new_detection_norm_left - old_detection_norm_left) > l_threshold){
          p.drawHands(new_detection_left);
          old_detection_left = new_detection_left;
          old_detection_norm_left = new_detection_norm_left;
          tip_index_l = [new_detection_left[8].x * p.width, new_detection_left[8].y * p.height, new_detection_left[8].z];
          tip_thumb_l = [new_detection_left[4].x * p.width, new_detection_left[4].y * p.height, new_detection_left[4].z];
        }
        else{
          p.drawHands(old_detection_left);
          tip_index_l = [old_detection_left[8].x * p.width, old_detection_left[8].y * p.height, old_detection_left[8].z];
          tip_thumb_l = [old_detection_left[4].x * p.width, old_detection_left[4].y * p.height, old_detection_left[4].z];
        }
        dist_it_l = p.dist(tip_index_l[0],tip_index_l[1],tip_index_l[2],tip_thumb_l[0],tip_thumb_l[1],tip_thumb_l[2]);
      }

      // if right hand
      else if(detections.multiHandedness[i].label == "Right"){
        new_detection_right = detect_hands[i];
        new_detection_norm_right = p.hands_norm(new_detection_right);

        if(Math.abs(new_detection_norm_right - old_detection_norm_right) > r_threshold){
          p.drawHands(new_detection_right);
          old_detection_right = new_detection_right;
          old_detection_norm_right = new_detection_norm_right;
          tip_index_r = [new_detection_right[8].x * p.width, new_detection_right[8].y * p.height, new_detection_right[8].z];
          tip_thumb_r = [new_detection_right[4].x * p.width, new_detection_right[4].y * p.height, new_detection_right[4].z];
        }
        else{
          p.drawHands(old_detection_right);
          tip_index_r = [old_detection_right[8].x * p.width, old_detection_right[8].y * p.height, old_detection_right[8].z];
          tip_thumb_r = [old_detection_right[4].x * p.width, old_detection_right[4].y * p.height, old_detection_right[4].z];
        }
        dist_it_r = p.dist(tip_index_r[0],tip_index_r[1],tip_index_r[2],tip_thumb_r[0],tip_thumb_r[1],tip_thumb_r[2]);
      }
    }
    return [tip_index_l, tip_index_r, dist_it_l, dist_it_r];
  }

  p.drawHands = function(detect){
    
    for(let j=0; j<detect.length; j++){
      
      let x = detect[j].x * p.width;
      let y = detect[j].y * p.height;
      let z = detect[j].z;
      p.stroke(0);
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
    p.stroke(0);
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
