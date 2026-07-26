const NavBar = {
  props: {
    company: { type: Object, required: true },
    navigation: { type: Array, required: true }
  },
  template: `
    <header>
      <div class="top-strip d-flex flex-column flex-md-row justify-content-between gap-1">
        <span>{{ company.tagline }}</span>
        <span><a :href="company.phoneHref" class="top-link">{{ company.phone }}</a></span>
      </div>

      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid px-0">
          <a class="navbar-brand d-flex align-items-center gap-3" href="#/" :aria-label="company.name + ' home'">
            <img :src="company.logo" :alt="company.name + ' logo'" class="brand-logo" />
            <span>
              <span class="brand-title">{{ company.name }}</span>
              <span class="brand-subtitle">{{ company.locationShort }}</span>
            </span>
          </a>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-end" id="mainNav">
            <ul class="navbar-nav align-items-lg-center gap-lg-1 mt-3 mt-lg-0">
              <li class="nav-item" v-for="link in navigation" :key="link.href">
                <a class="nav-link" :href="link.href">{{ link.label }}</a>
              </li>
              <li class="nav-item mt-2 mt-lg-0 ms-lg-2">
                <a class="btn-rr-primary" :href="company.hibidUrl" target="_blank" rel="noopener">View Auctions</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  `
};
