const footerYear = document.querySelector('.footer-year');

const currentYear = () => {
	const year = new Date().getFullYear();
	footerYear.textContent = year;
};

currentYear();
