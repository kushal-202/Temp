// Contact form handling
export function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    contactForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        console.log('Form submitted:', Object.fromEntries(formData));
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}