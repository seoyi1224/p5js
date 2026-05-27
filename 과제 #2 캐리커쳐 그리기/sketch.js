function setup() {
  createCanvas(600, 400);
}
//배경
function draw() {
  background(240);
  
  // 뒷머리
  fill(50); 
  rect(200, 30, 200, 280, 100); 
  
  // 목(화장을 하면 얼굴보다 어두워서 그걸 표현해보았습니다.)
  fill(255, 224, 189);
  rect(275, 220, 50, 40); 
  
  // 얼굴형 
  stroke(0);
  strokeWeight(2);
  fill(255, 240, 220); 
  ellipse(300, 140, 180, 200); 

  // 눈
  fill(255);
  ellipse(260, 130, 40, 14); 
  ellipse(340, 130, 40, 14); 
  fill(0);
  circle(260, 130, 10); 
  circle(340, 130, 10); 
  
  // 코
  noFill();
  arc(300, 170, 20, 15, 0, PI);

  // 입
  fill(255, 100, 100);
  arc(300, 200, 60, 30, radians(0), radians(180));
  line(270, 200, 330, 200); 

  // 점(제겐 이마에 숨겨진 점이 있습니다!) 
  fill(50, 30, 0); 
  noStroke(); 
  ellipse(300, 50, 3, 3); 

  // 옆머리
  fill(50); 
  arc(360, 133, 80, 160, radians(270), radians(90));
  arc(240, 133, 80, 160, radians(90), radians(270));
  arc(300, 110, 200, 160, radians(180), radians(0));
  
  // 옷 
  stroke(0);
  fill(210, 255, 240); 
  rect(175, 260, 250, 140, 50, 50, 0, 0); 
  
  // 실버 목걸이
  stroke(192, 192, 192); 
  strokeWeight(2);
  noFill();
  arc(300, 262, 65, 30, radians(0), radians(180));
  fill(192, 192, 192); 
  stroke(0);
  strokeWeight(1);
  circle(300, 275, 10); 

  // 우유(제가 우유를 정말 좋아해서 표현해보았습니다.) 
  stroke(0);
  fill(255); 
  rect(400, 280, 40, 70, 5); 

  fill(100, 150, 255);
  noStroke();
  rect(405, 295, 30, 30, 2); 
  
  fill(255); 
  stroke(0);
  strokeWeight(1);
  triangle(400, 284, 440, 284, 420, 265); 

  stroke(255); 
  line(410, 320, 415, 310); 
  line(415, 310, 420, 320);
  line(420, 320, 425, 310); 
  line(425, 310, 430, 320); 

  stroke(0);
  strokeWeight(2);
  fill(255, 224, 189); 
  ellipse(420, 345, 45, 35); 
  rect(390, 315, 15, 25, 8); 
}