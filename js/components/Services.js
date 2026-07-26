const Services = {
  props: {
    services: { type: Object, required: true }
  },
  template: `
    <main>
      <section class="page-hero">
        <div class="eyebrow">{{ services.eyebrow }}</div>
        <h1 class="page-title">{{ services.title }}</h1>
        <p class="hero-text">{{ services.intro }}</p>
      </section>

      <section class="section-pad section-muted border-bottom">
        <div class="row g-3">
          <div class="col-md-6 col-lg-4" v-for="card in services.cards" :key="card.title">
            <div class="service-card">
              <h3>{{ card.title }}</h3>
              <p class="muted">{{ card.text }}</p>
              <a :href="card.href" :target="card.external ? '_blank' : null" :rel="card.external ? 'noopener' : null">{{ card.linkLabel }}</a>
            </div>
          </div>
        </div>
      </section>

      <section class="section-pad">
        <div class="callout d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3">
          <div><h2 class="h3 fw-bold mb-2">{{ services.callout.title }}</h2><p class="mb-0">{{ services.callout.text }}</p></div>
          <a class="btn-rr-primary bg-white border-white shadow-none" :href="services.callout.button.href">{{ services.callout.button.label }}</a>
        </div>
      </section>
    </main>
  `
};
