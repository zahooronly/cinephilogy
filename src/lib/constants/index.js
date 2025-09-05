export const AUTH_API_URL = "https://api-stage.spexbot.com";
export const BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

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
