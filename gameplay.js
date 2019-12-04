function startGame() {
  // document.getElementById('start').disabled = true;

  let wolfInf = {
    id: 0,
    character: "Ma sói",
    skill: "Bạn là MA SÓI. Hãy chọn một người để giết mỗi đêm ( Phe: Ma sói)",
    icon: '<i class="fab fa-wolf-pack-battalion"></i>',
  }
  let seerInf = {
    id: 1,
    character: "Tiên tri",
    skill: "Bạn là TIÊN TRI. Mỗi đêm bạn có thể xem vai trò của người chơi khác ( Phe: Dân làng)",
    icon: '<i class="far fa-eye"></i>',
  }
  let doctorInf = {
    id: 2,
    character: "Bác sĩ",
    skill: "Bạn là BÁC SĨ. Hãy chọn một người chơi để che chở vào mỗi đêm. Người chơi đấy sẽ không bị giết vào đêm được bảo vệ ( Phe: Dân làng)",
    icon: '<i class="fas fa-user-nurse"></i>',
  }
  let villagerInf = {
    id: 3,
    character: "Dân làng",
    skill: "Bạn là DÂN LÀNG bình thường và công việc của bạn là đưa ra phiếu bầu xử tử vào ban ngày  ( Phe: Dân làng)",
    icon: '<i class="fas fa-male"></i>',
  }
  let player = model.currentConversation.users
  let getRandomPlayer = Math.floor(Math.random() * player.length);

  let email = player[getRandomPlayer]
  player.splice(player.indexOf(email), 1);
  let playerRode = player
  if (firebase.auth().currentUser.email == email) {
    email = wolfInf
    alert(email.skill)
  }
  let getRandomPlayer1 = Math.floor(Math.random() * playerRode.length);
  let email1 = playerRode[getRandomPlayer1]
  playerRode.splice(playerRode.indexOf(email1), 1);
  let playerRode2 = playerRode
  if (firebase.auth().currentUser.email == email1) {
    email1 = seerInf
    alert(email1.skill)
  }
  let getRandomPlayer2 = Math.floor(Math.random() * playerRode2.length);
  let email2 = playerRode2[getRandomPlayer2]
  playerRode2.splice(playerRode2.indexOf(email2), 1);
  let playerRode3 = playerRode2
  if (firebase.auth().currentUser.email == email2) {
    email2 = villagerInf
    alert(email2.skill)
  }
  let getRandomPlayer3 = Math.floor(Math.random() * playerRode3.length);
  let email3 = playerRode3[getRandomPlayer3]
  playerRode3.splice(playerRode3.indexOf(email3), 1);
  let playerRode4 = playerRode3
  if (firebase.auth().currentUser.email == email3) {
    email3 = wolfInf
    alert(email3.skill)
  }
  let getRandomPlayer4 = Math.floor(Math.random() * playerRode4.length);
  let email4 = playerRode4[getRandomPlayer4]
  playerRode4.splice(playerRode4.indexOf(email4), 1);
  let playerRode5 = playerRode4
  if (firebase.auth().currentUser.email == email4) {
    email4 = doctorInf
    alert(email4.skill)
  }
  let getRandomPlayer5 = Math.floor(Math.random() * playerRode5.length);
  let email5 = playerRode5[getRandomPlayer5]
  playerRode5.splice(playerRode5.indexOf(email5), 1);
  if (firebase.auth().currentUser.email == email5) {
    email5 = villagerInf
    alert(email5.skill)
  }



  let sec = 45;
  function time() {

    sec--;
    if (sec != 0) {
      //night
      document.getElementById("clock").innerHTML = sec
      setTimeout("time()", 1000)
      document.getElementById("chat").style.backgroundColor = '#2b3648';
      document.getElementById("player").style.backgroundColor = '#2b3648';
      





    if(firebase.auth().currentUser.email == wolfInf){
      document.getElementById('effect').disabled = true;
      document.getElementById("vote").addEventListener("click", vote)
    }
    if( firebase.auth().currentUser.email == seerInf || firebase.auth().currentUser.email == doctorInf ){

    }
    } 
    else {
      //day
      document.getElementById("clock").innerHTML = "00"
      document.getElementById("chat").style.backgroundColor = none;
      document.getElementById("player").style.backgroundColor = none;
    }

  }
  let playerEmail = document.querySelectorAll('span.user')
  console.log(playerEmail[0])
  let i = model.currentConversation.users[0]
  console.log(i)
  let vote = [];
      playerEmail[0].onclick = function() {chose()};
      function chose(){
        let vote = [playerEmail[0] ]
        console.log(vote)
      }
}

//