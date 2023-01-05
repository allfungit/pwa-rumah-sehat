var queue = {
  // (A) INIT
  now : 0,      // current queue number
  all : 0,      // total in queue
  alarm : null, // alarm sound
  hNow : null,  // html current queue number
  hAll : null,  // html total in queue
  hDis : null,  // html current queue number (display board)
  init : () => {
    // (A1) OPEN "DISPLAY BOARD"
    let board = window.open("1b-js-queue.html", "_blank", "popup");

    // (A2) GET HTML ELEMENTS
    queue.hNow = document.getElementById("qNowNum");
    queue.hAll = document.getElementById("qAllNum");
    board.onload = () => {
      queue.hDis = board.document.getElementById("qNowDis");
    };

    // (A3) LOAD ALARM SOUND
    queue.alarm = new Audio("ding-dong.mp3");
  },

  // (B) ADD CUSTOMER TO QUEUE
  add : () => {
    // (B1) ADD TO TOTAL QUEUE NUMBER
    queue.all++;
    queue.hAll.innerHTML = queue.all;

    // (B2) PRINT QUEUE NUMBER
    // possible to generate a new window with queue number
    // but print will always open the "select printer" dialog box
    /*
    let qslip = window.open();
    qslip.onload = () => {
      qslip.document.body.innerHTML = queue.all;
      qslip.print();
    };
    */
  },

  // (C) ADVANCE QUEUE NUMBER
  next : () => { if (queue.now < queue.all) {
    // (C1) ADD TO CURRENT QUEUE NUMBER
    queue.now++;
    queue.hNow.innerHTML = queue.now;
    queue.hDis.innerHTML = queue.now;

    // (C2) PLAY ALARM SOUND
    if (queue.alarm.paused) { queue.alarm.play(); }
    else { queue.alarm.currentTime = 0; }
  }}
};
window.addEventListener("load", queue.init);
