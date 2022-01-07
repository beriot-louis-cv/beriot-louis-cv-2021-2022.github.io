(function() {
    const app = {
        init() {
            this.dropdown = document.querySelector('#language-dropdown');
            this.faqItem = document.querySelectorAll('#faq li');

			this.submitLanguage();
			this.unrollFaqItem();
        },
        submitLanguage() {
            // submit form on dropdown change
            this.dropdown.addEventListener('change', (e) => {
				e.target.form.submit();
			});
        },
        unrollFaqItem() {
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
        }
    }
    app.init();
}
)();
