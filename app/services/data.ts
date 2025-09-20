import { type IconType } from "react-icons";
import {
  FaPlane,
  FaBriefcase,
  FaShip,
  FaGraduationCap,
  FaFutbol,
  FaStar,
  FaHeart,
} from "react-icons/fa";
import site from "@/app/config/site.json";

export type Service = {
  slug: string;
  h1?: string;
  title: string;
  metaTitle: string;
  short: string;
  content: string[];
  icon: IconType;
  image: string;
  overview?: {
    heading: string;
    paragraphs: string[];
  };
  fleet?: {
    heading: string;
    subSections?: {
      title: string;
      text: string;
    }[];
  };
  bookingCTA?: {
    heading: string;
    text: string;
    ctas: { label: string; href: string }[];
  };
  faq?: {
    q: string;
    a: string;
  }[];
  metaDescription?: string;
};

export const services: Service[] = [
  {
    slug: "airport-transportation",
    h1: "Airport Limo Service Houston | Reliable Limo & Luxury Car Rentals",
    title: "Airport Transportation",
    metaTitle:
      "Houston Airport Limo Service | Book Your Stress-Free Ride Today",
    metaDescription:
      "Arrive on time and in comfort at IAH or HOU with 24 Hour Limo For You. Choose luxury sedans, SUVs, or Sprinter vans for your Houston airport transfer. Book your ride now and travel worry-free.",
    short:
      "Reliable, stress-free transfers to and from Houston Intercontinental Airport (IAH) and William P. Hobby Airport (HOU).",
    content: [
      "Our airport transportation service guarantees reliable, stress-free transfers to and from Houston Intercontinental Airport (IAH) and William P. Hobby Airport (HOU). We track flights to ensure timely pickups and drop-offs, so you can count on us for punctual and dependable service.",
      "With a variety of vehicles to choose from, we provide comfort and convenience every time you fly in or out of Houston.",
    ],
    icon: FaPlane,
    image: "/limo-hero.jpg",

    overview: {
      heading: "Airport Transportation | Houston Airport Limo Service",
      paragraphs: [
        "Planning a trip? Whether you're heading to Houston Intercontinental Airport (IAH) or William P. Hobby Airport (HOU) or need a transfer between both airports, 24 Hour Limo For You is your trusted partner for all airport transportation needs.",
        "Our chauffeurs stay up-to-date with real-time flight details, weather conditions, and traffic updates, ensuring your journey is smooth, timely, and stress-free.",
        "We offer a range of vehicles including luxury sedans, SUVs, and Sprinter vans — all designed for comfort and style.",
      ],
    },
    fleet: {
      heading: "Fleet for Airport Transfers",
      subSections: [
        {
          title: "Corporate & Group Airport Transportation",
          text: "For business executives, we offer corporate limo service with sleek vehicles that make a strong impression. For groups, our Sprinter vans and buses keep everyone together in comfort and style.",
        },
        {
          title: "Stress-Free Ride, Every Time",
          text: "When you book with 24 Hour Limo For You, we ensure a smooth ride from start to finish. Our professional chauffeurs will meet you at your designated pickup point with a sign displaying your name, help with your luggage, and get you to your destination in comfort and safety.",
        },
      ],
    },
    bookingCTA: {
      heading: "Book Your Houston Airport Ride Today",
      text: "Get an instant quote and secure your ride today with our easy booking system.",
      ctas: [
        { label: "Request a Quote", href: "/quote" },
        { label: "Book Now", href: "/book" },
      ],
    },
    faq: [
      {
        q: "How do I book an airport ride with 24 Hour Limo For You?",
        a: `You can easily book through our online reservation system or call us at ${site.No}.`,
      },
      {
        q: "Do you offer airport transfers to all Houston airports?",
        a: "Yes, we provide airport limo services to IAH and HOU. Just let us know your pickup location.",
      },
      {
        q: "Are your chauffeurs professional and experienced?",
        a: "Absolutely. All of our chauffeurs are professionally trained and experienced.",
      },
      {
        q: "Can I rent a limo for a few hours?",
        a: "Yes, we offer flexible hourly rentals for your convenience.",
      },
      {
        q: "Do you offer group transportation to the airport?",
        a: "Yes, we provide Sprinter vans and shuttle buses for groups of all sizes.",
      },
    ],
  },
  {
    slug: "corporate-transportation",
    title: "Corporate Transportation",
    h1: "Executive Limo Services in Houston | Corporate Transportation Made Easy",
    metaTitle: "Houston Corporate Limo & Executive Transportation Services",
    metaDescription:
      "Arrive at every business meeting in Houston on time and in style with 24 Hour Limo For You. Choose from luxury sedans, executive vans, or corporate shuttle buses. Book your corporate ride today and impress every client.",
    short:
      "Premium corporate limo services for executives, clients, and groups across Houston. Luxury sedans, SUVs, Sprinters, and shuttle buses for all business needs.",
    content: [
      "At 24 Hour Limo For You, we provide premium corporate limo services throughout Houston, offering reliable and comfortable transportation for business executives, clients, and corporate groups.",
      "Whether you're attending an important meeting, heading to a conference, or need an airport transfer, our fleet of luxury vehicles ensures a first-class experience every time.",
      "Our chauffeurs are always equipped with real-time traffic updates and flight information, allowing us to adjust your route and ensure on-time arrivals.",
      "Luxury sedans, SUVs, and Mercedes Sprinter vans are available for corporate travelers, along with shuttle buses for larger groups.",
    ],
    icon: FaBriefcase,
    image: "/limo-hero.jpg",

    overview: {
      heading:
        "Executive Limo Services in Houston | Corporate Transportation Made Easy",
      paragraphs: [
        "Travel in Style with Houston's Leading Corporate Transportation Provider.",
        "We understand that time is valuable, so we offer seamless and timely services designed to meet the needs of busy professionals.",
        "Our luxury sedans, SUVs, and Mercedes Sprinter vans are the perfect options for corporate travelers.",
        "For larger groups or team travel, the Mercedes Sprinter or 23 Passenger Corporate Shuttle Bus is the ideal choice.",
      ],
    },
    fleet: {
      heading: "Our Fleet for Corporate Transfers",
      subSections: [
        {
          title: "Group & Business Travel Made Easy",
          text: "For individuals or small groups, our luxury sedans and SUVs offer comfort and style. For larger corporate groups, our Mercedes Sprinter vans and shuttle buses provide ample space and convenience.",
        },
        {
          title: "A Smooth and Stress-Free Ride, Every Time",
          text: "Our chauffeurs will meet you at your designated location, assist with luggage, and ensure you travel comfortably and safely.",
        },
      ],
    },
    bookingCTA: {
      heading: "Book Your Corporate Ride Now!",
      text: "Booking your corporate limo service with 24 Hour Limo For You is quick and simple. Use our online booking system to get an instant quote and reserve your ride today.",
      ctas: [
        { label: "Request a Quote", href: "/quote" },
        { label: "Book Now", href: "/book" },
      ],
    },
    faq: [
      {
        q: "How do I book a corporate ride with 24 Hour Limo For You?",
        a: `You can easily book through our online reservation system or by calling us at ${site.No}.`,
      },
      {
        q: "Do you offer corporate transportation services throughout Houston?",
        a: "Yes, we provide corporate limo services to all locations in Houston, including meetings, conferences, events, and airport transfers.",
      },
      {
        q: "Are your chauffeurs professional and experienced?",
        a: "Absolutely. Our chauffeurs are fully trained professionals, dedicated to providing a safe and smooth ride.",
      },
      {
        q: "Can I rent a limo for a few hours for corporate use?",
        a: "Yes, we offer flexible hourly rentals to suit your specific corporate transportation needs.",
      },
      {
        q: "Do you offer group transportation for corporate events?",
        a: "Yes, we provide Sprinter vans and shuttle buses for larger corporate groups. Just let us know the number of passengers, and we will arrange the right vehicle for you.",
      },
    ],
  },
  {
    slug: "wedding-transportation",
    title: "Wedding Transportation",
    h1: " Wedding Limo Service in Houston | Elegant & Reliable Wedding Transportation",
    metaTitle: "Houston Wedding Limousine Service | Arrive in Style",
    metaDescription:
      "Celebrate your big day with 24 Hour Limo For You. Travel across Houston in luxury sedans, stretch limos, or party buses with professional chauffeurs. Book your wedding ride today and make every moment unforgettable.",
    short:
      "Elegant and reliable wedding limo services in Houston. Choose from luxury sedans, stretch limos, Sprinters, or party buses for a memorable big day.",
    content: [
      "At 24 Hour Limo For You, we know that your wedding day is one of the most important days of your life, and we're here to make sure you experience it in style, comfort, and ease.",
      "Whether you're the bride, the groom, or a guest, our wedding limo services add that extra touch of elegance and reliability.",
      "Choose from stretch limousines, luxury sedans, SUVs, or Sprinter vans and shuttle buses for larger bridal parties.",
      "Our chauffeurs ensure a smooth, stress-free experience from pickup to arrival, so you can focus on your celebration.",
    ],
    icon: FaHeart,
    image: "/limo-hero.jpg",

    overview: {
      heading:
        "Wedding Limo Service in Houston | Elegant & Reliable Wedding Transportation",
      paragraphs: [
        "Make Your Special Day Even More Memorable with 24 Hour Limo For You.",
        "We've got a variety of vehicles to choose from, including stretch limousines, luxury sedans, and SUVs—all ready to provide a smooth, comfortable ride.",
        "For larger groups, our Mercedes Sprinter vans and 22 Passenger Shuttle Buses are perfect for getting the entire bridal party together.",
        "Forget the stress of parking, traffic, and timing—our experienced chauffeurs take care of the details so you can relax and enjoy your big day.",
      ],
    },
    fleet: {
      heading: "Our Fleet for Wedding Transportation",
      subSections: [
        {
          title: "Bridal Party & Group Transportation",
          text: "For big groups, our Mercedes Sprinter vans and shuttle buses keep everyone together and traveling comfortably. For the bride and groom or smaller groups, our luxury sedans and stretch limos are perfect for a more intimate ride.",
        },
        {
          title: "The Perfect Ride for Your Perfect Day",
          text: "From the moment we pick you up to the moment you arrive at your destination, our chauffeurs ensure that your ride is seamless, stress-free, and as beautiful as your wedding day.",
        },
      ],
    },
    bookingCTA: {
      heading: "Book Your Wedding Limo Today",
      text: "Let us help make your wedding day unforgettable. Booking is easy with our online system. Whether you're looking for a stretch limo, luxury sedan, or even a party bus, we've got you covered.",
      ctas: [
        { label: "Request a Quote", href: "/quote" },
        { label: "Book Now", href: "/book" },
      ],
    },
    faq: [
      {
        q: "How do I book a wedding limo with 24 Hour Limo For You?",
        a: `Booking is simple through our online reservation system, or you can give us a call at ${site.No} if you need help or have specific requests.`,
      },
      {
        q: "Do you provide transportation for the bridal party?",
        a: "Absolutely! We offer a range of options, from stretch limos to shuttle buses, to make sure your whole bridal party gets to and from the wedding venue together.",
      },
      {
        q: "Can I rent a limo for a few hours for my wedding day?",
        a: "Yes, we offer flexible hourly rentals so you can book exactly what you need for your wedding day.",
      },
      {
        q: "Do you offer a getaway car service?",
        a: "We sure do! We offer luxury getaway car services to help you and your new spouse leave in style after the reception.",
      },
      {
        q: "Are your chauffeurs professional?",
        a: "All of our chauffeurs are professionally trained, experienced, and dedicated to making your wedding transportation as smooth and enjoyable as possible.",
      },
    ],
  },
  {
    slug: "cruise-transportation",
    title: "Cruise Transportation",
    h1: "Cruise Transportation in Houston | Comfortable & Reliable Transfers",
    metaTitle: "Houston Cruise Transportation | Reserve Your Luxury Ride Now",
    metaDescription:
      "Start your cruise vacation hassle-free with 24 Hour Limo For You. Travel from Houston hotels or airports in style with our SUVs, vans, or limousines. Book your cruise transfer today and relax from the first mile.",
    short:
      "Comfortable and reliable limo service for Houston cruise transfers. Luxury sedans, SUVs, Sprinters, and shuttle buses for groups or families.",
    content: [
      "Heading on a cruise? Let 24 Hour Limo For You handle your transportation to and from Houston's cruise terminals so you can start your vacation with ease.",
      "Whether you're setting sail from Galveston or another terminal, our cruise transportation service ensures a smooth and relaxing ride.",
      "We offer a range of vehicles to suit any group size, including luxury sedans, SUVs, and party buses for larger groups.",
      "Our chauffeurs will ensure timely pickups and drop-offs, so you never have to worry about parking or waiting for a taxi.",
    ],
    icon: FaShip,
    image: "/limo-hero.jpg",

    overview: {
      heading:
        "Cruise Transportation in Houston | Comfortable & Reliable Transfers",
      paragraphs: [
        "Start Your Vacation Stress-Free with 24 Hour Limo For You.",
        "Our chauffeurs track your cruise schedule, ensuring timely pickups whether you're catching an early sailing or returning after your trip.",
        "We offer affordable and reliable limo service in Houston for all cruise transportation needs.",
        "From hotels to airports to the terminal, we make every leg of your cruise journey smooth and comfortable.",
      ],
    },
    fleet: {
      heading: "Fleet for Cruise Transfers",
      subSections: [
        {
          title: "Group & Family Cruise Transportation",
          text: "Our Mercedes Sprinter vans and shuttle buses are ideal for larger families or groups. With space for passengers and luggage, everyone can travel together comfortably.",
        },
        {
          title: "Stress-Free Ride, Every Time",
          text: "From pickup to drop-off, our chauffeurs handle all the details. We'll assist with luggage, ensure on-time arrivals, and provide a comfortable ride from start to finish.",
        },
      ],
    },
    bookingCTA: {
      heading: "Book Your Cruise Ride Today",
      text: "Start your cruise with comfort and style. Use our online booking system to get an instant quote and reserve your ride today.",
      ctas: [
        { label: "Request a Quote", href: "/quote" },
        { label: "Book Now", href: "/book" },
      ],
    },
    faq: [
      {
        q: "How do I book a cruise ride with 24 Hour Limo For You?",
        a: `Booking is easy through our online reservation system or by calling ${site.No} if you need assistance.`,
      },
      {
        q: "Do you provide transportation to all cruise terminals in Houston?",
        a: "Yes, we offer transportation to and from Galveston and all Houston-area cruise terminals.",
      },
      {
        q: "Are your chauffeurs experienced and reliable?",
        a: "Absolutely! Our chauffeurs are professionally trained to ensure your ride is smooth, comfortable, and on time.",
      },
      {
        q: "Can I rent a limo for a few hours for cruise transportation?",
        a: "Yes, we offer flexible hourly rentals to accommodate your cruise schedule.",
      },
      {
        q: "Do you offer group transportation to the cruise terminal?",
        a: "Yes, we provide Sprinter vans and shuttle buses for group travel. Let us know how many passengers you'll have, and we'll arrange the perfect vehicle for you.",
      },
    ],
  },
  {
    slug: "prom-homecoming-transportation",
    title: "Prom & Homecoming Transportation",
    h1: "Prom & Homecoming Transportation | Stylish & Safe Rides for School Events",
    metaTitle: "Houston Prom & Homecoming Limo Service | Ride in Style",
    metaDescription:
      "Make your prom or homecoming night unforgettable with 24 Hour Limo For You. Safe, stylish, and fun rides in Houston for students and groups. Reserve your limousine or party bus today and arrive like a star.",
    short:
      "Stylish and safe limo services for prom and homecoming in Houston. Stretch limos, sedans, Sprinters, and party buses for a memorable night.",
    content: [
      "Prom and homecoming are some of the most exciting events of the year, and 24 Hour Limo For You is here to make sure you arrive in style!",
      "Whether you're going solo, with a date, or with a group of friends, our limo services will set the tone for an unforgettable night.",
      "Choose from party buses, luxury sedans, or stretch limos equipped with premium sound systems, LED lighting, and comfortable seating.",
      "Our professional chauffeurs ensure your ride is fun, stylish, and most importantly, safe.",
    ],
    icon: FaStar,
    image: "/limo-hero.jpg",

    overview: {
      heading:
        "Prom & Homecoming Transportation | Stylish & Safe Rides for School Events",
      paragraphs: [
        "Make Your Night Unforgettable with 24 Hour Limo For You.",
        "Our party buses, luxury sedans, and stretch limos come equipped with premium features to keep the fun going before and after your event.",
        "We provide safe, stylish, and reliable transportation so you can enjoy the night without worries.",
        "Let us handle traffic, parking, and timing while you focus on making memories.",
      ],
    },
    fleet: {
      heading: "Our Fleet for Prom & Homecoming Events",
      subSections: [
        {
          title: "Group Transportation for Prom & Homecoming",
          text: "Our party buses and Mercedes Sprinter vans are perfect for large groups of friends, with plenty of space for everyone. For smaller groups or couples, our stretch limos and luxury sedans offer an elegant and private ride.",
        },
        {
          title: "Fun and Safe Rides, Every Time",
          text: "With 24 Hour Limo For You, safety and enjoyment come first. Our chauffeurs are professional, friendly, and dedicated to ensuring your prom or homecoming ride is memorable and stress-free.",
        },
      ],
    },
    bookingCTA: {
      heading: "Book Your Prom or Homecoming Ride Today",
      text: "Let 24 Hour Limo For You make your prom or homecoming night unforgettable. Reserve your party bus or limo now through our easy online booking system.",
      ctas: [
        { label: "Request a Quote", href: "/quote" },
        { label: "Book Now", href: "/book" },
      ],
    },
    faq: [
      {
        q: "How do I book a ride for prom or homecoming?",
        a: `It's easy! Simply book online or give us a call at ${site.No} to secure your ride for your special night.`,
      },
      {
        q: "Can I rent a limo or party bus for a group of friends?",
        a: "Yes, we offer party buses and Sprinter vans for large groups. Let us know how many people are in your group, and we'll arrange the perfect vehicle.",
      },
      {
        q: "How long can I rent the limo for?",
        a: "We offer flexible hourly rentals to match the length of your event. Whether you need a quick ride to and from the event or want to party on the way, we've got you covered.",
      },
      {
        q: "Are your chauffeurs professional and experienced?",
        a: "Yes, all our chauffeurs are professionally trained to ensure you have a smooth, safe, and fun ride. They're also great at creating a fun atmosphere for prom and homecoming rides.",
      },
      {
        q: "Is there enough space for my friends?",
        a: "Our party buses and Sprinter vans can accommodate larger groups, so no one gets left out. If you're traveling with a smaller group, our stretch limos and luxury sedans offer a more intimate ride.",
      },
    ],
  },
  {
    slug: "sporting-event-transportation",
    title: "Sporting Event Transportation",
    h1: "Sporting Event Transportation | Travel in Comfort to Your Favorite Games",
    metaTitle: "Houston Sports Event Transportation | Get There On Time",
    metaDescription:
      "Cheer your team without worrying about parking or traffic. Travel in Houston with 24 Hour Limo For You in luxury SUVs, limousines, or shuttle buses. Book your game day ride now and enjoy every moment stress-free.",
    short:
      "Reliable limo service for Houston sporting events. Luxury sedans, SUVs, stretch limos, Sprinters, and party buses for stress-free game day travel.",
    content: [
      "Whether you're heading to a Houston Astros game, a Rockets match, or any other major sporting event, 24 Hour Limo For You provides comfortable and reliable transportation so you can focus on enjoying the game.",
      "Forget about the hassle of parking or traffic—let us handle the transportation while you enjoy the excitement.",
      "We offer a wide range of vehicles including luxury sedans, SUVs, stretch limos, and party buses to match your group size and preferences.",
      "Our chauffeurs know the best routes and ensure you arrive on time, so you never miss the first pitch or opening tip-off.",
    ],
    icon: FaFutbol,
    image: "/limo-hero.jpg",

    overview: {
      heading:
        "Sporting Event Transportation | Travel in Comfort to Your Favorite Games",
      paragraphs: [
        "Get to the Game in Style with 24 Hour Limo For You.",
        "We specialize in sporting event transportation, offering prompt, reliable, and fun rides that make your game day experience better.",
        "Avoid traffic and parking hassles with our professional chauffeurs who handle everything for you.",
        "From solo travelers to large groups, our fleet ensures you arrive on time, in comfort, and ready to cheer.",
      ],
    },
    fleet: {
      heading: "Our Fleet for Sporting Events",
      subSections: [
        {
          title: "Group & Individual Transportation for Sporting Events",
          text: "For solo or smaller groups, our luxury sedans and SUVs provide private and comfortable travel. For larger groups of friends, our Sprinter vans and party buses ensure everyone can ride together in style.",
        },
        {
          title: "Stress-Free Game Day Travel",
          text: "With 24 Hour Limo For You, you get more than just a ride—you get an experience. From door-to-door service to timely drop-offs, our chauffeurs handle the details while you enjoy the game.",
        },
      ],
    },
    bookingCTA: {
      heading: "Book Your Sporting Event Ride Today",
      text: "Don't miss out on the fun—book your sporting event transportation today! Use our online booking system to get an instant quote and secure your ride.",
      ctas: [
        { label: "Request a Quote", href: "/quote" },
        { label: "Book Now", href: "/book" },
      ],
    },
    faq: [
      {
        q: "How do I book a ride for a sporting event?",
        a: `Booking is easy! You can book online using our reservation system or call us at ${site.No} for assistance.`,
      },
      {
        q: "Do you provide transportation to all major sporting events in Houston?",
        a: "Yes, we offer transportation to all major events, including games for the Houston Astros, Rockets, Texans, and more.",
      },
      {
        q: "Do you offer group transportation for sporting events?",
        a: "Yes, we provide Sprinter vans and party buses for groups, ensuring everyone can travel together comfortably.",
      },
      {
        q: "How long can I rent the limo for?",
        a: "We offer flexible hourly rentals to accommodate the length of your event, so you can book for as long as you need.",
      },
      {
        q: "Are your chauffeurs experienced with sporting event transportation?",
        a: "Yes, our chauffeurs are experienced in handling transportation to and from sporting events, ensuring timely arrivals and smooth rides.",
      },
    ],
  },
  {
    slug: "executive-transportation",
    title: "Executive Transportation",
    h1: "Executive Transportation Services | Luxury Limo & Business Car Rentals",
    metaTitle:
      "Houston Executive Transportation | Secure Your Professional Ride",
    metaDescription:
      "Impress clients and arrive on time with 24 Hour Limo For You. Luxury sedans, executive vans, and professional chauffeurs in Houston ensure smooth corporate travel. Book your executive ride today and elevate your business journey.",
    short:
      "Professional executive limo services in Houston. Luxury sedans, SUVs, Sprinters, and shuttle buses with Wi-Fi, comfort, and punctual chauffeurs.",
    content: [
      "24 Hour Limo For You offers premium executive transportation services in Houston, designed to provide comfort, style, and punctuality for all your business needs.",
      "Whether you're heading to an important meeting, corporate event, or the airport, we guarantee a smooth, professional, and stress-free ride.",
      "Our fleet includes luxury sedans, SUVs, and Mercedes Sprinter vans equipped with Wi-Fi, leather seating, and space for working on the go.",
      "Our chauffeurs are trained professionals who ensure your journey is seamless, private, and productive.",
    ],
    icon: FaBriefcase,
    image: "/limo-hero.jpg",

    overview: {
      heading:
        "Executive Transportation Services | Luxury Limo & Business Car Rentals",
      paragraphs: [
        "Travel in Comfort & Style with 24 Hour Limo For You.",
        "We provide luxury sedans, SUVs, and Sprinters equipped with Wi-Fi, climate control, and leather seating for business productivity on the go.",
        "Our professional chauffeurs are punctual, discreet, and experienced in catering to executive clients.",
        "We understand the importance of time and ensure reliable, seamless transportation for every business journey.",
      ],
    },
    fleet: {
      heading: "Fleet for Executive Transportation",
      subSections: [
        {
          title: "Corporate & Group Executive Travel",
          text: "For corporate teams and larger groups, our Mercedes Sprinter vans and 23 Passenger Corporate Shuttle Buses provide ample space, comfort, and convenience for meetings, events, or airport transfers.",
        },
        {
          title: "Travel in Comfort, Focus on Business",
          text: "Our chauffeurs handle every detail, from luggage assistance to on-time arrivals. Enjoy a calm, productive ride so you can focus on business while we take care of the road.",
        },
      ],
    },
    bookingCTA: {
      heading: "Book Your Executive Ride Today",
      text: "Make business travel stress-free with 24 Hour Limo For You. Use our online booking system to secure your executive limo or corporate vehicle today.",
      ctas: [
        { label: "Request a Quote", href: "/quote" },
        { label: "Book Now", href: "/book" },
      ],
    },
    faq: [
      {
        q: "How do I book an executive ride with 24 Hour Limo For You?",
        a: `You can book through our easy-to-use online reservation system, or give us a call at ${site.No} for more assistance.`,
      },
      {
        q: "Do you offer executive transportation for corporate events?",
        a: "Yes, we provide executive limo services to and from corporate events, conferences, and meetings in Houston.",
      },
      {
        q: "Are your chauffeurs professional and reliable?",
        a: "Yes, all of our chauffeurs are professionally trained to provide safe, timely, and comfortable rides. They are also experienced in handling the needs of business professionals.",
      },
      {
        q: "Can I rent a limo for just a few hours for business use?",
        a: "Yes, we offer flexible hourly rentals so you can book the transportation you need for the duration of your business trip or event.",
      },
      {
        q: "Do you offer transportation for larger corporate groups?",
        a: "Yes, we offer Mercedes Sprinter vans and shuttle buses for larger corporate groups or teams traveling together.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
