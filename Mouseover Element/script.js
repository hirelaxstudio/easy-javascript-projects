// HTML'deki bütün .ball elementlerini seçin
const balls = document.querySelectorAll('.ball');

// Her bir top için bir olay dinleyici ekleyin
balls.forEach(ball => {
    ball.addEventListener('mouseover', () => {
        // Topu büyütmek için CSS transform özelliğini kullanın
        ball.style.transform = 'scale(1.2)';
    });

    ball.addEventListener('mouseout', () => {
        // Fareyi topun üzerinden çektiğinizde normal boyuta döndürün
        ball.style.transform = 'scale(1)';
    });
});