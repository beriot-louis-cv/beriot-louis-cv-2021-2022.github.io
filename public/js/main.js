(function() {
    const app = {
        init() {
            this.dropdown = document.querySelector('#language-dropdown');
            this.faqItem = document.querySelectorAll('#faq li');
			this.unrollFaqItem();
        },
        submitDropDown() {
            this.dropdown.addEventListener('change', (e) => {
				e.target.form.submit();
			});
        },
        unrollFaqItem() {
            this.faqItem.forEach(el => {
                el.addEventListener('mousedown', (e) => {
                    if (e.target.tagName !== 'P') {
                        let targetP = e.target.children[0];
                        targetP.classList.toggle('unrolled');
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
