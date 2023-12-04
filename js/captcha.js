///////////////Recaptcha Ur Mind - Eliot Lambert Major Studio 1////////////////////////////////

//IMAGES
let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
let img10;
let img11;
let img12;
let img13;
let img14;
let img15;
let img16;
let img17;
let img18;
let img19;
let img20;
let img21;
let img22;
let img23;
let img24;
let img25;
let img26;
let img27;
let img28;
let img29;
let img30;
let img31;
let img32;
let img33;
let img35;
let img36;
let img37;
let img38;
let img39;
let img40;
let img41;
let img42;
let img43;


//SOUND
let truesound;
let introsound;
let applesound;
let polsound;
let troublesound;
let robotsound;

//VIDEO
let aiVid;
let avatarVid;

let isVideoPlaying = false;




//MISC
let scene;
let font;

//TEXT input box
let input;


//TEXT ARRAYS

// let imageTexts = [
//   "Text for img23",
//   "Text for img25",
//   "Text for img27",
//   "Text for img24",
//   "Text for img26",
//   "Text for img22"
// ];




let imgClicked = {

    img10: false,
    img11: false,
    img12: false,
    img18: false,
    img19: false,
    img20: false,
    img21: false,
    img28: false,
    img30: false,
    img32: false,

  
};

let verifyButtonClicked = false;

function preload() {
  // CORE IMAGES PRELOAD
  img1 = loadImage("assets/logo2.png");
  img2 = loadImage("assets/tempblankpol.png");
  img3 = loadImage("assets/tempblanklon.png");

  // POLITICIAN TEMPLATE IMAGES PRELOAD
  img4 = loadImage("assets/pol1.png");
  img5 = loadImage("assets/pol2.jpg");
  img6 = loadImage("assets/pol3.png");
  img7 = loadImage("assets/pol4.png");
  img8 = loadImage("assets/pol5.png");
  img9 = loadImage("assets/pol6.png");
  img10 = loadImage("assets/pol7.png");
  img11 = loadImage("assets/pol8.png");
  img12 = loadImage("assets/pol9.png");
  img13= loadImage("assets/pol10.png");
  img14 = loadImage("assets/pol11.png");
  img15 = loadImage("assets/pol12.png");
  img16 = loadImage("assets/pol13.png");
  img17 = loadImage("assets/pol14.png");
  img18 = loadImage("assets/pol15.png");
  img19 = loadImage("assets/pol16.png");
  img20 = loadImage("assets/pol17.png");
  img21 = loadImage("assets/pol18.png");

  //APPLES IMAGES
  img22 = loadImage("assets/applefalse1.png");
  img23 = loadImage("assets/applefalse2.png");
  img24 = loadImage("assets/applefalse3.png");
  img25 = loadImage("assets/applefalse4.png");
  img26 = loadImage("assets/applefalse5.png");
  img27 = loadImage("assets/applefalse6.png");
  img28 = loadImage("assets/apple1.png");
  img29 = loadImage("assets/apple2.png");
  img30 = loadImage("assets/apple3.png");
  img31 = loadImage("assets/apple4.png");
  img32 = loadImage("assets/apple5.png");
  img33 = loadImage("assets/tempblankapples.png");
  img35 = loadImage("assets/polfalse1.png");
  img36 = loadImage("assets/polfalse2.png");
  img37 = loadImage("assets/polfalse3.png");
  img38 = loadImage("assets/lonely1.png");
  img39 = loadImage("assets/lonely2.png");
  img40 = loadImage("assets/lonelyfalse4.png");
  img41 = loadImage("assets/lonely3.png");
  img42 = loadImage("assets/logo2.png");
  img43 = loadImage("assets/google.gif");

  //VIDEO PRELOAD
  aiVid = createVideo("assets/aivid.mp4");
  avatarVid = createVideo("assets/aivid2.mp4");

  


  //SOUND PRELOAD

  truesound = loadSound("assets/true.mp3");
  introsound= loadSound("assets/introsound.mp3");
  applesound= loadSound("assets/applesound3.mp3");
  polsound= loadSound("assets/polsound2.mp3");
  lonelysound = loadSound("assets/lonelysound2.mp3");
  troublesound = loadSound("assets/trouble.mp3");
  robotsound= loadSound("assets/robot2.mp3");

  //FONT PRELOAD

  font= loadFont("assets/captchafont.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  fullscreen(true);

  // Initialize the scene to start with
  scene = -1;


  aiVid.size(windowWidth, windowHeight);
  aiVid.position(0,0); 
  avatarVid.hide();

  



  button = createButton("Verify");

  button.position(windowWidth - 320, windowHeight - 100);
  button.mousePressed(verifyButtonPress);

  button.style('background-color', "#498FE2");
  button.style('color', 'white');
  button.style('font-size', '14px');
  button.style('padding', '5px 20px');
  button.style('border', 'none');

  aiVid.onended(videoEnded);
  avatarVid.onended(videoEnded);

}

function draw() {
  background(255);
  
  // SCENE SWITCHING

  //Scene -2 Internet search

  //SCENE -1 = RECAPTCHA UR MIND!

  if (scene === -1) {
 image(img42, 0,0, windowWidth, windowHeight);
 aiVid.hide(); 
 push();
 textSize(20);
 textStyle(BOLD);
 text("[press space bar to enter]", 600,600);
 pop();
 button.hide();


 if (keyIsPressed && key === ' ') {
  scene = 0;
  isVideoPlaying = true;
  aiVid.show(); 
  aiVid.loop();
  button.show();
  
}
}

  // SCENE 0 = LOGO

 else if (scene === 0) {
    if (!isVideoPlaying) {

        background(255); // Clear the background
        let vidX = 0; // Adjust this value based on your layout
        let vidY = 0; // Adjust this value based on your layout
        image(aiVid, vidX, vidY, width,height); // Set the dimensions here
        if (keyIsPressed && key === ' ') {
            isVideoPlaying = true;
            aiVid.loop();
        
        }
    
    }

    if (aiVid.time() === aiVid.duration()) {
        scene = 1;
        button.show(); 

    }
    

    //SCENE 1 - APPLES
  } else if (scene === 1) {
    // Play applesound only in Scene 1
    if (!applesound.isPlaying()) {
      applesound.play();
      introsound.stop();
      aiVid.stop();
      aiVid.hide();
    
   
    }

    image(img33, 50, 20, 425, 550); // Blank template
    imgClicked.img23= displayButton(img23, 200, 110, 130, 130, 1, imgClicked.img23);
    imgClicked.img25 = displayButton(img25, 200, 250, 130, 130, 1, imgClicked.img25);
    imgClicked.img27 = displayButton(img27, 55, 390, 130, 130, 1, imgClicked.img27);
    imgClicked.img24 = displayButton(img24, 200, 390, 130, 130, 1, imgClicked.img24);
    imgClicked.img26 = displayButton(img26, 55, 250, 130, 130, 1, imgClicked.img26);
    imgClicked.img22 = displayButton(img22, 342, 250, 130, 130, 1, imgClicked.img22);
    imgClicked.img30 = displayButton(img30, 55, 110, 130, 130, 3, imgClicked.img30); //TRUE
    imgClicked.img28 = displayButton(img28, 342, 110, 130, 130, 3, imgClicked.img28); //TRUE
    imgClicked.img32 = displayButton(img32, 342, 390, 130, 130, 3, imgClicked.img32); //TRUE
    
 

    //SCENE 2 - POLITICIANS
  } else if (scene === 2) {
    if (!polsound.isPlaying()) {
        polsound.play();
        applesound.stop();
  
      }
    image(img2, 50, 20, 425, 550); // Blank template
    imgClicked.img4= displayButton(img4, 58, 100, 130, 130,2, imgClicked.img4); //FALSE
    imgClicked.img40= displayButton(img40, 200, 100, 130, 130,2, imgClicked.img40); //FALSE
    imgClicked.img15= displayButton(img15, 58, 240, 130, 130,2, imgClicked.img15); //FALSE
    imgClicked.img35= displayButton(img35, 58, 380, 130, 130,2, imgClicked.img35); //FALSE
    imgClicked.img10 = displayButton(img10, 342, 100, 130, 130, 2, imgClicked.img10); //TRUE
    imgClicked.img11 = displayButton(img11, 200, 240, 130, 130, 2, imgClicked.img11); //TRUE
    imgClicked.img13= displayButton(img13, 342, 240, 130, 130, 2, imgClicked.img13); //FALSE
    imgClicked.img12 = displayButton(img12, 200, 380, 130, 130, 2, imgClicked.img12); //TRUE
    imgClicked.img8 = displayButton(img8, 342, 380, 130, 130, 2, imgClicked.img8); //TRUE

  

    //SCENE 3 - LONELINESS

  } else if (scene === 3) { 
    if (!lonelysound.isPlaying()) {
        lonelysound.play();
        polsound.stop();
  
      }

    image(img3, 50, 20, 425, 550); //Blank template
    imgClicked.img14= displayButton(img14, 58, 100, 130, 130, 3, imgClicked.img14); //FALSE
    imgClicked.img38= displayButton(img38, 200, 100, 130, 130,3, imgClicked.img38); //FALSE
    imgClicked.img39=displayButton(img39, 58, 240, 130, 130,3, imgClicked.img39); //FALSE
    imgClicked.img16=displayButton(img16, 58, 380, 130, 130,3, imgClicked.img16); //FALSE
    imgClicked.img41=displayButton(img41, 342, 240, 130, 130,3, imgClicked.img41); //FALSE
    imgClicked.img18 = displayButton(img18, 342, 380, 130, 130, 3, imgClicked.img18); //TRUE
    imgClicked.img19 = displayButton(img19, 200, 380, 130, 130, 3, imgClicked.img19); //TRUE
    imgClicked.img20 = displayButton(img20, 342, 100, 130, 130, 3, imgClicked.img20); //TRUE
    imgClicked.img21 = displayButton(img21, 200, 240, 130, 130, 3, imgClicked.img21); //TRUE

    //SCENE 4 - YOU ARE NOT A ROBOT
  
  } else if (scene === 4) { 

    button.hide();
    lonelysound.stop();


    push()
    if (!robotsound.isPlaying()) {
      robotsound.play();
      pop();

  }


    avatarVid.show();
    avatarVid.loop();
    avatarVid.position(0, 0);
  avatarVid.size(windowWidth, windowHeight);

  }

}


function verifyButtonPress() {
  verifyButtonClicked = true;
  changeScene();
}

function changeScene() {
  // Change the scene when all three images and the button are pressed
  if (imgClicked.img10 && imgClicked.img11 && imgClicked.img12 && verifyButtonClicked) {
    scene = 3;
  } else {
    scene = (scene === 4) ? 0 : scene + 1;
  }
  // Reset the click states
  imgClicked.img10 = false;
  imgClicked.img11 = false;
  imgClicked.img12 = false;
  verifyButtonClicked = false;
}






function displayButton(img, x, y, w, h, targetScene, isClicked) {
  textStyle(BOLD);
  textFont(font);
  image(img, x, y, w, h);

  // Check if the mouse is over the image when the button is pressed
  let clicked = isClicked;
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h && mouseIsPressed) {
    clicked = true;
  }

  // Display the red or green square instead of the original image
  noStroke();
  if (clicked) {
    if (img === img14 ||img === img38 ||img === img39 ||img === img16 ||img === img4 ||img === img40 ||img === img15 ||img === img35 ||img === img13 ||img === img8 ||img === img23 || img === img25 || img === img27 || img === img24 || img === img26 || img === img22) {
      
      fill("#FF0000"); // Red color for the specified images
      rect(x, y, w, h);
      fill(255);
      text("FALSE", x + w / 5, y + h / 6);
//text array for red tiles
// let index = [img23, img25, img27, img24, img26, img22].indexOf(img);
      // text(imageTexts[index], x + w / 5, y + h / 6);


    } else {
      fill("#008000"); // Green color for TRUE
      rect(x, y, w, h); 
      fill(255);
      text("TRUE=HUMAN", x + w / 5, y + h / 6);
    }
  } else {
    fill(255);
  }

  return clicked;
}

  function videoEnded() {
    scene = -1; // Switch to Scene 1 when the video ends
  }

 
  

function checkSceneChange() {
  // Check the current scene
  if (scene === 0) {
    // If in Scene 0, pressing Verify takes you to Scene 1
    if (verifyButtonClicked) {
      scene = 1;
      // Reset the click states
      imgClicked.img30 = false;
      imgClicked.img28 = false;
      imgClicked.img32 = false;
      verifyButtonClicked = false;
    }
  } else if (scene === 1) {
    // If in Scene 1, all three images and Verify button must be clicked to go to Scene 2
    if (imgClicked.img30 && imgClicked.img28 && imgClicked.img32 && verifyButtonClicked) {
      scene = 2;
      // Reset the click states
      imgClicked.img30 = false;
      imgClicked.img28 = false;
      imgClicked.img32 = false;
      verifyButtonClicked = false;
    }
  } else if (scene === 2) {
    // If in Scene 2, all three images and Verify button must be clicked to go to Scene 3
    if (imgClicked.img10 && imgClicked.img11 && imgClicked.img12 && verifyButtonClicked) {
      scene = 3;
      // Reset the click states
      imgClicked.img10 = false;
      imgClicked.img11 = false;
      imgClicked.img12 = false;
      verifyButtonClicked = false;
    }
  } else if (scene === 3) {
    // If in Scene 3, all three images and Verify button must be clicked to go to Scene 4
    if (imgClicked.img18 && imgClicked.img19 && imgClicked.img20 && imgClicked.img21 && verifyButtonClicked) {
      scene = 4;
      // Reset the click states
      imgClicked.img18 = false;
      imgClicked.img19 = false;
      imgClicked.img20 = false;
      imgClicked.img21 = false;
      verifyButtonClicked = false;
    }

    else if (scene === 4) {
    verifyButtonClicked = false;

  }
  // Add more else if conditions for additional scenes if needed
}

}