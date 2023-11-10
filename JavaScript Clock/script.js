// Sabah saati
var wakeuptime = 7;

// Günün ortası, öğle saat
var noon = 12;

// Öğle yemeği saati
var lunchtime = 12;

// Öğle uykusu saati, öğle yemeğinden 2 saat sonrası
var naptime = lunchtime + 2;

// Parti saati
var partytime;

// Akşam saati
var evening = 18;

// Sayfadaki saati gösteren fonksiyon
var showCurrentTime = function() {
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
 
    if (hours < 10) {
        hours = "0" + hours;
    }
 
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
 
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    var clockTime = hours + ':' + minutes + ':' + seconds;
 
    clock.innerText = clockTime;
};


// Saati güncelleyen ve mesajları belirleyen fonksiyon
var updateClock = function() 
{
  var time = new Date().getHours();
  var messageText;
  var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

  var timeEventJS = document.getElementById("timeEvent");
  var lolcatImageJS = document.getElementById('lolcatImage');
  
  if (time == partytime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
    messageText = "Parti Zamanı!";
  }
  else if (time == wakeuptime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "Uyan!";
  }
  else if (time == lunchtime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "Öğle Yemeği Vakti!";
  }
  else if (time == naptime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "Uyku Zamanı!";
  }
  else if (time < noon)
  {
    image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
    messageText = "Günaydın!";
  }
  else if (time >= evening)
  {
    image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
    messageText = "İyi Akşamlar!";
  }
  else
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
    messageText = "Tünaydın!";
  }

  console.log(messageText); 
  timeEventJS.innerText = messageText;
  lolcatImageJS.src = image;
  
  showCurrentTime();
};

// Sayfa yüklendiğinde saat bilgisini güncelleyen fonksiyonu çağır
updateClock();

// Bir saniyede bir kez saat bilgisini güncelleyen fonksiyonu çağır
var oneSecond = 1000;
setInterval( updateClock, oneSecond);

// "Party Time" butonunu seç
var partyButton = document.getElementById("partyTimeButton");

// "Party Time" butonuna tıklanınca gerçekleşecek olayları içeren fonksiyon
var partyEvent = function()
{
    // Eğer parti zamanı başlamamışsa
    if (partytime < 0) 
    {
        // Şu anki saat bilgisini alarak parti zamanını başlat
        partytime = new Date().getHours();

        // Butonun metnini ve arka plan rengini güncelle
        partyTimeButton.innerText = "Party Bitti!";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        // Partiyi sonlandır
        partytime = -1;

        // Butonun metnini ve arka plan rengini güncelle
        partyTimeButton.innerText = "Party Zamanı!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};

// "Party Time" butonuna tıklanınca gerçekleşecek olayı ekle
partyButton.addEventListener("click", partyEvent);

// Sayfa yüklendiğinde veya kod çalıştırıldığında başlangıçta bir parti durumu olup olmadığını kontrol et
partyEvent(); 

// "Wake Up Time" seçim kutusunu seç
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");

// "Wake Up Time" seçim kutusunda değişiklik olduğunda gerçekleşecek olayları içeren fonksiyon
var wakeUpEvent = function()
{
    // Seçilen değeri alarak uyanma saati değişkenini güncelle
    wakeuptime = wakeUpTimeSelector.value;
};

// "Wake Up Time" seçim kutusuna değişiklik olduğunda gerçekleşecek olayı ekle
wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

// "Lunch Time" seçim kutusunu seç
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");

// "Lunch Time" seçim kutusunda değişiklik olduğunda gerçekleşecek olayları içeren fonksiyon
var lunchEvent = function()
{
    // Seçilen değeri alarak öğle yemeği saati değişkenini güncelle
    lunchtime = lunchTimeSelector.value;
};

// "Lunch Time" seçim kutusuna değişiklik olduğunda gerçekleşecek olayı ekle
lunchTimeSelector.addEventListener("change", lunchEvent);

// "Nap Time" seçim kutusunu seç
var napTimeSelector =  document.getElementById("napTimeSelector");

// "Nap Time" seçim kutusunda değişiklik olduğunda gerçekleşecek olayları içeren fonksiyon
var napEvent = function()
{
    // Seçilen değeri alarak öğle uykusu saati değişkenini güncelle
    naptime = napTimeSelector.value;
};

// "Nap Time" seçim kutusuna değişiklik olduğunda gerçekleşecek olayı ekle
napTimeSelector.addEventListener("change", napEvent);
