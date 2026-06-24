import Link from 'next/link';

export default function FeaturedRooms() {
  const rooms = [
    { id: 2, title: "Superior Room", location: "Abraka", image: "/superior-home.jpeg" },
    { id: 1, title: "Deluxe Room", location: "Abraka", image: "/deluxe-home.jpeg" },
  ];

  return (
    <section className=" bg-white dark:bg-background py-16 mx-4 md:mx-20">
      <div className=" mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Two Square Cards */}
          {rooms.map((room, index) => (
            <Link key={index} href={`/rooms/${room.id}`}>
              <div className="flex flex-col gap-4 group cursor-pointer">
                <div className="relative w-full aspect-square  overflow-hidden">
                  <img
                    src={room.image}
                    alt="Room"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white dark:bg-black p-2 rounded-full shadow-md">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-black dark:text-white">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                </div>
                <div className="flex justify-between items-start px-1">
                  <h3 className="font-bold text-black dark:text-foreground text-lg group-hover:underline">{room.title}</h3>
                  <p className="text-sm text-gray-400 dark:text-gray-500">{room.location}</p>
                </div>
              </div>
            </Link>
          ))}

          {/* Large Promo Card */}
          <Link href="/rooms/5" className="col-span-1 md:col-span-2 block">
            <div className="bg-gray-50 dark:bg-zinc-900  overflow-hidden flex flex-col md:flex-row p-8 gap-6 shadow-sm h-full group cursor-pointer hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors">
              <div className="flex-1 flex flex-col justify-center space-y-6">
                <p className="text-xs font-bold tracking-widest text-gray-500 uppercase">Business Class</p>
                <h3 className="text-3xl font-semibold text-black dark:text-white leading-tight">
                  Check option to stay here for your business trip
                </h3>
                <div className="pt-2">
                  <span className="inline-flex items-center text-black dark:text-white font-medium group-hover:opacity-70 transition-opacity">
                    Explore More
                    <span className="ml-2 bg-black dark:bg-white text-white dark:text-black rounded-full p-1 group-hover:bg-blue-600 transition-colors">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
              <div className="flex-1 relative min-h-[200px] md:min-h-full  overflow-hidden">
                <img
                  src="/business-home.jpeg"
                  alt="Featured"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}
