const btnPrincipal = document.querySelector('[data-btn="principal"]');

btnPrincipal.addEventListener('click', (e) => {
	e.preventDefault();

	const href = btnPrincipal.getAttribute('href');

	gtag('event', 'btnDinamicoPrincipal', {
		horario_envio: new Date(),
		link: href,
		event_timeout: 5000,
		event_callback: () => {
			location.href = href
		}
	});

});
