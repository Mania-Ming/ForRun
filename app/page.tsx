import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f6f6f6] px-8 py-10 font-sans">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold text-[#5c4033]">
          🐾 Purrfect Home
        </h1>
        <button className="bg-[#e48a6a] text-white px-6 py-2 rounded-full hover:bg-[#d97757] transition">
          Browse Cats
        </button>
      </div>

      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* Text */}
        <div>
          <h2 className="text-4xl font-bold text-[#3b2f2f] leading-tight mb-4">
            Give a Cat <br /> a Loving Home
          </h2>
          <p className="text-gray-600 mb-6">
            Adopt a furry friend today and change a life forever. 
            Our rescued cats are waiting for a warm and caring family.
          </p>

          <div className="flex gap-4">
            <button className="bg-[#e48a6a] text-white px-6 py-3 rounded-full hover:bg-[#d97757] transition">
              Adopt Now
            </button>
            <button className="border border-[#e48a6a] text-[#e48a6a] px-6 py-3 rounded-full hover:bg-[#ffe9e2] transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="/cat-hero.jpg"   // butangi og cat image sa public folder
            alt="Cute Cat"
            width={400}
            height={400}
            className="rounded-3xl shadow-lg"
          />
        </div>

      </div>

      {/* Features Section */}
      <div className="mt-20 grid md:grid-cols-3 gap-6">
        
        <div className="bg-white p-6 rounded-2xl shadow-md text-center">
          <h3 className="text-xl font-semibold mb-2">Healthy Cats</h3>
          <p className="text-gray-500 text-sm">
            All cats are vaccinated and checked by veterinarians.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md text-center">
          <h3 className="text-xl font-semibold mb-2">Safe Adoption</h3>
          <p className="text-gray-500 text-sm">
            We ensure every adoption is safe and responsible.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md text-center">
          <h3 className="text-xl font-semibold mb-2">Loving Community</h3>
          <p className="text-gray-500 text-sm">
            Join a growing family of cat lovers and adopters.
          </p>
        </div>

      </div>

    </div>
  );
}