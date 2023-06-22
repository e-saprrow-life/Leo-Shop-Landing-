'use strict'
// Проверка наличия класса у элемента. Возврат true/false. 
// Вызов: checkClass(elem, className)
function checkClass(elem, className) {
    let classLength = elem.classList;
    let checkClass;

    for (let i = 0; i < classLength.length; i++) {
        if (classLength[i] == className) checkClass = true;
    };
    return checkClass;
};



//================================================================

// Мобильная версия меню пользователя
    let btnUserMenu = document.getElementById('btnUserMenu');
    let userMenu = document.getElementById('userMenu');
    let linksUserMenu = userMenu.getElementsByTagName('li');

    btnUserMenu.addEventListener('click', function() {
        userMenu.classList.toggle('userNav_active');
        lockBody();
    }, false);
    
    for (let i = 0; i < linksUserMenu.length; i++) {
        linksUserMenu[i].addEventListener('click', function() {
            userMenu.classList.remove('userNav_active');
            lockBody();
        }, false);
    };

// Бургер меню
    let burgerBtn = document.getElementById('burger');
    let linkList = document.getElementById('linksList');
    let linkListLink = linkList.getElementsByTagName('li');

    burgerBtn.addEventListener('click', function(){
        burgerBtn.classList.toggle('burger_active');
        linkList.classList.toggle('menu-list_active');
        userMenu.classList.remove('userNav_active');
        lockBody();
    }, false);


    for (let i = 0; i < linkListLink.length; i++) {
        linkListLink[i].addEventListener('click', function() {
            burgerBtn.classList.remove('burger_active');
            linkList.classList.remove('menu-list_active');
            userMenu.classList.remove('userNav_active');
            lockBody();
        }, false);
    };

// Блокировка body при открытом меню
    let body = document.getElementById('body');
    
    function lockBody() {
        let elemActive1 = checkClass(userMenu, 'userNav_active');
        let elemActive2 = checkClass(linkList, 'menu-list_active');
        console.log(elemActive1 + '|' + elemActive2);

        if (elemActive1 == true || elemActive2 == true) {
            body.classList.add('lock');
            console.log('для body добавлен класс lock')
        } else {
            body.classList.remove('lock');
            console.log('для body удален класс lock')
       };
    };

//======================================================

// Добавление ярлыков по имени класса:
    // Ярлык новый продукт:
    function addTapeNew() {
        let tapeNew = document.createElement('div');
        tapeNew.className = 'product__tape-new';
        tapeNew.innerHTML = 'new';

        let products = document.getElementsByClassName('new-product');
        let productsLength = products.length;
      //  console.log('Всего элементов c классом "new-product" на странице: ' + productsLength)
    
        for (let i = 0; i < productsLength; i++) {
            let cloneTape = tapeNew.cloneNode(true); 
            products[i].append(cloneTape);
        };
    };
    addTapeNew();
    
    // Ярлык распродажа:
    function addTapeSale() {
        let saleProductDiv = document.createElement('div');
        saleProductDiv.className = 'product__tape-sale';
        saleProductDiv.innerHTML = 'sale';
        let tape = saleProductDiv.cloneNode(true);

        let products = document.getElementsByClassName('sale-product');
        let productsLength = products.length;
    
        for (let i = 0; i < productsLength; i++) {
            let cloneTape = tape.cloneNode(true); 
            products[i].append(cloneTape);
        };
    };
    addTapeSale();