document.addEventListener("DOMContentLoaded", () => {
    const faqCards = document.querySelectorAll(".faq-card");

    faqCards.forEach((card) => {
        card.addEventListener("click", () => {
            // Remove a classe 'active' de todos os outros cards
            faqCards.forEach((otherCard) => {
                if (otherCard !== card) {
                    otherCard.classList.remove("active");
                }
            });

            // Alterna a classe 'active' no card clicado
            card.classList.toggle("active");
        });
    });
});
