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
        "Upgrade your vehicle’s performance and style with these high-quality TE37 REPS wheels. Designed for an aggressive fitment, these 18x10.5 +20 wheels feature a 5x100 bolt pattern, making them compatible with a wide range of performance vehicles. The ceramic-coated finish ensures long-lasting protection against corrosion and brake dust, while the lightweight forged-inspired construction enhances handling and acceleration.",
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
  "relatedProducts": ["interior-trim", "shift-knob"]
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
      price: 549.99,
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

      // Add event listener to "Start Shopping" button
      const startShoppingBtn = document.querySelector(".start-shopping")
      if (startShoppingBtn) {
        startShoppingBtn.addEventListener("click", () => {
          closeCart()

          // Redirect to catalog if not already there
          if (!window.location.pathname.includes("catalog.html")) {
            window.location.href = "catalog.html"
          }
        })
      }
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

        // Send email (using mailto for demonstration)
        const emailSubject = "New Order from gt86partz"
        const mailtoLink = `mailto:orders@gt86partz.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
        window.open(mailtoLink)

        // Show confirmation
        alert("Thank you! We will get back to you within 24hours.")

        // Close cart modal
        closeCart()
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
