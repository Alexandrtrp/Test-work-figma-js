const cardTemplate = document.querySelector('#card-template').content;

const cardsList = document.querySelector('.cards-list');

function createCard
(data, template){

        const cardItem = template.querySelector('.card__item').cloneNode(true);
        const cardSaleText = cardItem.querySelector('.card-img-sale-text');
        const cardImage = cardItem.querySelector('.card-img');
        const cardTitle = cardItem.querySelector('.card-title');
        const cardPrice = cardItem.querySelector('.card-price');
        const cardText = cardItem.querySelector('.card-text')
        const cardPriceNoSale = cardItem.querySelector('.card-price-no-sale')


        cardSaleText.textContent = data.saleText;
        cardImage.src = data.linkImg;
        cardTitle.textContent = data.title;
        cardText.textContent = data.productDescription;
        cardPrice.textContent = data.price;
        cardPriceNoSale.textContent = data.noSalePrice;


        return cardItem;
}

function renderCard(data) {

    data.forEach((el) => {
        cardsList.append(createCard(el, cardTemplate));
    })  
}

renderCard(initialCards);
