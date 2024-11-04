const aside = document.querySelector('aside');

const menuOpenButton = document.getElementById('menu-open-button');
const menuCloseButton = document.getElementById('menu-close-button');

if (menuOpenButton) {
    menuOpenButton.addEventListener('click', function () {
        if (window.innerWidth > 800) {
            if (aside.classList.contains('hide'))
                aside.classList.remove('hide');
            else aside.classList.add('hide');
        }
        else {
            document.querySelector('.overlay').classList.add('active');
            document.querySelector('aside .menu-btn').style.display = "flex";
            aside.style.left = "0";
        }
    });
}

if (menuCloseButton) {
    menuCloseButton.addEventListener('click', function () {
        document.querySelector('.overlay').classList.remove('active');
        document.querySelector('aside .menu-btn').style.display = "none";
        aside.style.left = "-100%";
    });
}

window.addEventListener('load', function () {
    const editProducts = this.document.querySelectorAll('table img.edit');

    if (editProducts) {
        this.document.querySelector('.popup.update-item .close').addEventListener('click', function () {
            document.querySelector('.popup.update-item').classList.remove('active');
        });

        editProducts.forEach(edit => {
            edit.addEventListener('click', function (e) {
                document.querySelector('.popup.update-item').classList.add('active');
            });
        });

        const deleteProducts = this.document.querySelectorAll('table img.delete');

    if (deleteProducts) {
        this.document.querySelector('.popup.delete-item .close').addEventListener('click', function () {
            document.querySelector('.popup.delete-item').classList.remove('active');
        });

        deleteProducts.forEach(del => {
            del.addEventListener('click', function (e) {
                document.querySelector('.popup.delete-item').classList.add('active');
            });
        });
    }
    }
});