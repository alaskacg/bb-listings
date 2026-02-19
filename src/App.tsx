import { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import EmpireNetwork from './components/EmpireNetwork';

import ListingSuccess from "@/pages/ListingSuccess";
interface Listing {
  id: number;
  title: string;
  category: string;
  subcategory: string;
  price: string;
  location: string;
  description: string;
  condition?: string;
  featured: boolean;
  posted: string;
  image: string;
  contact: {
    name: string;
    phone: string;
    email: string;
  };
}

const listings: Listing[] = [
  {
    id: 1,
    title: "2020 Toyota Tundra 4x4 - Low Miles",
    category: "Vehicles",
    subcategory: "Trucks",
    price: "$42,500",
    location: "Anchorage",
    description: "Excellent condition, 35k miles, new tires, bed liner, tow package. One owner, clean title.",
    condition: "Excellent",
    featured: true,
    posted: "2 days ago",
    image: "🚙",
    contact: { name: "Mike Johnson", phone: "(907) 555-0201", email: "mike.j@email.com" }
  },
  {
    id: 2,
    title: "4BR/3BA Home - Mountain Views",
    category: "Real Estate",
    subcategory: "Houses",
    price: "$485,000",
    location: "Eagle River",
    description: "Beautiful home with mountain views, updated kitchen, 2-car garage, large deck. Move-in ready!",
    featured: true,
    posted: "1 day ago",
    image: "🏠",
    contact: { name: "Sarah Realty", phone: "(907) 555-0202", email: "sarah@realty.com" }
  },
  {
    id: 3,
    title: "John Deere X590 Riding Mower",
    category: "Equipment",
    subcategory: "Lawn & Garden",
    price: "$3,200",
    location: "Wasilla",
    description: "2021 model, only 45 hours, 48-inch deck, excellent condition. Includes bagger attachment.",
    condition: "Like New",
    featured: false,
    posted: "3 days ago",
    image: "🚜",
    contact: { name: "Tom Wilson", phone: "(907) 555-0203", email: "tom.w@email.com" }
  },
  {
    id: 4,
    title: "Full-Time Electrician Position",
    category: "Jobs",
    subcategory: "Skilled Trades",
    price: "$35-45/hr",
    location: "Fairbanks",
    description: "Established electrical contractor seeking licensed electrician. Benefits, retirement, year-round work.",
    featured: true,
    posted: "1 day ago",
    image: "⚡",
    contact: { name: "Northern Electric", phone: "(907) 555-0204", email: "jobs@northernelectric.com" }
  },
  {
    id: 5,
    title: "2019 Polaris Ranger 1000",
    category: "Vehicles",
    subcategory: "ATVs & UTVs",
    price: "$18,900",
    location: "Soldotna",
    description: "Low hours, winch, roof, windshield, heated grips. Perfect for hunting or work. Garage kept.",
    condition: "Excellent",
    featured: false,
    posted: "4 days ago",
    image: "🏍️",
    contact: { name: "Dave Peterson", phone: "(907) 555-0205", email: "dave.p@email.com" }
  },
  {
    id: 6,
    title: "Commercial Office Space - Downtown",
    category: "Real Estate",
    subcategory: "Commercial",
    price: "$2,500/mo",
    location: "Anchorage",
    description: "1,200 sq ft office space, parking included, high visibility location. Available immediately.",
    featured: false,
    posted: "2 days ago",
    image: "🏢",
    contact: { name: "Downtown Properties", phone: "(907) 555-0206", email: "leasing@dtproperties.com" }
  },
  {
    id: 7,
    title: "Welding & Fabrication Services",
    category: "Services",
    subcategory: "Professional",
    price: "$85/hr",
    location: "Palmer",
    description: "Mobile welding service, aluminum & steel, custom fabrication. Licensed, insured, 15 years experience.",
    featured: false,
    posted: "1 week ago",
    image: "🔧",
    contact: { name: "Alaska Welding Pro", phone: "(907) 555-0207", email: "info@akweldingpro.com" }
  },
  {
    id: 8,
    title: "2018 Ski-Doo Summit 850",
    category: "Vehicles",
    subcategory: "Snowmobiles",
    price: "$11,500",
    location: "Valdez",
    description: "154-inch track, low miles, well maintained. Ready for the backcountry. Includes spare belt.",
    condition: "Very Good",
    featured: false,
    posted: "5 days ago",
    image: "❄️",
    contact: { name: "Rick Anderson", phone: "(907) 555-0208", email: "rick.a@email.com" }
  },
  {
    id: 9,
    title: "Commercial Fishing Permit - Bristol Bay",
    category: "Equipment",
    subcategory: "Commercial Fishing",
    price: "$175,000",
    location: "Bristol Bay",
    description: "Limited entry drift gillnet permit. Great investment opportunity. Seller financing available.",
    featured: true,
    posted: "3 days ago",
    image: "🎣",
    contact: { name: "Alaska Permits LLC", phone: "(907) 555-0209", email: "permits@akpermits.com" }
  },
  {
    id: 10,
    title: "Experienced Chef Wanted",
    category: "Jobs",
    subcategory: "Hospitality",
    price: "$55,000-70,000",
    location: "Seward",
    description: "Busy restaurant seeking executive chef. Summer season, housing available, beautiful location.",
    featured: false,
    posted: "2 days ago",
    image: "👨‍🍳",
    contact: { name: "Seward Dining", phone: "(907) 555-0210", email: "hr@sewarddining.com" }
  },
  {
    id: 11,
    title: "Building Lot - 2.5 Acres",
    category: "Real Estate",
    subcategory: "Land",
    price: "$89,000",
    location: "Chugiak",
    description: "Private wooded lot, utilities at road, mountain views. Approved for septic. Great location!",
    featured: false,
    posted: "1 week ago",
    image: "🌲",
    contact: { name: "Land Sales AK", phone: "(907) 555-0211", email: "sales@landsalesak.com" }
  },
  {
    id: 12,
    title: "2022 Ford F-350 Diesel Dually",
    category: "Vehicles",
    subcategory: "Trucks",
    price: "$68,900",
    location: "Kenai",
    description: "Crew cab, loaded, only 12k miles. Tow package, gooseneck hitch. Under warranty. Like new!",
    condition: "Excellent",
    featured: true,
    posted: "1 day ago",
    image: "🚙",
    contact: { name: "Bob's Auto", phone: "(907) 555-0212", email: "sales@bobsauto.com" }
  },
  {
    id: 13,
    title: "Snow Removal Services",
    category: "Services",
    subcategory: "Home Services",
    price: "$350/season",
    location: "Anchorage",
    description: "Residential driveways, seasonal contracts available. 24/7 service, reliable, insured.",
    featured: false,
    posted: "3 days ago",
    image: "❄️",
    contact: { name: "Alaska Snow Removal", phone: "(907) 555-0213", email: "info@aksnowremoval.com" }
  },
  {
    id: 14,
    title: "25' Fishing Vessel - Ready to Fish",
    category: "Vehicles",
    subcategory: "Boats",
    price: "$95,000",
    location: "Homer",
    description: "Commercial salmon troller, new engine 2020, electronics, hydraulics. Turnkey operation.",
    condition: "Very Good",
    featured: true,
    posted: "2 days ago",
    image: "⛵",
    contact: { name: "Homer Marine", phone: "(907) 555-0214", email: "sales@homermarine.com" }
  },
  {
    id: 15,
    title: "Backhoe Loader - CAT 420F",
    category: "Equipment",
    subcategory: "Heavy Equipment",
    price: "$78,000",
    location: "Fairbanks",
    description: "2015 model, 2,800 hours, well maintained, new tires. Ready for work. Financing available.",
    condition: "Good",
    featured: false,
    posted: "5 days ago",
    image: "🚜",
    contact: { name: "Equipment Sales AK", phone: "(907) 555-0215", email: "sales@equipmentsalesak.com" }
  },
  {
    id: 16,
    title: "RN Position - Emergency Department",
    category: "Jobs",
    subcategory: "Healthcare",
    price: "$85,000-105,000",
    location: "Juneau",
    description: "Full-time RN needed for busy ED. Sign-on bonus, excellent benefits, relocation assistance.",
    featured: false,
    posted: "1 day ago",
    image: "⚕️",
    contact: { name: "Juneau Medical Center", phone: "(907) 555-0216", email: "nursing@juneaumed.com" }
  },
  {
    id: 17,
    title: "2BR Apartment - Downtown",
    category: "Real Estate",
    subcategory: "Apartments",
    price: "$1,650/mo",
    location: "Anchorage",
    description: "Updated unit, parking, storage, walk to shops. Pet friendly. Available Dec 1st.",
    featured: false,
    posted: "4 days ago",
    image: "🏠",
    contact: { name: "City Rentals", phone: "(907) 555-0217", email: "rentals@cityrentals.com" }
  },
  {
    id: 18,
    title: "Aircraft - Cessna 185 on Floats",
    category: "Vehicles",
    subcategory: "Aircraft",
    price: "$245,000",
    location: "Talkeetna",
    description: "1973 C185, 3,500 TT, 500 SMOH, Wipline 3450 floats. Annual done. Ready to fly!",
    condition: "Very Good",
    featured: true,
    posted: "3 days ago",
    image: "✈️",
    contact: { name: "Bush Planes AK", phone: "(907) 555-0218", email: "sales@bushplanesak.com" }
  },
  {
    id: 19,
    title: "Professional Photography Services",
    category: "Services",
    subcategory: "Creative",
    price: "$200/session",
    location: "Girdwood",
    description: "Weddings, portraits, events, real estate. Professional quality, quick turnaround, packages available.",
    featured: false,
    posted: "1 week ago",
    image: "📷",
    contact: { name: "Alaska Photo Studio", phone: "(907) 555-0219", email: "info@akphotostudio.com" }
  },
  {
    id: 20,
    title: "Commercial Building - Investment Opportunity",
    category: "Real Estate",
    subcategory: "Commercial",
    price: "$1,200,000",
    location: "Palmer",
    description: "8,000 sq ft, triple net leased, strong tenant. Excellent ROI. Prime location on highway.",
    featured: true,
    posted: "2 days ago",
    image: "🏢",
    contact: { name: "Commercial Realty AK", phone: "(907) 555-0220", email: "commercial@realtyak.com" }
  },
  {
    id: 21,
    title: "2021 Arctic Cat ZR 8000",
    category: "Vehicles",
    subcategory: "Snowmobiles",
    price: "$13,500",
    location: "Wasilla",
    description: "Low miles, garage kept, studded track. Like new condition. Cover and spare parts included.",
    condition: "Excellent",
    featured: false,
    posted: "6 days ago",
    image: "❄️",
    contact: { name: "Snowmobile Central", phone: "(907) 555-0221", email: "sales@snowmobilecentral.com" }
  },
  {
    id: 22,
    title: "Accounting Services - Small Business",
    category: "Services",
    subcategory: "Professional",
    price: "$150/mo",
    location: "Anchorage",
    description: "Bookkeeping, payroll, tax prep for small businesses. CPA, 20 years experience, competitive rates.",
    featured: false,
    posted: "5 days ago",
    image: "💼",
    contact: { name: "Alaska Accounting", phone: "(907) 555-0222", email: "info@akaccounting.com" }
  }
];

const categories = {
  "All": [],
  "Vehicles": ["Trucks", "ATVs & UTVs", "Snowmobiles", "Boats", "Aircraft"],
  "Real Estate": ["Houses", "Apartments", "Land", "Commercial"],
  "Equipment": ["Lawn & Garden", "Heavy Equipment", "Commercial Fishing"],
  "Services": ["Professional", "Home Services", "Creative"],
  "Jobs": ["Skilled Trades", "Hospitality", "Healthcare"]
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null);
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  const filteredListings = listings.filter(listing => {
    const matchesCategory = selectedCategory === "All" || listing.category === selectedCategory;
    const matchesSubcategory = selectedSubcategory === "All" || listing.subcategory === selectedSubcategory;
    const matchesSearch = searchTerm === "" || 
      listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFeatured = !showFeaturedOnly || listing.featured;
    
    return matchesCategory && matchesSubcategory && matchesSearch && matchesFeatured;
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "BB Listings",
    "description": "Alaska's premier marketplace for buying and selling vehicles, real estate, equipment, and services",
    "url": "https://bblistings.com"
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gray-50">
        <Helmet>
          <title>BB Listings - Alaska Classifieds, Buy & Sell Marketplace</title>
          <meta name="description" content="Alaska's premier marketplace. Buy and sell vehicles, real estate, equipment, and services. Free listings, thousands of items, trusted by Alaskans." />
          <meta name="keywords" content="Alaska classifieds, buy sell Alaska, Alaska marketplace, vehicles for sale, real estate Alaska, equipment sales, Alaska jobs" />
          <link rel="canonical" href="https://bblistings.com" />
          <meta property="og:title" content="BB Listings - Alaska's Premier Marketplace" />
          <meta property="og:description" content="Buy and sell anything in Alaska - vehicles, real estate, equipment, services, and more" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://bblistings.com" />
          <script type="application/ld+json">
            {JSON.stringify(jsonLd)}
          </script>
        </Helmet>

        <header className="bg-gradient-to-r from-green-700 to-green-600 text-white">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">BB Listings</h1>
            <p className="text-xl text-green-100">Alaska's Premier Buy & Browse Marketplace</p>
          </div>
        </header>

        <div className="bg-white shadow-md border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                <input
                  type="text"
                  placeholder="Search listings..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    setSelectedSubcategory("All");
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  {Object.keys(categories).map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subcategory</label>
                <select
                  value={selectedSubcategory}
                  onChange={(e) => setSelectedSubcategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  disabled={selectedCategory === "All"}
                >
                  <option value="All">All</option>
                  {selectedCategory !== "All" && categories[selectedCategory as keyof typeof categories].map(sub => (
                    <option key={sub} value={sub}>{sub}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-gray-600">{filteredListings.length} listings found</p>
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={showFeaturedOnly}
                  onChange={(e) => setShowFeaturedOnly(e.target.checked)}
                  className="mr-2"
                />
                <span className="text-sm text-gray-700">Featured only</span>
              </label>
            </div>
          </div>
        </div>

        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredListings.map(listing => (
              <div key={listing.id} className={`bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden ${listing.featured ? 'ring-2 ring-yellow-400' : ''}`}>
                <div className="p-6">
                  {listing.featured && (
                    <div className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded inline-block mb-2">
                      FEATURED
                    </div>
                  )}
                  <div className="text-5xl mb-3 text-center">{listing.image}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{listing.title}</h3>
                  <p className="text-2xl font-bold text-green-600 mb-2">{listing.price}</p>
                  
                  <div className="space-y-1 mb-3">
                    <div className="flex items-center text-sm">
                      <span className="text-gray-500 w-20">Category:</span>
                      <span className="text-gray-900">{listing.category}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="text-gray-500 w-20">Location:</span>
                      <span className="text-gray-900">{listing.location}</span>
                    </div>
                    {listing.condition && (
                      <div className="flex items-center text-sm">
                        <span className="text-gray-500 w-20">Condition:</span>
                        <span className="text-gray-900">{listing.condition}</span>
                      </div>
                    )}
                    <div className="flex items-center text-sm">
                      <span className="text-gray-500 w-20">Posted:</span>
                      <span className="text-gray-900">{listing.posted}</span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{listing.description}</p>

                  <button
                    onClick={() => setSelectedListing(listing)}
                    className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>

        {selectedListing && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedListing(null)}>
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    {selectedListing.featured && (
                      <div className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded inline-block mb-2">
                        FEATURED LISTING
                      </div>
                    )}
                    <h2 className="text-3xl font-bold text-gray-900">{selectedListing.title}</h2>
                    <p className="text-3xl font-bold text-green-600 mt-2">{selectedListing.price}</p>
                  </div>
                  <button onClick={() => setSelectedListing(null)} className="text-gray-400 hover:text-gray-600 text-2xl ml-4">×</button>
                </div>

                <div className="text-7xl mb-6 text-center">{selectedListing.image}</div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="font-medium text-gray-700">Category</p>
                    <p className="text-gray-600">{selectedListing.category} - {selectedListing.subcategory}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Location</p>
                    <p className="text-gray-600">{selectedListing.location}</p>
                  </div>
                  {selectedListing.condition && (
                    <div>
                      <p className="font-medium text-gray-700">Condition</p>
                      <p className="text-gray-600">{selectedListing.condition}</p>
                    </div>
                  )}
                  <div>
                    <p className="font-medium text-gray-700">Posted</p>
                    <p className="text-gray-600">{selectedListing.posted}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-bold text-gray-900 mb-2">Description</h3>
                  <p className="text-gray-700">{selectedListing.description}</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h3 className="font-bold text-gray-900 mb-3">Seller Information</h3>
                  <div className="space-y-2">
                    <p className="text-gray-700"><span className="font-medium">Name:</span> {selectedListing.contact.name}</p>
                    <p className="text-gray-700"><span className="font-medium">Phone:</span> {selectedListing.contact.phone}</p>
                    <p className="text-gray-700"><span className="font-medium">Email:</span> {selectedListing.contact.email}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a href={`tel:${selectedListing.contact.phone}`} className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center">
                    Call Seller
                  </a>
                  <a href={`mailto:${selectedListing.contact.email}?subject=Inquiry about ${selectedListing.title}`} className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium text-center">
                    Email Seller
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        <EmpireNetwork currentSite="bb-listings" />

        <footer className="bg-gray-800 text-white mt-12">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-3">BB Listings</h3>
                <p className="text-gray-300 text-sm">Alaska's trusted marketplace for buying and selling.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Categories</h3>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>Vehicles</li>
                  <li>Real Estate</li>
                  <li>Equipment</li>
                  <li>Services</li>
                  <li>Jobs</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">For Sellers</h3>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>Post a Listing</li>
                  <li>Featured Listings</li>
                  <li>Pricing</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Contact</h3>
                <p className="text-gray-300 text-sm">Email: info@bblistings.com</p>
                <p className="text-gray-300 text-sm">Phone: (907) 555-LIST</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
              <p>© 2024 BB Listings. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </HelmetProvider>
  );
}

export default App;
