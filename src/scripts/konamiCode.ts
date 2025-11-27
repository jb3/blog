/**
 * Konami Code Easter Egg
 * Reveals hidden projects with a FLIP animation when the Konami code is entered
 */
export function initKonamiCode() {
	const konamiCode = [
		"ArrowUp", "ArrowUp",
		"ArrowDown", "ArrowDown",
		"ArrowLeft", "ArrowRight",
		"ArrowLeft", "ArrowRight",
		"KeyB", "KeyA"
	];
	let konamiIndex = 0;

	function animateProjectCards() {
		const projectsHolder = document.querySelector(".projectsHolder") as HTMLElement | null;
		const allCards = document.querySelectorAll(".project-wrapper");
		const hiddenCards = document.querySelectorAll(".hidden-project");
		const isActivating = !document.body.classList.contains("easter-egg-active");

		// Store current positions of visible cards (FIRST)
		const firstPositions = new Map<Element, { top: number; left: number }>();
		allCards.forEach((card) => {
			if (!card.classList.contains("hidden-project") || !isActivating) {
				const rect = card.getBoundingClientRect();
				firstPositions.set(card, { top: rect.top, left: rect.left });
			}
		});

		// Toggle the class
		document.body.classList.toggle("easter-egg-active");

		if (isActivating) {
			void projectsHolder?.offsetHeight;

			// Get new positions (LAST)
			const lastPositions = new Map<Element, { top: number; left: number }>();
			allCards.forEach((card) => {
				const rect = card.getBoundingClientRect();
				lastPositions.set(card, { top: rect.top, left: rect.left });
			});

			// INVERT - apply inverse transform to make cards appear in old position
			allCards.forEach((card) => {
				const first = firstPositions.get(card);
				const last = lastPositions.get(card);

				if (first && last) {
					const deltaX = first.left - last.left;
					const deltaY = first.top - last.top;
					(card as HTMLElement).style.transform = `translate(${deltaX}px, ${deltaY}px)`;
					(card as HTMLElement).style.transition = "none";
				}
			});

			// Prepare hidden cards for animation
			hiddenCards.forEach((card) => {
				(card as HTMLElement).style.opacity = "0";
				(card as HTMLElement).style.transform = "scale(0.8)";
				(card as HTMLElement).style.transition = "none";
			});

			// Force reflow
			void projectsHolder?.offsetHeight;

			// PLAY - animate to final positions
			allCards.forEach((card) => {
				(card as HTMLElement).style.transition = "transform 0.4s ease, opacity 0.4s ease";
				(card as HTMLElement).style.transform = "";
			});

			hiddenCards.forEach((card) => {
				(card as HTMLElement).style.transition = "transform 0.4s ease 0.1s, opacity 0.4s ease 0.1s";
				(card as HTMLElement).style.opacity = "1";
				(card as HTMLElement).style.transform = "scale(1)";
			});
		} else {
			// Hiding animation - fade out hidden cards first
			hiddenCards.forEach((card) => {
				(card as HTMLElement).style.transition = "transform 0.3s ease, opacity 0.3s ease";
				(card as HTMLElement).style.opacity = "0";
				(card as HTMLElement).style.transform = "scale(0.8)";
			});

			// After fade out, hide and animate remaining cards
			setTimeout(() => {
				hiddenCards.forEach((card) => {
					(card as HTMLElement).style.display = "none";
				});

				// Get new positions after hiding
				const lastPositions = new Map<Element, { top: number; left: number }>();
				allCards.forEach((card) => {
					if (!card.classList.contains("hidden-project")) {
						const rect = card.getBoundingClientRect();
						lastPositions.set(card, { top: rect.top, left: rect.left });
					}
				});

				// Apply FLIP to non-hidden cards
				allCards.forEach((card) => {
					if (!card.classList.contains("hidden-project")) {
						const first = firstPositions.get(card);
						const last = lastPositions.get(card);
						if (first && last) {
							const deltaX = first.left - last.left;
							const deltaY = first.top - last.top;
							(card as HTMLElement).style.transform = `translate(${deltaX}px, ${deltaY}px)`;
							(card as HTMLElement).style.transition = "none";
						}
					}
				});

				void projectsHolder?.offsetHeight;

				allCards.forEach((card) => {
					if (!card.classList.contains("hidden-project")) {
						(card as HTMLElement).style.transition = "transform 0.4s ease";
						(card as HTMLElement).style.transform = "";
					}
				});
			}, 300);
		}
	}

	document.addEventListener("keydown", (e) => {
		if (e.code === konamiCode[konamiIndex]) {
			konamiIndex++;
			if (konamiIndex === konamiCode.length) {
				animateProjectCards();
				konamiIndex = 0;
			}
		} else {
			konamiIndex = 0;
		}
	});
}

// Auto-initialize when script is loaded
initKonamiCode();
