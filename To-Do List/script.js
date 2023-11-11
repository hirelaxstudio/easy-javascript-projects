var enterButton = document.getElementById("enter"); // "enter" düğmesini HTML'den al
var input = document.getElementById("userInput"); // "userInput" alanını HTML'den al
var ul = document.querySelector("ul"); // İlk <ul> öğesini HTML'den seç
var item = document.getElementsByTagName("li"); // Tüm <li> öğelerini HTML'den al

function inputLength(){
	return input.value.length; // Giriş alanındaki metnin uzunluğunu döndür
}

function createListElement() {
	var li = document.createElement("li"); // Bir <li> öğesi oluştur
	li.appendChild(document.createTextNode(input.value)); // Giriş alanındaki metni <li> öğesine ekle
	ul.appendChild(li); // <li> öğesini <ul> listesine ekle
	input.value = ""; // Giriş alanını sıfırla

	function crossOut() {
		li.classList.toggle("done"); // "done" sınıfını <li> öğesine ekle/çıkar
	}

	li.addEventListener("click",crossOut); // <li> öğesine tıklama olayı ekleyerek çizgi çekme işlevini çağır

	var dBtn = document.createElement("button"); // Bir <button> öğesi oluştur
	dBtn.appendChild(document.createTextNode("X")); // "X" metnini <button> öğesine ekle
	li.appendChild(dBtn); // <button> öğesini <li> öğesine ekle
	dBtn.addEventListener("click", deleteListItem); // <button> öğesine tıklama olayı ekleyerek silme işlevini çağır

	function deleteListItem(){
		li.classList.add("delete"); // "delete" sınıfını <li> öğesine ekle
	}
}

function addListAfterClick(){
	if (inputLength() > 0) {
		createListElement(); // Giriş alanında metin varsa yeni bir liste öğesi oluştur
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which === 13) {
		createListElement(); // Giriş alanında metin varsa ve "Enter" tuşuna basıldıysa yeni bir liste öğesi oluştur
	} 
}

enterButton.addEventListener("click",addListAfterClick); // "enter" düğmesine tıklama olayı ekleyerek yeni liste öğesi oluştur

input.addEventListener("keypress", addListAfterKeypress); // Giriş alanına klavyeden bir tuşa basıldığında yeni liste öğesi oluştur