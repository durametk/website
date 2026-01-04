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
  solutionsFor?: string[];
}

export const industries: Industry[] = [
  {
    id: "power-industrial",
    name: "Power & Industrial Automation",
    slug: "power-industrial",
    shortDescription: "Efficient power generation, storage, and distribution solutions with advanced material technologies.",
    fullDescription: "As electrification expands worldwide and energy demands continue to grow, efficient power generation, storage, and distribution solutions are increasingly critical. Advanced material and adhesive technologies simplify system design, improve efficiency, and enhance long-term reliability—enabling higher power densities while maintaining low lifecycle costs.",
    capability: "We provide comprehensive thermal management, circuit protection, and gasketing solutions that help reduce validation time and costs while accelerating time-to-market for UPS and power system designs.",
    image: "/src/assets/industry-power.jpg",
    icon: "zap",
    pdfUrl: "/brochures/power-industrial-brochure.pdf",
    products: [
      { 
        id: "tim", 
        name: "Thermal Interface Materials", 
        description: "Thermal interface materials (TIMs) play a critical role by combining safety-certified electrical insulation with an efficient pathway for heat dissipation. Effective thermal management is essential to maintain the performance, reliability, and service life of electronic components. Many advanced TIM solutions offer high Relative Thermal Index (RTI) ratings exceeding 130 °C, meeting recognized safety standards. This helps reduce validation time and costs while accelerating time-to-market for UPS and power system designs. High-performance TIMs also enable greater power densities in compact designs, supporting space-efficient architectures in modern data centers and server environments."
      },
      { 
        id: "conformal-coating", 
        name: "Conformal Coatings", 
        description: "Conformal coating is a thin, protective polymer layer applied to printed circuit boards (PCBs) and electronic assemblies. It \"conforms\" to the shape of components, providing protection against moisture, dust, chemicals, corrosion, and temperature extremes, while maintaining electrical performance. Conformal coatings help improve reliability and extend the service life of electronic products used in harsh environments."
      },
      { 
        id: "potting", 
        name: "Potting Compounds", 
        description: "Potting is the process of completely or partially encapsulating electronic components within a solid or gel-like compound. Potting materials—such as epoxy, silicone, or polyurethane—provide strong protection against vibration, mechanical shock, moisture, and electrical stress. This method is commonly used where maximum environmental and electrical protection is required."
      },
      { 
        id: "lpm", 
        name: "Low Pressure Molding", 
        description: "Low pressure molding is an encapsulation process where a low-viscosity thermoplastic material is injected around electronic assemblies at low pressure and temperature. This process protects sensitive components from moisture, vibration, dust, and mechanical damage without stressing the electronics. Low pressure molding is widely used for connector protection, sensor encapsulation, and cable assemblies."
      },
      { 
        id: "gasketing", 
        name: "Gasketing Solutions", 
        description: "Liquid gasketing uses liquid-applied sealants to form a gasket directly on a component or enclosure surface. Once cured, the material creates a custom, seamless seal that protects against dust, water, oils, and chemicals. Liquid gaskets eliminate the need for pre-formed gaskets, improve sealing consistency, and support complex or irregular geometries."
      },
      { 
        id: "tca", 
        name: "Thermally Conductive Adhesives", 
        description: "Thermally conductive adhesives combine bonding strength with thermal management capabilities. They are used to attach heat-generating components to heat sinks or enclosures while providing an efficient thermal pathway for heat dissipation."
      }
    ]
  },
  {
    id: "components",
    name: "Components",
    slug: "components",
    shortDescription: "Electronic components including resistors, capacitors, thin-film devices, and inductors for modern electronic systems.",
    fullDescription: "Electronic components such as resistors, capacitors, thin-film devices, RF filters, and antennas are fundamental to modern electronic systems. They support power control, signal management, and reliable connectivity across consumer, industrial, automotive, and telecom applications.",
    capability: "We supply high-quality passive components from world-class manufacturers, ensuring consistent performance and reliability for demanding applications.",
    image: "/src/assets/industry-automotive.jpg",
    icon: "cpu",
    pdfUrl: "/brochures/components-brochure.pdf",
    products: [
      { 
        id: "resistors", 
        name: "Resistors", 
        description: "Resistors control the flow of electrical current in a circuit by providing a specific amount of resistance. They are used to regulate voltage levels, protect sensitive components, and ensure stable circuit operation across a wide range of electronic applications."
      },
      { 
        id: "capacitors", 
        name: "Capacitors", 
        description: "Capacitors store and release electrical energy as needed within a circuit. They are commonly used for power smoothing, signal coupling, noise filtering, and energy storage in electronic devices."
      },
      { 
        id: "thin-film", 
        name: "Thin Film Products", 
        description: "Thin film products are precision electronic components manufactured by depositing ultra-thin layers of material onto a substrate. They offer high accuracy, excellent stability, and consistent performance, making them ideal for high-reliability and high-frequency applications."
      },
      { 
        id: "inductors", 
        name: "Inductors", 
        description: "Inductors store energy in a magnetic field when current flows through them. They are widely used in power management, filtering, and signal conditioning to control current flow and reduce electrical noise in electronic circuits."
      }
    ]
  },
  {
    id: "automotive",
    name: "Automotive",
    slug: "automotive",
    shortDescription: "Advanced material solutions for automotive electronics manufacturers enabling long-term reliability.",
    fullDescription: "Advanced material solutions support the evolving needs of automotive electronics manufacturers by enabling automated production, long-term reliability, and consistent performance. Safety-critical and comfort-enhancing systems rely on high-performance materials to operate under demanding automotive conditions.",
    capability: "We provide comprehensive solutions for ADAS, automotive displays, camera lens bonding, ECUs, and e-mobility systems with materials designed for the stringent requirements of the automotive industry.",
    image: "/src/assets/industry-automotive.jpg",
    icon: "car",
    pdfUrl: "/brochures/automotive-brochure.pdf",
    solutionsFor: ["ADAS", "Automotive Displays", "Camera Lens Bonding", "Electronic Control Units (ECUs)", "E-Mobility Systems"],
    products: [
      { 
        id: "tim", 
        name: "Thermal Interface Materials", 
        description: "Thermal interface materials (TIMs) play a critical role by combining safety-certified electrical insulation with an efficient pathway for heat dissipation. Effective thermal management is essential to maintain the performance, reliability, and service life of electronic components."
      },
      { 
        id: "conformal-coating", 
        name: "Conformal Coatings", 
        description: "Conformal coating is a thin, protective polymer layer applied to printed circuit boards (PCBs) and electronic assemblies. It \"conforms\" to the shape of components, providing protection against moisture, dust, chemicals, corrosion, and temperature extremes."
      },
      { 
        id: "potting", 
        name: "Potting", 
        description: "Potting is the process of completely or partially encapsulating electronic components within a solid or gel-like compound. Potting materials provide strong protection against vibration, mechanical shock, moisture, and electrical stress."
      },
      { 
        id: "lpm", 
        name: "Low Pressure Molding", 
        description: "Low pressure molding is an encapsulation process where a low-viscosity thermoplastic material is injected around electronic assemblies at low pressure and temperature."
      },
      { 
        id: "gasketing", 
        name: "Gasketing", 
        description: "Liquid gasketing uses liquid-applied sealants to form a gasket directly on a component or enclosure surface, creating a custom, seamless seal."
      },
      { 
        id: "tca", 
        name: "Thermally Conductive Adhesives", 
        description: "Thermally conductive adhesives combine bonding strength with thermal management capabilities for automotive applications."
      }
    ]
  },
  {
    id: "aerospace-defence",
    name: "Aerospace & Defence",
    slug: "aerospace-defence",
    shortDescription: "Advanced adhesive and material solutions for aerospace structures, electronics, and propulsion systems.",
    fullDescription: "With over a century of evolution, the aerospace industry continues to advance through ongoing technological innovation. Digitalization, automation, advanced maintenance practices, sustainable material solutions, and next-generation transportation concepts are shaping the future of aerospace systems.",
    capability: "We provide certified aerospace-grade adhesives and materials for structures, electronics, interiors, MRO, and propulsion systems that meet rigorous international standards.",
    image: "/src/assets/industry-aerospace.jpg",
    icon: "plane",
    pdfUrl: "/brochures/aerospace-defence-brochure.pdf",
    solutionsFor: ["Aerospace Structures", "Aerospace Electronics", "Aerospace Interiors", "Aerospace MRO", "Aerospace Propulsion"],
    products: [
      { 
        id: "film-adhesives", 
        name: "Film Adhesives", 
        description: "Film adhesives are solid adhesive layers supplied in film form and used for structural bonding in aerospace assemblies. They provide uniform bond thickness, high strength, and excellent resistance to temperature, fatigue, and environmental stress, making them ideal for bonding metals and composite structures in aircraft and spacecraft."
      },
      { 
        id: "paste-adhesives", 
        name: "Paste Adhesives", 
        description: "Paste adhesives are spreadable bonding materials used where gap filling, complex geometries, or localized bonding is required. In aerospace applications, they offer high mechanical strength and durability while accommodating surface irregularities and maintaining performance under extreme operating conditions."
      },
      { 
        id: "primers", 
        name: "Primers", 
        description: "Primers are surface preparation coatings applied before bonding or coating processes. They enhance adhesion, corrosion resistance, and long-term durability by improving surface compatibility between substrates and adhesives, which is critical for reliable performance in aerospace environments."
      }
    ]
  },
  {
    id: "rail",
    name: "Rail",
    slug: "rail",
    shortDescription: "Reliable material solutions for rail transportation electronics and systems.",
    fullDescription: "The rail industry demands highly reliable and durable materials for electronic systems that operate in challenging environments. From signaling systems to passenger comfort features, advanced materials ensure safe and efficient rail operations.",
    capability: "We provide thermal management, protection, and bonding solutions designed to meet the rigorous standards of the rail industry, ensuring long service life and reliable performance.",
    image: "/src/assets/industry-heavy-machinery.jpg",
    icon: "train",
    pdfUrl: "/brochures/rail-brochure.pdf",
    products: [
      { 
        id: "tim", 
        name: "Thermal Interface Materials", 
        description: "High-performance thermal interface materials designed for rail electronics, providing efficient heat dissipation in compact enclosures."
      },
      { 
        id: "conformal-coating", 
        name: "Conformal Coatings", 
        description: "Protective coatings for rail electronics that withstand vibration, temperature cycling, and environmental exposure."
      },
      { 
        id: "potting", 
        name: "Potting Compounds", 
        description: "Encapsulation materials that protect rail electronics from mechanical stress, moisture, and harsh operating conditions."
      },
      { 
        id: "gasketing", 
        name: "Gasketing Solutions", 
        description: "Sealing solutions for rail enclosures and equipment that provide long-term protection against dust, water, and environmental contaminants."
      }
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
