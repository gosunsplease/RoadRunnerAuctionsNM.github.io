const appointmentLinks = [
  // ===========================================================
  // OWNER QUICK EDITS
  // Edit labels and links below. Add or remove buttons as needed.
  // ===========================================================
  { enabled: true, label: "Wednesday August 5th Buyer Appointment Schedule", href: "https://www.signupgenius.com/go/9040449A9AF2EA6FB6-64976186-wednesday#/", external: true },
  { enabled: true, label: "Thursday August 6th Buyer Appointment Schedule", href: "https://www.signupgenius.com/go/9040449A9AF2EA6FB6-64976190-thursday#/", external: true }
];

const siteData = {
  company: {
    name: "Roadrunner Auctions",
    tagline: "Online auctions based in Albuquerque with buyers across the U.S. and Canada",
    locationShort: "Albuquerque, New Mexico",
    serviceArea: "Online auctions with buyers across the U.S. and Canada",
    phone: "505-717-1839",
    phoneHref: "tel:5057171839",
    email: "roadrunnerauctionsnm@gmail.com",
    emailHref: "mailto:roadrunnerauctionsnm@gmail.com",
    addressLines: ["2845 Girard Blvd NE", "Albuquerque, NM 87107"],
    logo: "assets/roadrunner-logo.png",
    hibidUrl: "https://roadrunnerauctions.hibid.com/"
  },

  navigation: [
    { label: "Home", href: "#/" },
    { label: "About", href: "#/about" },
    { label: "Services", href: "#/services" },
    { label: "How It Works", href: "#/how-it-works" },
    { label: "Contact", href: "#/contact" }
  ],

  home: {
    eyebrow: "Roadrunner Auctions",
    title: "Professional Online Auctions for Buyers & Sellers",
    intro: [
      "Serving buyers from across the United States, Canada, and beyond. Based in Albuquerque, New Mexico, Roadrunner Auctions connects buyers and sellers through professionally managed online auctions.",
      "Whether you are looking to bid on unique items or sell a collection, estate, or business assets, we are here to make the auction process simple and straightforward."
    ],
    buttons: [
      { label: "View Current Auctions", href: "https://roadrunnerauctions.hibid.com/", external: true, style: "primary" },
      { label: "For Sellers", href: "#/services", style: "secondary" }
    ],
    appointmentSection: {
      title: "Auction Pickup Appointments",
      subtitle: "Won an item? Use the auction-specific links below to schedule your pickup appointment when pickup scheduling is available.",
      locationLabel: "Pickup Location",
      links: appointmentLinks
    },
    quickPanel: {
      title: "Looking for auction listings?",
      text: "Current auctions, lots, bidding, and invoices are handled through HiBid."
    },
    servicesIntro: {
      title: "Auction Information for Buyers and Sellers",
      text: "Buyers can browse current auctions through HiBid, while sellers can contact Roadrunner Auctions about consignments, estates, collections, equipment, and other auction needs."
    },
    featureCards: [
      { title: "Buy Online", text: "Browse current auctions, register, and place bids through HiBid." },
      { title: "Sell Items", text: "Contact Roadrunner Auctions about items, collections, equipment, or estate property." },
      { title: "Auction Pickup", text: "Winning bidders receive pickup details and appointment information after the auction closes." }
    ],
    sellerSection: {
      title: "Selling items or handling an estate?",
      paragraphs: [
        "Roadrunner Auctions works with sellers, consignors, and estate representatives interested in offering items through online auction.",
        "Contact Roadrunner Auctions to discuss your items and learn more about available auction options."
      ],
      boxTitle: "Auction Selling Options",
      items: ["Estate auctions", "Consignments", "Collections", "Equipment and business assets"],
      button: { label: "View Services", href: "#/services" }
    },
    callout: {
      title: "Ready to view current auctions?",
      text: "Current auction listings and online bidding are available through Roadrunner Auctions on HiBid.",
      button: { label: "View Auctions", href: "https://roadrunnerauctions.hibid.com/", external: true }
    }
  },

  about: {
    eyebrow: "About",
    title: "About Roadrunner Auctions.",
    intro: "Roadrunner Auctions provides online auction services for buyers, sellers, consignors, and estate representatives from its Albuquerque, New Mexico location.",
    sectionTitle: "Connecting buyers and sellers through online auctions",
    paragraphs: [
      "Roadrunner Auctions connects sellers with bidders through online auctions. Buyers can view current auctions through HiBid, while sellers can contact Roadrunner Auctions directly to discuss auction options.",
      "The focus is straightforward: current auction access for bidders, clear contact information for sellers, and online auction information for buyers near and far."
    ],
    highlight: {
      title: "Based in Albuquerque, bidding online",
      text: "Online bidding connects Roadrunner Auctions with buyers across the United States, Canada, and sometimes beyond, while pickup and seller conversations stay connected to the Albuquerque location."
    },
    cards: [
      { title: "For Buyers", text: "Browse current auctions, register online, place bids through HiBid, and follow auction-specific pickup instructions after closing." },
      { title: "For Sellers", text: "Ask about selling items, collections, equipment, or estate property through an online auction format." },
      { title: "For Estates", text: "Contact Roadrunner Auctions to discuss estate auction needs and available next steps." }
    ]
  },

  services: {
    eyebrow: "Services",
    title: "Auction services and online auction information.",
    intro: "Roadrunner Auctions lists current auctions through HiBid and provides auction information for buyers, sellers, and estate representatives.",
    cards: [
      { title: "Current Auctions", text: "Browse active auction listings, registration details, bidding, and lot information through HiBid.", linkLabel: "View HiBid", href: "https://roadrunnerauctions.hibid.com/", external: true },
      { title: "Selling Through Auction", text: "Contact Roadrunner Auctions to discuss items you may want to sell through an online auction.", linkLabel: "Ask About Selling", href: "#/contact" },
      { title: "Estate Auction Questions", text: "Families and estate representatives can reach out to discuss auction-related next steps.", linkLabel: "Contact Us", href: "#/contact" },
      { title: "Pickup Information", text: "Winning bidders receive auction-specific payment and pickup details after an auction closes.", linkLabel: "How It Works", href: "#/how-it-works" }
    ],
    callout: {
      title: "Have items to sell?",
      text: "Contact Roadrunner Auctions to discuss what you have and ask about available next steps.",
      button: { label: "Contact Us", href: "#/contact" }
    }
  },

  howItWorks: {
    eyebrow: "How It Works",
    title: "How bidding and selling work.",
    intro: "Review the basic steps below. Full auction terms and listing-specific instructions should always be reviewed on HiBid.",
    bidderTitle: "For bidders",
    sellerTitle: "For sellers",
    bidderSteps: [
      { title: "View Auctions", text: "Open the Roadrunner Auctions HiBid page to browse current listings." },
      { title: "Register", text: "Create or sign in to your bidding account through HiBid." },
      { title: "Bid Online", text: "Place bids during the auction period and review closing times carefully." },
      { title: "Pay & Pickup", text: "Follow invoice, payment, and pickup instructions after the auction closes. When available, pickup appointment links are posted on the homepage." }
    ],
    sellerSteps: [
      { title: "Contact", text: "Call or email Roadrunner Auctions with basic information about the items you would like to sell." },
      { title: "Discuss Items", text: "Share details about the items, collection, estate property, or equipment." },
      { title: "Plan Auction", text: "Roadrunner Auctions can explain available next steps based on the items and situation." },
      { title: "Go Online", text: "Auction items can be presented to online bidders through HiBid." }
    ],
    faqTitle: "Common Auction Questions",
    faqIntro: "Quick answers for buyers, winning bidders, and people interested in selling through Roadrunner Auctions.",
    faqs: [
      { question: "Where can I view current auctions?", answer: "Current Roadrunner Auctions listings are available through HiBid. Use the View Auctions button to browse active auctions and lots." },
      { question: "How do I register to bid?", answer: "Online bidding is handled through HiBid. Create or sign in to your HiBid account, review the auction terms, and register for the auction before placing bids." },
      { question: "How do I schedule pickup?", answer: "Pickup is by appointment. When scheduling links are available, use the appointment buttons on the homepage and make sure to submit the form after making your selection." },
      { question: "When can I pick up won items?", answer: "Roadrunner Auctions currently lists buyer pickup as Wednesday or Thursday only. Always review the instructions for your specific auction and invoice." },
      { question: "Is there a buyer's premium?", answer: "Yes. Roadrunner Auctions lists a buyer's premium on won items, and auction descriptions may include auction-specific premium details. Review each auction's terms before bidding." },
      { question: "Can items be shipped?", answer: "Shipping information should be checked on each specific auction. Roadrunner Auctions ships to buyers across the United States and Canada, and other locations may be handled depending on the item and auction details." },
      { question: "I'm interested in selling items. How do I get started?", answer: "Email Roadrunner Auctions to request a drop-off appointment. Available drop-off days and times are limited, and you will receive the next available day and time by return email." },
      { question: "How many items can I drop off?", answer: "Roadrunner Auctions lists a maximum of 30 lots per scheduled drop off, and each lot should potentially sell for at least $20." },
      { question: "Does Roadrunner Auctions clean, repair, or lot consignor items?", answer: "No. Consignors arrange their items into lots as they want them sold. Roadrunner Auctions states that they do not lot, clean, or repair items and may reject items found to be in unsalable condition." },
      { question: "Does Roadrunner Auctions offer pickup or delivery service?", answer: "Roadrunner Auctions does not offer pickup or delivery service at this time." },
      { question: "When do consignors get paid?", answer: "Roadrunner Auctions lists payment as ready the next day after the auction closes. Use the scheduler to make an appointment for payment and any unsold items." },
      { question: "I have another question. How can I reach you?", answer: "Call, email, or use the Contact page for auction questions, pickup questions, or seller inquiries." }
    ]
  },


  contact: {
    eyebrow: "Contact",
    title: "Contact Roadrunner Auctions.",
    intro: "Whether you are bidding in an upcoming auction, scheduling a pickup, or interested in selling items, Roadrunner Auctions is here to help.",
    sectionTitle: "Contact information",
    text: "For current auction details, visit HiBid. For pickup, seller, or general questions, call or email Roadrunner Auctions directly.",
    cards: [
      { title: "Phone", type: "phone" },
      { title: "Email", type: "email" },
      { title: "Location", type: "address" },
      { title: "Current Auctions", type: "hibid", text: "Browse active auctions through HiBid from wherever you bid.", buttonLabel: "Open HiBid" }
    ]
  },

  footer: {
    quickLinks: [
      { label: "Current Auctions", href: "https://roadrunnerauctions.hibid.com/", external: true },
      { label: "Buyer Information", href: "#/how-it-works" },
      { label: "Estate Auctions", href: "#/services" },
        { label: "Contact", href: "#/contact" }
    ]
  }
};
