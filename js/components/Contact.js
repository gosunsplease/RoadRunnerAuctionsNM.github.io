const Contact = {
  props: {
    contact: { type: Object, required: true },
    company: { type: Object, required: true }
  },
  methods: {
    cardContent(card) {
      if (card.type === 'phone') return this.company.phone;
      if (card.type === 'email') return this.company.email;
      if (card.type === 'address') return this.company.addressLines.join('\n');
      return card.text;
    },
    cardHref(card) {
      if (card.type === 'phone') return this.company.phoneHref;
      if (card.type === 'email') return this.company.emailHref;
      if (card.type === 'hibid') return this.company.hibidUrl;
      return null;
    }
  },
  template: `
    <main>
      <section class="page-hero">
        <div class="eyebrow">{{ contact.eyebrow }}</div>
        <h1 class="page-title">{{ contact.title }}</h1>
        <p class="hero-text">{{ contact.intro }}</p>
      </section>

      <section class="section-pad contact-page">
        <div class="row g-4 align-items-start">
          <div class="col-lg-5">
            <div class="contact-intro-card">
              <h2 class="section-title">{{ contact.sectionTitle }}</h2>
              <p class="muted">{{ contact.text }}</p>
              <div class="d-flex flex-wrap gap-3 mt-4">
                <a class="btn-rr-primary" :href="company.phoneHref">Call Now</a>
                <a class="btn-rr-secondary" :href="company.emailHref">Email Us</a>
              </div>
            </div>
          </div>

          <div class="col-lg-7">
            <div class="row g-3">
              <div class="col-md-6" v-for="card in contact.cards" :key="card.title">
                <div class="contact-card h-100">
                  <h3>{{ card.title }}</h3>
                  <p class="muted mb-0" v-if="card.type === 'address'">
                    <span v-for="line in company.addressLines" :key="line">{{ line }}<br /></span>
                  </p>
                  <p class="muted mb-0" v-else-if="card.type === 'phone' || card.type === 'email'">
                    <a :href="cardHref(card)">{{ cardContent(card) }}</a>
                  </p>
                  <template v-else-if="card.type === 'hibid'">
                    <p class="muted mb-3">{{ card.text }}</p>
                    <a class="btn-rr-secondary" :href="cardHref(card)" target="_blank" rel="noopener">{{ card.buttonLabel }}</a>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="contact-next-steps mt-5">
          <div class="row g-4 align-items-center">
            <div class="col-lg-5">
              <div class="eyebrow">Next Steps</div>
              <h2 class="section-title mb-2">Ready to get started?</h2>
              <p class="muted mb-0">
                Buyers can view current auctions online. Sellers can contact Roadrunner Auctions to discuss items, collections, equipment, or estate property.
              </p>
            </div>
            <div class="col-lg-7">
              <div class="row g-3">
                <div class="col-md-6">
                  <div class="next-step-card">
                    <h3>For Buyers</h3>
                    <p>Browse active auction listings and bid online through HiBid.</p>
                    <a class="btn-rr-primary" :href="company.hibidUrl" target="_blank" rel="noopener">View Current Auctions</a>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="next-step-card">
                    <h3>For Sellers</h3>
                    <p>Contact Roadrunner Auctions about selling items through auction.</p>
                    <a class="btn-rr-secondary" :href="company.emailHref">Contact Roadrunner</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  `
};
