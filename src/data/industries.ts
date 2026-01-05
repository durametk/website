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
    id: "power-industrial-automation",
    name: "Power & Industrial Automation",
    slug: "power-industrial-automation",
    shortDescription: "Advanced material and adhesive technologies for power generation, storage, and distribution solutions.",
    fullDescription: "As electrification expands worldwide and energy demands continue to grow, efficient power generation, storage, and distribution solutions are increasingly critical. Advanced material and adhesive technologies simplify system design, improve efficiency, and enhance long-term reliability—enabling higher power densities while maintaining low lifecycle costs.",
    capability: "We provide comprehensive material solutions for power and industrial automation applications, including thermal interface materials, circuit board protection, potting compounds, low-pressure molding, gasketing solutions, and thermally conductive adhesives that help improve system reliability and efficiency.",
    image: "/src/assets/industry-power.jpg",
    icon: "zap",
    pdfUrl: "/brochures/power-industrial-automation-brochure.pdf",
    products: [
      { 
        id: "power-1", 
        name: "Thermal Interface Materials", 
        description: "Thermal interface materials (TIMs) play a critical role by combining safety-certified electrical insulation with an efficient pathway for heat dissipation. Effective thermal management is essential to maintain the performance, reliability, and service life of electronic components. Many advanced TIM solutions offer high Relative Thermal Index (RTI) ratings exceeding 130 °C, meeting recognized safety standards. This helps reduce validation time and costs while accelerating time-to-market for UPS and power system designs. High-performance TIMs also enable greater power densities in compact designs, supporting space-efficient architectures in modern data centers and server environments." 
      },
      { 
        id: "power-2", 
        name: "Conformal Coatings", 
        description: "Conformal coating is a thin, protective polymer layer applied to printed circuit boards (PCBs) and electronic assemblies. It \"conforms\" to the shape of components, providing protection against moisture, dust, chemicals, corrosion, and temperature extremes, while maintaining electrical performance. Conformal coatings help improve reliability and extend the service life of electronic products used in harsh environments." 
      },
      { 
        id: "power-3", 
        name: "Potting Compounds", 
        description: "Potting is the process of completely or partially encapsulating electronic components within a solid or gel-like compound. Potting materials—such as epoxy, silicone, or polyurethane—provide strong protection against vibration, mechanical shock, moisture, and electrical stress. This method is commonly used where maximum environmental and electrical protection is required." 
      },
      { 
        id: "power-4", 
        name: "Low Pressure Molding", 
        description: "Low pressure molding is an encapsulation process where a low-viscosity thermoplastic material is injected around electronic assemblies at low pressure and temperature. This process protects sensitive components from moisture, vibration, dust, and mechanical damage without stressing the electronics. Low pressure molding is widely used for connector protection, sensor encapsulation, and cable assemblies." 
      },
      { 
        id: "power-5", 
        name: "Gasketing Solutions", 
        description: "Liquid gasketing uses liquid-applied sealants to form a gasket directly on a component or enclosure surface. Once cured, the material creates a custom, seamless seal that protects against dust, water, oils, and chemicals. Liquid gaskets eliminate the need for pre-formed gaskets, improve sealing consistency, and support complex or irregular geometries." 
      },
      { 
        id: "power-6", 
        name: "Thermally Conductive Adhesives", 
        description: "Advanced thermally conductive adhesives provide both bonding strength and efficient heat transfer, enabling reliable thermal management in power electronics and industrial automation systems." 
      }
    ]
  },
  {
    id: "components",
    name: "Components",
    slug: "components",
    shortDescription: "Electronic components for power control, signal management, and reliable connectivity.",
    fullDescription: "Electronic components such as resistors, capacitors, thin-film devices, RF filters, and antennas are fundamental to modern electronic systems. They support power control, signal management, and reliable connectivity across consumer, industrial, automotive, and telecom applications.",
    capability: "We supply a comprehensive range of electronic components including resistors, capacitors, thin-film products, and inductors from trusted manufacturers, supporting customers across diverse applications with reliable, high-quality components.",
    image: "/src/assets/industry-power.jpg",
    icon: "zap",
    pdfUrl: "/brochures/components-brochure.pdf",
    products: [
      { 
        id: "comp-1", 
        name: "Resistors", 
        description: "Resistors control the flow of electrical current in a circuit by providing a specific amount of resistance. They are used to regulate voltage levels, protect sensitive components, and ensure stable circuit operation across a wide range of electronic applications." 
      },
      { 
        id: "comp-2", 
        name: "Capacitors", 
        description: "Capacitors store and release electrical energy as needed within a circuit. They are commonly used for power smoothing, signal coupling, noise filtering, and energy storage in electronic devices." 
      },
      { 
        id: "comp-3", 
        name: "Thin Film Products", 
        description: "Thin film products are precision electronic components manufactured by depositing ultra-thin layers of material onto a substrate. They offer high accuracy, excellent stability, and consistent performance, making them ideal for high-reliability and high-frequency applications." 
      },
      { 
        id: "comp-4", 
        name: "Inductors", 
        description: "Inductors store energy in a magnetic field when current flows through them. They are widely used in power management, filtering, and signal conditioning to control current flow and reduce electrical noise in electronic circuits." 
      }
    ]
  },
  {
    id: "automotive",
    name: "Automotive",
    slug: "automotive",
    shortDescription: "Advanced material solutions for automotive electronics manufacturers enabling automated production and long-term reliability.",
    fullDescription: "Advanced material solutions support the evolving needs of automotive electronics manufacturers by enabling automated production, long-term reliability, and consistent performance. Safety-critical and comfort-enhancing systems rely on high-performance materials to operate under demanding automotive conditions.",
    capability: "We provide comprehensive material solutions for ADAS, automotive displays, camera lens bonding, Electronic Control Units (ECUs), and E-Mobility systems, including thermal interface materials, conformal coatings, potting, low-pressure molding, gasketing, and thermally conductive adhesives.",
    image: "/src/assets/industry-automotive.jpg",
    icon: "car",
    pdfUrl: "/brochures/automotive-brochure.pdf",
    products: [
      { 
        id: "auto-1", 
        name: "Thermal Interface Materials", 
        description: "High-performance thermal interface materials for automotive electronics, ensuring efficient heat dissipation in ADAS systems, ECUs, and power electronics while meeting automotive reliability standards." 
      },
      { 
        id: "auto-2", 
        name: "Conformal Coatings", 
        description: "Automotive-grade conformal coatings that protect PCBs and electronic assemblies from moisture, temperature extremes, and harsh automotive environments, ensuring long-term reliability." 
      },
      { 
        id: "auto-3", 
        name: "Potting", 
        description: "Potting compounds designed for automotive applications, providing robust protection against vibration, mechanical shock, and environmental stress in ECUs and sensor systems." 
      },
      { 
        id: "auto-4", 
        name: "Low Pressure Molding", 
        description: "Low-pressure molding solutions for automotive connector protection, sensor encapsulation, and cable assemblies, offering fast processing without damaging sensitive electronics." 
      },
      { 
        id: "auto-5", 
        name: "Gasketing", 
        description: "Liquid gasketing solutions for automotive enclosures and housings, creating custom seals that protect against dust, water, and chemicals in demanding automotive environments." 
      },
      { 
        id: "auto-6", 
        name: "Thermally Conductive Adhesives", 
        description: "Thermally conductive adhesives for camera lens bonding, display assembly, and component mounting in automotive applications, providing both structural integrity and thermal management." 
      }
    ]
  },
  {
    id: "aerospace-defence",
    name: "Aerospace & Defence",
    slug: "aerospace-defence",
    shortDescription: "Advanced adhesive and material solutions for aerospace structures, electronics, interiors, MRO, and propulsion systems.",
    fullDescription: "With over a century of evolution, the aerospace industry continues to advance through ongoing technological innovation. Digitalization, automation, advanced maintenance practices, sustainable material solutions, and next-generation transportation concepts are shaping the future of aerospace systems.",
    capability: "We provide specialized adhesive and material solutions for aerospace structures, aerospace electronics, aerospace interiors, aerospace MRO, and aerospace propulsion applications, including film adhesives, paste adhesives, and primers that meet stringent aerospace quality and performance standards.",
    image: "/src/assets/industry-aerospace.jpg",
    icon: "plane",
    pdfUrl: "/brochures/aerospace-defence-brochure.pdf",
    products: [
      { 
        id: "aero-1", 
        name: "Film Adhesives", 
        description: "Film adhesives are solid adhesive layers supplied in film form and used for structural bonding in aerospace assemblies. They provide uniform bond thickness, high strength, and excellent resistance to temperature, fatigue, and environmental stress, making them ideal for bonding metals and composite structures in aircraft and spacecraft." 
      },
      { 
        id: "aero-2", 
        name: "Paste Adhesives", 
        description: "Paste adhesives are spreadable bonding materials used where gap filling, complex geometries, or localized bonding is required. In aerospace applications, they offer high mechanical strength and durability while accommodating surface irregularities and maintaining performance under extreme operating conditions." 
      },
      { 
        id: "aero-3", 
        name: "Primers", 
        description: "Primers are surface preparation coatings applied before bonding or coating processes. They enhance adhesion, corrosion resistance, and long-term durability by improving surface compatibility between substrates and adhesives, which is critical for reliable performance in aerospace environments." 
      }
    ]
  },
  {
    id: "rail",
    name: "Rail",
    slug: "rail",
    shortDescription: "Reliable material solutions for rail transportation systems and infrastructure.",
    fullDescription: "Rail transportation systems require materials that can withstand continuous operation, extreme environmental conditions, and stringent safety standards. Our solutions support rail electronics, signaling systems, and infrastructure applications with reliable, high-performance materials.",
    capability: "We provide material solutions for rail electronics, control systems, and infrastructure applications, including thermal management, circuit protection, and bonding solutions that ensure reliable operation in demanding rail environments.",
    image: "/src/assets/industry-power.jpg",
    icon: "zap",
    pdfUrl: "/brochures/rail-brochure.pdf",
    products: [
      { 
        id: "rail-1", 
        name: "Thermal Interface Materials", 
        description: "High-performance thermal interface materials for rail electronics and control systems, ensuring efficient heat dissipation in demanding rail applications." 
      },
      { 
        id: "rail-2", 
        name: "Conformal Coatings", 
        description: "Protective conformal coatings for rail electronics, providing robust protection against moisture, vibration, and temperature extremes in rail environments." 
      },
      { 
        id: "rail-3", 
        name: "Potting Compounds", 
        description: "Potting solutions for rail control systems and electronics, offering maximum protection against mechanical stress and environmental hazards." 
      },
      { 
        id: "rail-4", 
        name: "Gasketing Solutions", 
        description: "Liquid gasketing for rail equipment enclosures, creating reliable seals that protect against dust, water, and harsh environmental conditions." 
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
