export const AUTH_API_URL = "https://api-stage.spexbot.com";
export const BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

export const NAVIVATION_LINKS = [
  { title: "Home", url: "/" },
  { title: "Movies", url: "/movies" },
  { title: "TV", url: "/tv" },
  { title: "Favourite", url: "/favourite" },
  { title: "About us", url: "/about" },
  { title: "Contact us", url: "/contact" },
];

export const GENRES = [
  { title: "Action", url: "/genre/action" },
  { title: "Comedy", url: "/genre/comedy" },
  { title: "Drama", url: "/genre/drama" },
  { title: "Sci-Fi", url: "/genre/sci-fi" },
  { title: "Horror", url: "/genre/horror" },
];

export const LEGAL = [
  { title: "Terms of Service", url: "/terms" },
  { title: "Privacy Policy", url: "/privacy" },
  { title: "Cookie Policy", url: "/cookies" },
  { title: "FAQ", url: "/faq" },
  { title: "Help Center", url: "/help" },
];

export const CONTACT_FORM_FIELDS = [
  {
    id: "name",
    label: "Name",
    type: "text",
    placeholder: "Your name",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "your.email@example.com",
  },
  {
    id: "subject",
    label: "Subject",
    type: "text",
    placeholder: "What is this regarding?",
  },
];

export const IMAGES_BASE_URL = "https://image.tmdb.org/t/p/w500";
