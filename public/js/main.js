(function() {
    const app = {
        init() {
            this.dropdown = document.querySelector('#language-dropdown');
			this.submitDropDown();
        },
        submitDropDown() {
            this.dropdown.addEventListener('change', (e) => {
				e.target.form.submit();
			});
        }
    }
    app.init();
}
)();
