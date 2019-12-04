const components = {}

components.register = `
<section class="register-container">
<form id="register-form" class="register-form">
  <div class="form-header">
    <h2>Project Werewolf</h2>
  </div>
  <div class="form-content">
    <div class="input-wrapper">
        <input type="text" name="username" placeholder ="Username">
    </div>
    <div id="username-error" class="message-error"></div>
    <div class="input-wrapper">
      <input type="email" name="email" placeholder="Email" autocomplete="off">
    </div>
    <div id="email-error" class="message-error"></div>
    <div class="input-wrapper">
      <input type="password" name="password" placeholder="Password">
    </div>
    <div id="password-error" class="message-error"></div>
    <div class="input-wrapper">
      <input type="password" name="confirmPassword" placeholder="Confirm password">
    </div>
    <div id="confirm-password-error" class="message-error"></div>
  </div>
  <div id="register-error" class="message-error"></div>
  <div id="register-success" class="message-success"></div>
  <div class="form-footer">
    <a id="form-link" href="#">Already have an account? Login</a>
    <button id="register-btn" type="submit">Register</button>
  </div>
</form>
</section>
`

components.logIn = `
<section class="log-in-container">
<form id="log-in-form" class="log-in-form">
  <div class="form-header">
    <h2>Project Werewolf</h2>
  </div>
  <div class="form-content">
    <div class="input-wrapper">
      <input type="email" name="email" placeholder="Email" autocomplete="off">
    </div>
    <div id="email-error" class="message-error"></div>
    <div class="input-wrapper">
      <input type="password" name="password" placeholder="Password">
    </div>
    <div id="password-error" class="message-error"></div>
  </div>
  <div id="log-in-error" class="message-error"></div>
  <div class="form-footer">
    <a id="form-link" href="#">Not yet have an account? Register</a>
    <button id="log-in-btn" type="submit">Log in</button>
  </div>
</form>
</section>
`

components.game = `
<section class="box-chat">
        <div class="left">
            <div class="name-user">
                <h3 id="user-email" class="user-email"></h3>
                <img src="https://scontent.fhan5-2.fna.fbcdn.net/v/t1.15752-9/48407543_2290417214575361_9220130779655307264_n.jpg?_nc_cat=110&_nc_ohc=xNRCeNLef9MAQmhCBm7J13OEcHgkJ7S2KaYzRDkrliazBLsGm_EW8p6Xg&_nc_ht=scontent.fhan5-2.fna&oh=d7af991fabb4eff14b94d9d13c61abf5&oe=5E809A5D" class="img">
            </div>
            <div class="inf-user">
                <div class="menu">
                    <a id="coming-soon-link-1" class="comingSoon" href="#"><i class="far fa-address-card"></i> Thông tin cơ bản
                    <span class="tooltiptext">Comming soon ^^</span>
                    </a>
                </div>
                <div class="menu">
                    <a id="coming-soon-link-2" class="comingSoon" href="#"><i class="far fa-address-card"></i> Quà tặng
                    <span class="tooltiptext">Comming soon ^^</span>
                    </a>
                </div>
                <div class="menu">
                    <a id="coming-soon-link-3" class="comingSoon" href="#"><i class="fa fa-cogs fa-fw" aria-hidden="true"></i> Cài đặt
                    <span class="tooltiptext">Comming soon ^^</span>
                    </a>
                </div>

                <div class="menu">
                    <a id="instruction-link"><i class="far fa-question-circle"></i> Hướng dẫn</a>
                </div>
                <div class="menu">
                    <a id="coming-soon-link-4" class="comingSoon" href="#"><i class="fas fa-hands-helping"></i> Hỗ trợ
                    <span class="tooltiptext">Comming soon ^^</span>
                    </a>
                </div>
                <div class="menu">
                    <a id="sign-out" href="#"><i class="fas fa-sign-out-alt"></i> Đăng xuất</a>
                </div>
            </div>
        </div>
        <div class="current-conversation center" >
            <div id="system-message" class="system-message">
                
            </div>
              <div id="chat" class="chat">
                <div class="message-chat"
                  <span></span>
                </div>
              </div>
                <form id="form-chat" class="form-chat">
                  <div class="message-input-wrapper"> 
                    <input class="message-input" id="message-input" type="text" name="message" autocomplete="off">
                  </div>
                  <button id="form-chat-btn" type="submit">Gửi</button>
                </form>
        </div>
        <div class="right">
            <form id="form-invite-friend" class="form-invite-friend">
              <div class="input-wrapper">
                <input id="friend-email-input" type="email" name="friendEmail" placeholder="Email bạn bè">
              </div>
              <div id="friend-email-error" class="message-error"></div>
            <div class="btn-icon">
              <button type="submit">
              <i class="fas fa-user-plus"> Mời</i>
              </button>
            </div>
            <div class="btn-icon">
              <button type="button" id="create-new-room" class="btn-icon">
              <i class="fas fa-plus-square"> Tạo phòng mới</i>
              </button>
            </div>
            <div class="btn-icon">
            <button type="button" id="join-conversation-btn" class="btn-icon">
            <i class="fas fa-running"> Gia nhập phòng</i>
            </button>
            </div>
            <div class="btn-icon">
              <button type="button" id="leave-conversation-btn" class="btn-icon">
              <i class="fas fa-running"> Rời khỏi phòng</i>
              </button>
            </div>
            </form>
            <div id="player" class="inf-player">
                    
            </div>
            <div class="btn-inf">
                <button type="submit" class="Vote" id="vote">Vote</button>
                <button class="effect">Chức năng</button>
                <button onclick="startGame()" id="start">Bắt đầu</button>
            </div>
            <div id="clock" class="clock">
            </div>
        </div>
    </section>
`

components.instruction = `
<section id="instruction" class="instruction">
<span class="haha" >Giới thiệu</span> <br>
<p>The Werewolves of Millers Hollow (tiếng Pháp: Les Loups-garous de Thiercelieux, hay còn được biết đến với cái tên Ma Sói ở Việt Nam) là một trò chơi bài do hai tác giả người Pháp Philippe des Pallières và Hervé Marly có thể chơi với 8 đến 47 người chơi. Trò chơi lấy cảm hứng từ trò chơi bài Mafia của Nga. Trò chơi đã được đề cử tại giải Spiel des Jahres năm 2003</p> <br>
<span class="haha" >Hướng dẫn</span> <br>
<span class="haha" >Luật chơi</span> <br>
<p>
    Ban đêm: tất cả người chơi nhắm mắt lại ("đi ngủ"). Các chức năng đặc biệt lần lượt "thức dậy", thực hiện chức năng đặc biệt của mình theo sự hướng dẫn của hệ thống trong im lặng và nhắm mắt lại.
</p> <br>
<p>
    Ban ngày: mọi người cùng mở mắt. Hệ thống sẽ thông báo những người chơi đã bị giết vào đêm qua. Những người đó không được phép nói chuyện hay bàn bạc gì với những người còn lại ("còn sống") của trò chơi. Tuỳ thuộc vào việc cách chơi của bạn có yêu cầu rằng người chết sẽ bị tiết lộ danh tính hay không mà hệ thống sẽ tiết lộ danh tính người chết (thường là không). Sau đó, những người sống sót sẽ tranh luận và loại một người chơi nào đó ra mà họ nghĩ là Sói, sau đó cả làng có thể chọn ra một người để treo cổ.
</p> <br>
<span class="haha" >Nhân vật</span> <br>
<span class="teamVillager">Phe dân làng (Thắng khi phe Sói chết hết)</span>
<h3>Dân làng</h3>
<p>
    Không có chức năng đặc biệt gì ngoài việc tìm ra Sói và có quyền bỏ phiếu.
</p> 
<h3>Tiên tri</h3>
<p>
    Mỗi đêm, Tiên tri có thể chọn người để soi và khám phá ra danh tính thực sự của một người chơi nào đó. Tiên tri phải giúp các Dân làng khác trong việc tìm ra Sói nhưng đồng thời không được để Sói phát hiện thân phận của mình.
</p>
<h3>Bác sĩ</h3>
<p>
  Mỗi đêm, Bác sĩ chọn ra một người để cứu sống. Nếu người đó bị Sói cắn vào cùng đêm ấy, người chơi đó sẽ được cứu sống.
</p>
<span class="teamWolf">Phe Sói (Thắng khi phe Dân làng có số người chơi nhỏ hơn hoặc bằng phe Sói)</span>
<p>
    Vào mỗi đêm, phe Ma sói chọn một người chơi làm con mồi và giết. Nạn nhân có thể là bất kì ai. Ngày hôm sau, họ phải giả vờ đóng vai là dân làng và ra vẻ không khả nghi. Số lượng ma sói có thể thay đổi tuỳ theo số người chơi.
</p>
</section>
`

components.createRoom = `
  <section class="create-room" >
  <form id="create-room-form" class="create-room-form">
      <div class="input-wrapper">
          <h2>Tạo phòng mới</h2>
          <input type="text" name="title" placeholder="Nhập tên phòng" id="create-new-room" class="create-new-room" autocomplete="off">
      </div>
      <div id="title-error" class="message-error"></div>    
      <button id="create-button" type="submit">Tạo</button>
  </form>
  </section>
`

components.comingSoon = `
<section class="coming-soon">
<h1 id="bounce">
    <span>C</span>
    <span>o</span>
    <span>m</span>
    <span>i</span>
    <span>n</span>
    <span>g</span>
  </br>
    <span>s</span>
    <span>o</span>
    <span>o</span>
    <span>n</span>
  </h1>
</section>
`