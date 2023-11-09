console.log("script.js is running");

// Canvas'ı seç ve içeriğini al
var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");

// Tarayıcı penceresinin boyutunu al ve canvas boyutunu güncelle
var tx = window.innerWidth;
var ty = window.innerHeight;
canvas.width = tx;
canvas.height = ty;

// Mouse pozisyonunu tutan değişkenler
var mousex = 0;
var mousey = 0;

// Mause hareketini algılayan event listener
canvas.addEventListener("mousemove", function(event) {
  mousex = event.clientX;
  mousey = event.clientY;
});

// Gravity değerini tutan değişken
var grav = 0.99;

// Rastgele renk üreten fonksiyon
function randomColor() {
  // Rastgele rgba renk oluştur
  return (
    "rgba(" +
    Math.round(Math.random() * 250) +
    "," +
    Math.round(Math.random() * 250) +
    "," +
    Math.round(Math.random() * 250) +
    "," +
    (Math.random() + 0.1).toFixed(1) +
    ")"
  );
}

// Top nesnesini tanımlayan constructor fonksiyon
function Ball() {
  // Rastgele renk üret
  this.color = randomColor();
  // Rastgele yarıçap üret
  this.radius = Math.random() * 20 + 14;
  // Topun başlangıç yarıçapını tut
  this.startradius = this.radius;
  // Topun başlangıç pozisyonunu belirle
  this.x = Math.random() * (tx - this.radius * 2) + this.radius;
  this.y = Math.random() * (ty - this.radius);
  // Topun başlangıç hızını belirle
  this.dy = Math.random() * 2;
  this.dx = Math.round((Math.random() - 0.5) * 10);
  // Topun başlangıç ivmesini belirle
  this.vel = Math.random() / 5;
  // Topu çizmek için fonksiyon
  this.update = function() {
    // Topu çizmeden önce canvas'ı kaydet
    c.beginPath();
    // Bir daire çiz
    c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    // Daireyi renklendir
    c.fillStyle = this.color;
    // Daireyi çiz
    c.fill();
  };
}

// bal adında bir dizi oluştur
var bal = [];
// Diziye 20 tane top ekle
for (var i = 0; i < 20; i++) {
  bal.push(new Ball());
}

// Animasyon fonksiyonu
function animate() {
  // Tarayıcı penceresinin boyutu değiştiyse canvas boyutunu güncelle
  if (tx != window.innerWidth || ty != window.innerHeight) {
    tx = window.innerWidth;
    ty = window.innerHeight;
    canvas.width = tx;
    canvas.height = ty;
  }
  // animate fonksiyonunu her frame'de çağır
  requestAnimationFrame(animate);
  // Canvas'ı temizle
  c.clearRect(0, 0, tx, ty);
  // Her bir top için güncelleme işlemlerini uygula
  for (var i = 0; i < bal.length; i++) {
    bal[i].update();
    bal[i].y += bal[i].dy;
    bal[i].x += bal[i].dx;
    // Yerçekimi etkisi: Top ekranın altına ulaştıysa zıplat
    if (bal[i].y + bal[i].radius >= ty) {
      bal[i].dy = -bal[i].dy * grav;
    } else {
      bal[i].dy += bal[i].vel;
    }
    // Top ekranın sağ veya sol kenarına ulaştıysa yansıt
    if (bal[i].x + bal[i].radius > tx || bal[i].x - bal[i].radius < 0) {
      bal[i].dx = -bal[i].dx;
    }
    // Mause topun üzerine geldiyse topu büyüt
    if (
      mousex > bal[i].x - 20 &&
      mousex < bal[i].x + 20 &&
      mousey > bal[i].y - 50 &&
      mousey < bal[i].y + 50 &&
      // Topun boyutu 70'ten küçükse büyüt
      bal[i].radius < 70
    ) {
      bal[i].radius += 5;
    } else {
      // Eğer fare topa yaklaşmıyorsa ve topun boyutu başlangıç boyutundan büyükse küçült
      if (bal[i].radius > bal[i].startradius) {
        bal[i].radius -= 5;
      }
    }
  }
}

// animate fonksiyonunu çağır. Böylece animasyon başlar
animate();
