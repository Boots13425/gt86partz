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

  // Sample product data for search and cart
  const products = [
    {
      id: "brake-kit",
      name: "High-Performance Brake Kit",
      category: "Braking System",
      price: 299.99,
      image: "assets/product-1.jpg",
    },
    {
      id: "led-headlight",
      name: "Advanced LED Headlight Set",
      category: "Lighting",
      price: 189.99,
      image: "assets/product-2.jpg",
    },
    {
      id: "air-intake",
      name: "Carbon Fiber Air Intake System",
      category: "Engine",
      price: 249.99,
      image: "assets/product-3.jpg",
    },
    {
      id: "coilover-kit",
      name: "Adjustable Coilover Suspension Kit",
      category: "Suspension",
      price: 799.99,
      image: "assets/product-4.jpg",
    },
    {
      id: "exhaust-system",
      name: "Performance Exhaust System",
      category: "Engine",
      price: 459.99,
      image: "assets/product-1.jpg",
    },
    {
      id: "brake-pads",
      name: "Sport Brake Pads",
      category: "Braking System",
      price: 89.99,
      image: "assets/product-2.jpg",
    },
    {
      id: "cold-air-intake",
      name: "Cold Air Intake Kit",
      category: "Engine",
      price: 129.99,
      image: "assets/product-3.jpg",
    },
    { id: "fog-lights", name: "LED Fog Light Kit", category: "Lighting", price: 149.99, image: "assets/product-4.jpg" },
    {
      id: "steering-wheel",
      name: "Racing Steering Wheel",
      category: "Interior",
      price: 199.99,
      image: "assets/product-1.jpg",
    },
    {
      id: "clutch-kit",
      name: "Performance Clutch Kit",
      category: "Transmission",
      price: 349.99,
      image: "assets/product-2.jpg",
    },
    {
      id: "lowering-springs",
      name: "Lowering Springs",
      category: "Suspension",
      price: 219.99,
      image: "assets/product-3.jpg",
    },
    {
      id: "strut-brace",
      name: "Strut Tower Brace",
      category: "Suspension",
      price: 129.99,
      image: "assets/product-4.jpg",
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
      product: "LED Fog Light Kit",
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
        <a href="catalog.html?product=${product.id}" class="result-card">
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

