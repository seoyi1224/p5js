function setup() {
  createCanvas(600, 400);
  angleMode(DEGREES); 
}

function draw() {
  background(200); 

  // frameCount를 사용하여 애니메이션이 일정한 속도로 계속 반복
  let cycleAngle = frameCount * 1.5; 
  let cycleValue = sin(cycleAngle); 
  let sway = sin(frameCount * 4) * 10; 

  // --- 1. 창문과 벽, 창문 안의 해 ---
  stroke(0);
  strokeWeight(5);

  // [색상 변화] cycleValue가 -1일 때 낮, 1일 때 노을이 됨.
  let colorAmt = (cycleValue + 1) / 2; 
  let colorDay = color(0, 0, 200); // 파란 하늘
  let colorNight = color(255, 100, 0); // 주황빛 노을
  fill(lerpColor(colorDay, colorNight, colorAmt)); 
  rect(520, 50, 60, 150);

  // [기본 애니메이션 & 크기 변화] 
  let sunY = 80 + (cycleValue * 20); 
  // 낮일 때는 크기 30, 노을이 질 때는 크기 50으로 커지게 연출
  let sunSize = 40 + (cycleValue * 10); 
  
  fill(255, 0, 0); 
  noStroke();
  ellipse(550, sunY, sunSize, sunSize);
  
  // --- 2. 벽 무늬 ---
  stroke(100);
  noFill();
  circle(530, 30, 10);
  square(547.5, 26, 10);
  circle(575, 30, 10);
  arc(520, 250, 40, 40, 180, 360);
  arc(560, 250, 40, 40, 0, 180);
  arc(550, 300, 40, 40, 180, 360);
  arc(590, 300, 40, 40, 0, 180);
  arc(520, 350, 40, 40, 180, 360);
  arc(560, 350, 40, 40, 0, 180);
  
  // --- 3. 좌석색깔 & 좌석 ---
  stroke(0, 0, 100);
  strokeWeight(3);
  fill(0,0,100);
  rect(0, 200, 497, 160);
  
  stroke(0);
  strokeWeight(3);
  line(0, 200, 497, 200);
  line(0, 280, 497, 280);
  line(0, 360, 497, 360);
  
  line(50,200,20,280);
  line(160,200,130,280);
  line(270,200,240,280);
  line(380,200,350,280);
  line(490,200,460,280);
  line(20,280,-30,360);
  line(130,280,80,360);
  line(240,280,190,360);
  line(350,280,300,360);
  line(460,280,410,360);

  // --- 4. 손잡이들 ---
  stroke(0,255,0);
  strokeWeight(5);
  
  fill(0, 255, 0); 
  rect(85 + sway, 80, 30, 80); 
  noFill();
  triangle(80 + sway, 210, 120 + sway, 210, 100 + sway, 160);
  line(100, 40, 100 + sway, 80); 
  
  fill(0, 255, 0); 
  rect(185 + sway, 80, 30, 80); 
  noFill();
  triangle(180 + sway, 210, 220 + sway, 210, 200 + sway, 160);
  line(200, 40, 200 + sway, 80);
  
  fill(0, 255, 0);
  rect(285 + sway, 80, 30, 80); 
  noFill();
  triangle(280 + sway, 210, 320 + sway, 210, 300 + sway, 160);
  line(300, 40, 300 + sway, 80);

  fill(0, 255, 0); 
  rect(385 + sway, 80, 30, 80); 
  noFill();
  triangle(380 + sway, 210, 420 + sway, 210, 400 + sway, 160);
  line(400, 40, 400 + sway, 80);
  
  // --- 5. 가로 봉, 세로 봉 ---
  stroke(0);
  strokeWeight(7);
  line(0, 40, 500, 40);
  line(500, 0, 500, 450); 

  // --- 6. 히터 ---
  fill(100);
  noStroke();
  quad(60, 370, 450, 370, 450, 450, 60, 430);
  
  stroke(0);
  strokeWeight(2);
  line(80,390,120,390);
  line(140,390,180,390);
  line(200,390,240,390);
  line(260,390,300,390);
  line(320,390,360,390);
  line(380,390,420,390);
} 

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveGif('assignment2_animation_synced', 4); 
  }
}