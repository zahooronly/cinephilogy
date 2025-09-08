import { CallToActionButton } from "../ui/CallToActionButton";
import { Tag } from "../ui/Tag";

export const HeroSection = () => {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Movie banner with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5a78ab8490badee028bef0e9/1568935524292-TPSLMXHD9HE6PKN02YOG/Interstellar.jpg"
          alt="Interstellar movie banner"
          draggable={false}
          className="w-full h-full object-cover filter brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-start justify-end h-full p-8 md:p-16 text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter mb-2">
          Interstellar
        </h1>
        <div className="flex items-center font-thin gap-4 mb-4">
          <Tag title="2014" />
          <Tag title="PG-13" />
          <Tag title="169 min" />
        </div>
        <p className="text-lg font-thin md:text-xl max-w-2xl mb-6 text-gray-200">
          When Earth becomes uninhabitable, a farmer and ex-NASA pilot leads a
          mission through a wormhole to find a new home for humanity.
        </p>
        <div className="flex gap-4">
          <CallToActionButton>Watch Now</CallToActionButton>
        </div>
      </div>
    </div>
  );
};
