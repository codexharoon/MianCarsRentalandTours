
const toursCardsInfo = [
    {
        img: `IMGs/Tours/naran.jpg`,
        title: 'Naran Kaghan Tour',
        pkg: 'Premium Tour Pakages',
        phone: '0300 4218333'
    },
    {
        img: `IMGs/Tours/naran.jpg`,
        title: 'Hunza Valley Tour',
        pkg: 'Premium Tour Pakages',
        phone: '0300 4218333'
    },
    {
        img: `IMGs/Tours/naran.jpg`,
        title: 'Swat Valley Tour',
        pkg: 'Premium Tour Pakages',
        phone: '0300 4218333'
    },
    {
        img: `IMGs/Tours/naran.jpg`,
        title: 'Murree Galyat Tour',
        pkg: 'Premium Tour Pakages',
        phone: '0300 4218333'
    },
    {
        img: `IMGs/Tours/naran.jpg`,
        title: 'Chitral Valley Tour',
        pkg: 'Premium Tour Pakages',
        phone: '0300 4218333'
    },
    {
        img: `IMGs/Tours/naran.jpg`,
        title: 'Skardu Valley Tour',
        pkg: 'Premium Tour Pakages',
        phone: '0300 4218333'
    },
    {
        img: `IMGs/Tours/naran.jpg`,
        title: 'Neelum Valley Tour',
        pkg: 'Premium Tour Pakages',
        phone: '0300 4218333'
    },
];

let cardsHTML = '';

toursCardsInfo.forEach((card)=>{
    cardsHTML += `
        <div class="tours-cards">

            <div class="tours-cards-img">
                <a href="tours.html"><img src="${card.img}" alt="${card.title}"></a>
            </div>

            <div class="tours-cards-info">
                <p class="tci-title"><a href="tours.html">${card.title}</a></p>
                <p class="tci-pkg">${card.pkg}</p>
                <p class="tci-phone"><a href="tel:${card.phone}">${card.phone}</a></p>
            </div>

        </div> 
    `;
});


document.querySelector('.tours-container').innerHTML = cardsHTML;