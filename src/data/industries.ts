export interface Product {
  id: string;
  name: string;
  description: string;
}

export interface Industry {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  capability: string;
  image: string;
  icon: string;
  pdfUrl: string;
  products: Product[];
}

export const industries: Industry[] = [
  {
    id: "automotive",
    name: "Automotive",
    slug: "automotive",
    shortDescription: "Precision components and solutions for the automotive manufacturing sector.",
    fullDescription: "The automotive industry demands precision, reliability, and innovation. At Duramet Technologies, we understand the critical nature of automotive manufacturing and provide components that meet the highest standards of quality and performance.",
    capability: "We specialize in providing precision-engineered components, advanced tooling solutions, and quality materials that help automotive manufacturers maintain their production efficiency while meeting stringent quality standards.",
    image: "/src/assets/industry-automotive.jpg",
    icon: "car",
    pdfUrl: "/brochures/automotive-brochure.pdf",
    products: [
      { id: "auto-1", name: "Precision Bearings", description: "High-performance bearings designed for automotive applications with superior durability and reduced friction." },
      { id: "auto-2", name: "Transmission Components", description: "Quality transmission parts including gears, shafts, and synchronizers for smooth operation." },
      { id: "auto-3", name: "Engine Fasteners", description: "Industrial-grade fasteners engineered for high-temperature and high-stress engine environments." },
      { id: "auto-4", name: "Chassis Parts", description: "Structural components and assemblies for vehicle chassis with optimal strength-to-weight ratio." },
      { id: "auto-5", name: "Sealing Solutions", description: "Advanced sealing systems for engines, transmissions, and hydraulic applications." }
    ]
  },
  {
    id: "aerospace",
    name: "Aerospace",
    slug: "aerospace",
    shortDescription: "High-precision engineering solutions for aerospace and defense applications.",
    fullDescription: "Aerospace applications require the highest levels of precision and reliability. Our aerospace solutions meet rigorous international standards and are trusted by leading manufacturers in the aviation and defense sectors.",
    capability: "Duramet Technologies provides certified aerospace-grade materials and components, including specialty alloys, precision fasteners, and critical flight system components that meet AS9100 and other aerospace quality standards.",
    image: "/src/assets/industry-aerospace.jpg",
    icon: "plane",
    pdfUrl: "/brochures/aerospace-brochure.pdf",
    products: [
      { id: "aero-1", name: "Aircraft Fasteners", description: "Aerospace-certified fasteners manufactured to exact specifications for critical applications." },
      { id: "aero-2", name: "Turbine Components", description: "High-temperature resistant components for jet engines and turbine systems." },
      { id: "aero-3", name: "Structural Alloys", description: "Specialty aluminum, titanium, and composite materials for airframe construction." },
      { id: "aero-4", name: "Avionics Hardware", description: "Precision mounting and housing solutions for sensitive electronic systems." },
      { id: "aero-5", name: "Landing Gear Parts", description: "Heavy-duty components designed for the extreme stresses of takeoff and landing." }
    ]
  },
  {
    id: "oil-gas",
    name: "Oil & Gas",
    slug: "oil-gas",
    shortDescription: "Durable industrial solutions for upstream, midstream, and downstream operations.",
    fullDescription: "The oil and gas industry operates in some of the most demanding environments on Earth. Our products are engineered to withstand extreme pressures, temperatures, and corrosive conditions found in drilling and refining operations.",
    capability: "We supply a comprehensive range of equipment and components for exploration, extraction, processing, and transportation of oil and gas, including API-certified products that meet the strictest industry standards.",
    image: "/src/assets/industry-oil-gas.jpg",
    icon: "droplet",
    pdfUrl: "/brochures/oil-gas-brochure.pdf",
    products: [
      { id: "og-1", name: "Drill Pipe Components", description: "Heavy-duty drilling equipment designed for deepwater and extreme pressure environments." },
      { id: "og-2", name: "Valve Systems", description: "Industrial valves and control systems rated for high-pressure hydrocarbon applications." },
      { id: "og-3", name: "Pipeline Fittings", description: "Corrosion-resistant fittings and connectors for safe fluid transportation." },
      { id: "og-4", name: "Pump Components", description: "Wear-resistant pump parts for continuous operation in abrasive conditions." },
      { id: "og-5", name: "Safety Equipment", description: "Certified safety devices including blowout preventers and emergency shutoff valves." }
    ]
  },
  {
    id: "power-generation",
    name: "Power Generation",
    slug: "power-generation",
    shortDescription: "Reliable components for thermal, renewable, and nuclear power plants.",
    fullDescription: "Power generation facilities require components that can operate continuously under demanding conditions. We provide solutions for conventional and renewable energy production that help ensure reliable electricity generation.",
    capability: "Our expertise spans thermal, hydro, wind, and nuclear power generation, offering components ranging from turbine parts to electrical infrastructure that help power plants maintain optimal efficiency and uptime.",
    image: "/src/assets/industry-power.jpg",
    icon: "zap",
    pdfUrl: "/brochures/power-generation-brochure.pdf",
    products: [
      { id: "power-1", name: "Turbine Blades", description: "High-efficiency turbine blades engineered for maximum energy extraction and durability." },
      { id: "power-2", name: "Generator Parts", description: "Precision components for electrical generators including rotors and stators." },
      { id: "power-3", name: "Heat Exchangers", description: "Thermal management solutions for efficient heat transfer in power systems." },
      { id: "power-4", name: "Control Systems", description: "Industrial control hardware for plant automation and safety monitoring." },
      { id: "power-5", name: "Transformer Components", description: "Electrical infrastructure parts for power transmission and distribution." }
    ]
  },
  {
    id: "heavy-machinery",
    name: "Heavy Machinery",
    slug: "heavy-machinery",
    shortDescription: "Robust components for construction, mining, and industrial equipment.",
    fullDescription: "Heavy machinery operates in the toughest conditions imaginable, from construction sites to mining operations. Our products are built to withstand extreme loads, impacts, and wear while maintaining peak performance.",
    capability: "Duramet Technologies supplies wear parts, structural components, and hydraulic systems for excavators, loaders, cranes, and other heavy equipment, helping operators maximize uptime and reduce maintenance costs.",
    image: "/src/assets/industry-heavy-machinery.jpg",
    icon: "truck",
    pdfUrl: "/brochures/heavy-machinery-brochure.pdf",
    products: [
      { id: "hm-1", name: "Hydraulic Cylinders", description: "Heavy-duty hydraulic systems designed for maximum lifting capacity and reliability." },
      { id: "hm-2", name: "Track Components", description: "Wear-resistant undercarriage parts for tracked vehicles and equipment." },
      { id: "hm-3", name: "Bucket Teeth", description: "Hardened excavator teeth and adapters for aggressive digging applications." },
      { id: "hm-4", name: "Bearings & Bushings", description: "Industrial-grade bearings designed for high-load, low-maintenance operation." },
      { id: "hm-5", name: "Structural Castings", description: "Custom cast components for equipment frames and mounting systems." }
    ]
  }
];

export const getIndustryBySlug = (slug: string): Industry | undefined => {
  return industries.find(industry => industry.slug === slug);
};

export const getProductById = (industrySlug: string, productId: string): { industry: Industry; product: Product } | undefined => {
  const industry = getIndustryBySlug(industrySlug);
  if (!industry) return undefined;
  const product = industry.products.find(p => p.id === productId);
  if (!product) return undefined;
  return { industry, product };
};
