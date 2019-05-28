// IIFE
(function (window) {
    // code here....

    // new function
    function myLibrary() {
        let myLibrary = {
            _start: slideshow,
            _carouselItems: [],
            _slideTime: 4000
        }

        // new slideshow function
        function slideshow(selector) {
            const container = document.querySelector(selector);

            let child = container.children;

            let _carouselItems = [];
            for (let i = 0; i < child.length; i++) {
                _carouselItems[i] = child[i];
            }

            myLibrary._carouselItems = _carouselItems;

            container.style.backgroundImage = `url(${_carouselItems[0].src})`;
            let next = 1;
            setInterval(() => {
                if (next >= _carouselItems.length) {
                    next = 1;
                    _carouselItems.map(images => {
                        images.classList.remove("active");
                    })
                } else {
                    next = next;
                    _carouselItems[next].classList.add("active");
                    next++;
                    console.log(next);
                }
            }, myLibrary._slideTime);

        }
        return myLibrary;
    }

    // new window property
    if (typeof window.GlobalLibaryName === "undefined") {
        window.GlobalLibaryName = myLibrary();
    }
})(window);

export default GlobalLibaryName;