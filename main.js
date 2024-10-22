document.addEventListener('DOMContentLoaded', () => {
    const partnerCards = document.querySelectorAll('.partner-card');
    const partnerInfo = document.getElementById('partner-info');
    const partnerLogoLink = document.getElementById('partner-logo-link');
    const partnerLogo = document.getElementById('partner-logo');
    const partnerName = document.getElementById('partner-name');
    const partnerDescription = document.getElementById('partner-description');
    const partnerProductsSection = document.getElementById('partner-products-section');
    const partnerProducts = document.getElementById('partner-products');

    const partners = {
        martin: {
            name: "Мартин",
            description: "Компания «МАРТИН» за годы своей деятельности завоевала признание как среди экспертов, так и среди потребителей по всему миру. Они предлагают своим клиентам продукцию исключительно собственного производства, которой по праву гордятся. Основные принципы их работы включают максимальную прозрачность сделок, высококлассный сервис и доброжелательное отношение к партнёрам.",
            products: [
                { name: "Семечки", url: "https://martinglobalfoods.com/products-categories/semechki_martin" },
                { name: "Чипсы", url: "https://martinglobalfoods.com/products-categories/chipsy" },
                { name: "Лемонады", url: "https://martinglobalfoods.com/products-categories/limonad_martin" },
                { name: "Макароны", url: "https://martinglobalfoods.com/products-categories/makarony_martin_s_g" },
                { name: "Орехи", url: "https://martinglobalfoods.com/products-categories/orehi_ot_martina" }
            ],
            logo: "images/martin-logo.jpg",
            website: "https://martinglobalfoods.com/",
            shortInfo: "Более 20 лет на рынке кондитерских изделий",
            partnerSince: 2010
        },
        "dyadya-vanya": {
            name: "ДЯДЯ ВАНЯ",
            description: "Компания «Дядя Ваня» создала бренд, отражающий фундаментальные ценности: семья, традиции, вера, забота о близких, душевность и доброжелательность. Независимо от того, где ты находишься и чем занимаешься, бренд «Дядя Ваня» напоминает, что однажды внутри каждого может прозвучать: «Время вернуться домой!»",
            products: [
                { name: "Огурчики", url: "https://dyadya-vanya.ru/products/ogurcy" },
                { name: "Томаты", url: "https://dyadya-vanya.ru/products/tomaty" },
                { name: "Горошек", url: "https://dyadya-vanya.ru/products/goroshek" },
                { name: "Кукуруза", url: "https://dyadya-vanya.ru/products/kukuruza" },
                { name: "Уксусы", url: "https://dyadya-vanya.ru/products/vinegar" }
            ],
            logo: "images/vanya.png",
            website: "https://www.samsung.com",
            shortInfo: "Лидер в области электр",
            partnerSince: 2008
        },
        voron: {
            name: "Воронцовские",
            description: "Компания использует традиционную технологию производства, доведя процесс приготовления до совершенства, чтобы обеспечить высокое качество и отличный вкус своих сухариков и гренок. Они готовят продукцию из ароматного хлеба, выпекаемого по специальной рецептуре, с тщательным контролем качества, осуществляемым специалистами-технологами.",
            products: [
                { name: "Сухарики", url: "https://vorontsovskie.ru/catalog/sukhariki/" },
                { name: "Гренки", url: "https://vorontsovskie.ru/catalog/grenki/" },
                { name: "Бородинские гренки", url: "https://vorontsovskie.ru/catalog/borodinskie-grenki/" },
                { name: "Пшеничные", url: "https://vorontsovskie.ru/catalog/pshenichnye/" }
            ],
            logo: "images/voron.png",
            website: "https://www.nestle.com",
            shortInfo: "Более 150 лет на рынке продуктов питания",
            partnerSince: 2007
        },
        pasteroni: {
            name: "Pasteroni",
            description: "Производитель электроники, бытовой техники и телекоммуникационного оборудования.",
            products: [
                { name: "КОРОТКАЯ ПАСТА", url: "https://pasteroni.com/catalog#!/tab/615504528-1" },
                { name: "ДЛИННАЯ ПАСТА", url: "https://pasteroni.com/catalog#!/tab/615504528-2" },
                { name: "ПАСТА ДЛЯ ЗАПЕКАНИЯ", url: "https://pasteroni.com/catalog#!/tab/615504528-3" },
                { name: "ПАСТА ДЛЯ СУПА", url: "https://pasteroni.com/catalog#!/tab/615504528-4" }
            ],
            logo: "images/pasteroni.png",
            website: "https://pasteroni.com/",
            shortInfo: "Лидер в области электроники и бытовой техники",
            partnerSince: 2009
        },
        "procter-gamble": {
            name: "Procter & Gamble",
            description: "Американская транснациональная компания, производитель потребительских товаров.",
            products: ["Стиральный порошок Tide", "Шампунь Head & Shoulders", "Подгузники Pampers"],
            logo: "images/procter-gamble-logo.jpg",
            website: "https://www.pg.com",
            shortInfo: "Более 180 лет на рынке потребительских товаров",
            partnerSince: 2006
        },
        stamba: {
            name: "Stamba",
            description: "Компания Stamba с 2016 года занимается собственным производством и уже более 5 лет создаёт отличные снеки из лучших российских ингредиентов. Они гордятся своими достижениями и благодарны каждому члену своей команды. Stamba располагает самым современным заводом в России по производству чипсов. Собрав мировой опыт, передовые технологии и усовершенствовав все процессы, они представили на рынок бренд Bruto — современные и вкусные снеки.",
            products: [
                { name: "КРАФТСНЕКИ​", url: "https://stamba.su/nashi-brendy#:~:text=%D0%A0%D0%90%D0%91%D0%9E%D0%A2%D0%90%20%D0%A3%20%D0%9D%D0%90%D0%A1%E2%80%8B-,%D0%BA%D1%80%D0%B0%D1%84%D1%82%D1%81%D0%BD%D0%B5%D0%BA%D0%B8" },
                { name: "BRUTO FLAVOR", url: "https://stamba.su/nashi-brendy#:~:text=BRUTO-,flavor,-%D0%A7%D0%B8%D0%BF%D1%81%D1%8B%20BRUTO%20FLAVOR" },
                { name: "GOURMET LINE", url: "https://stamba.su/nashi-brendy#:~:text=GOURMET-,line,-Gourmet%20line" },
                { name: "BLACK EDITION", url: "https://stamba.su/nashi-brendy#:~:text=BLACK-,edition,-Black%20edition" }
            ],
            logo: "images/stamba.png",
            website: "https://stamba.su/",
            shortInfo: "Современные и вкусные снеки с 2016 года",
            partnerSince: 2016
        },
        adidas: {
            name: "Adidas",
            description: "Немецкая компания по производству спортивной одежды, обуви и аксессуаров.",
            products: ["Кроссовки", "Футбольная экипировка", "Спортивные костюмы"],
            logo: "images/adidas-logo.jpg",
            website: "https://www.adidas.com",
            shortInfo: "Более 90 лет на рынке спортивной одежды",
            partnerSince: 2011
        },
        unilever: {
            name: "Unilever",
            description: "Британско-нидерландская компания, производитель продуктов питания и товаров бытовой химии.",
            products: ["Чай Lipton", "Мороженое Magnum", "Дезодоранты Rexona"],
            logo: "images/unilever-logo.jpg",
            website: "https://www.unilever.com",
            shortInfo: "Более 190 лет на рынке продуктов питания и бытовой химии",
            partnerSince: 2008
        }
    };

    function showPartnerInfo(partner) {
        partnerLogoLink.href = partner.website;
        partnerLogo.src = partner.logo;
        partnerLogo.alt = `Логотип ${partner.name}`;
        partnerName.textContent = partner.name;
        partnerDescription.textContent = partner.description;
        
        if (partner.products && partner.products.length > 0) {
            partnerProducts.innerHTML = partner.products.map(product => 
                `<li><a href="${product.url}" target="_blank">${product.name}</a></li>`
            ).join('');
            partnerProductsSection.classList.remove('hidden');
        } else {
            partnerProductsSection.classList.add('hidden');
        }

        partnerInfo.classList.remove('hidden');
        setTimeout(() => {
            partnerInfo.classList.add('visible');
        }, 10);
    }

    function closePartnerInfo() {
        partnerInfo.classList.remove('visible');
        setTimeout(() => {
            partnerInfo.classList.add('hidden');
            partnerProductsSection.classList.add('hidden');
        }, 300);
    }

    partnerCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.stopPropagation();
            const partnerId = card.dataset.partner;
            const partner = partners[partnerId];
            if (partner) {
                showPartnerInfo(partner);
            }
        });
    });

    // Закрываем модальное окно при клике вне его содержимого
    partnerInfo.addEventListener('click', (e) => {
        if (e.target === partnerInfo) {
            closePartnerInfo();
        }
    });

    // Добавляем кнопку закрытия
    const closeButton = document.createElement('button');
    closeButton.classList.add('close-button');
    closeButton.setAttribute('aria-label', 'Закрыть');
    closeButton.addEventListener('click', closePartnerInfo);
    partnerInfo.appendChild(closeButton);
});

function updatePartnerCards() {
    const partnerCards = document.querySelectorAll('.partner-card');
    const currentYear = new Date().getFullYear();

    partnerCards.forEach(card => {
        const partnerId = card.dataset.partner;
        const partner = partners[partnerId];
        if (partner) {
            const durationElement = card.querySelector('.partnership-duration');
            const yearsOfPartnership = currentYear - partner.partnerSince;
            durationElement.textContent = `Партнер уже ${yearsOfPartnership} ${getYearWord(yearsOfPartnership)}`;
        }
    });
}

function getYearWord(years) {
    if (years % 10 === 1 && years % 100 !== 11) {
        return 'год';
    } else if ([2, 3, 4].includes(years % 10) && ![12, 13, 14].includes(years % 100)) {
        return 'года';
    } else {
        return 'лет';
    }
}

document.addEventListener('DOMContentLoaded', updatePartnerCards);
