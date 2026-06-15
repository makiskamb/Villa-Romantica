import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "en" | "el";

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "Philosophy",
      rooms: "Suites",
      experience: "Experience",
      dining: "Dining",
      location: "Location",
      contact: "Contact",
      book: "Book",
    },
    hero: {
      heading: "This Must Be The Place",
      subtitle: "A place to slow down, breathe, and experience summer the way it should feel.",
      book: "Reserve Now",
      explore: "Discover",
      discover: "Scroll",
    },
    about: {
      label: "Our Story",
      heading: ["A Place Where Time", "Slows Down"],
      p1: "Perched in a quiet corner of Palio, just a few minutes from Kavala's city center, Villa Romantica is more than a place to stay. It is a space shaped by open sea views, warm light and a sense of calm that unfolds from the very first moment.",
      p2: "Mornings begin slowly, with breakfast in the garden and the sun setting the tone for the day. As time passes, everything finds its rhythm, leading naturally into moments by the sea, where comfort food, selected wines and summer cocktails are enjoyed under a breathtaking view and the steady sound of the waves.",
      quote: '"The kind of place that quietly makes you think of love.\nExperience it for yourself."',
      stats: [
        { value: "30+", label: "Years" },
        { value: "6", label: "Suites" },
        { value: "10km", label: "From Kavala" },
        { value: "0m", label: "To the Sea" },
      ],
    },
    aboutPage: {
      heroLabel: "Villa Romantica · Palio, Kavala",
      heroHeading: ["About", "Villa Romantica"],
      storyLabel: "Our Story",
      storyHeading: ["A Family-Run Business,", "Over 30 Years of History"],
      storyP1: "Villa Romantica is a family-run business with more than 30 years of history, shaped and cared for by our family, day by day. From the beginning, our goal has always been to offer more than just a place to stay, delivering a refined and immersive summer experience.",
      storyP2: "Over time, the villa has grown through a shared effort, with consistency, attention and a true love for hospitality. Not as something formal or distant, but as something simple, honest and deeply human. There is a quiet, ongoing presence behind everything you experience here.",
      storyQuote: '"Some places simply stay with you."',
      valuesLabel: "What We Believe",
      valuesHeading: "Our Philosophy",
      values: [
        { title: "Hospitality", desc: "Not formal or distant, but simple, honest and deeply human. A quiet, ongoing presence behind everything you experience here, from the way the spaces are maintained to the rhythm of each day." },
        { title: "Connection", desc: "What matters most to us is the connection we build with each guest. The way a stay gradually becomes more familiar, more relaxed, more personal. The kind that doesn't need to be explained, only felt." },
        { title: "Ease", desc: "Our intention is to create a place where you feel comfortable enough to slow down, open up and truly enjoy your time. And when it is time to leave, to feel that you are leaving somewhere that, in some way, feels a little like your own." },
      ],
      placeLabel: "The Place",
      placeHeading: ["Palio,", "Where It All Began"],
      placeP1: "Nestled along the beautiful coastline of Northern Greece, Palio Kavala is a seaside destination that perfectly balances natural beauty, relaxation and accessibility. Located just a few minutes from the center of Kavala, it offers the opportunity to enjoy the tranquility of the sea while remaining close to the city's vibrant atmosphere, history and culture.",
      placeP2: "Known for its crystal-clear waters, picturesque beaches and lush surroundings, Palio has long been one of the area's most beloved summer destinations. Whether you choose to spend your day by the sea, explore nearby beaches, discover local tavernas, or wander through the charming streets of Palio, everything is within easy reach.",
      placeP3: "Set in one of the most privileged spots of the area, Villa Romantica allows you to experience the very best of Palio, combining breathtaking sea views, a relaxed summer atmosphere and the warmth of authentic Greek hospitality.",
      ctaHeading: "Ready to Experience It?",
      ctaButton: "Reserve Your Suite",
    },
    rooms: {
      label: "Rooms & Suites",
      heading: "Where You'll Stay",
      viewRoom: "View Room",
      reserve: "Reserve Your Suite",
      intro: "Each room and suite at Villa Romantica is designed as an independent space, with its own character and atmosphere, offering a sense of privacy and quiet comfort throughout your stay. The design moves effortlessly between vintage references and minimal elegance, creating spaces that feel both timeless and familiar.",
      footerNote: "All rooms include air conditioning, Wi-Fi, and essential amenities. Full Breakfast included in the price.",
      list: [
        {
          name: "Zeus",
          area: "—",
          description: "A spacious suite designed to comfortably accommodate families or small groups, featuring two double beds and a relaxed, functional layout. The space focuses on practicality and ease, offering a straightforward and comfortable stay, with natural light shaping a calm and balanced environment.",
          tag: "Superior Suite",
        },
        {
          name: "Athena",
          area: "—",
          description: "Set in a privileged position within the garden, with views that open towards both greenery and the sea, Athena stands out for its refined simplicity and quiet elegance. The presence of a small, well-equipped kitchenette adds an extra layer of independence and comfort to the stay.",
          tag: "Superior Double Room",
        },
        {
          name: "Artemis",
          area: "—",
          description: "A practical and comfortable space designed for families, featuring two double beds and an easy, functional layout. Artemis offers a straightforward and flexible stay, ideal for those who value simplicity and convenience. A small kitchenette provides the essentials for a more independent and relaxed daily routine.",
          tag: "Family Suite",
        },
        {
          name: "Poseidon",
          area: "—",
          description: "Located in the garden, Poseidon offers a more complete family stay, combining space, comfort and a pleasant connection to its surroundings. With a balcony overlooking both the garden and the sea, it provides a more open and enjoyable atmosphere, while a small kitchenette adds practicality and flexibility.",
          tag: "Garden Family Suite",
        },
        {
          name: "Hera",
          area: "—",
          description: "A simple and comfortable room, offering a balanced and easy stay. The presence of a private balcony adds an extra layer of openness. A reliable and welcoming choice, designed for a relaxed and uncomplicated experience.",
          tag: "Double Room",
        },
        {
          name: "Aphrodite",
          area: "—",
          description: "A simple and functional room, offering a comfortable stay with all the essential elements in place. Ideal for those seeking a more straightforward option, while still enjoying the atmosphere and overall experience of the villa.",
          tag: "Double Room",
        },
      ],
    },
    experience: {
      label: "The Villa Romantica Life",
      heading: ["The Experience", "Unfolds Here"],
      intro: "At Villa Romantica, the experience unfolds gradually, shaped by the rhythm of the summer and the atmosphere of the space.",
      sections: [
        {
          title: "Morning in the Garden",
          desc: "The day begins quietly, with breakfast in the garden and the light setting a natural pace. A moment to ease into the day, without rush, surrounded by calm and simplicity.",
        },
        {
          title: "Daytime by the Beach",
          desc: "As the day develops, everything remains open and flexible. The space invites you to move freely between the sea, your room and the shared areas, allowing time to pass without structure. From midday until late evening, a selection of freshly prepared dishes is available.",
        },
        {
          title: "Lounge Bar & Slow Evenings",
          desc: "As the light softens, the atmosphere shifts into something more intimate. The lounge by the sea becomes a natural point of gathering, where selected wines and specially crafted summer cocktails are enjoyed against an open view and the steady sound of the waves.",
        },
        {
          title: "Special Events & Moments",
          desc: "Throughout the season, selected evenings bring a different energy to the space. Music and atmosphere blend with the natural surroundings, creating moments that feel both vibrant and personal, always in harmony with the character of the villa.",
        },
        {
          title: "A Place to Experience",
          desc: "Described for its atmosphere and simplicity — Villa Romantica is ultimately something that cannot be fully captured in words. It is something you come to experience, in your own way.",
        },
      ],
      amenitiesLabel: "Amenities",
      amenities: [
        { label: "Private Beach", desc: "Sea at your feet, every day." },
        { label: "Breakfast Included", desc: "Fresh, local, made with love." },
        { label: "Beach Bar & Garden", desc: "Sunsets with cocktails in hand." },
        { label: "Free High-Speed WiFi", desc: "Stay connected, effortlessly." },
        { label: "Private Parking", desc: "Secure and complimentary." },
        { label: "Air-Conditioned Suites", desc: "Perfect comfort, all day." },
        { label: "Sunbeds & Umbrellas", desc: "Yours by the water." },
        { label: "Panoramic Terraces", desc: "Views that take your breath away." },
      ],
    },
    dining: {
      heroLabel: "Villa Romantica · Food & Drinks",
      heroHeading: ["Food &", "Drinks"],
      introLabel: "Our Table",
      introHeading: ["Eating Well", "Is Part of the Stay"],
      introP: "At Villa Romantica, food is part of the rhythm of the day. It begins with breakfast in the garden, continues through relaxed lunches by the sea and unfolds naturally into long summer gatherings around the table.",
      breakfastLabel: "Food Experience",
      breakfastHeading: ["A Taste of", "Summer"],
      breakfastP1: "Inspired by Mediterranean flavours and the simplicity of coastal living, our approach focuses on honest ingredients, familiar tastes and moments meant to be shared. Here, meals are never rushed. They become an opportunity to pause, connect and enjoy the company of the people around you.",
      breakfastP2: "Set against the backdrop of the sea and accompanied by the warmth of the summer sun, every meal becomes more than just a part of the day. It becomes part of the memory.",
      breakfastItems: [
        "Fresh Local Eggs",
        "Handmade Bread & Pastries",
        "Kavala Honey & Preserves",
        "Local Cheeses & Olives",
        "Seasonal Fruit",
        "Greek Yogurt",
        "Fresh-Squeezed Juices",
        "Coffee, Tea & Herbal Infusions",
      ],
      barLabel: "Drinks & Cocktails Experience",
      barHeading: ["More Than", "a Drink"],
      barP1: "Some moments call for a fresh coffee under the morning sun. Others for a chilled glass of wine, a refreshing drink or a signature cocktail by the sea.",
      barP2: "At Villa Romantica, our drinks experience is designed to accompany every hour of the day, blending naturally into the atmosphere that surrounds it. From slow mornings and carefree afternoons to golden summer moments overlooking the water, every sip becomes part of the experience.",
      barP3: "Because sometimes the perfect drink is not only about what is in the glass, but where, when and with whom you enjoy it.",
      barItems: [
        { name: "Aegean Sunset", desc: "Our signature — local ouzo, citrus, honey, crushed ice" },
        { name: "Kavala Mule", desc: "Ginger, lime, local spirit, a touch of thyme" },
        { name: "Garden Spritz", desc: "Prosecco, elderflower, fresh cucumber, mint" },
        { name: "Fisherman's Remedy", desc: "Tsipouro, sea salt rim, lemon, cold water" },
      ],
      localLabel: "Local Dining",
      localHeading: ["Beyond the Villa,", "The Shore Awaits"],
      localP1: "Palio is one of Kavala's most beloved suburbs — a coastal neighbourhood where the sea is always close and the pace of life slows down naturally. The waterfront tavernas here have been serving honest, generous food for generations, and the atmosphere in the evenings is exactly what a summer night should feel like.",
      localP2: "Ask our team for the evening's recommendation. We'll tell you where the fishermen eat, where to find the best grilled octopus, and which table to request for the view.",
      ctaHeading: "Every Meal, a Memory",
      ctaButton: "Reserve Your Stay",
    },
    gallery: {
      label: "A Glimpse of Paradise",
      heading: "Gallery",
      cats: {
        All: "All",
        Rooms: "Rooms",
        Beach: "Beach",
        Garden: "Garden",
        Views: "Views",
      },
    },
    testimonials: {
      label: "Guest Stories",
      heading: ["What Our Guests", "Are Saying"],
      quote: '"Authentic hospitality. Timeless memories."',
    },
    location: {
      label: "Find Us",
      heading: ["Palio, Kavala", "Greece"],
      sectionHeading: ["An Aegean", "Coastal Suburb"],
      desc: "Perched on the edge of the Aegean, Villa Romantica is nestled in Palio, the elegant seaside extension of Kavala. Known for its beautiful coastline, panoramic views, and relaxed pace of life, Palio offers the perfect balance between privacy and accessibility. Just minutes from the city centre, yet immersed in the serenity of the sea.",
      details: [
        { label: "Address", value: "Melinas Merkouri 193\nPalio, Kavala, Greece" },
        { label: "From Kavala City", value: "8 km · 10 min drive" },
        { label: "From Kavala Airport", value: "18 km · 25 min drive" },
      ],
      highlights: [
        { label: "Sea at your doorstep", desc: "Private beach access, 0 metres" },
        { label: "Seaside neighbourhood", desc: "Palio, Kavala suburb, 5 min walk" },
        { label: "Historic city nearby", desc: "Kavala old town, 8 km away" },
        { label: "Airport transfer", desc: "Available on request" },
      ],
      mapCaption: "Palio, Kavala, Greece — Sea at your feet",
    },
    contact: {
      label: "Reserve Your Stay",
      heading: ["Let's Make Memories", "Together"],
      sectionHeading: ["Reserve Your", "Stay"],
      desc: "Whether you are ready to book or simply planning your stay, we are here to help you with anything you may need. Feel free to get in touch for availability, information or any special request.",
      callLabel: "Call Us",
      emailLabel: "Email",
      addressLabel: "Address",
      facebookLabel: "Message on Facebook",
      instagramLabel: "Follow on Instagram",
      quote: '"For the best available rates and a more personal approach to your stay, we recommend booking directly with us."',
      form: {
        heading: "Request Availability",
        nameLabel: "Full Name",
        namePlaceholder: "Your name",
        emailLabel: "Email Address",
        emailPlaceholder: "your@email.com",
        checkin: "Check-in",
        checkout: "Check-out",
        guestsLabel: "Guests",
        messageLabel: "Special Requests",
        messagePlaceholder: "Dietary needs, special occasions, questions…",
        submit: "Send Request",
        guest1: "Guest",
        guestsN: "Guests",
      },
      success: {
        heading: "Request Received",
        message: "Thank you for reaching out. We will review your request and get back to you within 24 hours with availability and pricing details.",
      },
    },
    quote: {
      text: "This Must Be The Place",
    },
    footer: {
      tagline: "A place to slow down, breathe,\nand experience summer the way it should feel.",
      exploreLabel: "Explore",
      contactLabel: "Contact",
      facebookLabel: "Message on Facebook",
      links: [
        ["Home", "/"],
        ["Philosophy", "/about"],
        ["Suites", "/rooms"],
        ["Experience & Dining", "/experience"],
        ["Location", "/location"],
        ["Contact", "/contact"],
      ] as [string, string][],
      copyright: `© ${new Date().getFullYear()} Villa Romantica. All rights reserved.`,
      credit: "Designed with love for the Aegean.",
    },
  },
  el: {
    nav: {
      home: "Αρχική",
      about: "Φιλοσοφία",
      rooms: "Σουίτες",
      experience: "Εμπειρία",
      dining: "Φαγητό & Ποτά",
      location: "Τοποθεσία",
      contact: "Επικοινωνία",
      book: "Κράτηση",
    },
    hero: {
      heading: "Αυτός Πρέπει να Είναι ο Τόπος",
      subtitle: "Ένας τόπος για να επιβραδύνεις, να αναπνεύσεις και να ζήσεις το καλοκαίρι όπως πρέπει να νιώθεται.",
      book: "Κράτηση Τώρα",
      explore: "Εξερεύνηση",
      discover: "Κύλιση",
    },
    about: {
      label: "Η Ιστορία μας",
      heading: ["Ένας Τόπος Όπου", "ο Χρόνος Αργεί"],
      p1: "Χτισμένη σε μια ήσυχη γωνιά του Παλιού, μόλις λίγα λεπτά από το κέντρο της Καβάλας, η Villa Romantica είναι κάτι περισσότερο από ένα μέρος για να μείνεις. Είναι ένας χώρος διαμορφωμένος από θέα στη θάλασσα, ζεστό φως και μια αίσθηση ηρεμίας που ξεδιπλώνεται από την πρώτη στιγμή.",
      p2: "Τα πρωινά ξεκινούν αργά, με πρωινό στον κήπο και τον ήλιο να δίνει τον τόνο της μέρας. Καθώς ο χρόνος περνά, όλα βρίσκουν τον ρυθμό τους, οδηγώντας φυσικά σε στιγμές δίπλα στη θάλασσα, όπου comfort φαγητό, επιλεγμένα κρασιά και καλοκαιρινά κοκτέιλ απολαμβάνονται κάτω από μια εκπληκτική θέα και τον σταθερό ήχο των κυμάτων.",
      quote: "«Ένας τόπος που σε κάνει σιωπηλά να σκεφτείς την αγάπη.\nΖήσε το μόνος σου.»",
      stats: [
        { value: "30+", label: "Χρόνια" },
        { value: "6", label: "Σουίτες" },
        { value: "10χλμ", label: "Από Καβάλα" },
        { value: "0μ", label: "Στη Θάλασσα" },
      ],
    },
    aboutPage: {
      heroLabel: "Villa Romantica · Παλιό, Καβάλα",
      heroHeading: ["Σχετικά με", "Villa Romantica"],
      storyLabel: "Η Ιστορία μας",
      storyHeading: ["Μια Οικογενειακή Επιχείρηση,", "Πάνω από 30 Χρόνια Ιστορίας"],
      storyP1: "Η Villa Romantica είναι μια οικογενειακή επιχείρηση με περισσότερα από 30 χρόνια ιστορίας, διαμορφωμένη και φροντισμένη από την οικογένειά μας, μέρα με τη μέρα. Από την αρχή, στόχος μας ήταν να προσφέρουμε κάτι περισσότερο από ένα μέρος για να μείνεις — να δημιουργήσουμε μια πολυδιάστατη καλοκαιρινή εμπειρία, γεμάτη στιγμές άνεσης, χαράς και γνήσιας σύνδεσης.",
      storyP2: "Με τα χρόνια, η βίλα μεγάλωσε μέσα από μια κοινή προσπάθεια, με συνέπεια, προσοχή και αληθινή αγάπη για τη φιλοξενία. Όχι ως κάτι επίσημο ή μακρινό, αλλά ως κάτι απλό, ειλικρινές και βαθιά ανθρώπινο. Υπάρχει μια ήσυχη, διαρκής παρουσία πίσω από κάθε τι που βιώνεις εδώ.",
      storyQuote: "«Μερικοί τόποι απλά μένουν μαζί σου.»",
      valuesLabel: "Τι Πιστεύουμε",
      valuesHeading: "Η Φιλοσοφία μας",
      values: [
        { title: "Φιλοξενία", desc: "Όχι επίσημη ή μακρινή, αλλά απλή, ειλικρινής και βαθιά ανθρώπινη. Μια ήσυχη, διαρκής παρουσία πίσω από κάθε τι που βιώνεις εδώ — από τον τρόπο που διατηρούνται οι χώροι μέχρι τον ρυθμό κάθε μέρας." },
        { title: "Σύνδεση", desc: "Αυτό που μας ενδιαφέρει περισσότερο είναι η σύνδεση που χτίζουμε με κάθε επισκέπτη. Ο τρόπος που μια διαμονή γίνεται σταδιακά πιο οικεία, πιο χαλαρή, πιο προσωπική. Αυτή που δεν χρειάζεται να εξηγηθεί, μόνο να νιωθεί." },
        { title: "Άνεση", desc: "Η πρόθεσή μας είναι απλή: να δημιουργήσουμε έναν τόπο όπου νιώθεις αρκετά άνετα για να επιβραδύνεις, να ανοιχτείς και να απολαύσεις πραγματικά τον χρόνο σου. Και όταν είναι ώρα να φύγεις, να νιώθεις ότι αφήνεις ένα μέρος που, με κάποιο τρόπο, μοιάζει λίγο δικό σου." },
      ],
      placeLabel: "Ο Τόπος",
      placeHeading: ["Παλιό,", "Όπου Ξεκινά Όλα"],
      placeP1: "Το χωριό του Παλιού κάθεται ήσυχα στην αιγαιακή ακτή, μόλις λίγα λεπτά από την Καβάλα. Παλιά ψαράδικα, ασβεστωμένοι τοίχοι, η μυρωδιά αλμύρας και αγριόχορτων — είναι ο τύπος τόπου που σε παρακαλεί να επιβραδύνεις και να μείνεις λίγο παραπάνω.",
      placeP2: "Η Villa Romantica δεν έφερε την πολυτέλεια στο Παλιό. Το Παλιό ήταν πάντα η πολυτέλεια. Απλώς ανοίξαμε μια πόρτα.",
      ctaHeading: "Έτοιμοι να το Βιώσετε;",
      ctaButton: "Κλείστε τη Σουίτα σας",
    },
    rooms: {
      label: "Δωμάτια & Σουίτες",
      heading: "Πού θα Μείνετε",
      viewRoom: "Προβολή",
      reserve: "Κάντε Κράτηση",
      intro: "Κάθε δωμάτιο και σουίτα στη Villa Romantica είναι σχεδιασμένα ως ανεξάρτητος χώρος, με τον δικό του χαρακτήρα και ατμόσφαιρα, προσφέροντας αίσθηση ιδιωτικότητας και ήσυχης άνεσης καθ' όλη τη διάρκεια της διαμονής. Ο σχεδιασμός κινείται αβίαστα μεταξύ vintage αναφορών και minimal κομψότητας.",
      footerNote: "Όλα τα δωμάτια περιλαμβάνουν κλιματισμό, Wi-Fi και βασικές παροχές. Πλήρες πρωινό περιλαμβάνεται στην τιμή.",
      list: [
        {
          name: "Ζευς",
          area: "—",
          description: "Ευρύχωρη σουίτα σχεδιασμένη για άνετη φιλοξενία οικογενειών ή μικρών παρέων, με δύο διπλά κρεβάτια και χαλαρή, λειτουργική διάταξη. Ο χώρος εστιάζει στην πρακτικότητα και την ευκολία, προσφέροντας μια απλή και άνετη διαμονή με φυσικό φως που διαμορφώνει ένα ήρεμο περιβάλλον.",
          tag: "Σουπερίορ Σουίτα",
        },
        {
          name: "Αθηνά",
          area: "—",
          description: "Τοποθετημένη σε προνομιούχο θέση μέσα στον κήπο, με θέα που ανοίγει τόσο στο πράσινο όσο και στη θάλασσα, η Αθηνά ξεχωρίζει για την ευγενική απλότητα και την ήσυχη κομψότητά της. Η παρουσία μιας μικρής, καλά εξοπλισμένης κουζινέτας προσθέτει ανεξαρτησία και άνεση.",
          tag: "Σουπερίορ Διπλό Δωμάτιο",
        },
        {
          name: "Άρτεμις",
          area: "—",
          description: "Πρακτικός και άνετος χώρος σχεδιασμένος για οικογένειες, με δύο διπλά κρεβάτια και εύκολη, λειτουργική διάταξη. Η Άρτεμις προσφέρει μια απλή και ευέλικτη διαμονή, ιδανική για όσους εκτιμούν την απλότητα. Μια μικρή κουζινέτα παρέχει τα απαραίτητα για έναν πιο ανεξάρτητο ρυθμό.",
          tag: "Οικογενειακή Σουίτα",
        },
        {
          name: "Ποσειδών",
          area: "—",
          description: "Βρίσκεται στον κήπο, ο Ποσειδών προσφέρει μια πιο ολοκληρωμένη οικογενειακή διαμονή. Με μπαλκόνι με θέα τόσο στον κήπο όσο και στη θάλασσα, παρέχει μια πιο ανοιχτή ατμόσφαιρα, ενώ η μικρή κουζινέτα προσθέτει πρακτικότητα και ευελιξία για παρατεταμένες ή χαλαρές διαμονές.",
          tag: "Οικογενειακή Σουίτα Κήπου",
        },
        {
          name: "Ήρα",
          area: "—",
          description: "Ένα απλό και άνετο δωμάτιο, που προσφέρει μια ισορροπημένη και εύκολη διαμονή. Η παρουσία ενός ιδιωτικού μπαλκονιού προσθέτει μια επιπλέον αίσθηση ανοιχτοσύνης. Μια αξιόπιστη και φιλόξενη επιλογή για μια χαλαρή και απλή εμπειρία.",
          tag: "Διπλό Δωμάτιο με Μπαλκόνι",
        },
        {
          name: "Αφροδίτη",
          area: "—",
          description: "Ένα απλό και λειτουργικό δωμάτιο, που προσφέρει μια άνετη διαμονή με όλα τα βασικά στοιχεία στη θέση τους. Ιδανικό για όσους αναζητούν μια πιο απλή επιλογή, απολαμβάνοντας παράλληλα την ατμόσφαιρα και τη συνολική εμπειρία της βίλας.",
          tag: "Διπλό Δωμάτιο",
        },
      ],
    },
    experience: {
      label: "Η Ζωή στη Villa Romantica",
      heading: ["Η Εμπειρία", "Ξεδιπλώνεται Εδώ"],
      intro: "Στη Villa Romantica, η εμπειρία ξεδιπλώνεται σταδιακά, διαμορφωμένη από τον ρυθμό του καλοκαιριού και την ατμόσφαιρα του χώρου.",
      sections: [
        {
          title: "Πρωί στον Κήπο",
          desc: "Η μέρα ξεκινά ήσυχα, με πρωινό στον κήπο και το φως να δίνει ένα φυσικό ρυθμό. Μια στιγμή να μπεις στη μέρα αθόρυβα, χωρίς βιασύνη, περιτριγυρισμένος από ηρεμία και απλότητα.",
        },
        {
          title: "Μέρα στην Παραλία",
          desc: "Καθώς η μέρα εξελίσσεται, όλα παραμένουν ανοιχτά και ευέλικτα. Ο χώρος σε προσκαλεί να κινείσαι ελεύθερα μεταξύ της θάλασσας, του δωματίου και των κοινόχρηστων χώρων. Από τα μεσάνυχτα έως αργά το βράδυ, μια επιλογή από φρεσκομαγειρεμένα πιάτα είναι διαθέσιμη.",
        },
        {
          title: "Bar & Ήσυχα Βράδια",
          desc: "Καθώς το φως μαλακώνει, η ατμόσφαιρα μετατρέπεται σε κάτι πιο οικείο. Το lounge δίπλα στη θάλασσα γίνεται φυσικό σημείο συνάντησης, όπου επιλεγμένα κρασιά και καλοκαιρινά κοκτέιλ απολαμβάνονται με θέα και τον σταθερό ήχο των κυμάτων.",
        },
        {
          title: "Ειδικές Βραδιές & Στιγμές",
          desc: "Κατά τη διάρκεια της σεζόν, επιλεγμένες βραδιές φέρνουν μια διαφορετική ενέργεια. Μουσική και ατμόσφαιρα αναμειγνύονται με το φυσικό περιβάλλον, δημιουργώντας στιγμές που νιώθονται ζωντανές και προσωπικές, πάντα σε αρμονία με τον χαρακτήρα της βίλας.",
        },
        {
          title: "Ένας Τόπος να Βιώσεις",
          desc: "Η Villa Romantica είναι τελικά κάτι που δεν μπορεί να αποτυπωθεί πλήρως με λόγια. Είναι κάτι που έρχεσαι να ζήσεις, με τον δικό σου τρόπο.",
        },
      ],
      amenitiesLabel: "Παροχές",
      amenities: [
        { label: "Ιδιωτική Παραλία", desc: "Η θάλασσα στα πόδια σας, κάθε μέρα." },
        { label: "Πρωινό Περιλαμβάνεται", desc: "Φρέσκο, τοπικό, φτιαγμένο με αγάπη." },
        { label: "Beach Bar & Κήπος", desc: "Ηλιοβασιλέματα με κοκτέιλ στο χέρι." },
        { label: "Δωρεάν Υψηλής Ταχύτητας WiFi", desc: "Παραμείνετε συνδεδεμένοι, αβίαστα." },
        { label: "Ιδιωτικό Parking", desc: "Ασφαλές και δωρεάν." },
        { label: "Κλιματισμένες Σουίτες", desc: "Τέλεια άνεση, όλη την ημέρα." },
        { label: "Ξαπλώστρες & Ομπρέλες", desc: "Δικά σας δίπλα στο νερό." },
        { label: "Πανοραμικές Βεράντες", desc: "Θέες που κόβουν την ανάσα." },
      ],
    },
    dining: {
      heroLabel: "Villa Romantica · Φαγητό & Ποτά",
      heroHeading: ["Φαγητό &", "Ποτά"],
      introLabel: "Το Τραπέζι μας",
      introHeading: ["Το Καλό Φαγητό", "Είναι Μέρος της Διαμονής"],
      introP: "Στη Villa Romantica, το φαγητό είναι μέρος του ρυθμού της ημέρας. Ξεκινά με πρωινό στον κήπο, συνεχίζεται με χαλαρά μεσημεριανά δίπλα στη θάλασσα και εκτυλίσσεται φυσικά σε μακριές καλοκαιρινές συγκεντρώσεις γύρω από το τραπέζι.",
      breakfastLabel: "Εμπειρία Φαγητού",
      breakfastHeading: ["Μια Γεύση", "Καλοκαιριού"],
      breakfastP1: "Εμπνευσμένη από τις μεσογειακές γεύσεις και την απλότητα της παράκτιας ζωής, η προσέγγισή μας επικεντρώνεται σε ειλικρινά υλικά, οικείες γεύσεις και στιγμές που δημιουργήθηκαν για να μοιραστούν. Εδώ, τα γεύματα δεν βιάζονται ποτέ. Γίνονται μια ευκαιρία να σταματήσεις, να συνδεθείς και να απολαύσεις την παρέα των ανθρώπων γύρω σου.",
      breakfastP2: "Με φόντο τη θάλασσα και τη ζεστασιά του καλοκαιρινού ήλιου, κάθε γεύμα γίνεται κάτι παραπάνω από μια απλή στιγμή της ημέρας. Γίνεται μέρος της ανάμνησης.",
      breakfastItems: [
        "Φρέσκα Τοπικά Αυγά",
        "Σπιτικό Ψωμί & Γλυκίσματα",
        "Μέλι & Γλυκά Κουταλιού Καβάλας",
        "Τοπικά Τυριά & Ελιές",
        "Εποχιακά Φρούτα",
        "Ελληνικό Γιαούρτι",
        "Φρεσκοστυμμένοι Χυμοί",
        "Καφές, Τσάι & Αφεψήματα",
      ],
      barLabel: "Εμπειρία Ποτών & Κοκτέιλ",
      barHeading: ["Κάτι Παραπάνω", "από ένα Ποτό"],
      barP1: "Κάποιες στιγμές καλούν για έναν φρέσκο καφέ κάτω από τον πρωινό ήλιο. Άλλες για ένα παγωμένο ποτήρι κρασί, ένα δροσιστικό ποτό ή ένα signature κοκτέιλ δίπλα στη θάλασσα.",
      barP2: "Στη Villa Romantica, η εμπειρία ποτών μας σχεδιάστηκε για να συνοδεύει κάθε ώρα της ημέρας, ενσωματώνοντας φυσικά στην ατμόσφαιρα που την περιβάλλει. Από αργά πρωινά και ανέμελα απογεύματα έως χρυσές καλοκαιρινές στιγμές με θέα στο νερό, κάθε γουλιά γίνεται μέρος της εμπειρίας.",
      barP3: "Γιατί μερικές φορές το τέλειο ποτό δεν αφορά μόνο τι υπάρχει στο ποτήρι, αλλά πού, πότε και με ποιον το απολαμβάνεις.",
      barItems: [
        { name: "Aegean Sunset", desc: "Το signature μας — τοπικό ούζο, εσπεριδοειδή, μέλι, τριμμένος πάγος" },
        { name: "Kavala Mule", desc: "Τζίντζερ, lime, τοπικό απόσταγμα, λίγο θυμάρι" },
        { name: "Garden Spritz", desc: "Prosecco, ανθόνερο, φρέσκο αγγούρι, δυόσμος" },
        { name: "Fisherman's Remedy", desc: "Τσίπουρο, χείλος με θαλασσινό αλάτι, λεμόνι, κρύο νερό" },
      ],
      localLabel: "Τοπική Γαστρονομία",
      localHeading: ["Πέρα από τη Βίλα,", "Η Ακτή Περιμένει"],
      localP1: "Το Παλιό είναι μια από τις πιο αγαπημένες συνοικίες της Καβάλας — μια παραθαλάσσια γειτονιά όπου η θάλασσα είναι πάντα κοντά και ο ρυθμός της ζωής επιβραδύνεται φυσικά. Οι ταβέρνες στην παραλία σερβίρουν ειλικρινό, γενναιόδωρο φαγητό για γενιές, και η ατμόσφαιρα τα βράδια είναι ακριβώς αυτό που πρέπει να είναι ένα καλοκαιρινό βράδυ.",
      localP2: "Ρωτήστε την ομάδα μας για τη σύσταση της βραδιάς. Θα σας πούμε πού τρώνε οι ψαράδες, πού να βρείτε το καλύτερο χταπόδι στη σχάρα και ποιο τραπέζι να ζητήσετε για τη θέα.",
      ctaHeading: "Κάθε Γεύμα, μια Ανάμνηση",
      ctaButton: "Κλείστε τη Διαμονή σας",
    },
    gallery: {
      label: "Μια Ματιά στον Παράδεισο",
      heading: "Γκαλερί",
      cats: {
        All: "Όλα",
        Rooms: "Δωμάτια",
        Beach: "Παραλία",
        Garden: "Κήπος",
        Views: "Θέα",
      },
    },
    testimonials: {
      label: "Μαρτυρίες Επισκεπτών",
      heading: ["Τι Λένε οι Επισκέπτες", "μας"],
      quote: "«Αυθεντική φιλοξενία. Αναλλοίωτες αναμνήσεις.»",
    },
    location: {
      label: "Πού να μας Βρείτε",
      heading: ["Παλιό, Καβάλα", "Ελλάδα"],
      sectionHeading: ["Ένα Αιγαιακό", "Παραθαλάσσιο Προάστιο"],
      desc: "Χτισμένη στην άκρη του Αιγαίου, η Villa Romantica είναι φωλιασμένη στο Παλιό, την κομψή παραθαλάσσια επέκταση της Καβάλας. Γνωστό για την όμορφη ακτογραμμή του, τις πανοραμικές θέες και τον χαλαρό ρυθμό ζωής, το Παλιό προσφέρει την τέλεια ισορροπία μεταξύ ιδιωτικότητας και προσβασιμότητας. Λίγα λεπτά από το κέντρο της πόλης, βυθισμένη στη γαλήνη της θάλασσας.",
      details: [
        { label: "Διεύθυνση", value: "Μελίνας Μερκούρη 193\nΠαλιό, Καβάλα, Ελλάδα" },
        { label: "Από το κέντρο Καβάλας", value: "10 χλμ. · 12 λεπτά οδήγηση" },
        { label: "Από το αεροδρόμιο Καβάλας", value: "18 χλμ. · 25 λεπτά οδήγηση" },
      ],
      highlights: [
        { label: "Θάλασσα στην πόρτα σας", desc: "Ιδιωτική πρόσβαση στην παραλία, 0 μέτρα" },
        { label: "Γοητεία τοπικού χωριού", desc: "Ψαραδοχώρι Παλιού, 5 λεπτά περπάτημα" },
        { label: "Ιστορική πόλη κοντά", desc: "Παλιά πόλη Καβάλας, 10 χλμ." },
        { label: "Μεταφορά από αεροδρόμιο", desc: "Διαθέσιμη κατόπιν αιτήματος" },
      ],
      mapCaption: "Παλιό, Καβάλα, Ελλάδα — Η θάλασσα στα πόδια σας",
    },
    contact: {
      label: "Κάντε Κράτηση",
      heading: ["Ας Δημιουργήσουμε", "Αναμνήσεις Μαζί"],
      sectionHeading: ["Κάντε την", "Κράτησή σας"],
      desc: "Είτε είστε έτοιμοι να κλείσετε κράτηση ή απλώς σχεδιάζετε τη διαμονή σας, είμαστε εδώ για να σας βοηθήσουμε με ό,τι χρειαστείτε. Επικοινωνήστε ελεύθερα για διαθεσιμότητα, πληροφορίες ή οποιοδήποτε ειδικό αίτημα.",
      callLabel: "Καλέστε μας",
      emailLabel: "Email",
      addressLabel: "Διεύθυνση",
      facebookLabel: "Μήνυμα στο Facebook",
      instagramLabel: "Ακολουθήστε στο Instagram",
      quote: "«Για τις καλύτερες διαθέσιμες τιμές και μια πιο προσωπική προσέγγιση στη διαμονή σας, συνιστούμε να κάνετε κράτηση απευθείας μαζί μας.»",
      form: {
        heading: "Αίτηση Διαθεσιμότητας",
        nameLabel: "Ονοματεπώνυμο",
        namePlaceholder: "Το όνομά σας",
        emailLabel: "Διεύθυνση Email",
        emailPlaceholder: "your@email.com",
        checkin: "Άφιξη",
        checkout: "Αναχώρηση",
        guestsLabel: "Επισκέπτες",
        messageLabel: "Ειδικές Απαιτήσεις",
        messagePlaceholder: "Διατροφικές ανάγκες, ειδικές περιστάσεις, ερωτήσεις…",
        submit: "Αποστολή Αιτήματος",
        guest1: "Επισκέπτης",
        guestsN: "Επισκέπτες",
      },
      success: {
        heading: "Αίτηση Ελήφθη",
        message: "Ευχαριστούμε που επικοινωνήσατε μαζί μας. Θα εξετάσουμε το αίτημά σας και θα επικοινωνήσουμε μαζί σας εντός 24 ωρών.",
      },
    },
    quote: {
      text: "Αυτός Πρέπει να Είναι ο Τόπος",
    },
    footer: {
      tagline: "Ένας τόπος για να επιβραδύνεις, να αναπνεύσεις\nκαι να ζήσεις το καλοκαίρι όπως πρέπει να νιώθεται.",
      exploreLabel: "Εξερεύνηση",
      contactLabel: "Επικοινωνία",
      facebookLabel: "Μήνυμα στο Facebook",
      links: [
        ["Αρχική", "/"],
        ["Φιλοσοφία", "/about"],
        ["Σουίτες", "/rooms"],
        ["Εμπειρία & Γαστρονομία", "/experience"],
        ["Τοποθεσία", "/location"],
        ["Επικοινωνία", "/contact"],
      ] as [string, string][],
      copyright: `© ${new Date().getFullYear()} Villa Romantica. Όλα τα δικαιώματα διατηρούνται.`,
      credit: "Σχεδιασμένο με αγάπη για το Αιγαίο.",
    },
  },
};

export type Translations = typeof translations.en;

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const stored = localStorage.getItem("vr_lang");
      return (stored === "en" || stored === "el") ? stored : "en";
    } catch {
      return "en";
    }
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("vr_lang", l); } catch {}
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
