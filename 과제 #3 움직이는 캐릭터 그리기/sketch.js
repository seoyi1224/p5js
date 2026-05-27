/*********************************************
  1. mouse:
		- 우유 팩 영역(우측 하단) 클릭: 캐릭터가 우유를 입으로 가져가 4초간 마시고 웃음
		- 마우스 이동: 눈동자가 마우스 포인터의 위치를 따라감
  2. keyboard:
		- 'r' 키: 마신 우유를 다시 채우고 캐릭터의 상태를 초기화(Reset)
***********************************************/

let drinkTimer = 0; 
let isDrinking = 0;   
let mx = 0;          
let my = 0;          

function setup() {
  createCanvas(600, 400);
}
//배경
function draw() {
  //마우스 클릭 감지 및 애니매이션
  if (mouseIsPressed && isDrinking === 0) {
    if (mouseX > 380 && mouseX < 460 && mouseY > 260 && mouseY < 380) {
      isDrinking = 1;
    }
  }

  if (isDrinking === 1) {
    drinkTimer++;
    if (drinkTimer < 40) { mx -= 2.5; my -= 2.0; } // 입으로 이동
    else if (drinkTimer > 200) { mx += 2.5; my += 2.0; } // 제자리로 이동
    if (drinkTimer > 240) isDrinking = 2;
  }
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
  let ex = 0; let ey = 0;
  if (isDrinking === 2) {
    noFill(); stroke(0); strokeWeight(3);
    arc(260, 135, 30, 15, PI, 0); arc(340, 135, 30, 15, PI, 0);
  } else {
    fill(255); stroke(0); strokeWeight(2);
    ellipse(260, 130, 40, 14); ellipse(340, 130, 40, 14);
    ex = map(mouseX, 0, width, -2, 2); ey = map(mouseY, 0, height, -1, 1);
    fill(0); circle(260 + ex, 130 + ey, 10); circle(340 + ex, 130 + ey, 10);
  }
  
  // 코
  noFill();
  arc(300, 170, 20, 15, 0, PI);

  // 입
  fill(255, 100, 100);
  if (isDrinking === 1) {
    ellipse(300, 200, 20, 30); // 마실 때는 입을 벌림
  } else {
    arc(300, 200, 60, 30, radians(0), radians(180));
    line(270, 200, 330, 200); 
  }

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
push();
  translate(mx, my); 
  
  if (isDrinking !== 2) {
    stroke(0); fill(255); 
    let h = 70;
    if (isDrinking === 1) h = map(drinkTimer, 40, 200, 70, 0, true);
    rect(400, 280 + (70-h), 40, h, 5); 
  }
  
  noFill(); stroke(0); strokeWeight(1);
  rect(400, 280, 40, 70, 5); 

  fill(100, 150, 255); noStroke();
  rect(405, 295, 30, 30, 2); 
  
  fill(255); stroke(0); strokeWeight(1);
  triangle(400, 284, 440, 284, 420, 265); 

  stroke(255); 
  line(410, 320, 415, 310); line(415, 310, 420, 320);
  line(420, 320, 425, 310); line(425, 310, 430, 320); 

  stroke(0); strokeWeight(2); fill(255, 224, 189); 
  ellipse(420, 345, 45, 35); 
  rect(390, 315, 15, 25, 8); 
  pop();

  // 키보드 R을 누르면 우유가 다시 채워지는 인터랙션
  if (keyIsPressed && (key === 'r' || key === 'R')) {
    drinkTimer = 0; isDrinking = 0; mx = 0; my = 0;
  }
}

function keyPressed() {
  if (key === 's') {
    saveGif('20231333 비주얼포트폴리오 과제 #03', 10);
  }
}