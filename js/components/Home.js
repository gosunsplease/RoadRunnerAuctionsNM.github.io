const Home = {
  methods: {
    enabledAppointmentLinks() {
      return (this.home.appointmentSection?.links || []).filter(link => link.enabled);
    }
  },
  props: {
    home: { type: Object, required: true },
    company: { type: Object, required: true }
  },
  template: `
    <main id="home">
      <section class="hero">
        <div class="row g-4 align-items-center">
          <div class="col-lg-7">
            <div class="eyebrow">{{ home.eyebrow }}</div>
            <h1 class="hero-title">{{ home.title }}</h1>
            <p class="hero-text" v-for="paragraph in home.intro" :key="paragraph">{{ paragraph }}</p>
            <div class="d-flex flex-wrap gap-3 mt-4">
              <a
                v-for="button in home.buttons"
                :key="button.label"
                :class="button.style === 'primary' ? 'btn-rr-primary' : 'btn-rr-secondary'"
                :href="button.href"
                :target="button.external ? '_blank' : null"
                :rel="button.external ? 'noopener' : null"
              >{{ button.label }}</a>
            </div>
          </div>

          <div class="col-lg-5">
            <div class="hero-logo-card text-center">
              <img :src="company.logo" :alt="company.name + ' logo'" />
              <div class="quick-panel text-start">
                <strong>{{ home.quickPanel.title }}</strong>
                <p>{{ home.quickPanel.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section-pad appointment-section border-bottom" v-if="home.appointmentSection && enabledAppointmentLinks().length">
        <div class="text-center mx-auto" style="max-width: 860px;">
          <div class="eyebrow">Pickup Scheduling</div>
          <h2 class="section-title">{{ home.appointmentSection.title }}</h2>
          <p class="muted mb-2">{{ home.appointmentSection.subtitle }}</p>
          <p class="pickup-location mb-4">
            <strong>{{ home.appointmentSection.locationLabel }}:</strong>
            <span v-for="line in company.addressLines" :key="line">{{ line }}<span v-if="line !== company.addressLines[company.addressLines.length - 1]">, </span></span>
          </p>
          <div class="appointment-links">
            <a
              v-for="link in enabledAppointmentLinks()"
              :key="link.label + link.href"
              class="appointment-link"
              :href="link.href || '#'"
              :target="link.external ? '_blank' : null"
              :rel="link.external ? 'noopener' : null"
            >{{ link.label }}</a>
          </div>
        </div>
      </section>


      <section class="section-pad section-muted border-bottom">
        <div class="text-center mx-auto mb-4" style="max-width: 760px;">
          <h2 class="section-title">{{ home.servicesIntro.title }}</h2>
          <p class="muted mb-0">{{ home.servicesIntro.text }}</p>
        </div>
        <div class="row g-3">
          <div class="col-md-4" v-for="card in home.featureCards" :key="card.title">
            <div class="info-card"><h3>{{ card.title }}</h3><p class="muted mb-0">{{ card.text }}</p></div>
          </div>
        </div>
      </section>

      <section class="section-pad">
        <div class="row g-4 align-items-center">
          <div class="col-lg-6">
            <h2 class="section-title">{{ home.sellerSection.title }}</h2>
            <p class="muted" v-for="paragraph in home.sellerSection.paragraphs" :key="paragraph">{{ paragraph }}</p>
          </div>
          <div class="col-lg-6">
            <div class="seller-box">
              <h3>{{ home.sellerSection.boxTitle }}</h3>
              <ul class="clean-list mb-4">
                <li v-for="item in home.sellerSection.items" :key="item">{{ item }}</li>
              </ul>
              <a class="btn-rr-secondary" :href="home.sellerSection.button.href">{{ home.sellerSection.button.label }}</a>
            </div>
          </div>
        </div>
      </section>

      <section class="section-pad section-muted border-top border-bottom">
        <div class="callout d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3">
          <div>
            <h2 class="h3 fw-bold mb-2">{{ home.callout.title }}</h2>
            <p class="mb-0">{{ home.callout.text }}</p>
          </div>
          <a class="btn-rr-primary bg-white border-white shadow-none" :href="home.callout.button.href" target="_blank" rel="noopener">{{ home.callout.button.label }}</a>
        </div>
      </section>
    </main>
  `
};
