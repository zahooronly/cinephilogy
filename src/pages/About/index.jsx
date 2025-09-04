import { useState } from "react";
import { Tag } from "../../components/ui/Tag";
import { CallToActionButton } from "../../components/ui/CallToActionButton";
import { CallToAction } from "../../components/layout/CallToAction";

// Team member data
const TEAM_MEMBERS = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    bio: "Film enthusiast with over 15 years of experience in digital media and content curation.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Sophia Chen",
    role: "Head of Content",
    bio: "Former film critic with a passion for discovering hidden cinematic gems from around the world.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Marcus Rivera",
    role: "Lead Developer",
    bio: "Tech wizard who believes in creating seamless digital experiences for movie lovers everywhere.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Olivia Taylor",
    role: "UX Designer",
    bio: "Combines her love for film aesthetics with user-centered design principles to create intuitive interfaces.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];

// Features data
const FEATURES = [
  {
    title: "Curated Collections",
    description:
      "Discover handpicked movie collections based on themes, directors, and genres.",
    icon: "🎬",
  },
  {
    title: "Personalized Recommendations",
    description:
      "Get movie suggestions tailored to your viewing history and preferences.",
    icon: "🎯",
  },
  {
    title: "Comprehensive Database",
    description:
      "Access information on thousands of films from classic cinema to the latest releases.",
    icon: "📚",
  },
  {
    title: "Community Reviews",
    description:
      "Share your thoughts and read reviews from fellow cinephiles around the world.",
    icon: "💬",
  },
  {
    title: "Watchlist Management",
    description:
      "Create and organize your personal watchlist for future viewing sessions.",
    icon: "📋",
  },
  {
    title: "Cross-Platform Experience",
    description: "Enjoy Cinephilogy on any device, anytime, anywhere.",
    icon: "📱",
  },
];

const About = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <div className="my-[74px] bg-white text-black min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Cinema theater"
            className="w-full h-full object-cover filter brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 md:p-16 text-white text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter mb-4">
            About Cinephilogy
          </h1>
          <p className="text-lg font-thin md:text-xl max-w-2xl mb-6 text-gray-200">
            Your ultimate destination for cinematic discovery and appreciation
          </p>
          <div className="flex items-center gap-4">
            <Tag title="Est. 2023" />
            <Tag title="Film Enthusiasts" />
            <Tag title="Global Community" />
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16 px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 uppercase tracking-tight">
              Our Mission
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              At Cinephilogy, we believe that cinema is more than
              entertainment—it's an art form that connects us across cultures
              and generations. Our mission is to create a platform where film
              enthusiasts can discover, discuss, and celebrate the magic of
              movies.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We're dedicated to fostering a community that appreciates both
              mainstream blockbusters and independent gems, providing tools and
              resources for cinephiles to deepen their appreciation of film as
              an art form and cultural touchstone.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-8 bg-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 uppercase tracking-tight">
              Meet Our Team
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              The passionate individuals behind Cinephilogy who share a common
              love for cinema and technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                  />
                  {hoveredMember === index && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-6 transition-opacity duration-300">
                      <p className="text-white text-center font-light">
                        {member.bio}
                      </p>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600 font-light">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 uppercase tracking-tight">
              Website Features
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Discover the tools and resources we've created to enhance your
              cinematic journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-100 p-8 rounded-lg transition-all duration-300 hover:shadow-md"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-700 font-light">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 px-8 bg-black text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 uppercase tracking-tight">Join Our Community</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Become part of a growing network of film enthusiasts. Share recommendations, discuss classics, and discover your next favorite movie with us.
          </p>
          <CTAButton>Get Started</CTAButton>
        </div>
      </section> */}
      <CallToAction />
    </div>
  );
};

export default About;
