// Main JavaScript for the gt86partz website

// Set current year in footer
document.addEventListener("DOMContentLoaded", () => {
  const currentYearElement = document.getElementById("current-year")
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear()
  }

  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle")
  const mobileMenu = document.getElementById("mobile-menu")
  const menuIcon = document.querySelector(".menu-icon")
  const closeIcon = document.querySelector(".close-icon")

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener("click", (event) => {
      event.stopPropagation() // Prevent the click from bubbling to document
      mobileMenu.classList.toggle("active")
      if (menuIcon && closeIcon) {
        menuIcon.classList.toggle("hidden")
        closeIcon.classList.toggle("hidden")
      }
      document.body.classList.toggle("menu-open")
    })

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
      // Check if menu is active and click is outside menu and toggle button
      if (
        mobileMenu.classList.contains("active") &&
        !mobileMenu.contains(event.target) &&
        !mobileMenuToggle.contains(event.target)
      ) {
        mobileMenu.classList.remove("active")
        if (menuIcon && closeIcon) {
          menuIcon.classList.remove("hidden")
          closeIcon.classList.add("hidden")
        }
        document.body.classList.remove("menu-open")
      }
    })

    // Prevent clicks inside the mobile menu from closing it
    mobileMenu.addEventListener("click", (event) => {
      event.stopPropagation()
    })
  }

  // Header scroll effect
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header")
    if (header) {
      if (window.scrollY > 10) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }
    }
  })

  // Hero image slider
  const heroImages = document.querySelectorAll(".hero-image")
  if (heroImages.length > 0) {
    let currentImageIndex = 0

    function rotateHeroImages() {
      heroImages[currentImageIndex].classList.remove("active")
      currentImageIndex = (currentImageIndex + 1) % heroImages.length
      heroImages[currentImageIndex].classList.add("active")
    }

    // Change image every 5 seconds
    setInterval(rotateHeroImages, 5000)
  }

  // Animation on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(
      ".product-card, .testimonial-card, .feature-card, .brand-logo, .contact-info-item, .timeline-item, .team-card, .faq-item, .review-card",
    )

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (elementPosition < windowHeight - 50) {
        element.classList.add("animate")
      }
    })
  }

  window.addEventListener("scroll", animateOnScroll)
  animateOnScroll() // Run once on page load

  // FAQ Accordion
  const faqQuestions = document.querySelectorAll(".faq-question")

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const faqItem = question.parentElement
      const isActive = faqItem.classList.contains("active")

      // Close all FAQ items
      document.querySelectorAll(".faq-item").forEach((item) => {
        item.classList.remove("active")
      })

      // If clicked item wasn't active, open it
      if (!isActive) {
        faqItem.classList.add("active")
      }
    })
  })

  // Enhanced product data with additional details for product detail page
  const products = [
    {
      id: "brake-kit",
      name: "High-Performance Brake Kit",
      category: "Braking System",
      price: 299.99,
      image: "images/product-1.jpg",
      images: ["images/product-1.jpg", "images/product-1-2.jpg", "images/product-1-3.jpg", "images/product-1-4.jpg"],
      rating: 4.8,
      reviewCount: 24,
      sku: "BRK-HP-001",
      description:
        "Upgrade your vehicle's stopping power with our high-performance brake kit. Designed for superior heat dissipation and reduced brake fade.",
      longDescription:
        "Our High-Performance Brake Kit is engineered to provide exceptional stopping power and consistent performance under demanding conditions. The kit includes premium rotors with a cross-drilled and slotted design for improved heat dissipation, reducing the risk of brake fade during intense driving sessions. The high-performance brake pads offer excellent initial bite and maintain their effectiveness across a wide temperature range. This complete kit is a direct replacement for your stock braking system, offering a significant upgrade in both performance and safety without requiring any modifications to your vehicle.",
      features: [
        "Cross-drilled and slotted rotors for improved heat dissipation",
        "High-performance brake pads with excellent initial bite",
        "Stainless steel brake lines for improved pedal feel",
        "Direct replacement for stock components",
        "Includes all necessary hardware for installation",
      ],
      specifications: [
        { name: "Rotor Material", value: "High-carbon steel" },
        { name: "Rotor Finish", value: "Zinc-coated" },
        { name: "Pad Material", value: "Semi-metallic compound" },
        { name: "Operating Temperature", value: "Up to 1,400°F (760°C)" },
        { name: "Weight", value: "32 lbs (14.5 kg)" },
        { name: "Warranty", value: "2 years" },
      ],
      tags: ["Brakes", "Performance", "Safety"],
      relatedProducts: ["sport-brake-pads", "brake-fluid", "wheel-spacers"],
    },
    {
      id: "uel-header",
      name: "UEL Header for FRS/BRZ/86 or New Gen BRZ & GR86",
      category: "Header",
      price: 499.99,
      image: "images/prod-2.jpg",
      images: ["images/prod-2.jpg", "images/prod2-2.jpg"],
      rating: 4.9,
      reviewCount: 18,
      sku: "HDR-UEL-002",
      description:
        "Enhance your Subaru BRZ or Toyota 86 with our Unequal Length (UEL) header for improved torque and that distinctive Subaru rumble.",
      longDescription:
        "Our Unequal Length (UEL) Header is specifically designed for the Subaru BRZ, Toyota 86, and Scion FRS platforms, including the new generation models. This header is crafted from high-quality 304 stainless steel with precision TIG welds for durability and performance. The unequal length design creates the iconic Subaru rumble while improving exhaust flow and increasing torque in the mid-range. Each header is dyno-tested to ensure consistent performance gains across the powerband. Installation is straightforward with our direct-fit design, and all necessary gaskets and hardware are included for a complete installation.",
      features: [
        "Made from 304 stainless steel for durability",
        "Precision TIG welded for strength and quality",
        "Unequal length design for the distinctive Subaru rumble",
        "Improves mid-range torque and throttle response",
        "Direct fit with no modifications required",
        "Includes all necessary gaskets and hardware",
      ],
      specifications: [
        { name: "Material", value: "304 Stainless Steel" },
        { name: "Primary Tube Diameter", value: "1.5 inches (38mm)" },
        { name: "Collector Size", value: "2.5 inches (63.5mm)" },
        { name: "Weight", value: "18 lbs (8.2 kg)" },
        { name: "Finish", value: "Polished" },
        { name: "Warranty", value: "Lifetime against manufacturing defects" },
      ],
      tags: ["Exhaust", "Performance", "Engine"],
      relatedProducts: ["exhaust-system", "cold-air-intake", "engine"],
    },
    {
      id: "bumper",
      name: "Subaru BRZ complete front Bumper",
      category: "bumper",
      price: 499.99,
      image: "images/prod-4.jpg",
      images: ["images/prod-4.jpg", "images/prod-41.jpg", "images/prod-42.jpg",],
      rating: 4.7,
      reviewCount: 15,
      sku: "BMP-BRZ-003",
      description:
        "OEM-quality complete front bumper for Subaru BRZ. Direct replacement with perfect fitment and finish.",
      longDescription:
        "This complete front bumper assembly for the Subaru BRZ is manufactured to OEM specifications, ensuring perfect fitment and finish. Made from high-quality automotive-grade materials, this bumper offers the same durability as the factory part while providing a fresh, clean look for your vehicle. The bumper comes pre-drilled for easy installation and includes all mounting brackets and hardware. Whether you're replacing a damaged bumper or upgrading your vehicle's appearance, this complete assembly is the perfect solution for maintaining your BRZ's factory look with OEM-quality components.",
      features: [
        "OEM-quality replacement front bumper",
        "Perfect fitment with factory specifications",
        "Made from durable automotive-grade materials",
        "Pre-drilled for easy installation",
        "Includes all mounting brackets and hardware",
        "Ready for paint to match your vehicle",
      ],
      specifications: [
        { name: "Material", value: "Automotive-grade plastic" },
        { name: "Fitment", value: "2013-2020 Subaru BRZ" },
        { name: "Color", value: "Unpainted (ready for paint)" },
        { name: "Weight", value: "15 lbs (6.8 kg)" },
        { name: "Installation", value: "Direct bolt-on replacement" },
        { name: "Warranty", value: "1 year against manufacturing defects" },
      ],
      tags: ["Exterior", "Body Parts", "OEM"],
      relatedProducts: ["quater-panel", "fog-lights", "led-headlight"],
    },
    {
      id: "wheels",
      name: "Set of Konig Hypergrams. 17x9 +40 (5x100) Gunmetal Grey",
      category: "Wheels",
      price: 1500,
      image: "images/wheel.jpg",
      images: ["images/wheel.jpg", "images/wheel1.jpg"],
      rating: 4.9,
      reviewCount: 60,
      sku: "WHE-SKH-004",
      description:
        "Engineered with flow-formed technology for exceptional strength and reduced weight, these wheels offer an aggressive stance and improved handling for compatible 5x100 vehicles.",
      longDescription:
        "Transform your vehicle's dynamics and aesthetics with the Konig Hypergram 17x9 +40 (5x100) wheel in a sleek Gunmetal Grey finish. Utilizing Konig's advanced Flow-Formed Technology, the Hypergram is manufactured by applying extreme pressure to the wheel's inner barrel while spinning, stretching, and shaping the aluminum. This process aligns the grain structure of the aluminum, resulting in a lighter and stronger wheel than traditional cast methods, without the expense of a fully forged wheel. The aggressive 17x9 dimensions combined with a +40 offset push the wheels out for a more muscular stance and improved cornering stability, making it an ideal choice for track enthusiasts and daily drivers alike seeking a significant performance upgrade. The classic 5x100 bolt pattern ensures compatibility with a wide range of popular performance vehicles, while the durable Gunmetal Grey finish provides a sophisticated, motorsport-inspired look that complements any vehicle color. Experience sharper turn-in, reduced unsprung mass, and a head-turning appearance",
      features: [
        "Flow-Formed Technology",
        "Lightweight Design",
        "Aggressive Stance",
        "Gunmetal Grey Finish",
        "Multi-Spoke Design",
        "Direct Fit (5x100 applications)",
      ],
      specifications: [
        { name: "Brand", value: "DST" },
        { name: "Model", value: "Konig Hypergram" },
        { name: "Diameter", value: "17inches" },
        { name: "Width", value: "9inches" },
        { name: "Offset", value: "+40 mm" },
        { name: "Bolt Pattern (PCD)", value: "5 x 100" },
        { name: "Construction", value: "Flow-formed" },
      ],
      tags: ["Stability", "Performance", "Handling"],
      relatedProducts: ["lowering-springs", "strut-brace", "sway-bar"],
    },
       {
      id: "wheel",
      name: "TE37 REPS Wheels – 18x10.5 +20 (5x100) – Ceramic Coated",
      category: "Wheels",
      price: 1599.99,
      image: "images/wheel2.jpg",
      images: ["images/wheel3.jpg", "images/wheel4.jpg"],
      rating: 4.9,
      reviewCount: 60,
      sku: "WHE-SKH-012",
      description:
        "Upgrade your vehicle's performance and style with these high-quality TE37 REPS wheels. Designed for an aggressive fitment, these 18x10.5 +20 wheels feature a 5x100 bolt pattern, making them compatible with a wide range of performance vehicles. The ceramic-coated finish ensures long-lasting protection against corrosion and brake dust, while the lightweight forged-inspired construction enhances handling and acceleration.",
      longDescription:
        "Transform your vehicle's dynamics and aesthetics with the Konig Hypergram 17x9 +40 (5x100) wheel in a sleek Gunmetal Grey finish. Utilizing Konig's advanced Flow-Formed Technology, the Hypergram is manufactured by applying extreme pressure to the wheel's inner barrel while spinning, stretching, and shaping the aluminum. This process aligns the grain structure of the aluminum, resulting in a lighter and stronger wheel than traditional cast methods, without the expense of a fully forged wheel. The aggressive 17x9 dimensions combined with a +40 offset push the wheels out for a more muscular stance and improved cornering stability, making it an ideal choice for track enthusiasts and daily drivers alike seeking a significant performance upgrade. The classic 5x100 bolt pattern ensures compatibility with a wide range of popular performance vehicles, while the durable Gunmetal Grey finish provides a sophisticated, motorsport-inspired look that complements any vehicle color. Experience sharper turn-in, reduced unsprung mass, and a head-turning appearance",
      features: [
        "Aggressive Fitment – 18x10.5 +20 for a wide, flush stance",
        "Lightweight & Strong – Forged-inspired construction for performance driving",
        "Ceramic Coated – Enhanced protection and glossier finish",
        "Direct Bolt-On (5x100) – Fits popular performance models",
        "Ready to Ship – $1600 shipped for the full set",
      ],
      specifications: [
        { name: "Brand", value: "TE37 REPS" },
        { name: "Diameter", value: "18 inches" },
        { name: "Width", value: "10.5 inches" },
        { name: "Offset", value: "+20 mm" },
        { name: "Bolt Pattern (PCD)", value: "5 x 100" },
        { name: "Finish", value: "Ceremic Coated" },
      ],
      tags: ["Stability", "Performance", "Handling"],
      relatedProducts: ["wheels"],
    },
    {
      id: "exhaust-system",
      name: "GR86/BRZ OEM Mid-pipe",
      category: "Exhaust",
      price: 550,
      image: "images/exhaust.jpg",
      images: ["images/exhaust.jpg", "images/exhaust-1.jpg", "images/exhaust-2.jpg"],
      rating: 4.6,
      reviewCount: 19,
      sku: "EXH-PRF-005",
      description:
        "Double Wall Burnt Tip Remark Axl.. with improved flow and aggressive sound. Stainless steel construction for durability.",
      longDescription:
        "Our Performance Exhaust System is designed to maximize exhaust flow, reduce backpressure, and deliver an aggressive sound that enhances your driving experience. Constructed from high-quality T304 stainless steel with mandrel-bent tubing, this system ensures optimal flow characteristics and long-lasting durability. The system includes a high-flow muffler with a polished tip for an attractive appearance. Installation is straightforward with our direct-fit design that uses factory mounting locations. This exhaust system not only improves performance but also reduces weight compared to the stock system, contributing to better overall vehicle dynamics.",
      features: [
        "T304 stainless steel construction",
        "Mandrel-bent tubing for optimal flow",
        "High-flow muffler design",
        "Burnt exhaust tip",
        "Reduced weight compared to stock",
        "Aggressive sound profile",
      ],
      specifications: [
        { name: "Material", value: "T304 Stainless Steel" },
        { name: "Pipe Diameter", value: "2.5 inches (63.5mm)" },
        { name: "Muffler Type", value: "Straight-through design" },
        { name: "Tip Size", value: "4 inches (101.6mm)" },
        { name: "Weight Reduction", value: "Approximately 10 lbs (4.5 kg)" },
        { name: "Sound Level", value: "Medium-aggressive" },
        { name: "Warranty", value: "Lifetime against manufacturing defects" },
      ],
      tags: ["Exhaust", "Performance", "Engine"],
      relatedProducts: ["uel-header", "cold-air-intake", "engine"],
    },
    {
      id: "brake-pads",
      name: "BRZ/86/FRS OEM Brembos complete set.",
      category: "Braking System",
      price: 89.99,
      image: "images/brake.jpg",
      images: ["images/brake.jpg", "images/brake1.jpg"],
      rating: 4.5,
      reviewCount: 31,
      sku: "BRK-PAD-006",
      description:
        "High-performance sport brake pads with excellent stopping power and low dust. Perfect for spirited street driving.",
      longDescription:
        "Our Sport Brake Pads are engineered for enthusiasts who demand better stopping power without the drawbacks of full race compounds. These pads feature a semi-metallic compound that offers excellent initial bite and consistent performance across a wide temperature range. The unique formulation produces minimal brake dust, keeping your wheels cleaner longer. These pads are designed to be gentle on rotors while still providing significantly improved stopping power over stock pads. They're ideal for spirited street driving and occasional track days, offering a perfect balance between performance and everyday usability.",
      features: [
        "Semi-metallic compound for improved stopping power",
        "Low dust formulation keeps wheels cleaner",
        "Excellent initial bite and pedal feel",
        "Minimal rotor wear compared to race compounds",
        "Reduced fade under repeated heavy braking",
        "Chamfered and slotted design for noise reduction",
      ],
      specifications: [
        { name: "Material", value: "Semi-metallic compound" },
        { name: "Operating Temperature", value: "100-800°F (38-427°C)" },
        { name: "Break-in Period", value: "200-300 miles" },
        { name: "Dust Level", value: "Low" },
        { name: "Noise Level", value: "Low-Medium" },
        { name: "Warranty", value: "1 year" },
      ],
      tags: ["Brakes", "Performance", "Safety"],
      relatedProducts: ["brake-kit", "brake-fluid", "brake-lines"],
    },

        {
      id: "engine",
      name: "Subaru BRZ FA20 2.0L Engine",
      category: "Engine",
      price: 3500,
      image: "images/subaru.jpg",
      images: ["images/subaru.jpg", "images/subaru1.jpg", "images/prod-6.jpg",],
      rating: 4.7,
      reviewCount: 27,
      sku: "ENG-CAI-017",
      description:
        "SUBARU BRZ/86 2014-2016 ENGINE PETROL, 2.0, FA20, CAST ALLOY/RED MANIFORD, Z1 (70km).",
      longDescription:
        "Elevate the heart of your 2014-2016 Subaru BRZ or Toyota 86 with our meticulously prepared FA20 engine, featuring the striking Cast Alloy/Red Manifold. This isn't just a replacement; it's a performance-focused solution designed to rejuvenate or significantly upgrade your driving experience. Bearing the Z1 designation, this particular unit boasts an incredibly low 70 kilometers of documented use, representing a near-new state with minimal wear, making it an exceptional find for enthusiasts seeking peak performance and longevity.",
      features: [
        "The custom Red Cast Alloy manifold provides a significant visual upgrade",
        "Heat shield to isolate from engine bay temperatures",
        "Direct bolt-on installation",
        "Engineered for a seamless installation,",
      ],
      specifications: [
        { name: "engine type", value: "FA20 Boxer 4-Cylinder" },
        { name: "Displacement", value: "2.0 littres" },
        { name: "Mileage", value: "Only 70km" },
        { name: "Manifold", value: "Cast Alloy Intake Manifold finished in a vibrant Red" },
        { name: "Warranty", value: "Million-mile limited warranty" },
      ],
      tags: ["Engine", "Performance", ],
      relatedProducts: ["uel-header", "exhaust-system",],
    },
{
  "id": "steering-wheel",
  "name": "Custom Carbon Fiber & Red Leather Steering Wheel with GR Logo",
  "category": "Interior",
  "price": 399.99,
  "image": "images/stir.jpg",
  "images": ["images/stir.jpg", "images/stir2jpg.jpg"],
  "rating": 4.9,
  "reviewCount": 15,
  "sku": "STW-CFRL-001",
  "description": "Enhance your driving experience with this custom-designed steering wheel, featuring a sleek carbon fiber and vibrant red perforated leather finish. The ergonomic design provides superior grip and comfort, while the integrated GR (Gazoo Racing) logo adds a sporty touch. Perfect for upgrading your Toyota's interior with a premium, performance-oriented look.",
  "longDescription": "Elevate the aesthetics and feel of your vehicle's interior with this meticulously crafted custom steering wheel. The upper and lower sections are made from high-quality carbon fiber, offering a lightweight and durable construction with a modern, high-tech appearance. The side grips are wrapped in striking red perforated leather, providing excellent ventilation and a secure, comfortable hold during spirited driving. The center features a custom red airbag cover with a prominent black Toyota emblem, and the lower spoke proudly displays the GR logo, signifying a connection to Toyota's performance heritage. This steering wheel is designed for a direct fit, ensuring a seamless integration into your vehicle's existing setup, and is an ideal upgrade for enthusiasts looking to personalize their ride with a blend of luxury and sportiness.",
  "features": [
    "Premium Carbon Fiber Construction – Lightweight and stylish",
    "Vibrant Red Perforated Leather – Enhanced grip and comfort",
    "Integrated GR Logo – Sporty and performance-inspired",
    "Ergonomic Design – Improved handling feel",
    "Direct Replacement – Easy installation for compatible models"
  ],
  "specifications": [
    { "name": "Material", "value": "Carbon Fiber, Perforated Leather" },
    { "name": "Color", "value": "Black (Carbon Fiber), Red (Leather)" },
    { "name": "Logo", "value": "Toyota (center), GR (bottom spoke)" },
    { "name": "Compatibility", "value": "Designed for various Toyota models (please verify fitment)" }
  ],
  "tags": ["Steering Wheel", "Carbon Fiber", "Red Leather", "Toyota", "GR", "Interior Upgrade", "Sporty"],
  "relatedProducts": ["ceehor-carbon-fiber-steering-wheel", "recaro-pole-position-pepita-seats", "interior-trim"],
}, 
{
  "id": "valenti-tail-lights",
  "name": "Custom Clear Valenti Jewel Ultra Sequential Tail Lights for FRS/BRZ/86 (13-20)",
  "category": "Lighting",
  "price": 399.99,
  "image": "images/light.jpg",
  "images": ["images/light.jpg","images/light2.jpg", "images/light3.jpg"],
  "rating": 4.5,
  "reviewCount": 7,
  "sku": "LGT-VAL-001",
  "description": "Unique 1 of 1 custom clear Valenti Jewel Ultra Taillights for 2013-2020 FRS/BRZ/86 models. Features sequential turn signals and a captivating startup animation. Fully functional with a clear aesthetic.",
  "longDescription": "Experience a truly unique look with these custom clear Valenti Jewel Ultra Tail Lights, designed specifically for 2013-2020 Scion FRS, Subaru BRZ, and Toyota 86 models. These are a one-of-a-kind modification, originally featuring a smoked clear appearance from Valenti, but customized to be fully clear by removing the internal red reflector. While the lights function perfectly with all features, including sequential turn signals and a distinct startup animation, the sealing has been modified. There is a possibility of minor moisture ingress (which typically clears after a day), and the lights would benefit from an improved seal for long-term protection. Despite this, all lighting functions are in perfect working order, offering a distinctive and modern upgrade to your vehicle's rear aesthetics and visibility.",
  "features": [
    "1 of 1 Custom Clear Design – Unique aesthetic",
    "Sequential Turn Signal – Modern and dynamic indicator",
    "Startup Animation – Eye-catching light sequence on ignition",
    "Direct Fit for 2013-2020 FRS/BRZ/86 – Seamless integration",
    "Enhanced Visibility – Bright and clear illumination"
  ],
  "specifications": [
    { "name": "Brand", "value": "Valenti (Customized)" },
    { "name": "Compatibility", "value": "2013-2020 Scion FRS, Subaru BRZ, Toyota 86" },
    { "name": "Light Type", "value": "LED" },
    { "name": "Functions", "value": "Running Light, Brake Light, Sequential Turn Signal, Reverse Light, Startup Animation" },
    { "name": "Lens Color", "value": "Clear" },
    { "name": "Condition", "value": "Used - Fully functional, re-sealed (minor moisture ingress possible, see description)" }
  ],
  "tags": ["Tail Lights", "Valenti", "FRS", "BRZ", "86", "Sequential", "Custom", "Lighting", "Exterior"],
  "relatedProducts": ["gr86-brz-led-tail-lights-elite-series", "led-headlight", "fog-lights"],
},   
    {
      id: "fog-lights",
      name: "Vland Smocked Clear Sequence Taillight FRS BRZ 86",
      category: "Lighting",
      price: 350,
      image: "images/fog-light3.jpg",
      images: ["images/fog-light2.jpg", "images/fog-light3.jpg", "images/fog-light1.jpg"],
      rating: 4.8,
      reviewCount: 23,
      sku: "LGT-FOG-008",
      description:
        "Complete Taillight light kit with improved visibility and modern appearance. Direct replacement for factory taillights. Brand new in box, only opened for photos",
      longDescription:
        "Our Taillight Light Kit provides superior illumination in adverse weather conditions while giving your vehicle a modern, premium appearance. These lights use advanced LED technology to produce a bright, focused beam with a color temperature that closely matches daylight for improved visibility. The housing is constructed from durable, weather-resistant materials and features an adjustable mounting bracket for precise beam alignment. This kit is a direct replacement for factory lights, using existing mounting points and wiring harnesses for straightforward installation. Each kit includes two complete light assemblies, wiring adapters, and detailed installation instructions.",
      features: [
        "Advanced LED technology for improved visibility",
        "Boomerang daytime running light",
        "Weather-resistant housing and sealed construction",
        "Adjustable mounting for precise beam alignment",
        "Direct replacement using factory mounting points",
        "Low power consumption compared to halogen lights",
      ],
      specifications: [
        { name: "Light Source", value: "High-intensity LEDs" },
        { name: "Color Temperature", value: "6000K (Cool White)" },
        { name: "Power Consumption", value: "25W per light" },
        { name: "Lumens", value: "1800 lumens per light" },
        { name: "Housing Material", value: "Impact-resistant polycarbonate" },
        { name: "Lens", value: "Projector-style with anti-glare coating" },
        { name: "Lifespan", value: "50,000+ hours" },
        { name: "Warranty", value: "3 years" },
      ],
      tags: ["Lighting", "Visibility", "Exterior"],
      relatedProducts: ["led-headlight", "bumper", "exterior-accessories"],
    },

        {
      id: "led-headlight",
      name: "Original facelift Headlamp",
      category: "Lighting",
      price: 300,
      image: "images/head2.jpg",
      images: ["images/head2.jpg", "images/head1.jpg", "images/head-3.jpg"],
      rating: 4.7,
      reviewCount: 20,
      sku: "LGT-FOG-008",
      description:
        "Complete Facelift headlamp with improved visibility and modern appearance.",
      longDescription:
        "The housing is constructed from durable, weather-resistant materials and features an adjustable mounting bracket for precise beam alignment. This kit is a direct replacement for factory lights, using existing mounting points and wiring harnesses for straightforward installation. Each kit includes two complete light assemblies, wiring adapters, and detailed installation instructions.",
      features: [
        "Advanced LED technology for improved visibility",
        "Boomerang daytime running light",
        "Weather-resistant housing and sealed construction",
        "Adjustable mounting for precise beam alignment",
        "Direct replacement using factory mounting points",
        "Low power consumption compared to halogen lights",
      ],
      specifications: [
        { name: "Light Source", value: "High-intensity LEDs" },
        { name: "Color Temperature", value: "6000K (Cool White)" },
        { name: "Power Consumption", value: "25W per light" },
        { name: "Lumens", value: "1800 lumens per light" },
        { name: "Housing Material", value: "Impact-resistant polycarbonate" },
        { name: "Lens", value: "Projector-style with anti-glare coating" },
        { name: "Lifespan", value: "50,000+ hours" },
        { name: "Warranty", value: "3 years" },
      ],
      tags: ["Lighting", "Visibility", "Exterior"],
      relatedProducts: ["fog-lights", "bumper", "exterior-accessories"],
    },
    
    {
      id: "steering-wheel",
      name: "Racing Steering Wheel",
      category: "Interior",
      price: 199.99,
      image: "images/product-1.jpg",
      images: ["images/product-1.jpg", "images/product-1-2.jpg", "images/product-1-3.jpg", "images/product-1-4.jpg"],
      rating: 4.7,
      reviewCount: 16,
      sku: "INT-SW-009",
      description:
        "Premium racing steering wheel with ergonomic design and premium materials for improved grip and control.",
      longDescription:
        "Our Racing Steering Wheel is designed for driving enthusiasts who demand better feedback and control. Featuring a smaller diameter than stock wheels, this racing-inspired design allows for quicker steering inputs and improved response. The wheel is wrapped in premium materials with ergonomic thumb grips and a thicker rim for enhanced comfort during spirited driving. The flat bottom design provides additional leg clearance and a sportier look. This steering wheel is a direct replacement for your factory wheel and retains compatibility with all steering wheel controls and airbag functionality, ensuring both performance and safety.",
      features: [
        "Smaller diameter for quicker steering response",
        "Premium materials with ergonomic thumb grips",
        "Thicker rim for improved grip and comfort",
        "Flat bottom design for additional leg clearance",
        "Compatible with factory steering wheel controls",
        "Retains airbag functionality for safety",
      ],
      specifications: [
        { name: "Diameter", value: "350mm (13.8 inches)" },
        { name: "Grip Material", value: "Perforated leather with Alcantara sections" },
        { name: "Spoke Material", value: "Aluminum" },
        { name: "Weight", value: "1.2 kg (2.6 lbs)" },
        { name: "Airbag Compatible", value: "Yes" },
        { name: "Controls Compatible", value: "Yes" },
        { name: "Warranty", value: "2 years" },
      ],
      tags: ["Interior", "Performance", "Steering"],
      relatedProducts: ["shift-knob", "pedal-covers", "interior-trim"],
    },
    {
      id: "clutch-kit",
      name: "Performance Clutch Kit",
      category: "Transmission",
      price: 349.99,
      image: "images/product-2.jpg",
      images: ["images/product-2.jpg", "images/product-2-2.jpg", "images/product-2-3.jpg", "images/product-2-4.jpg"],
      rating: 4.6,
      reviewCount: 14,
      sku: "TRN-CLT-010",
      description:
        "High-performance clutch kit with increased torque capacity while maintaining comfortable pedal feel for daily driving.",
      longDescription:
        "Our Performance Clutch Kit is engineered to handle increased torque loads while maintaining a street-friendly pedal feel. The kit features a pressure plate with increased clamping force, a performance disc with a higher coefficient of friction, and a precision-machined flywheel. This combination provides improved power transfer and durability without the harsh engagement often associated with racing clutches. The organic/kevlar friction material offers excellent grip while still allowing for smooth engagement, making this clutch suitable for both spirited driving and daily commuting. Each kit includes all necessary components for a complete clutch replacement, including an alignment tool and detailed installation instructions.",
      features: [
        "Increased torque capacity over stock clutch",
        "Organic/kevlar friction material for smooth engagement",
        "Pressure plate with optimized clamping force",
        "Precision-machined flywheel for reduced vibration",
        "Complete kit with all necessary components",
        "Suitable for both performance driving and daily use",
      ],
      specifications: [
        { name: "Torque Capacity", value: "Up to 400 ft-lbs" },
        { name: "Pressure Plate", value: "High-carbon steel with increased spring rate" },
        { name: "Clutch Disc", value: "Organic/kevlar composite friction material" },
        { name: "Flywheel", value: "Chromoly steel, lightweight design" },
        { name: "Pedal Effort Increase", value: "Approximately 15% over stock" },
        { name: "Break-in Period", value: "500 miles recommended" },
        { name: "Warranty", value: "1 year" },
      ],
      tags: ["Transmission", "Performance", "Drivetrain"],
      relatedProducts: ["short-shifter", "transmission-mount", "driveshaft"],
    },
    {
      id: "lowering-springs",
      name: "Lowering Springs",
      category: "Suspension",
      price: 219.99,
      image: "images/product-3.jpg",
      images: ["images/product-3.jpg", "images/product-3-2.jpg", "images/product-3-3.jpg", "images/product-3-4.jpg"],
      rating: 4.5,
      reviewCount: 29,
      sku: "SUS-SPR-011",
      description:
        "Performance lowering springs that reduce ride height for improved handling and appearance while maintaining ride comfort.",
      longDescription:
        "Our Performance Lowering Springs are designed to lower your vehicle's center of gravity for improved handling characteristics and a more aggressive stance. These springs are manufactured from high-tensile chromium silicon wire and undergo a shot-peening process to reduce stress points and extend service life. The progressive spring rate design provides excellent handling during aggressive driving while maintaining reasonable comfort for daily use. These springs lower your vehicle approximately 1.5 inches from stock height, eliminating excessive wheel gap without creating clearance issues or requiring additional modifications. Each set is powder-coated for corrosion resistance and includes dust boots to protect the springs during operation.",
      features: [
        "Lowers vehicle approximately 1.5 inches",
        "Progressive spring rate for balanced performance",
        "High-tensile chromium silicon wire construction",
        "Shot-peened for extended service life",
        "Powder-coated finish for corrosion resistance",
        "Direct replacement for factory springs",
      ],
      specifications: [
        { name: "Material", value: "Chromium silicon wire" },
        { name: "Spring Rate (Front)", value: "Progressive, 350-450 lbs/in" },
        { name: "Spring Rate (Rear)", value: "Progressive, 300-400 lbs/in" },
        { name: "Lowering Amount", value: "Approximately 1.5 inches (38mm)" },
        { name: "Finish", value: "Powder-coated" },
        { name: "Warranty", value: "Limited lifetime warranty" },
      ],
      tags: ["Suspension", "Handling", "Lowering"],
      relatedProducts: ["coilover-kit", "strut-brace", "sway-bar"],
    },
    {
      id: "strut-brace",
      name: "Strut Tower Brace",
      category: "Suspension",
      price: 129.99,
      image: "images/product-4.jpg",
      images: ["images/product-4.jpg", "images/product-4-2.jpg", "images/product-4-3.jpg", "images/product-4-4.jpg"],
      rating: 4.8,
      reviewCount: 21,
      sku: "SUS-STB-012",
      description:
        "Front strut tower brace that reduces chassis flex for improved handling precision and steering response.",
      longDescription:
        "Our Strut Tower Brace is designed to reduce chassis flex by connecting the strut towers, creating a more rigid front end structure. This increased rigidity translates to improved handling precision and more direct steering response, especially during aggressive cornering. The brace is constructed from lightweight yet strong aluminum tubing with CNC-machined mounting brackets for precise fitment. The adjustable design allows for fine-tuning of the preload, and the brace can be installed without removing any factory components. This modification is particularly effective when combined with other suspension upgrades, creating a more cohesive and responsive chassis. Each brace is finished with a durable powder coating and includes all necessary hardware for installation.",
      features: [
        "Reduces chassis flex during cornering",
        "Improves handling precision and steering response",
        "Lightweight aluminum construction",
        "CNC-machined mounting brackets for precise fitment",
        "Adjustable design for fine-tuning",
        "No modification required for installation",
      ],
      specifications: [
        { name: "Material", value: "6061-T6 aluminum" },
        { name: "Tube Diameter", value: "1.5 inches (38mm)" },
        { name: "Weight", value: "3.2 lbs (1.45 kg)" },
        { name: "Finish", value: "Powder-coated" },
        { name: "Adjustable", value: "Yes" },
        { name: "Installation Time", value: "Approximately 30 minutes" },
        { name: "Warranty", value: "Lifetime" },
      ],
      tags: ["Suspension", "Handling", "Chassis Rigidity"],
      relatedProducts: ["coilover-kit", "lowering-springs", "sway-bar"],
    },
    {
      id: "quater-panel",
      name: "Genuine Toyota 86/Subaru BRZ",
      category: "quater-panel",
      price: 499.99,
      image: "images/lightprod-3.jpg",
      images: ["images/light2.jpg", "images/light3.jpg"],
      rating: 4.9,
      reviewCount: 11,
      sku: "BDY-QP-013",
      description:
        "Genuine OEM right hand rear quarter panel for Toyota 86/Subaru BRZ. Direct replacement with factory fit and finish.",
      longDescription:
        "This Genuine OEM Right Hand Rear Quarter Panel for the Toyota 86/Subaru BRZ is manufactured to the exact specifications of the factory part, ensuring perfect fitment and finish. Made from high-quality steel with the correct gauge and structural reinforcements, this panel maintains the vehicle's structural integrity and safety characteristics. The panel comes with the factory corrosion protection treatment and is ready for prep and paint. This is the ideal solution for repairing collision damage or addressing rust issues, as it provides the same quality and durability as the original panel that came with your vehicle. Each panel undergoes strict quality control to ensure it meets OEM standards.",
      features: [
        "Genuine OEM part for perfect fitment",
        "Manufactured to factory specifications",
        "Correct steel gauge and structural reinforcements",
        "Factory corrosion protection treatment",
        "Maintains vehicle structural integrity",
        "Ready for prep and paint",
      ],
      specifications: [
        { name: "Material", value: "High-quality automotive steel" },
        { name: "Fitment", value: "2013-2020 Toyota 86/Subaru BRZ" },
        { name: "Position", value: "Right hand (passenger side) rear quarter" },
        { name: "Finish", value: "E-coated (requires paint)" },
        { name: "OEM Part Number", value: "Toyota: 61611-CA030 / Subaru: 91112CA030" },
        { name: "Warranty", value: "1 year against manufacturing defects" },
      ],
      tags: ["Body Parts", "OEM", "Exterior"],
      relatedProducts: ["bumper", "exterior-accessories", "body-repair"],
    },

      {
      id: "hood",
      name: "TS Style Carbon Fibre Hood",
      category: "HOOD",
      price: 699.99,
      image: "images/hood.jpg",
      images: ["images/hood.jpg", "images/hood1.jpg"],
      rating: 4.9,
      reviewCount: 11,
      sku: "BDY-HOD-013",
      description:
        "Elevate your vehicle's performance and aesthetics with the TS Style Carbon Fibre Hood. Crafted from lightweight, high-grade carbon fiber, this hood significantly reduces front-end weight while delivering an aggressive, race-inspired look and improved heat dissipation",
      longDescription:
        "Unleash the ultimate blend of form and function for your performance vehicle with the TS Style Carbon Fibre Hood. Engineered to perfection, this hood is meticulously constructed from premium, aerospace-grade carbon fiber, utilizing an advanced manufacturing process that ensures exceptional strength, rigidity, and an incredibly low weight. By significantly reducing mass over the front axle, the TS Style hood directly contributes to improved handling, sharper turn-in, and enhanced acceleration. Beyond its performance benefits, the aggressive TS Style design incorporates functional vents (if applicable, confirm for actual product) that aid in engine bay cooling, crucial for track use or spirited driving, while also providing a distinctive, motorsport-inspired aesthetic. The glossy, UV-resistant clear coat protects the intricate carbon fiber weave, ensuring long-lasting visual appeal and durability against the elements. Experience a dramatic transformation in both your vehicle's appearance and dynamic capabilities with this precision-engineered carbon fibre upgrade.",
      features: [
        "Premium Carbon Fibre Construction",
        "Significant Weight Reduction",
        "Aggressive TS Style Design:",
        "Enhanced Aesthetics",
        "Direct Fitment for Subaru BRZ/Toyota 86",
        "Improved Heat Dissipation",
      ],
      specifications: [
        { name: "Material", value: "High-Grade Carbon Fibre Composite" },
        { name: "Fitment", value: "Subaru BRZ / Toyota 86 / Scion FR-S 2012-2021" },
        { name: "Venting", value: "Subaru BRZ / Toyota 86 / Scion FR-S 2012-2021" },
     
      ],
      tags: ["Body Parts", "OEM", "Exterior"],
      relatedProducts: [ "exterior-accessories", "body-repair", "roll-cage"],
    },


          {
      id: "roll-cage",
      name: "SW Motorsports Rear GT86 Roll Cage",
      category: "Roll cage",
      price: 700,
      image: "images/roll-gate.jpg",
      images: ["images/roll-gate.jpg", "images/roll-gate1.jpg"],
      rating: 4.9,
      reviewCount: 15,
      sku: "BDY-RRG-013",
      description:
        "Enhance safety and chassis rigidity with the SW Motorsports Rear Roll Cage for your Toyota GT86, Subaru BRZ, or Scion FR-S. Designed for track-focused performance, this bolt-in solution provides crucial occupant protection and minimizes chassis flex for improved handling.",
      longDescription:
        "Take your Toyota GT86, Subaru BRZ, or Scion FR-S to the next level of safety and performance with the SW Motorsports Rear Roll Cage. Engineered with precision for the specific chassis of the ZN6/ZC6 platform, this roll cage is a vital upgrade for serious track enthusiasts and racers. Constructed from high-grade steel tubing (specify material if known, e.g., seamless cold-drawn mild steel or chromoly), the SW Motorsports cage significantly enhances occupant protection in the event of a rollover or impact, meeting stringent safety standards for various motorsport disciplines. Beyond its primary safety function, the strategically integrated design dramatically improves chassis rigidity, reducing flex during hard cornering and aggressive maneuvers. This translates into more predictable handling, increased responsiveness, and a more connected driving experience. The bolt-in design ensures a straightforward installation process, minimizing the need for complex fabrication, while allowing for removal if required. Finished in a durable, protective coating (e.g., gloss black powder coat), this cage not only provides peace of mind but also adds an undeniable race-bred aesthetic to your interior..",
      features: [
        "Enhanced Occupant Safety",
        "Increased Chassis Rigidity",
        "High-Grade Steel Construction",
        "recision Engineered Fitment",
        "Motorsport Aesthetic",
        "Improved Handling",
      ],
      specifications: [
        { name: "Product", value: "SW Motorsports Rear Roll Cage" },
        { name: "Compatibility", value: "Toyota GT86, Subaru BRZ, Scion FR-S (ZN6 / ZC6 Chassis)" },
        { name: "Material", value: "High-grade Steel" },
     
      ],
      tags: ["Body Parts", "Handling", "Safety"],
      relatedProducts: [ "exterior-accessories", "body-repair", "hood"],
    },
    {
      id: "gram-lights-57dr-eternal-blue",
      name: "Gram Lights 57DR 17x9 +38 5x100 - Eternal Blue Pearl Wheels (Set of 4)",
      category: "Wheels",
      price: 799.99,
      image: "images/whee3.jpg",
      images: ["images/whee3.jpg", "images/whee2.jpg", "images/whee.jpg", "images/whee1.jpg"],
      rating: 5.0,
      reviewCount: 28,
      sku: "WHE-GL57DR-EBP-001",
      description: "Unleash the full potential of your vehicle with this stunning set of Gram Lights 57DR wheels in a captivating Eternal Blue Pearl finish. Sized at 17x9 with a +38 offset and 5x100 bolt pattern, these wheels offer a popular and aggressive fitment for various performance vehicles.",
      longDescription: "Introducing a set of these beautiful and highly sought-after Gram Lights 57DR wheels in the exclusive Eternal Blue Pearl finish. These wheels are engineered for performance and style, featuring a lightweight yet durable construction. The 17x9 dimensions with a +38 offset and 5x100 bolt pattern make them an ideal and popular fitment for a range of iconic performance cars, including the FRS/BRZ/86 platform and various Subaru WRX models (02-07 and 11-14). The Eternal Blue Pearl finish provides a deep, vibrant blue hue that shifts beautifully under different lighting conditions, adding a unique and eye-catching aesthetic to your vehicle. These wheels are not just about looks; their robust design ensures improved handling and reduced unsprung weight for a more engaging driving experience. This special pricing offers an incredible opportunity to acquire a full set of these premium wheels. For shipping inquiries, please contact us for a personalized quote.",
      features: [
        "Exclusive Eternal Blue Pearl Finish – Stunning and unique color",
        "Popular Fitment – Ideal for FRS/BRZ/86, 02-07 WRX, 11-14 WRX",
        "Lightweight Design – Enhances performance and handling",
        "Durable Construction – Built for street and track use",
        "Set of 4 Wheels – Complete package for your vehicle"
      ],
      specifications: [
        { "name": "Brand", "value": "Gram Lights" },
        { "name": "Model", "value": "57DR" },
        { "name": "Diameter", "value": "17 inches" },
        { "name": "Width", "value": "9 inches" },
        { "name": "Offset", "value": "+38 mm" },
        { "name": "Bolt Pattern (PCD)", "value": "5 x 100" },
        { "name": "Finish", "value": "Eternal Blue Pearl" },
        { "name": "Quantity", "value": "Set of 4" }
      ],
      tags: ["Wheels", "Gram Lights", "57DR", "Eternal Blue", "FRS", "BRZ", "86", "WRX", "Performance", "JDM"],
      relatedProducts: ["wheels", "enkei-wheels-yokohama-advan-apex", "wheel"],
    },
    {
      id: "ceehor-carbon-fiber-steering-wheel",
      name: "CEEHOR Carbon Fiber & Suede Steering Wheel with Red Stripe for Subaru WRX/STI",
      category: "Interior",
      price: 299.99,
      image: "images/steer.jpg",
      images: ["images/steer.jpg", "images/steer1.jpg", "images/steer2.jpg", "images/steer3.jpg"],
      rating: 4.7,
      reviewCount: 18,
      sku: "STW-CEEHOR-CFS-001",
      description: "Upgrade your Subaru WRX/STI interior with this CEEHOR Carbon Fiber Steering Wheel. Featuring a lightweight carbon fiber construction, black suede grips with red stitching, and a sporty red 12 o'clock stripe, it's designed to enhance both aesthetics and driving feel.",
      longDescription: "The CEEHOR Carbon Fiber Steering Wheel is a premium upgrade for Subaru WRX/STI enthusiasts seeking enhanced performance aesthetics and tactile feedback. This steering wheel boasts a lightweight and durable construction, primarily utilizing high-quality carbon fiber for the top and bottom sections, providing a modern, race-inspired look. The grip areas are meticulously wrapped in black suede, offering a superior and comfortable hold, especially during spirited driving. Complementing the black suede is striking red contrast stitching, adding a touch of aggressive styling. A distinct red stripe at the 12 o'clock position serves as a quick reference point for steering wheel alignment. This steering wheel is designed as a direct replacement, allowing for easy installation while retaining your existing airbag and control modules. It comes brand new, ready to transform your driving cockpit.",
      features: [
        "Lightweight Carbon Fiber Construction – Durable and sporty",
        "Suede Grip Sections – Enhanced comfort and grip",
        "Red Contrast Stitching – Aggressive aesthetic detail",
        "Red 12 O'clock Stripe – Visual steering alignment aid",
        "Direct Replacement Fitment – Easy installation for Subaru WRX/STI"
      ],
      specifications: [
        { "name": "Brand", "value": "CEEHOR" },
        { "name": "Material", "value": "Carbon Fiber, Suede" },
        { "name": "Stitching Color", "value": "Black" },
        { "name": "Stripe Color", "value": "Black" },
        { "name": "Compatibility", "value": "Subaru WRX/STI (specific years may vary, please confirm fitment)" }
      ],
      tags: ["Steering Wheel", "Carbon Fiber", "Suede", "WRX", "STI", "Subaru", "Interior", "Performance"],
      relatedProducts: ["steering-wheel", "recaro-pole-position-pepita-seats", "interior-trim"],
    },
    {
      id: "obx-catback-exhaust",
      name: "OBX Stainless Steel Catback Exhaust for BRZ/FR-S/GT86 (13-22)",
      category: "Exhaust",
      price: 499.99,
      image: "images/ex.jpg",
      images: ["images/ex.jpg", "images/ex1.jpg", "images/ex2.jpg"],
      rating: 4.6,
      reviewCount: 35,
      sku: "EXH-OBX-CATB-001",
      description: "Upgrade your vehicle's performance and sound with this OBX Stainless Steel Catback Exhaust system. Designed for 2013-2022 Subaru BRZ, 2013-2021 Scion FR-S, and 2012-2021 Toyota FT/GT86, it offers improved exhaust flow and a sportier tone.",
      longDescription: "Enhance your driving experience with the OBX Stainless Steel Catback Exhaust system, specifically engineered for the 2013-2022 Subaru BRZ, 2013-2021 Scion FR-S, and 2012-2021 Toyota FT/GT86 platforms. Constructed from high-quality T304 stainless steel, this exhaust system ensures maximum durability, corrosion resistance, and a brilliant, polished finish. The design features smooth mandrel bends for optimal exhaust gas flow, which can lead to increased horsepower and torque, along with a more aggressive and satisfying exhaust note. This catback system is a direct bolt-on replacement for your factory exhaust, utilizing existing hangers and mounting points for a straightforward installation. Included in the package are all necessary clamps and hardware for a complete setup. Experience a noticeable improvement in your vehicle's performance and a more exhilarating sound, all while adding a touch of polished style to your rear end.",
      features: [
        "T304 Stainless Steel Construction – Enhanced durability and corrosion resistance",
        "Mandrel-Bent Piping – Optimized exhaust flow for performance gains",
        "Sporty Exhaust Note – Deeper and more aggressive sound",
        "Direct Bolt-On Installation – Easy replacement of factory exhaust",
        "Polished Finish – Attractive visual appeal",
        "Complete Kit – Includes all necessary hardware for installation"
      ],
      specifications: [
        { "name": "Brand", "value": "OBX" },
        { "name": "Material", "value": "T304 Stainless Steel" },
        { "name": "System Type", "value": "Catback" },
        { "name": "Pipe Diameter", "value": "Standard (please confirm specific diameter with manufacturer if critical)" },
        { "name": "Tip Style", "value": "Dual Polished Tips" },
        { "name": "Compatibility", "value": "2013-2022 Subaru BRZ, 2013-2021 Scion FR-S, 2012-2021 Toyota FT/GT86" }
      ],
      tags: ["Exhaust", "Catback", "Stainless Steel", "BRZ", "FR-S", "GT86", "Toyota", "Subaru", "Scion", "Performance", "Sound"],
      relatedProducts: ["exhaust-system", "tomei-el-catless-headers", "gt86-brz-frs-3inch-front-pipe"],
    },
    {
      id: "verus-engineering-rear-lower-control-arms",
      name: "Verus Engineering Spherical Rear Lower Control Arms - Anodized Black",
      category: "Suspension",
      price: 499.99,
      image: "images/arm.jpg",
      images: ["images/arm.jpg", "images/arm1.jpg", "images/arm2.jpg"],
      rating: 4.9,
      reviewCount: 12,
      sku: "SUSP-VERUS-RLCA-001",
      description: "Enhance your vehicle's handling and adjustability with these Verus Engineering Rear Lower Control Arms. Featuring spherical inboard mounts and an anodized black finish, these arms offer superior performance and precision for various Subaru and Toyota models.",
      longDescription: "Upgrade your vehicle's suspension with this set of Verus Engineering Rear Lower Control Arms, designed for improved handling, stability, and alignment adjustability. These specific arms are the spherical inboard mounting variant, providing a more direct and precise feel compared to rubber bushing alternatives by eliminating deflection. Finished in a durable anodized black, they offer both functional benefits and a clean, aggressive look. Originally removed from a 2023 GR86, these control arms are also compatible with a wide range of popular performance platforms, including Subaru WRX/STI models from 2008 onwards, and all 2013+ BRZ/FR-S/86 models. This makes them a versatile and valuable upgrade for enthusiasts looking to fine-tune their suspension for track use or spirited driving. The set includes all necessary hardware for installation and comes ready to ship, providing an excellent opportunity to enhance your vehicle's rear suspension geometry and response.",
      features: [
        "Spherical Inboard Mounting – Enhanced precision and reduced deflection",
        "Anodized Black Finish – Durable and aesthetically pleasing",
        "Adjustable Design – Allows for precise alignment tuning",
        "Improved Handling – Sharper turn-in and increased stability",
        "Wide Compatibility – Fits GR86, WRX/STI (2008+), BRZ/FR-S/86 (2013+)",
        "High-Quality Construction – Built by Verus Engineering for performance"
      ],
      specifications: [
        { "name": "Brand", "value": "Verus Engineering" },
        { "name": "Component", "value": "Rear Lower Control Arms" },
        { "name": "Mounting Type", "value": "Spherical (Inboard)" },
        { "name": "Finish", "value": "Anodized Black" },
        { "name": "Compatibility", "value": "2023 GR86, Subaru WRX/STI (2008+), Subaru BRZ (2013+), Scion FR-S (2013+), Toyota 86 (2013+)" }
      ],
      tags: ["Suspension", "Control Arms", "Verus Engineering", "GR86", "WRX", "STI", "BRZ", "FR-S", "86", "Handling", "Performance", "Alignment"],
      relatedProducts: ["lowering-springs", "strut-brace", "sway-bar"],
    },
    {
      id: "brz-86-frs-carbon-fiber-fenders",
      name: "Lightweight Vented Carbon Fiber Fenders for BRZ/86/FRS (2013-2022)",
      category: "Exterior",
      price: 299.99,
      image: "images/fender.jpg",
      images: ["images/fender.jpg", "images/fender1.jpg"],
      rating: 4.9,
      reviewCount: 9,
      sku: "EXT-CFF-BRZ86FRS-001",
      description: "Upgrade your 2013-2022 BRZ, 86, or FRS with these lightweight, real vented carbon fiber fenders. Weighing only 3-4 lbs each, they offer a significant weight reduction and an aggressive, performance-oriented aesthetic. In perfect condition.",
      longDescription: "Transform the front end of your 2013-2022 Subaru BRZ, Toyota 86, or Scion FR-S with these premium lightweight vented carbon fiber fenders. Crafted from genuine carbon fiber, these fenders not only provide a striking visual upgrade but also contribute to significant weight savings, with each fender weighing approximately 3-4 lbs. The integrated vents are designed to improve aerodynamic efficiency and help dissipate heat from the engine bay or brakes, making them ideal for both street and track applications. These fenders are in perfect condition, ensuring a flawless fit and finish for your vehicle. Elevate your car's exterior with a race-inspired look and functional benefits that only real carbon fiber can provide. This set offers an excellent opportunity to achieve a high-performance aesthetic and reduce unsprung weight at an exceptional value.",
      features: [
        "Real Carbon Fiber Construction – Premium, lightweight material",
        "Vented Design – Improves aerodynamics and heat dissipation",
        "Significant Weight Reduction – Approximately 3-4 lbs per fender",
        "Perfect Condition – Flawless fit and finish",
        "Direct Fitment – Designed for 2013-2022 BRZ/86/FRS models",
        "Aggressive Styling – Enhances vehicle's sporty appearance"
      ],
      specifications: [
        { "name": "Material", "value": "Carbon Fiber" },
        { "name": "Type", "value": "Vented Fenders" },
        { "name": "Weight", "value": "Approx. 3-4 lbs (per fender)" },
        { "name": "Compatibility", "value": "2013-2022 Subaru BRZ, Toyota 86, Scion FR-S" },
        { "name": "Condition", "value": "Perfect" }
      ],
      tags: ["Fenders", "Carbon Fiber", "Vented", "BRZ", "86", "FRS", "Toyota", "Subaru", "Scion", "Exterior", "Lightweight", "Performance"],
      relatedProducts: ["hood", "vrs-style-carbon-fiber-hood", "toyota-gt86-front-bumper"],
    },
    {
      id: "vrs-style-carbon-fiber-hood",
      name: "VRS Style Carbon Fiber Vented Hood for FR-S/86/BRZ (2013-2020)",
      category: "Exterior",
      price: 549.99,
      image: "images/hoo.jpg",
      images: ["images/hoo.jpg", "images/hoo1.jpg", "images/hoo2.jpg", "images/hoo3.jpg"],
      rating: 4.8,
      reviewCount: 11,
      sku: "EXT-CFH-VRS-001",
      description: "Enhance your 2013-2020 Scion FR-S, Toyota 86, or Subaru BRZ with this VRS Style Carbon Fiber Vented Hood. Designed for aggressive styling and improved engine bay cooling, this lightweight hood is a direct fit upgrade.",
      longDescription: "Introducing the VRS Style Carbon Fiber Vented Hood, a premium exterior upgrade for your 2013-2020 Scion FR-S, Toyota 86, or Subaru BRZ. This hood is crafted from high-quality, genuine carbon fiber, offering a significant weight reduction over the factory hood while providing exceptional strength and durability. The aggressive VRS style features prominent vents that not only contribute to a more race-inspired aesthetic but also serve a functional purpose by aiding in engine bay heat extraction, which can be beneficial for performance and longevity. The clear coat finish over the carbon fiber weave provides a deep, glossy shine and protects against UV degradation. This hood is designed for a direct fit, utilizing OEM mounting points for a straightforward installation, making it an ideal choice for enthusiasts looking to combine striking looks with practical performance benefits. Price includes shipping, making it a convenient and valuable enhancement for your vehicle.",
      features: [
        "Genuine Carbon Fiber Construction – Lightweight and durable",
        "VRS Style Design – Aggressive and sporty aesthetic",
        "Integrated Vents – Improves engine bay cooling and airflow",
        "High Gloss Finish – UV protected clear coat for lasting shine",
        "Direct Bolt-On Installation – Utilizes OEM mounting points",
        "Enhanced Performance Look – Transforms the vehicle's front profile"
      ],
      specifications: [
        { "name": "Material", "value": "Carbon Fiber" },
        { "name": "Style", "value": "VRS Vented" },
        { "name": "Compatibility", "value": "2013-2020 Scion FR-S, Toyota 86, Subaru BRZ" },
        { "name": "Finish", "value": "Gloss Carbon Fiber" },
        { "name": "Installation", "value": "Direct Bolt-On" }
      ],
      tags: ["Hood", "Carbon Fiber", "Vented", "VRS Style", "FR-S", "86", "BRZ", "Toyota", "Scion", "Subaru", "Exterior", "Lightweight", "Cooling"],
      relatedProducts: ["brz-86-frs-carbon-fiber-fenders", "hood", "toyota-gt86-front-bumper"],
    },
    {
      id: "gr86-brz-led-tail-lights-elite-series",
      name: "Toyota GR86 - Subaru BRZ LED Tail Lights - The Elite Series",
      category: "Lighting",
      price: 299.99,
      image: "images/led1.jpg",
      images: ["images/led1.jpg", "images/led2.jpg", "images/led.jpg"],
      rating: 0,
      reviewCount: 0,
      sku: "LGT-LED-GR86BRZ-ELT",
      description: "Upgrade your Toyota GR86 or Subaru BRZ with 'The Elite Series' LED Tail Lights. These high-quality tail lights offer a modern, sleek look and enhanced visibility, designed for a direct replacement.",
      longDescription: "Introducing 'The Elite Series' LED Tail Lights, specifically designed for the Toyota GR86 and Subaru BRZ. These tail lights are in excellent condition, offering a significant aesthetic and functional upgrade over stock lights. Featuring advanced LED technology, they provide brighter illumination for improved safety and a distinct, modern appearance that will make your vehicle stand out. The sleek design and precise fit ensure a seamless integration with your vehicle's rear end. Built with durable materials, these lights are resistant to weather and wear, ensuring long-lasting performance. Installation is straightforward, utilizing original mounting points and connectors for a plug-and-play setup. The price includes shipping, making it a convenient and valuable enhancement for your GR86 or BRZ.",
      features: [
        "Elite Series Design – Modern and aggressive styling",
        "Full LED Illumination – Brighter and more efficient lighting",
        "Enhanced Visibility – Improves safety on the road",
        "Excellent Condition – Ready for immediate installation",
        "Direct Replacement – Utilizes OEM mounting points and connectors",
        "Durable Construction – Built to withstand various weather conditions"
      ],
      specifications: [
        { "name": "Lighting Type", "value": "LED" },
        { "name": "Series", "value": "The Elite Series" },
        { "name": "Compatibility", "value": "Toyota GR86, Subaru BRZ (Specific Years May Vary, confirm with seller)" },
        { "name": "Condition", "value": "Excellent" },
        { "name": "Installation", "value": "Direct Plug-and-Play" }
      ],
      tags: ["LED Tail Lights", "valenti-tail-lights", "GR86", "BRZ", "Toyota", "Subaru", "Lighting", "Elite Series", "Exterior"],
      relatedProducts: ["valenti-tail-lights", "led-headlight", "fog-lights"],
    },
    {
      id: "toyota-gt86-front-bumper",
      name: "Toyota GT86 Front Bumper",
      category: "Exterior",
      price: 499.99,
      image: "images/bump.jpg",
      images: ["images/bump.jpg", "images/bump1.jpg", "images/bump2.jpg"],
      rating: 0,
      reviewCount: 0,
      sku: "EXT-FB-GT86-001",
      description: "Replace or upgrade the front bumper on your Toyota GT86 with this direct-fit replacement. Designed to match the original aesthetics, it offers a clean and refreshed look for your vehicle.",
      longDescription: "This is a direct replacement front bumper for the Toyota GT86, perfect for repairing collision damage or simply refreshing the look of your vehicle. Manufactured to OEM specifications, it ensures a precise fit and easy installation utilizing existing mounting points. The bumper comes unpainted, allowing you to color-match it perfectly to your vehicle's existing paint scheme. It's constructed from durable automotive-grade materials designed to withstand daily road conditions and provide long-lasting performance. The price includes shipping, providing a convenient and cost-effective solution for your GT86's front end.",
      features: [
        "Direct OEM Replacement – Ensures a precise fit",
        "Durable Construction – Made from high-quality automotive-grade materials",
        "Unpainted Finish – Ready for custom color matching",
        "Easy Installation – Utilizes factory mounting points",
        "Restores Original Aesthetics – Refreshes the vehicle's front profile"
      ],
      specifications: [
        { "name": "Material", "value": "Automotive Grade ABS Plastic (or similar)" },
        { "name": "Style", "value": "OEM Replacement" },
        { "name": "Compatibility", "value": "Toyota GT86 (Specific Years May Vary, confirm with seller)" },
        { "name": "Finish", "value": "Unpainted (Primed)" },
        { "name": "Installation", "value": "Direct Bolt-On" }
      ],
      tags: ["Front Bumper", "Bumper", "GT86", "Toyota", "Exterior", "Replacement"],
      relatedProducts: ["brz-86-frs-carbon-fiber-fenders", "hood", "bumper"],
    },
    {
      id: "recaro-pole-position-pepita-seats",
      name: "Recaro Pole Position FIA Seats with Custom Pepita Inserts (Pair)",
      category: "Interior",
      price: 1295,
      image: "images/sit.jpg",
      images: ["images/sit.jpg", "images/sit1.jpg", "images/sit2.jpg"],
      rating: 5.0,
      reviewCount: 7,
      sku: "INT-REC-PP-PEPT-001",
      description: "A rare pair of Recaro Pole Position FIA racing seats, enhanced with custom black and white Pepita fabric inserts. These seats are in excellent condition, offering both high-performance support and a classic, distinctive aesthetic. FIA homologated until 2027.",
      longDescription: "Experience the perfect blend of performance, safety, and unique style with this set of two Recaro Pole Position FIA racing seats. These iconic fixed-back bucket seats are renowned for their exceptional lateral support and lightweight construction, making them a favorite among track enthusiasts and those seeking a more engaging driving experience. What sets this pair apart are the meticulously crafted custom black and white Pepita fabric inserts, a timeless pattern that adds a sophisticated and classic touch to the race-bred design. Both seats are in excellent, well-cared-for condition, ensuring they are ready for immediate installation. Crucially, they hold a valid FIA homologation with an expiration date of 2027, making them suitable for sanctioned motorsport events. While the original MSRP for a single Pole Position seat is $1,295, the addition of the custom Pepita inserts, costing $799.99 for the pair, elevates their value and exclusivity, offering a unique opportunity to own a truly special interior upgrade.",
      features: [
        "FIA Homologated – Certified for motorsport use (Expires 2027)",
        "Custom Pepita Inserts – Unique black and white pattern for classic style",
        "Excellent Condition – Well-maintained and ready for use",
        "Lightweight Fixed-Back Design – Superior support and weight savings",
        "High-Quality Construction – Renowned Recaro durability and craftsmanship",
        "Enhanced Driving Experience – Improved lateral support for spirited driving"
      ],
      specifications: [
        { "name": "Brand", "value": "Recaro" },
        { "name": "Model", "value": "Pole Position FIA" },
        { "name": "Quantity", "value": "Pair (2 Seats)" },
        { "name": "Upholstery", "value": "Black Fabric with Custom Black & White Pepita Inserts" },
        { "name": "Homologation", "value": "FIA (Expires 2027)" },
        { "name": "Construction", "value": "Fixed-Back Bucket Seat" }
      ],
      tags: ["Recaro", "Pole Position", "FIA", "Racing Seats", "Bucket Seats", "Pepita", "Custom", "Interior", "Performance", "Track"],
      relatedProducts: ["steering-wheel", "ceehor-carbon-fiber-steering-wheel", "interior-trim"],
    },
    {
      id: "tomei-el-catless-headers",
      name: "TOMEI Equal Length Catless Headers (Heat Wrapped)",
      category: "Exhaust",
      price: 349.99,
      image: "images/header.jpg",
      images: ["images/header.jpg", "images/herder1.jpg"],
      rating: 0,
      reviewCount: 0,
      sku: "EXH-HDR-TOMEI-ELC",
      description: "Used Tomei Equal Length Catless Headers, pre-heat wrapped and complete with gaskets and hardware. Perfect for first and second-gen FR-S/86/BRZ models, offering enhanced exhaust flow.",
      longDescription: "Upgrade your first or second-generation FR-S, 86, or BRZ with these high-performance TOMEI Equal Length Catless Headers. These headers are in excellent condition, having been used for approximately 5,000 miles with no reported issues. They come pre-applied with heat wrap, which helps to maintain exhaust gas temperature for optimal flow and protect surrounding engine bay components from excessive heat. The set includes all necessary gaskets and hardware for a straightforward installation. By eliminating the catalytic converter, these headers provide a significant improvement in exhaust flow and a more aggressive exhaust note. This is a fantastic opportunity to acquire a top-tier performance upgrade at a great value. Price includes shipping, making it a convenient option for enthusiasts.",
      features: [
        "TOMEI Equal Length Design – Optimized exhaust flow for performance",
        "Catless – Maximizes exhaust gas velocity and sound",
        "Pre-Heat Wrapped – Reduces engine bay temperatures and improves efficiency",
        "Complete Kit – Includes gaskets and all necessary hardware for installation",
        "Excellent Condition – Used for approximately 5,000 miles with no issues",
        "Broad Compatibility – Fits both 1st and 2nd Gen FR-S/86/BRZ"
      ],
      specifications: [
        { "name": "Brand", "value": "TOMEI" },
        { "name": "Model", "value": "Equal Length Catless Headers" },
        { "name": "Material", "value": "Stainless Steel (likely)" },
        { "name": "Condition", "value": "Used (Excellent)" },
        { "name": "Mileage Used", "value": "Approx. 5,000 miles" },
        { "name": "Compatibility", "value": "First and Second Generation Scion FR-S, Toyota 86, Subaru BRZ" },
        { "name": "Includes", "value": "Headers, Heat Wrap, Gaskets, Hardware" }
      ],
           tags: ["Headers", "Exhaust", "Catless", "TOMEI", "Equal Length", "Heat Wrapped", "FR-S", "86", "BRZ", "Toyota", "Scion", "Subaru", "Performance"]
    },
    {
      id: "gt86-brz-frs-3inch-front-pipe",
      name: "3-inch Front Pipe for GT86 / BRZ / FR-S",
      category: "Exhaust",
      price: 199.99,
      image: "images/pipe.jpg",
      images: ["images/pipe.jpg", "images/pipe1.jpg", "images/pipe2.jpg"],
      rating: 0,
      reviewCount: 0,
      sku: "EXH-FP-3INCH-GT86",
      description: "Brand new 3-inch front pipe designed for Toyota GT86, Subaru BRZ, and Scion FR-S models. This performance upgrade optimizes exhaust flow for improved horsepower and torque.",
      longDescription: "Enhance the exhaust system of your Toyota GT86, Subaru BRZ, or Scion FR-S with this brand new 3-inch front pipe. This is a high-quality, performance-oriented component designed to replace the restrictive factory front pipe, allowing for a significant improvement in exhaust gas flow. The larger 3-inch diameter helps to reduce back pressure, which can lead to gains in horsepower and torque, as well as a more aggressive exhaust note. Crafted from durable stainless steel, it's built to withstand the rigors of performance driving and daily use. This front pipe is an ideal upgrade for those looking to maximize their vehicle's exhaust efficiency. The price includes shipping, offering a convenient and valuable addition to your vehicle's performance setup.",
      features: [
        "Brand New Condition – Unused and ready for installation",
        "3-inch Diameter – Optimizes exhaust flow for performance gains",
        "Durable Construction – Made from high-quality stainless steel (assumed from image)",
        "Improved Horsepower and Torque – Reduces exhaust back pressure",
        "Aggressive Exhaust Note – Enhances the vehicle's sound",
        "Direct Fit – Designed for specific vehicle models"
      ],
      specifications: [
        { "name": "Diameter", "value": "3 inch" },
        { "name": "Material", "value": "Stainless Steel (assumed)" },
        { "name": "Condition", "value": "Brand New" },
        { "name": "Compatibility", "value": "Toyota GT86, Subaru BRZ, Scion FR-S (All Generations)" },
        { "name": "Installation", "value": "Bolt-on Replacement" }
      ],
      tags: ["Front Pipe", "Exhaust", "3-inch", "GT86", "BRZ", "FR-S", "Toyota", "Subaru", "Scion", "Performance", "Brand New"],
      relatedProducts: ["obx-catback-exhaust", "exhaust-system", "tomei-el-catless-headers"],
    },
    {
      id: "gr86-genuine-bumper-black-silica",
      name: "Toyota GR86 Genuine Bumper - Black Silica",
      category: "Exterior",
      price: 549.99,
      image: "images/grill.jpg",
      images: ["images/grill.jpg", "images/grill1.jpg", "images/grill2.jpg", "images/grill3.jpg"],
      rating: 0,
      reviewCount: 0,
      sku: "EXT-FB-GR86-BLKSIL",
      description: "Brand new, genuine Toyota GR86 front bumper in Black Silica. Perfect condition, ready for direct replacement or upgrade to restore your vehicle's pristine look.",
      longDescription: "Presenting a brand new, genuine Toyota GR86 front bumper in the sleek Black Silica (color code 899). This bumper is in perfect, factory-fresh condition, ensuring a flawless appearance and fit for your GR86. It's an ideal replacement for a damaged bumper or for those looking to revert to an OEM look. Being a genuine part, it guarantees precise fitment and compatibility with all existing mounting points and components. The Black Silica finish provides a deep, glossy look straight out of the box, saving you the hassle of painting. This is a premium component for maintaining the original quality and aesthetics of your Toyota GR86. The price includes shipping, offering a convenient and valuable solution for your vehicle's exterior needs.",
      features: [
        "Genuine Toyota Part – Ensures perfect fitment and quality",
        "Brand New Condition – Flawless and ready for installation",
        "Black Silica Finish (Color Code 899) – Pre-painted for convenience",
        "Perfect Condition – No scratches, dents, or imperfections",
        "Direct Replacement – Utilizes OEM mounting points",
        "Restores Factory Aesthetics – Maintains the original premium look of your GR86"
      ],
      specifications: [
        { "name": "Brand", "value": "Toyota (Genuine OEM)" },
        { "name": "Part Type", "value": "Front Bumper" },
        { "name": "Color", "value": "Black Silica (Color Code 899)" },
        { "name": "Condition", "value": "Brand New" },
        { "name": "Compatibility", "value": "Toyota GR86 (Specific Years May Vary, confirm with seller)" },
        { "name": "Installation", "value": "Direct Bolt-On" }
      ],
      tags: ["Front Bumper", "Bumper", "GR86", "Toyota", "Genuine", "OEM", "Black Silica", "Exterior", "Brand New"],
      relatedProducts: ["toyota-gt86-front-bumper", "bumper", "hood"],
    },
    {
      id: "jdm-brz-ts-wing",
      name: "Authentic JDM BRZ tS Wing",
      category: "Exterior",
      price: 249.99,
      image: "images/spoil.jpg",
      images: ["images/spoil.jpg", "images/spoil1.jpg", "images/spoil2.jpg", "images/spoil3.jpg"],
      rating: 0,
      reviewCount: 0,
      sku: "EXT-SPLR-BRZTS-JDM",
      description: "Authentic JDM-spec Subaru BRZ tS wing in 9.5/10 condition. Enhance the aggressive styling and aerodynamic performance of your BRZ with this genuine spoiler.",
      longDescription: "For sale is an authentic JDM (Japanese Domestic Market) specification Subaru BRZ tS wing, rated at an excellent 9.5/10 condition. This is a rare opportunity to acquire a genuine piece of tS aerodynamic enhancement, known for its aggressive styling and functional downforce. The wing features a sleek design, likely constructed from high-quality materials such as carbon fiber or a durable composite with a carbon fiber weave finish (based on the image), providing both lightweight performance and a premium look. It will significantly enhance the rear profile of your BRZ, giving it a more track-ready appearance. Installation typically involves drilling, but the precise fitment of a genuine part ensures a clean integration. This wing is perfect for enthusiasts looking to complete a tS-inspired build or simply add a distinctive, high-quality spoiler to their BRZ. The price includes shipping, making it a convenient and valuable upgrade.",
      features: [
        "Authentic JDM Specification – Genuine Subaru BRZ tS component",
        "Excellent Condition – Rated 9.5/10, very well maintained",
        "Aggressive Styling – Enhances the sporty look of your BRZ",
        "Aerodynamic Enhancement – Provides functional downforce (implied by design)",
        "High-Quality Construction – Durable materials, likely carbon fiber or composite",
        "Rare Find – Authentic JDM part for a unique build"
      ],
      specifications: [
        { "name": "Type", "value": "Rear Wing / Spoiler" },
        { "name": "Edition", "value": "tS (JDM-spec)" },
        { "name": "Material", "value": "Carbon Fiber / Composite (based on visual)" },
        { "name": "Condition", "value": "Used (9.5/10)" },
        { "name": "Compatibility", "value": "Subaru BRZ (Specific Years May Vary, confirm with seller)" },
        { "name": "Installation", "value": "Drill-on (standard for this type of wing)" }
      ],
      tags: ["Wing", "Spoiler", "BRZ", "tS", "JDM", "Subaru", "Exterior", "Carbon Fiber", "Aerodynamic", "Authentic"],
      relatedProducts: ["brz-86-frs-carbon-fiber-fenders", "vrs-style-carbon-fiber-hood", "spoilers"],
    },
    {
      id: "enkei-wheels-yokohama-advan-apex",
      name: "Enkei Wheels with Yokohama Advan Apex Tires (Staggered)",
      category: "Wheels & Tires",
      price: 1199.99,
      image: "images/tire.jpg",
      images: ["images/tire.jpg", "images/tire1.jpg", "images/tire2.jpg"],
      rating: 0,
      reviewCount: 0,
      sku: "WHL-SET-ENKEI-YOKO-STAG",
      description: "Used Enkei wheels with Yokohama Advan Apex tires, a staggered setup (18x8 front, 18x8.5 rear) for Subaru BRZ with 5x100 bolt pattern and +45mm offset. Includes new TPMS sensors. Only 634 miles of use.",
      longDescription: "This is a fantastic opportunity to acquire a lightly used (only 634 miles!) staggered wheel and tire package for your Subaru BRZ. The set features high-quality Enkei wheels paired with grippy Yokohama Advan Apex tires, providing an excellent balance of performance and aesthetics. The staggered setup, with 18x8 inch wheels in the front and 18x8.5 inch wheels in the rear, enhances the vehicle's stance and handling characteristics. The wheels have a 5x100 bolt pattern and a +45mm offset, ensuring compatibility with the BRZ, including models equipped with Brembo brakes. For added convenience and safety, four brand new TPMS (Tire Pressure Monitoring System) sensors from Tire Rack are already installed. This package is ideal for enthusiasts looking for an immediate bolt-on upgrade to significantly improve their BRZ's appearance and driving dynamics. The price includes shipping, making it a complete and convenient solution.",
      features: [
        "Lightly Used – Only 634 miles on the setup",
        "Staggered Fitment – 18x8 Front, 18x8.5 Rear for enhanced looks and handling",
        "High-Quality Components – Enkei wheels paired with Yokohama Advan Apex tires",
        "Includes TPMS Sensors – Four new Tire Rack TPMS sensors installed",
        "Direct Fit for BRZ – 5x100 bolt pattern, +45mm offset",
        "Brembo Brake Compatible – Clears Brembo calipers"
      ],
      specifications: [
        { "name": "Wheel Brand", "value": "Enkei" },
        { "name": "Tire Brand", "value": "Yokohama Advan Apex" },
        { "name": "Front Wheel Size", "value": "18x8" },
        { "name": "Rear Wheel Size", "value": "18x8.5" },
        { "name": "Bolt Pattern", "value": "5x100" },
        { "name": "Offset", "value": "+45mm" },
        { "name": "Condition", "value": "Used (634 miles)" },
        { "name": "Includes", "value": "Wheels, Tires, 4 New TPMS Sensors" },
        { "name": "Compatibility", "value": "Subaru BRZ (with or without Brembo brakes)" }
      ],
      tags: ["Wheels", "Tires", "Enkei", "Yokohama Advan Apex", "Staggered", "BRZ", "Subaru", "5x100", "TPMS", "Used", "Performance"],
      relatedProducts: ["gram-lights-57dr-eternal-blue", "wheels", "wheel"],
    },
    {
      id: "86-brz-frs-oil-cooler",
      name: "Brand New Oil Cooler for 86 / BRZ / FR-S",
      category: "Engine & Cooling",
      price: 199.99,
      image: "images/oil.jpg",
      images: ["images/oil.jpg", "images/oil1.jpg"],
      rating: 0,
      reviewCount: 0,
      sku: "ENG-COOL-OIL-86BRZ",
      description: "Brand new oil cooler system designed for Toyota 86, Subaru BRZ, and Scion FR-S models. Essential for maintaining optimal oil temperatures during aggressive driving and track use.",
      longDescription: "This is a brand new, never-before-used oil cooler kit specifically designed for the Toyota 86, Subaru BRZ, and Scion FR-S platform. An oil cooler is a crucial upgrade for any enthusiast who engages in spirited driving, track days, or lives in warmer climates, as it helps to maintain stable oil temperatures. Excessive oil temperatures can lead to premature engine wear and reduced oil effectiveness. This kit includes the core cooler unit, braided lines, and AN fittings (as visible in the image), ensuring a robust and leak-free installation. Keeping your engine oil cool is vital for engine longevity and consistent performance. This unit is a direct fit for the 'twin' platform, making installation relatively straightforward for those with mechanical experience. The price includes shipping, offering a convenient way to protect your investment and enhance your vehicle's reliability.",
      features: [
        "Brand New Condition – Unused and ready for installation",
        "Optimized Oil Cooling – Maintains stable oil temperatures for engine longevity",
        "Enhanced Performance – Prevents power loss due to overheating oil",
        "Complete Kit – Includes cooler core, braided lines, and AN fittings",
        "Direct Fit – Designed specifically for 86/BRZ/FR-S models",
        "High-Quality Components – Durable construction for reliable operation"
      ],
      specifications: [
        { "name": "Type", "value": "Oil Cooler" },
        { "name": "Condition", "value": "Brand New" },
        { "name": "Compatibility", "value": "Toyota 86, Subaru BRZ, Scion FR-S (All Generations)" },
        { "name": "Includes", "value": "Cooler Core, Braided Lines, AN Fittings" },
        { "name": "Installation", "value": "Vehicle-specific (may require minor modification/adapter kit depending on exact setup)" }
      ],
      tags: ["Oil Cooler", "Cooling", "Engine", "86", "BRZ", "FR-S", "Toyota", "Subaru", "Scion", "Performance", "Brand New"],
      relatedProducts: ["engine", "edelbrock-supercharger-86-frs-brz", "exhaust-system"],
    },
    {
      id: "edelbrock-supercharger-86-frs-brz",
      name: "Edelbrock Supercharger for 86 / FR-S / BRZ",
      category: "Forced Induction",
      price: 1500.00,
      image: "images/tat.jpg",
      images: ["images/tat.jpg", "images/tat1.jpg", ],
      rating: 0,
      reviewCount: 0,
      sku: "FI-SC-EDELBROCK-86FRSBRZ",
      description: "Edelbrock E-Force Supercharger system for Toyota 86, Scion FR-S, and Subaru BRZ. Significantly boosts horsepower and torque, offering a thrilling performance upgrade for your sports car.",
      longDescription: "Unleash the true potential of your Toyota 86, Scion FR-S, or Subaru BRZ with this Edelbrock E-Force Supercharger system. Known for its reliable power delivery and integrated design, the Edelbrock supercharger provides a significant increase in horsepower and torque across the entire RPM range, transforming the driving experience. This kit is designed for a relatively straightforward installation, often fitting within the factory engine bay with minimal modifications. It's a complete, engineered solution to overcome the stock car's power limitations. While specific details on mileage or exact condition are not provided beyond the image, the competitive pricing for a supercharger suggests a fantastic value for anyone looking to add serious power to their 'twin' platform. The price includes shipping, making it a convenient option for a major performance enhancement.",
      features: [
        "Significant Horsepower and Torque Gains – Transforms vehicle performance",
        "Reliable Power Delivery – Engineered for consistent boost",
        "Integrated Design – Often fits within factory engine bay",
        "Comprehensive Kit – Typically includes all necessary components for installation (charger unit, manifold, etc.)",
        "Ideal for Enthusiasts – Perfect for track use or spirited driving"
      ],
      specifications: [
        { "name": "Type", "value": "Supercharger System" },
        { "name": "Brand", "value": "Edelbrock E-Force" },
        { "name": "Compatibility", "value": "Toyota 86, Scion FR-S, Subaru BRZ (Specific Generations/Years May Vary, confirm with seller)" },
        { "name": "Boost Type", "value": "Roots-style (typical for Edelbrock E-Force)" },
        { "name": "Installation", "value": "Bolt-on (requires mechanical expertise)" }
      ],
      tags: ["Supercharger", "Forced Induction", "Edelbrock", "E-Force", "86", "FR-S", "BRZ", "Toyota", "Scion", "Subaru", "Performance", "Engine", "Power Adder"],
      relatedProducts: ["engine", "86-brz-frs-oil-cooler", "exhaust-system"],
    },
  ]

  // Sample review data
  const reviews = [
    {
      id: 1,
      name: "Michael S.",
      rating: 5,
      date: "2025-1-15",
      product: "High-Performance Brake Kit",
      comment: "These brakes are amazing! Stopping power is incredible and installation was straightforward.",
    },
    {
      id: 2,
      name: "Sarah L.",
      rating: 4,
      date: "2024-09-22",
      product: "Advanced LED Headlight Set",
      comment:
        "Great visibility at night. The only reason I'm not giving 5 stars is because installation was a bit tricky.",
    },
    {
      id: 3,
      name: "David W.",
      rating: 5,
      date: "2023-11-05",
      product: "Carbon Fiber Air Intake System",
      comment: "Noticeable power increase and the sound is awesome! Highly recommend.",
    },
    {
      id: 4,
      name: "Jessica T.",
      rating: 5,
      date: "2023-10-30",
      product: "Adjustable Coilover Suspension Kit",
      comment: "Perfect stance and handling is significantly improved. Worth every penny!",
    },
    {
      id: 5,
      name: "Robert K.",
      rating: 4,
      date: "2023-11-12",
      product: "Performance Exhaust System",
      comment: "Great sound and performance gains. Installation took longer than expected.",
    },
    {
      id: 6,
      name: "Emily H.",
      rating: 5,
      date: "2023-09-18",
      product: "Sport Brake Pads",
      comment: "Much better stopping power than OEM. No squeaking or dust issues.",
    },
    {
      id: 7,
      name: "James B.",
      rating: 5,
      date: "2023-10-25",
      product: "Cold Air Intake Kit",
      comment: "Easy to install and the performance difference is noticeable. Great product!",
    },
    {
      id: 8,
      name: "Amanda C.",
      rating: 4,
      date: "2023-11-08",
      product: "Light Kit",
      comment: "These lights are super bright and look great. Installation was a bit challenging.",
    },

  ]

  // Calculate review statistics
  const calculateReviewStats = () => {
    const totalReviews = reviews.length
    const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews
    const fiveStarReviews = reviews.filter((review) => review.rating === 5).length
    const fiveStarPercentage = (fiveStarReviews / totalReviews) * 100

    return {
      totalReviews,
      averageRating: averageRating.toFixed(1),
      fiveStarPercentage: fiveStarPercentage.toFixed(0),
    }
  }

  // Update review statistics on the home page
  const updateReviewStats = () => {
    const stats = calculateReviewStats()

    const totalReviewsElement = document.querySelector(".total-reviews-count")
    const averageRatingElement = document.querySelector(".average-rating")
    const fiveStarPercentageElement = document.querySelector(".five-star-percentage")

    if (totalReviewsElement) {
      totalReviewsElement.textContent = stats.totalReviews
    }

    if (averageRatingElement) {
      averageRatingElement.textContent = stats.averageRating
    }

    if (fiveStarPercentageElement) {
      fiveStarPercentageElement.textContent = `${stats.fiveStarPercentage}%`
    }
  }

  // Call the function to update review stats
  updateReviewStats()

  // Shopping Cart Functionality

  // Initialize cart from localStorage or create empty cart
  const cart = JSON.parse(localStorage.getItem("gt86partz-cart")) || []

  // Create cart modal and overlay if they don't exist
  let cartOverlay = document.querySelector(".cart-overlay")
  let cartModal = document.querySelector(".cart-modal")

  if (!cartOverlay) {
    cartOverlay = document.createElement("div")
    cartOverlay.className = "cart-overlay"
    document.body.appendChild(cartOverlay)
  }

  if (!cartModal) {
    cartModal = document.createElement("div")
    cartModal.className = "cart-modal"
    cartModal.innerHTML = `
      <div class="cart-header">
        <h3>Your Cart</h3>
        <button class="cart-close">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>
      <div class="cart-content">
        <div class="cart-items">
          <!-- Cart items will be populated here -->
        </div>
        <div class="cart-summary">
          <div class="cart-total">
            <span>Total:</span>
            <span class="cart-total-price">$0.00</span>
          </div>
          <input type="email" id="customer-email" class="customer-email-input" placeholder="Your email address" required style="margin: 1rem 0; width: 100%; padding: 0.5rem; border-radius: 0.375rem; border: 1px solid #E2E8F0;">
          <button class="btn-primary w-full checkout-button">Proceed to Checkout</button>
          <button class="btn-secondary w-full continue-shopping">Continue Shopping</button>
        </div>
      </div>
    `
    document.body.appendChild(cartModal)
  }

  // Update cart badge count
  function updateCartBadge() {
    const cartBadges = document.querySelectorAll(".cart-badge")
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0)

    cartBadges.forEach((badge) => {
      badge.textContent = itemCount

      // Show/hide badge based on item count
      if (itemCount > 0) {
        badge.style.display = "flex"
      } else {
        badge.style.display = "none"
      }
    })
  }

  // Render cart items
  function renderCart() {
    const cartItemsContainer = document.querySelector(".cart-items")
    const cartTotalPrice = document.querySelector(".cart-total-price")

    if (!cartItemsContainer || !cartTotalPrice) return

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="empty-cart">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
          <p>Your cart is empty</p>
          <button class="btn-primary start-shopping">Start Shopping</button>
        </div>
      `
      // Always show total as $0.00 when cart is empty
      if (cartTotalPrice) cartTotalPrice.textContent = "$0.00"
    } else {
      let cartItemsHTML = ""
      let cartTotal = 0

      cart.forEach((item) => {
        const product = products.find((p) => p.id === item.id)
        if (product) {
          const itemTotal = product.price * item.quantity
          cartTotal += itemTotal

          cartItemsHTML += `
            <div class="cart-item" data-id="${product.id}">
              <div class="cart-item-image">
                <img src="${product.image}" alt="${product.name}">
              </div>
              <div class="cart-item-details">
                <h4 class="cart-item-title">${product.name}</h4>
                <p class="cart-item-category">${product.category}</p>
                <p class="cart-item-price">$${product.price.toFixed(2)}</p>
              </div>
              <div class="cart-item-quantity">
                <button class="quantity-btn decrease-quantity" data-id="${product.id}">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </button>
                <span class="quantity-value">${item.quantity}</span>
                <button class="quantity-btn increase-quantity" data-id="${product.id}">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </button>
              </div>
              <div class="cart-item-subtotal">
                <p>$${itemTotal.toFixed(2)}</p>
              </div>
              <button class="remove-item" data-id="${product.id}">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
          `
        }
      })

      cartItemsContainer.innerHTML = cartItemsHTML
      cartTotalPrice.textContent = `$${cartTotal.toFixed(2)}`

      // Ensure email input is present in the cart summary
      const cartSummary = document.querySelector('.cart-summary');
      if (cartSummary && !document.getElementById('customer-email')) {
        const emailInput = document.createElement('input');
        emailInput.type = 'email';
        emailInput.id = 'customer-email';
        emailInput.className = 'customer-email-input';
        emailInput.placeholder = 'Your email address';
        emailInput.required = true;
        emailInput.style.margin = '1rem 0';
        emailInput.style.width = '100%';
        emailInput.style.padding = '0.5rem';
        emailInput.style.borderRadius = '0.375rem';
        emailInput.style.border = '1px solid #E2E8F0';
        // Insert above the checkout button
        const checkoutBtn = cartSummary.querySelector('.checkout-button');
        cartSummary.insertBefore(emailInput, checkoutBtn);
      }

      // Add event listeners to quantity buttons and remove buttons
      document.querySelectorAll(".decrease-quantity").forEach((button) => {
        button.addEventListener("click", (e) => {
          const id = e.currentTarget.dataset.id
          decreaseQuantity(id)
        })
      })

      document.querySelectorAll(".increase-quantity").forEach((button) => {
        button.addEventListener("click", (e) => {
          const id = e.currentTarget.dataset.id
          increaseQuantity(id)
        })
      })

      document.querySelectorAll(".remove-item").forEach((button) => {
        button.addEventListener("click", (e) => {
          const id = e.currentTarget.dataset.id
          removeFromCart(id)
        })
      })
    }

    // Update cart badge
    updateCartBadge()
  }

  // Add to cart function
  function addToCart(productId) {
    const product = products.find((p) => p.id === productId)

    if (!product) return

    // Check if product is already in cart
    const existingItem = cart.find((item) => item.id === productId)

    if (existingItem) {
      // Increase quantity if already in cart
      existingItem.quantity += 1
    } else {
      // Add new item to cart
      cart.push({
        id: productId,
        quantity: 1,
      })
    }

    // Save cart to localStorage
    localStorage.setItem("gt86partz-cart", JSON.stringify(cart))

    // Update cart badge and show notification
    updateCartBadge()
    showAddToCartNotification(product.name)
  }

  // Decrease quantity function
  function decreaseQuantity(productId) {
    const itemIndex = cart.findIndex((item) => item.id === productId)

    if (itemIndex !== -1) {
      if (cart[itemIndex].quantity > 1) {
        // Decrease quantity
        cart[itemIndex].quantity -= 1
      } else {
        // Remove item if quantity would be 0
        cart.splice(itemIndex, 1)
      }

      // Save cart to localStorage
      localStorage.setItem("gt86partz-cart", JSON.stringify(cart))

      // Re-render cart
      renderCart()
    }
  }

  // Increase quantity function
  function increaseQuantity(productId) {
    const item = cart.find((item) => item.id === productId)

    if (item) {
      // Increase quantity
      item.quantity += 1

      // Save cart to localStorage
      localStorage.setItem("gt86partz-cart", JSON.stringify(cart))

      // Re-render cart
      renderCart()
    }
  }

  // Remove from cart function
  function removeFromCart(productId) {
    const itemIndex = cart.findIndex((item) => item.id === productId)

    if (itemIndex !== -1) {
      // Remove item from cart
      cart.splice(itemIndex, 1)

      // Save cart to localStorage
      localStorage.setItem("gt86partz-cart", JSON.stringify(cart))

      // Re-render cart
      renderCart()
    }
  }

  // Show add to cart notification
  function showAddToCartNotification(productName) {
    // Create notification element if it doesn't exist
    let notification = document.querySelector(".cart-notification")

    if (!notification) {
      notification = document.createElement("div")
      notification.className = "cart-notification"
      document.body.appendChild(notification)
    }

    // Set notification content
    notification.innerHTML = `
      <div class="notification-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
      </div>
      <div class="notification-content">
        <p class="notification-title">Added to Cart</p>
        <p class="notification-message">${productName}</p>
      </div>
    `

    // Show notification
    notification.classList.add("active")

    // Hide notification after 3 seconds
    setTimeout(() => {
      notification.classList.remove("active")
    }, 3000)
  }

  // Function to open cart
  function openCart() {
    cartOverlay.classList.add("active")
    cartModal.classList.add("active")
    renderCart() // Render cart contents
  }

  // Function to close cart
  function closeCart() {
    cartOverlay.classList.remove("active")
    cartModal.classList.remove("active")
  }

  // Setup cart event listeners
  function setupCartEventListeners() {
    // Toggle cart modal
    const cartButtons = document.querySelectorAll(".cart-button")

    cartButtons.forEach((button) => {
      // Remove any existing event listeners
      const newButton = button.cloneNode(true)
      button.parentNode.replaceChild(newButton, button)

      // Add new event listener
      newButton.addEventListener("click", (e) => {
        e.stopPropagation() // Prevent the click from bubbling to document
        openCart()
      })
    })

    // Close cart when clicking on overlay
    cartOverlay.addEventListener("click", closeCart)

    // Close cart when clicking close button
    const cartCloseButton = document.querySelector(".cart-close")
    if (cartCloseButton) {
      cartCloseButton.addEventListener("click", closeCart)
    }

    // Continue shopping button
    const continueShoppingButton = document.querySelector(".continue-shopping")
    if (continueShoppingButton) {
      continueShoppingButton.addEventListener("click", closeCart)
    }

    // Checkout button functionality
    const checkoutButton = document.querySelector(".checkout-button")
    if (checkoutButton) {
      checkoutButton.addEventListener("click", () => {
        // Get cart items
        const cartItems = cart.map((item) => {
          const product = products.find((p) => p.id === item.id)
          return {
            name: product.name,
            price: product.price,
            quantity: item.quantity,
            subtotal: product.price * item.quantity,
          }
        })
        // Calculate total
        const cartTotal = cartItems.reduce((total, item) => total + item.subtotal, 0)
        // Prepare email content
        let emailBody = "New Order Details:\n\n"
        cartItems.forEach((item) => {
          emailBody += `${item.name} - Quantity: ${item.quantity} - $${item.subtotal.toFixed(2)}\n`
        })
        emailBody += `\nTotal: $${cartTotal.toFixed(2)}`
        // Get user email from input
        const customerEmailInput = document.getElementById('customer-email')
        const customerEmail = customerEmailInput ? customerEmailInput.value.trim() : ''
        if (!customerEmail) {
          alert('Please enter your email address before proceeding to checkout.')
          return
        }
        // Use emailjs to send email
        if (window.emailjs) {
          emailjs.send('service_iwkvrzt', 'template_gnfpry9', {
            message: emailBody,
            subject: 'New Order from gt86partz',
            to_email: 'orders@gt86partz.com',
            email: customerEmail, // Pass user's email for Reply-To
          }, 'EqF42_KrxbX5sgNKj')
          .then(function(response) {
            // Send order info to Smartsupp chat
            if (window.smartsupp) {
              let smartsuppMsg = `New order placed!\nEmail: ${customerEmail}\n`;
              cartItems.forEach((item) => {
                smartsuppMsg += `${item.name} x${item.quantity} - $${item.subtotal.toFixed(2)}\n`;
              });
              smartsuppMsg += `Total: $${cartTotal.toFixed(2)}`;
              smartsupp('message', smartsuppMsg);
            }
            alert('Thank you! We will get back to you within 24 hours.')
            // Clear cart after successful send
            cart.length = 0
            localStorage.setItem("gt86partz-cart", JSON.stringify(cart))
            updateCartBadge()
            renderCart()
            closeCart()
          }, function(error) {
            alert('There was an error sending your order. Please try again later.')
          })
        } else {
          alert('Email service not available. Please try again later.')
        }
      })
    }

    // Prevent closing when clicking inside the modal
    cartModal.addEventListener("click", (e) => {
      e.stopPropagation()
    })
  }

  // Add event listeners to "Add to Cart" buttons on product cards
  document.addEventListener("click", (e) => {
    // Check if clicked element is an add to cart button or its parent
    const addToCartBtn = e.target.closest(".product-action-button")

    if (addToCartBtn) {
      // Find the product card
      const productCard = addToCartBtn.closest(".product-card")

      if (productCard) {
        // Get product ID from card
        const productId = productCard.id

        // Add to cart
        addToCart(productId)
      }
    }
  })

  // Initialize cart badge on page load
  updateCartBadge()

  // Setup cart event listeners
  setupCartEventListeners()

  // Handle product highlighting in catalog page
  if (window.location.pathname.includes("catalog.html")) {
    const urlParams = new URLSearchParams(window.location.search)
    const productId = urlParams.get("product")

    if (productId) {
      // Find the product in our data
      const product = products.find((p) => p.id === productId)

      if (product) {
        // Scroll to the product section
        setTimeout(() => {
          const productCards = document.querySelectorAll(".product-card")

          // Find the product card that matches our product
          productCards.forEach((card) => {
            if (card.id === productId) {
              // Highlight the card
              card.classList.add("highlighted-product")

              // Scroll to it
              card.scrollIntoView({ behavior: "smooth", block: "center" })
            }
          })
        }, 500) // Small delay to ensure DOM is fully loaded
      }
    }
  }

  // Product Detail Page Functionality
  if (window.location.pathname.includes("product-detail.html")) {
    const urlParams = new URLSearchParams(window.location.search)
    const productId = urlParams.get("id")

    if (productId) {
      // Find the product in our data
      const product = products.find((p) => p.id === productId)

      if (product) {
        // Populate product details
        populateProductDetails(product)
      } else {
        // Redirect to catalog if product not found
        window.location.href = "catalog.html"
      }
    } else {
      // Redirect to catalog if no product ID
      window.location.href = "catalog.html"
    }
  }

  // Function to populate product details
  function populateProductDetails(product) {
    // Set page title
    document.title = `${product.name} - gt86partz`

    // Main product image
    const mainImage = document.getElementById("main-product-image")
    if (mainImage) {
      mainImage.src = product.image
      mainImage.alt = product.name
    }

    // Product thumbnails
    const thumbnailsContainer = document.getElementById("product-thumbnails")
    if (thumbnailsContainer && product.images) {
      let thumbnailsHTML = ""
      product.images.forEach((image, index) => {
        thumbnailsHTML += `
          <div class="thumbnail-item ${index === 0 ? "active" : ""}" data-image="${image}">
            <img src="${image}" alt="${product.name} - Image ${index + 1}" class="thumbnail-image">
          </div>
        `
      })
      thumbnailsContainer.innerHTML = thumbnailsHTML

      // Add event listeners to thumbnails
      const thumbnails = document.querySelectorAll(".thumbnail-item")
      thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener("click", () => {
          // Update main image
          mainImage.src = thumbnail.dataset.image

          // Update active state
          thumbnails.forEach((t) => t.classList.remove("active"))
          thumbnail.classList.add("active")
        })
      })
    }

    // Breadcrumbs
    const categoryBreadcrumb = document.getElementById("product-category-breadcrumb")
    if (categoryBreadcrumb) {
      categoryBreadcrumb.textContent = product.category
    }

    // Product title
    const productTitle = document.getElementById("product-title")
    if (productTitle) {
      productTitle.textContent = product.name
    }

    // Product rating
    const productRatingValue = document.getElementById("product-rating-value")
    if (productRatingValue) {
      productRatingValue.textContent = product.rating
    }

    // Product reviews count
    const productReviewsCount = document.getElementById("product-reviews-count")
    if (productReviewsCount) {
      productReviewsCount.textContent = product.reviewCount
    }

    // Product SKU
    const productSku = document.getElementById("product-sku")
    if (productSku) {
      productSku.textContent = product.sku
    }

    // Product price
    const productPrice = document.getElementById("product-price")
    if (productPrice) {
      productPrice.textContent = `$${product.price.toFixed(2)}`
    }

    // Product description
    const productDescription = document.getElementById("product-description")
    if (productDescription) {
      productDescription.textContent = product.description
    }

    // Product features
    const productFeatures = document.getElementById("product-features")
    if (productFeatures && product.features) {
      let featuresHTML = ""
      product.features.forEach((feature) => {
        featuresHTML += `<li>${feature}</li>`
      })
      productFeatures.innerHTML = featuresHTML
    }

    // Product long description
    const productLongDescription = document.getElementById("product-long-description")
    if (productLongDescription) {
      productLongDescription.textContent = product.longDescription
    }

    // Product specifications
    const productSpecifications = document.getElementById("product-specifications")
    if (productSpecifications && product.specifications) {
      let specificationsHTML = ""
      product.specifications.forEach((spec) => {
        specificationsHTML += `
          <tr>
            <th>${spec.name}</th>
            <td>${spec.value}</td>
          </tr>
        `
      })
      productSpecifications.innerHTML = specificationsHTML
    }

    // Product category
    const productCategory = document.getElementById("product-category")
    if (productCategory) {
      productCategory.textContent = product.category
    }

    // Product tags
    const productTags = document.getElementById("product-tags")
    if (productTags && product.tags) {
      productTags.textContent = product.tags.join(", ")
    }

    // Reviews
    const reviewsList = document.getElementById("reviews-list")
    if (reviewsList) {
      // Filter reviews for this product
      const productReviews = reviews.filter((review) => review.product === product.name)

      if (productReviews.length > 0) {
        let reviewsHTML = ""
        productReviews.forEach((review) => {
          // Get initials for avatar
          const initials = review.name
            .split(" ")
            .map((n) => n[0])
            .join("")

          // Format date
          const reviewDate = new Date(review.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })

          // Generate stars HTML
          let starsHTML = ""
          for (let i = 1; i <= 5; i++) {
            if (i <= review.rating) {
              starsHTML += `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`
            } else {
              starsHTML += `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`
            }
          }

          reviewsHTML += `
            <div class="review-item">
              <div class="review-header">
                <div class="reviewer-info">
                  <div class="reviewer-avatar">${initials}</div>
                  <div class="reviewer-details">
                    <div class="reviewer-name">${review.name}</div>
                    <div class="review-date">${reviewDate}</div>
                  </div>
                </div>
                <div class="review-rating">
                  ${starsHTML}
                </div>
              </div>
              <div class="review-content">
                ${review.comment}
              </div>
            </div>
          `
        })

        reviewsList.innerHTML = reviewsHTML
      } else {
        reviewsList.innerHTML = `<p>No reviews yet for this product.</p>`
      }
    }

    // Average rating
    const averageRating = document.getElementById("average-rating")
    if (averageRating) {
      averageRating.textContent = product.rating
    }

    // Total reviews count
    const totalReviewsCount = document.getElementById("total-reviews-count")
    if (totalReviewsCount) {
      totalReviewsCount.textContent = product.reviewCount
    }

    // Related products
    const relatedProductsContainer = document.getElementById("related-products")
    if (relatedProductsContainer && product.relatedProducts) {
      let relatedProductsHTML = ""

      // Get up to 4 related products
      const relatedProducts = product.relatedProducts
        .map((id) => products.find((p) => p.id === id))
        .filter((p) => p) // Filter out any undefined products
        .slice(0, 4)

      relatedProducts.forEach((relatedProduct) => {
        relatedProductsHTML += `
          <div class="product-card" id="${relatedProduct.id}">
            <div class="product-image-container">
              <img src="${relatedProduct.image}" alt="${relatedProduct.name}" class="product-image">
              <div class="product-overlay">
                <button class="product-action-button" aria-label="Add to cart">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
                </button>
              </div>
            </div>
            <div class="product-content">
              <div class="product-info">
                <p class="product-category">${relatedProduct.category}</p>
                <h3 class="product-title">${relatedProduct.name}</h3>
              </div>
              <div class="product-rating">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <span>${relatedProduct.rating}</span>
              </div>
              <div class="product-footer">
                <p class="product-price">$${relatedProduct.price.toFixed(2)}</p>
                <a href="product-detail.html?id=${relatedProduct.id}" class="product-details-link">
                  Details
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </a>
              </div>
            </div>
          </div>
        `
      })

      relatedProductsContainer.innerHTML = relatedProductsHTML
    }

    // Add to cart button
    const addToCartBtn = document.getElementById("add-to-cart")
    if (addToCartBtn) {
      addToCartBtn.addEventListener("click", () => {
        // Get quantity
        const quantityValue = document.querySelector(".quantity-value")
        const quantity = Number.parseInt(quantityValue.textContent, 10)

        // Add to cart multiple times based on quantity
        for (let i = 0; i < quantity; i++) {
          addToCart(product.id)
        }
      })
    }

    // Quantity buttons
    const decreaseQuantityBtn = document.querySelector(".decrease-quantity")
    const increaseQuantityBtn = document.querySelector(".increase-quantity")
    const quantityValue = document.querySelector(".quantity-value")

    if (decreaseQuantityBtn && increaseQuantityBtn && quantityValue) {
      decreaseQuantityBtn.addEventListener("click", () => {
        let quantity = Number.parseInt(quantityValue.textContent, 10)
        if (quantity > 1) {
          quantity--
          quantityValue.textContent = quantity
        }
      })

      increaseQuantityBtn.addEventListener("click", () => {
        let quantity = Number.parseInt(quantityValue.textContent, 10)
        quantity++
        quantityValue.textContent = quantity
      })
    }

    // Tab functionality
    const tabButtons = document.querySelectorAll(".tab-button")
    const tabPanels = document.querySelectorAll(".tab-panel")

    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Remove active class from all buttons and panels
        tabButtons.forEach((btn) => btn.classList.remove("active"))
        tabPanels.forEach((panel) => panel.classList.remove("active"))

        // Add active class to clicked button and corresponding panel
        button.classList.add("active")
        const tabId = button.dataset.tab
        document.getElementById(`${tabId}-panel`).classList.add("active")
      })
    })
  }

  // Update product detail links to point to the product detail page
  function updateProductDetailLinks() {
    const detailLinks = document.querySelectorAll(".product-details-link")

    detailLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        // Prevent default link behavior
        e.preventDefault()

        // Get product ID from the closest product card
        const productCard = link.closest(".product-card")
        if (productCard) {
          const productId = productCard.id

          // Redirect to product detail page with product ID
          window.location.href = `product-detail.html?id=${productId}`
        }
      })
    })
  }

  // Call the function to update product detail links
  updateProductDetailLinks()

  // Search functionality
  const searchButtons = document.querySelectorAll('.icon-button[aria-label="Search"]')
  const searchOverlay = document.createElement("div")
  searchOverlay.className = "search-overlay"
  document.body.appendChild(searchOverlay)

  const searchModal = document.createElement("div")
  searchModal.className = "search-modal"
  searchModal.innerHTML = `
    <div class="search-header">
      <h3>Search Parts</h3>
      <button class="search-close">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    </div>
    <div class="search-content">
      <div class="search-input-container">
        <input type="text" id="search-input" placeholder="Search for parts (e.g., brake kit, headlight, suspension)">
        <button class="search-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </button>
      </div>
      <div class="search-categories">
        <span>Popular searches:</span>
        <button class="search-tag">Brake Kit</button>
        <button class="search-tag">LED Headlights</button>
        <button class="search-tag">Suspension</button>
        <button class="search-tag">Air Intake</button>
      </div>
      <div class="search-results">
        <!-- Results will be populated here -->
      </div>
    </div>
  `
  document.body.appendChild(searchModal)

  // Toggle search modal
  searchButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.stopPropagation() // Prevent the click from bubbling to document
      searchOverlay.classList.add("active")
      searchModal.classList.add("active")
      document.getElementById("search-input").focus()
    })
  })

  // Close search modal
  searchOverlay.addEventListener("click", () => {
    searchOverlay.classList.remove("active")
    searchModal.classList.remove("active")
  })

  document.querySelector(".search-close").addEventListener("click", () => {
    searchOverlay.classList.remove("active")
    searchModal.classList.remove("active")
  })

  // Prevent closing when clicking inside the modal
  searchModal.addEventListener("click", (e) => {
    e.stopPropagation()
  })

  // Search functionality
  const searchInput = document.getElementById("search-input")
  const searchButton = document.querySelector(".search-button")
  const searchResults = document.querySelector(".search-results")
  const searchTags = document.querySelectorAll(".search-tag")

  function performSearch(query) {
    query = query.toLowerCase().trim()
    if (!query) {
      searchResults.innerHTML = ""
      return
    }

    const filteredProducts = products.filter(
      (product) => product.name.toLowerCase().includes(query) || product.category.toLowerCase().includes(query),
    )

    if (filteredProducts.length === 0) {
      searchResults.innerHTML = '<p class="no-results">No products found. Try a different search term.</p>'
      return
    }

    let resultsHTML = '<div class="results-grid">'
    filteredProducts.forEach((product) => {
      resultsHTML += `
        <a href="product-detail.html?id=${product.id}" class="result-card">
          <div class="result-image">
            <img src="${product.image}" alt="${product.name}">
          </div>
          <div class="result-content">
            <p class="result-category">${product.category}</p>
            <h4 class="result-title">${product.name}</h4>
            <p class="result-price">$${product.price.toFixed(2)}</p>
          </div>
        </a>
      `
    })
    resultsHTML += "</div>"

    searchResults.innerHTML = resultsHTML
  }

  searchButton.addEventListener("click", () => {
    performSearch(searchInput.value)
  })

  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      performSearch(searchInput.value)
    }
  })

  searchTags.forEach((tag) => {
    tag.addEventListener("click", () => {
      searchInput.value = tag.textContent
      performSearch(tag.textContent)
    })
  })
})
