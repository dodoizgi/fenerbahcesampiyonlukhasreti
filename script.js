// Son şampiyonluk tarihi: 2014 yılı Mayıs ayı
const lastChampionship = new Date('2014-05-18T00:00:00');

function updateCounter() {
    const now = new Date();
    const diff = now - lastChampionship;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById('years').textContent = years;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

    document.getElementById('total-days').textContent = totalDays;
}

// Her saniye güncelle
setInterval(updateCounter, 1000);
updateCounter(); // İlk çalıştırma 