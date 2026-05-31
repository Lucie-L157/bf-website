$( document ).ready(function() {

    const SETTINGS = {
      anniversary: "2025-11-21T20:09:17", // YYYY-MM-DDTHH:mm:ss
      hisbday: "2009-10-28T00:00:00", // YYYY-MM-DDTHH:mm:ss
      mybday: "2009-02-02T03:44:34", // YYYY-MM-DDTHH:mm:ss
      spotify: "https://open.spotify.com/playlist/3BFIYHKCw7IPS51No3xJw7?si=620400f62b4c41ac&pt=2f78c529b12cf8badc5c177135c454f4"             // add my own file/url for spotify
    };
    
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    const storedHash = 'ec2ce839c1581354ffc6870d4aa93da11a0b72dd520a5f83411e9dcc02152001';
    
    envelope.click( function() {
        open();
    });
    btn_open.click( function() {
        open();
    });
    btn_reset.click( function() {
        close();
    });

    function open() {
        envelope.addClass("open")
           .removeClass("close");
    }
    function close() {
        envelope.addClass("close")
           .removeClass("open");
    }

    hearts();

    function hearts(){
      const root = document.querySelector('.heartsfloat');
      const emojis = ['💖','💗','💞','💘','💕','💓'];
      function addHeart(){
        const s=document.createElement('span');
        s.textContent=emojis[Math.floor(Math.random()*emojis.length)];
        s.style.left = Math.random()*73+'%';
        s.style.fontSize = (12+Math.random()*18)+'px';
        s.style.animationDuration = (8+Math.random()*8)+'s';
        root.appendChild(s);
        setTimeout(()=>root.removeChild(s), 17000);
      }
      setInterval(addHeart, 600);
      for(let i=0;i<10;i++) addHeart();
    };

    function gate(){
      const gate = document.getElementById('gate');
      const input = document.getElementById('gateInput');
      const btn = document.getElementById('gateBtn');
      const appEls = document.querySelectorAll('.app');
      async function tryUnlock(){
        const val = (input.value||'').trim();
        if(await login(val)){
          document.body.classList.remove('locked');
          gate.classList.add('hide');
          appEls.forEach(el => el.removeAttribute('aria-hidden'));
        } else {
          input.focus();
          input.select();
          alert('Wrong code — try again.');
        }
      }
      btn.addEventListener('click', tryUnlock);
      input.addEventListener('keydown', (e)=>{ if(e.key==='Enter'){ tryUnlock(); }});
      setTimeout(()=>input.focus(), 50);
    };

    gate();

    async function hashPassword(password) {
        const encoder = new TextEncoder();
        const data = encoder.encode(password);

        const hashBuffer = await crypto.subtle.digest('SHA-256', data);

        const hashArray = Array.from(new Uint8Array(hashBuffer));

        return hashArray
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
    }

    async function login(input) {

        const inputHash = await hashPassword(input);

        if (inputHash === storedHash) {
            return true;
        }
        return false;
    }


    function acountdown(){
      const anniversary = new Date(SETTINGS.anniversary);
      const nowRef = new Date();
      let targetDate = new Date(
        nowRef.getFullYear(),
        anniversary.getMonth(),
        anniversary.getDate(),
        anniversary.getHours(),
        anniversary.getMinutes(),
        anniversary.getSeconds()
      );
      if (targetDate <= nowRef) {
        targetDate.setFullYear(targetDate.getFullYear() + 1);
      }
      const target = targetDate.getTime();
      const d=document.getElementById('ad'), h=document.getElementById('ah'), m=document.getElementById('am'), s=document.getElementById('as');
      function update(){
        const now = Date.now();
        let diff = Math.max(0, target - now);
        const days = Math.floor(diff / (1000*60*60*24)); diff -= days*86400000;
        const hrs = Math.floor(diff / 3600000);        diff -= hrs*3600000;
        const mins = Math.floor(diff / 60000);         diff -= mins*60000;
        const secs = Math.floor(diff / 1000);
        ad.textContent = days; ah.textContent = hrs; am.textContent = mins; as.textContent = secs;
      }
      update(); setInterval(update, 1000);
    }
    acountdown();


    function bcountdown(){
    const birthday = new Date(SETTINGS.hisbday);
    const nowRef = new Date();
    let targetDate = new Date(
      nowRef.getFullYear(),
      birthday.getMonth(),
      birthday.getDate(),
      birthday.getHours(),
      birthday.getMinutes(),
      birthday.getSeconds()
    );
    if (targetDate <= nowRef) {
      targetDate.setFullYear(targetDate.getFullYear() + 1);
    }
    const target = targetDate.getTime();
    const d=document.getElementById('bd'), h=document.getElementById('bh'), m=document.getElementById('bm'), s=document.getElementById('bs');
    function update(){
      const now = Date.now();
      let diff = Math.max(0, target - now);
      const days = Math.floor(diff / (1000*60*60*24)); diff -= days*86400000;
      const hrs = Math.floor(diff / 3600000);        diff -= hrs*3600000;
      const mins = Math.floor(diff / 60000);         diff -= mins*60000;
      const secs = Math.floor(diff / 1000);
      bd.textContent = days; bh.textContent = hrs; bm.textContent = mins; bs.textContent = secs;
    }
    update(); setInterval(update, 1000);
  }
  bcountdown();

  function mbcountdown(){
    const mybirthday = new Date(SETTINGS.mybday);
    const nowRef = new Date();
    let targetDate = new Date(
      nowRef.getFullYear(),
      mybirthday.getMonth(),
      mybirthday.getDate(),
      mybirthday.getHours(),
      mybirthday.getMinutes(),
      mybirthday.getSeconds()
    );
    if (targetDate <= nowRef) {
      targetDate.setFullYear(targetDate.getFullYear() + 1);
    }
    const target = targetDate.getTime();
    const d=document.getElementById('mbd'), h=document.getElementById('mbh'), m=document.getElementById('mbm'), s=document.getElementById('mbs');
    function update(){
      const now = Date.now();
      let diff = Math.max(0, target - now);
      const days = Math.floor(diff / (1000*60*60*24)); diff -= days*86400000;
      const hrs = Math.floor(diff / 3600000);        diff -= hrs*3600000;
      const mins = Math.floor(diff / 60000);         diff -= mins*60000;
      const secs = Math.floor(diff / 1000);
      mbd.textContent = days; mbh.textContent = hrs; mbm.textContent = mins; mbs.textContent = secs;
    }
    update(); setInterval(update, 1000);
  }
  mbcountdown();

function lightbox(){
      const lb = document.getElementById('lightbox');
      const img = lb.querySelector('img');
      document.querySelectorAll('.gallery img').forEach(el=>{
        el.addEventListener('click',()=>{ img.src=el.dataset.large||el.src; lb.style.display='flex'; });
      });
      lb.addEventListener('click',()=>{ lb.style.display='none'; img.src=''; });
    };
  lightbox();

const babyButton = document.getElementById("babyButton");
const babyPopup = document.getElementById("babyPopup");
const closeBabyPopup = document.getElementById("closeBabyPopup");

babyButton.onclick = () => {
    babyPopup.style.display = "flex";
};

closeBabyPopup.onclick = () => {
    babyPopup.style.display = "none";
};

window.addEventListener('click', (event) => {
    if(event.target === babyPopup){
        babyPopup.style.display = "none";
    }
});


const openBtn = document.getElementById("openCardsBtn");
const popup = document.getElementById("cardPopup");
const closeBtn = document.getElementById("closePopup");

openBtn.onclick = () => {
  popup.style.display = "flex";
};

closeBtn.onclick = () => {
  popup.style.display = "none";
};

window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});

});
