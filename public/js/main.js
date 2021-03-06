(function() {
    const app = {
        init() {
            this.dropdown = document.querySelector('#language-dropdown');
            this.faqItem = document.querySelectorAll('#faq li');
            this.burgerMenuButton = document.querySelector('#nav .burger-menu');
            this.burgerMenuContent = document.querySelector('#nav ul');

            this.getQuery();
            this.changeLangFormSelected();
			this.submitLanguage();
			this.unrollFaqItem();
			this.unrollBurgerMenu();
        },
        
        // get url query parameters
        getQuery() 
        {
            const params = new URLSearchParams(window.location.search);
            this.language = params.get("language");
        },
        
        // change the default selection of the language dropdown
        changeLangFormSelected()
        {
            this.dropdownToSelect = document.querySelector(`#language-dropdown option[value="${this.language ?? 'en'}"]`);
            this.dropdownToSelect.setAttribute('selected', '');
        },

        // submit form on dropdown change
        submitLanguage()
        {
            this.dropdown.addEventListener('change', (e) => {
				e.target.form.submit();
			});
        },

        // set unroll capabilities for the faq section
        unrollFaqItem()
        {
            this.faqItem.forEach(el => {
                // sets height to 0 in js so the content can still be read without
                el.children[1].style.height = '0';

                // unroll on click only on the li item
                el.addEventListener('mousedown', (e) => {
                    if (e.target.tagName === 'DIV') {
                        e.target.nextSibling.classList.toggle('unrolled');
                    } else {
                        return
                    }
                })
            })
        },

        // set burger menu capabilities to unroll
        unrollBurgerMenu()
        {
            this.burgerMenuButton.addEventListener('click', () => {
                this.burgerMenuContent.classList.toggle('opened');
            })
        }
    }
    app.init();
}
)();
