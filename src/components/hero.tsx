import Image from "next/image";
import StoreButtons from "./store-button";

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] sm:h-[80vh] md:h-screen min-h-[500px] sm:min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/bg.png"
          alt="Night at the Valley Hero"
          className="w-full h-full object-cover object-center sm:object-cover"
        />
        <img
          src="/images/18.png"
          alt="boy-small"
          className="absolute top-30 left-0 object-cover"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" /> */}
      </div>
      
      
      {/* Additional Overlays */}
      {/* <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0)_0%,rgba(0,0,0,0.4)_70%,rgba(0,0,0,0.6)_100%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>
      </div> */}
      
      {/* Dot Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,rgba(0,0,0,0.3)_0.5px,transparent_0.5px)] [background-size:3px_3px]"></div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-end justify-center pb-8 sm:pb-16 md:pb-24 lg:pb-36">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white">
          {/* Avatar + Game name */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
            {/* Game Icon */}
            <img
              src="/images/icon_game.png"
              alt="Night at the Valley"
              className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-28 lg:h-28 rounded-xl sm:rounded-2xl shadow-lg flex-shrink-0"
            />
            
            {/* Game Info */}
            <div className="flex flex-col items-center sm:items-start gap-1 sm:gap-3">
              <h1 
                className="text-xl sm:text-3xl md:text-4xl lg:text-4xl font-black text-center sm:text-left text-white"
                style={{
                  textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
                }}
              >
                NIGHT AT THE VALLEY
              </h1>
              
              {/* Store Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center sm:justify-start gap-2 sm:gap-3 w-full sm:w-auto scale-75 sm:scale-90 md:scale-90 origin-center sm:origin-left">
                <StoreButtons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}