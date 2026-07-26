const { createApp } = Vue;

createApp({
  components: {
    NavBar,
    Home,
    About,
    Services,
    HowItWorks,
    Contact,
    NotFound,
    SiteFooter
  },
  data() {
    return {
      route: window.location.hash || '#/',
      siteData
    };
  },
  computed: {
    cleanRoute() {
      return this.route.replace('#', '').replace(/\/$/, '') || '/';
    },
    currentPage() {
      const pages = {
        '/': 'Home',
        '/about': 'About',
        '/services': 'Services',
        '/how-it-works': 'HowItWorks',
        '/contact': 'Contact'
      };
      return pages[this.cleanRoute] || 'NotFound';
    },
    pageMeta() {
      const metaByPage = {
        '/': {
          title: 'Roadrunner Auctions | Online Auctions Based in Albuquerque, NM',
          description: 'Roadrunner Auctions is based in Albuquerque, New Mexico, offering professional online auctions with buyers across the United States and Canada. Browse current auctions, register to bid, or learn about selling through auction.'
        },
        '/about': {
          title: 'About Roadrunner Auctions | Online Auction Company',
          description: 'Learn more about Roadrunner Auctions, an online auction company based in Albuquerque, New Mexico, connecting sellers with buyers across the United States and Canada.'
        },
        '/services': {
          title: 'Auction Services | Roadrunner Auctions',
          description: 'View auction services and online auction information from Roadrunner Auctions, including current auctions, estate auctions, consignments, and pickup information.'
        },
        '/how-it-works': {
          title: 'How It Works | Roadrunner Auctions',
          description: 'Learn how Roadrunner Auctions works for bidders and sellers, including registration, online bidding, auction terms, payment, and pickup information.'
        },
        '/contact': {
          title: 'Contact Roadrunner Auctions | Online Auctions Based in Albuquerque',
          description: 'Contact Roadrunner Auctions with questions about current auctions, bidding, pickup, shipping, consignments, or estate auction services.'
        }
      };
      return metaByPage[this.cleanRoute] || {
        title: 'Roadrunner Auctions',
        description: 'Roadrunner Auctions provides online auction services based in Albuquerque, New Mexico.'
      };
    },
    currentPageProps() {
      const propsByPage = {
        Home: { home: this.siteData.home, company: this.siteData.company },
        About: { about: this.siteData.about },
        Services: { services: this.siteData.services },
        HowItWorks: { howItWorks: this.siteData.howItWorks },
        Contact: { contact: this.siteData.contact, company: this.siteData.company },
        NotFound: {}
      };
      return propsByPage[this.currentPage] || {};
    }
  },
  mounted() {
    this.updateMeta();
    window.addEventListener('hashchange', this.updateRoute);
  },
  beforeUnmount() {
    window.removeEventListener('hashchange', this.updateRoute);
  },
  methods: {
    updateRoute() {
      this.route = window.location.hash || '#/';
      this.updateMeta();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    updateMeta() {
      document.title = this.pageMeta.title;
      const description = document.querySelector('meta[name="description"]');
      if (description) description.setAttribute('content', this.pageMeta.description);

      const ogTitle = document.querySelector('meta[property="og:title"]');
      const ogDescription = document.querySelector('meta[property="og:description"]');
      const twitterTitle = document.querySelector('meta[name="twitter:title"]');
      const twitterDescription = document.querySelector('meta[name="twitter:description"]');
      if (ogTitle) ogTitle.setAttribute('content', this.pageMeta.title);
      if (ogDescription) ogDescription.setAttribute('content', this.pageMeta.description);
      if (twitterTitle) twitterTitle.setAttribute('content', this.pageMeta.title);
      if (twitterDescription) twitterDescription.setAttribute('content', this.pageMeta.description);
    }
  },
  template: `
    <div class="site-shell">
      <NavBar :company="siteData.company" :navigation="siteData.navigation" />
      <component :is="currentPage" v-bind="currentPageProps" />
      <SiteFooter :company="siteData.company" :footer="siteData.footer" />
    </div>
  `
}).mount('#app');
