const SiteFooter = {
  props: {
    company: { type: Object, required: true },
    footer: { type: Object, required: true }
  },
  template: `
    <footer class="footer">
      <div class="row g-4 align-items-center">
        <div class="col-md-5 d-flex align-items-center gap-3">
          <img :src="company.logo" :alt="company.name + ' logo'" class="footer-logo" />
          <div>
            <h2 class="h5 fw-bold mb-1">{{ company.name }}</h2>
            <p class="mb-0 text-white-50">{{ company.locationShort }}</p>
          </div>
        </div>
        <div class="col-md-4">
          <strong>Quick Links</strong>
          <div class="d-flex flex-column mt-2 gap-1">
            <a
              v-for="link in footer.quickLinks"
              :key="link.label"
              :href="link.href"
              :target="link.external ? '_blank' : null"
              :rel="link.external ? 'noopener' : null"
            >{{ link.label }}</a>
          </div>
        </div>
        <div class="col-md-3">
          <strong>Contact</strong>
          <p class="text-white-50 mt-2 mb-0">
            <span v-for="line in company.addressLines" :key="line">{{ line }}<br /></span>
            {{ company.phone }}<br />{{ company.email }}
          </p>
        </div>
      </div>
    </footer>
  `
};
