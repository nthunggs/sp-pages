// Gymstore Academy Slide System Logic

document.addEventListener("DOMContentLoaded", () => {
  // --- State Variables ---
  let currentSlideIndex = 0;
  let viewMode = "presentation"; // 'presentation' or 'document'
  let isAutoplayActive = false;
  let autoplayIntervalId = null;
  const autoplayDelay = 6000; // 6 seconds per slide
  let activeQuizQuestionIndex = 0;
  
  // --- DOM Elements ---
  const body = document.body;
  const appWrapper = document.getElementById("app-wrapper");
  const appSidebar = document.getElementById("app-sidebar");
  const sidebarSlideList = document.getElementById("sidebar-slide-list");
  const slideViewer = document.getElementById("slide-viewer");
  const documentScroller = document.getElementById("document-scroller");
  
  const headerChapter = document.getElementById("header-chapter");
  const headerTitle = document.getElementById("header-title");
  
  const btnPrev = document.getElementById("btn-prev");
  const btnNext = document.getElementById("btn-next");
  const btnAutoplay = document.getElementById("btn-autoplay");
  const btnFullscreen = document.getElementById("btn-fullscreen");
  const btnThemeToggle = document.getElementById("btn-theme-toggle");
  const btnToggleSidebar = document.getElementById("btn-toggle-sidebar");
  const btnCloseSidebar = document.getElementById("btn-close-sidebar");
  
  const slideCounter = document.getElementById("slide-counter");
  const progressIndicator = document.getElementById("progress-indicator");
  const autoplaySettings = document.getElementById("autoplay-settings");
  
  const searchInput = document.getElementById("search-input");
  const clearSearchBtn = document.getElementById("clear-search");
  
  // Shortcuts modal elements
  const btnShortcuts = document.getElementById("btn-shortcuts");
  const shortcutsModal = document.getElementById("shortcuts-modal");
  const btnCloseModal = document.getElementById("btn-close-modal");
  
  // Mode switcher elements
  const btnModePresentation = document.getElementById("mode-presentation");
  const btnModeDocument = document.getElementById("mode-document");

  // --- Initialize App ---
  function init() {
    renderSidebarList(SLIDES_DATA);
    goToSlide(0);
    setupEventListeners();
  }

  // --- Render Sidebar List ---
  function renderSidebarList(slides, query = "") {
    sidebarSlideList.innerHTML = "";
    let currentChapter = "";
    
    slides.forEach((slide, index) => {
      // Check query match if searching
      if (query) {
        const textToSearch = `${slide.chapter} ${slide.title} ${slide.subtitle} ${slide.content}`.toLowerCase();
        if (!textToSearch.includes(query.toLowerCase())) {
          return; // Skip if no match
        }
      }

      // Add chapter headers when chapter changes
      if (slide.chapter !== currentChapter) {
        currentChapter = slide.chapter;
        const chapterHeader = document.createElement("div");
        chapterHeader.className = "sidebar-chapter-header";
        chapterHeader.textContent = currentChapter;
        sidebarSlideList.appendChild(chapterHeader);
      }

      // Create nav item
      const navItem = document.createElement("div");
      navItem.className = `sidebar-item ${index === currentSlideIndex ? 'active' : ''}`;
      navItem.setAttribute("data-slide-index", index);
      
      const itemIndex = document.createElement("span");
      itemIndex.className = "sidebar-item-index";
      itemIndex.textContent = String(slide.id).padStart(2, "0");
      
      const itemTitle = document.createElement("span");
      itemTitle.className = "sidebar-item-title";
      itemTitle.textContent = slide.title;
      
      navItem.appendChild(itemIndex);
      navItem.appendChild(itemTitle);
      
      navItem.addEventListener("click", () => {
        goToSlide(index);
        // Hide sidebar on mobile screen once selected
        if (window.innerWidth <= 1024) {
          appSidebar.classList.remove("active");
        }
      });
      
      sidebarSlideList.appendChild(navItem);
    });

    // Handle empty state for search
    if (sidebarSlideList.children.length === 0) {
      const emptyState = document.createElement("div");
      emptyState.className = "sidebar-item";
      emptyState.style.cursor = "default";
      emptyState.innerHTML = `<span class="text-muted"><i class="fa-solid fa-circle-info"></i> Không tìm thấy kết quả</span>`;
      sidebarSlideList.appendChild(emptyState);
    }
  }

  // --- Go To Slide ---
  function goToSlide(index) {
    if (index < 0 || index >= SLIDES_DATA.length) return;
    
    currentSlideIndex = index;
    const slide = SLIDES_DATA[currentSlideIndex];
    
    // Update breadcrumbs and metadata
    headerChapter.textContent = slide.chapter;
    headerTitle.textContent = slide.title;
    slideCounter.textContent = `${currentSlideIndex + 1} / ${SLIDES_DATA.length}`;
    
    // Update progress bar
    const progressPercent = ((currentSlideIndex + 1) / SLIDES_DATA.length) * 100;
    progressIndicator.style.width = `${progressPercent}%`;
    
    // Update active sidebar item
    document.querySelectorAll(".sidebar-item").forEach(item => {
      item.classList.remove("active");
      if (parseInt(item.getAttribute("data-slide-index")) === currentSlideIndex) {
        item.classList.add("active");
        // Scroll sidebar to show active item
        item.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    });

    if (viewMode === "presentation") {
      renderSlideViewerContent(slide);
    } else {
      // Document Mode: Scroll into view the corresponding card
      const targetCard = document.querySelector(`.document-scroller [data-slide-index="${currentSlideIndex}"]`);
      if (targetCard) {
        targetCard.scrollIntoView({ behavior: "smooth", block: "center" });
        // Highlight active card
        document.querySelectorAll(".document-scroller .slide-card").forEach(card => {
          card.classList.remove("current-doc-slide");
        });
        targetCard.classList.add("current-doc-slide");
      }
    }
    
    // Manage controls disabled state
    btnPrev.disabled = currentSlideIndex === 0;
    btnNext.disabled = currentSlideIndex === SLIDES_DATA.length - 1;

    // Reset quiz index if changing slide
    activeQuizQuestionIndex = 0;
  }

  // --- Render Slide Viewer Content ---
  function renderSlideViewerContent(slide) {
    slideViewer.innerHTML = "";
    
    const slideCard = document.createElement("div");
    slideCard.className = `slide-card ${slide.theme ? 'theme-' + slide.theme : ''}`;
    slideCard.setAttribute("data-slide-index", currentSlideIndex);
    
    // Build slide HTML based on type
    if (slide.type === "cover") {
      slideCard.innerHTML = `
        <div class="slide-body">
          ${slide.content}
        </div>
      `;
    } else if (slide.type === "interactive-quiz") {
      // Render layout for quizzes
      slideCard.innerHTML = `
        <div class="slide-header">
          <div class="slide-chapter">${slide.chapter}</div>
          <div class="slide-title">${slide.title}</div>
          <div class="slide-subtitle">${slide.subtitle}</div>
        </div>
        <div class="slide-body">
          <div id="quiz-container-root"></div>
        </div>
      `;
      setTimeout(() => renderQuizComponent(slide), 0);
    } else {
      // Standard slides
      slideCard.innerHTML = `
        <div class="slide-header">
          <div class="slide-chapter">${slide.chapter}</div>
          <div class="slide-title">${slide.title}</div>
          <div class="slide-subtitle">${slide.subtitle}</div>
        </div>
        <div class="slide-body">
          ${slide.content}
        </div>
      `;
    }
    
    slideViewer.appendChild(slideCard);
  }

  // --- Render Quiz Component (Interactive) ---
  function renderQuizComponent(slide) {
    const root = document.getElementById("quiz-container-root");
    if (!root) return;
    
    if (slide.quizType === "chatbot-vs-agent") {
      const question = slide.questions[activeQuizQuestionIndex];
      const isLastQuestion = activeQuizQuestionIndex === slide.questions.length - 1;
      
      root.innerHTML = `
        <div class="quiz-container">
          <div class="quiz-question-card">
            <div class="quiz-question-text">
              <span class="text-red">Câu hỏi ${activeQuizQuestionIndex + 1}/${slide.questions.length}:</span><br>
              ${question.question}
            </div>
            
            <div class="quiz-options-list">
              ${question.options.map((opt, i) => `
                <button class="quiz-option" data-option-index="${i}">
                  <span>${opt}</span>
                  <i class="fa-regular fa-circle icon-option-state"></i>
                </button>
              `).join("")}
            </div>
            
            <div class="quiz-explanation" id="quiz-explanation-box" style="display: none;">
              <div class="explanation-title"><i class="fa-solid fa-circle-info"></i> Giải thích chi tiết:</div>
              <div class="explanation-text">${question.explanation}</div>
            </div>
            
            <div class="quiz-nav">
              <div class="quiz-status-indicator">
                ${activeQuizQuestionIndex + 1} của ${slide.questions.length} câu hỏi
              </div>
              <button class="btn-quiz-next" id="btn-quiz-next" disabled>
                ${isLastQuestion ? "Hoàn thành bài tập" : "Câu tiếp theo <i class='fa-solid fa-arrow-right'></i>"}
              </button>
            </div>
          </div>
        </div>
      `;
      
      // Hook up options triggers
      const optionButtons = root.querySelectorAll(".quiz-option");
      const explanationBox = root.getElementById("quiz-explanation-box");
      const nextBtn = root.getElementById("btn-quiz-next");
      
      optionButtons.forEach(btn => {
        btn.addEventListener("click", () => {
          const selectedIdx = parseInt(btn.getAttribute("data-option-index"));
          
          // Disable further clicks for this question
          optionButtons.forEach(b => b.disabled = true);
          
          // Style selected option
          if (selectedIdx === question.correct) {
            btn.classList.add("correct");
            btn.querySelector(".icon-option-state").className = "fa-solid fa-circle-check";
          } else {
            btn.classList.add("incorrect");
            btn.querySelector(".icon-option-state").className = "fa-solid fa-circle-xmark";
            // Highlight the correct one
            optionButtons[question.correct].classList.add("correct");
            optionButtons[question.correct].querySelector(".icon-option-state").className = "fa-solid fa-circle-check";
          }
          
          // Show explanation
          explanationBox.style.display = "block";
          
          // Enable next button
          nextBtn.disabled = false;
        });
      });
      
      nextBtn.addEventListener("click", () => {
        if (isLastQuestion) {
          // Finished the quiz, display congratulations card
          root.innerHTML = `
            <div class="quiz-container">
              <div class="card text-center py-4">
                <i class="fa-solid fa-circle-check text-green" style="font-size: 48px; margin-bottom: 16px;"></i>
                <h3>ĐÃ HOÀN THÀNH BÀI TẬP THỰC HÀNH!</h3>
                <p class="font-sm text-muted mt-2">Bạn đã hoàn thành việc phân biệt giữa Chatbot ngôn ngữ và Đại lý tự vận hành AI Agent.</p>
                <button class="btn-quiz-next mt-4 mx-auto" id="btn-quiz-restart">Làm lại bài tập</button>
              </div>
            </div>
          `;
          document.getElementById("btn-quiz-restart").addEventListener("click", () => {
            activeQuizQuestionIndex = 0;
            renderQuizComponent(slide);
          });
        } else {
          activeQuizQuestionIndex++;
          renderQuizComponent(slide);
        }
      });
      
    } else if (slide.quizType === "flashcard") {
      // Render flashcards grid
      root.innerHTML = `
        <div class="flashcards-grid">
          ${slide.questions.map((q, i) => `
            <div class="flashcard-wrapper" data-card-index="${i}">
              <div class="flashcard">
                <div class="flashcard-front">
                  ${q.question}
                </div>
                <div class="flashcard-back">
                  ${q.answer}
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      `;
      
      // Add click behavior to flip
      root.querySelectorAll(".flashcard-wrapper").forEach(wrapper => {
        wrapper.addEventListener("click", () => {
          const card = wrapper.querySelector(".flashcard");
          card.classList.toggle("flipped");
        });
      });
    }
  }

  // --- Render Document/Scroller Mode ---
  function renderDocumentMode() {
    documentScroller.innerHTML = "";
    
    SLIDES_DATA.forEach((slide, index) => {
      const slideCard = document.createElement("div");
      slideCard.className = `slide-card ${index === currentSlideIndex ? 'current-doc-slide' : ''} ${slide.theme ? 'theme-' + slide.theme : ''}`;
      slideCard.setAttribute("data-slide-index", index);
      
      if (slide.type === "cover") {
        slideCard.innerHTML = `
          <div class="slide-body">
            ${slide.content}
          </div>
        `;
      } else if (slide.type === "interactive-quiz") {
        // Build readable document layout instead of dynamic quiz
        let exerciseContent = "";
        
        if (slide.quizType === "chatbot-vs-agent") {
          exerciseContent = `
            <div class="quiz-container">
              ${slide.questions.map((q, i) => `
                <div class="card mt-2">
                  <div class="font-bold text-red">Bài tập ${i + 1}: ${q.question}</div>
                  <div class="font-xs mt-1"><strong>Đáp án đúng:</strong> ${q.options[q.correct]}</div>
                  <div class="font-xs mt-1 text-muted"><strong>Giải thích:</strong> ${q.explanation}</div>
                </div>
              `).join("")}
            </div>
          `;
        } else if (slide.quizType === "flashcard") {
          exerciseContent = `
            <div class="table-container mt-2">
              <table class="table-premium font-xs">
                <thead>
                  <tr>
                    <th style="width: 30%">Câu hỏi</th>
                    <th>Đáp án kỳ vọng</th>
                  </tr>
                </thead>
                <tbody>
                  ${slide.questions.map(q => `
                    <tr>
                      <td><strong>${q.question}</strong></td>
                      <td>${q.answer}</td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          `;
        }
        
        slideCard.innerHTML = `
          <div class="slide-header">
            <div class="slide-chapter">${slide.chapter}</div>
            <div class="slide-title">${slide.title}</div>
            <div class="slide-subtitle">${slide.subtitle}</div>
          </div>
          <div class="slide-body">
            ${exerciseContent}
          </div>
        `;
      } else {
        slideCard.innerHTML = `
          <div class="slide-header">
            <div class="slide-chapter">${slide.chapter}</div>
            <div class="slide-title">${slide.title}</div>
            <div class="slide-subtitle">${slide.subtitle}</div>
          </div>
          <div class="slide-body">
            ${slide.content}
          </div>
        `;
      }
      
      documentScroller.appendChild(slideCard);
    });

    // Sync active slide index while scrolling in document mode
    documentScroller.removeEventListener("scroll", handleDocumentScroll);
    documentScroller.addEventListener("scroll", handleDocumentScroll);
  }

  // --- Handle Document Mode Scroll ---
  let isScrollingSync = false;
  function handleDocumentScroll() {
    if (isScrollingSync) return;
    
    isScrollingSync = true;
    setTimeout(() => {
      const cards = documentScroller.querySelectorAll(".slide-card");
      const scrollerBounds = documentScroller.getBoundingClientRect();
      const scrollerCenter = scrollerBounds.top + scrollerBounds.height / 2;
      
      let closestCardIndex = 0;
      let minDistance = Infinity;
      
      cards.forEach(card => {
        const bounds = card.getBoundingClientRect();
        const cardCenter = bounds.top + bounds.height / 2;
        const distance = Math.abs(scrollerCenter - cardCenter);
        
        if (distance < minDistance) {
          minDistance = distance;
          closestCardIndex = parseInt(card.getAttribute("data-slide-index"));
        }
      });
      
      if (closestCardIndex !== currentSlideIndex) {
        currentSlideIndex = closestCardIndex;
        const slide = SLIDES_DATA[currentSlideIndex];
        
        headerChapter.textContent = slide.chapter;
        headerTitle.textContent = slide.title;
        slideCounter.textContent = `${currentSlideIndex + 1} / ${SLIDES_DATA.length}`;
        
        const progressPercent = ((currentSlideIndex + 1) / SLIDES_DATA.length) * 100;
        progressIndicator.style.width = `${progressPercent}%`;
        
        document.querySelectorAll(".sidebar-item").forEach(item => {
          item.classList.remove("active");
          if (parseInt(item.getAttribute("data-slide-index")) === currentSlideIndex) {
            item.classList.add("active");
            item.scrollIntoView({ block: "nearest", behavior: "smooth" });
          }
        });
        
        cards.forEach(c => c.classList.remove("current-doc-slide"));
        cards[currentSlideIndex].classList.add("current-doc-slide");
      }
      isScrollingSync = false;
    }, 150);
  }

  // --- Autoplay Controls ---
  function toggleAutoplay() {
    if (isAutoplayActive) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
  }

  function startAutoplay() {
    isAutoplayActive = true;
    btnAutoplay.classList.add("playing");
    btnAutoplay.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    autoplaySettings.style.display = "flex";
    
    autoplayIntervalId = setInterval(() => {
      if (currentSlideIndex === SLIDES_DATA.length - 1) {
        // Go back to the first slide
        goToSlide(0);
      } else {
        nextSlide();
      }
    }, autoplayDelay);
  }

  function stopAutoplay() {
    isAutoplayActive = false;
    btnAutoplay.classList.remove("playing");
    btnAutoplay.innerHTML = `<i class="fa-solid fa-play"></i>`;
    autoplaySettings.style.display = "none";
    
    if (autoplayIntervalId) {
      clearInterval(autoplayIntervalId);
      autoplayIntervalId = null;
    }
  }

  function resetAutoplayTimer() {
    if (isAutoplayActive) {
      clearInterval(autoplayIntervalId);
      autoplayIntervalId = setInterval(() => {
        if (currentSlideIndex === SLIDES_DATA.length - 1) {
          goToSlide(0);
        } else {
          nextSlide();
        }
      }, autoplayDelay);
    }
  }

  // --- Next/Prev Navigation ---
  function nextSlide() {
    if (currentSlideIndex < SLIDES_DATA.length - 1) {
      goToSlide(currentSlideIndex + 1);
      resetAutoplayTimer();
    }
  }

  function prevSlide() {
    if (currentSlideIndex > 0) {
      goToSlide(currentSlideIndex - 1);
      resetAutoplayTimer();
    }
  }

  // --- Fullscreen Trigger ---
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      appWrapper.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
      btnFullscreen.innerHTML = `<i class="fa-solid fa-compress"></i>`;
    } else {
      document.exitFullscreen();
      btnFullscreen.innerHTML = `<i class="fa-solid fa-expand"></i>`;
    }
  }

  // --- Theme Toggle ---
  function toggleTheme() {
    if (body.classList.contains("dark-theme")) {
      body.classList.remove("dark-theme");
      body.classList.add("light-theme");
      btnThemeToggle.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    } else {
      body.classList.remove("light-theme");
      body.classList.add("dark-theme");
      btnThemeToggle.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    }
  }

  // --- View Mode Toggle ---
  function setViewMode(mode) {
    if (viewMode === mode) return;
    
    viewMode = mode;
    
    if (viewMode === "presentation") {
      btnModePresentation.classList.add("active");
      btnModeDocument.classList.remove("active");
      
      documentScroller.style.display = "none";
      slideViewer.style.display = "flex";
      
      // Stop scrolling listener, render active slide
      renderSlideViewerContent(SLIDES_DATA[currentSlideIndex]);
    } else {
      btnModePresentation.classList.remove("active");
      btnModeDocument.classList.add("active");
      
      slideViewer.style.display = "none";
      documentScroller.style.display = "flex";
      
      // Render all slides
      renderDocumentMode();
      
      // Scroll to current active card
      setTimeout(() => {
        const targetCard = document.querySelector(`.document-scroller [data-slide-index="${currentSlideIndex}"]`);
        if (targetCard) {
          targetCard.scrollIntoView({ block: "center" });
          targetCard.classList.add("current-doc-slide");
        }
      }, 50);
    }
    
    stopAutoplay();
  }

  // --- Setup Event Listeners ---
  function setupEventListeners() {
    // Navigation Buttons
    btnPrev.addEventListener("click", prevSlide);
    btnNext.addEventListener("click", nextSlide);
    
    // Autoplay, Fullscreen, Theme, Sidebar Toggles
    btnAutoplay.addEventListener("click", toggleAutoplay);
    btnFullscreen.addEventListener("click", toggleFullscreen);
    btnThemeToggle.addEventListener("click", toggleTheme);
    
    btnToggleSidebar.addEventListener("click", () => {
      appSidebar.classList.toggle("active");
    });
    
    btnCloseSidebar.addEventListener("click", () => {
      appSidebar.classList.remove("active");
    });

    // View Mode selectors
    btnModePresentation.addEventListener("click", () => setViewMode("presentation"));
    btnModeDocument.addEventListener("click", () => setViewMode("document"));

    // Shortcuts Modal triggers
    btnShortcuts.addEventListener("click", () => {
      shortcutsModal.classList.add("active");
    });
    
    btnCloseModal.addEventListener("click", () => {
      shortcutsModal.classList.remove("active");
    });
    
    shortcutsModal.addEventListener("click", (e) => {
      if (e.target === shortcutsModal) {
        shortcutsModal.classList.remove("active");
      }
    });

    // Search input
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.trim();
      if (query.length > 0) {
        clearSearchBtn.style.display = "flex";
      } else {
        clearSearchBtn.style.display = "none";
      }
      renderSidebarList(SLIDES_DATA, query);
    });

    clearSearchBtn.addEventListener("click", () => {
      searchInput.value = "";
      clearSearchBtn.style.display = "none";
      renderSidebarList(SLIDES_DATA);
      searchInput.focus();
    });

    // Global keyboard listeners
    document.addEventListener("keydown", (e) => {
      // Don't intercept shortcuts when user is typing in the search bar
      if (document.activeElement === searchInput) {
        if (e.key === "Escape") {
          searchInput.blur();
        }
        return;
      }

      switch (e.key) {
        case "ArrowRight":
        case " ": // Spacebar
          e.preventDefault();
          nextSlide();
          break;
        case "ArrowLeft":
        case "Backspace":
          e.preventDefault();
          prevSlide();
          break;
        case "Escape":
          e.preventDefault();
          // Toggle Sidebar if Modal is not open, otherwise close Modal
          if (shortcutsModal.classList.contains("active")) {
            shortcutsModal.classList.remove("active");
          } else {
            appSidebar.classList.toggle("active");
          }
          break;
        case "f":
        case "F":
          e.preventDefault();
          toggleFullscreen();
          break;
        case "p":
        case "P":
          e.preventDefault();
          toggleAutoplay();
          break;
        case "t":
        case "T":
          e.preventDefault();
          toggleTheme();
          break;
        case "m":
        case "M":
          e.preventDefault();
          setViewMode(viewMode === "presentation" ? "document" : "presentation");
          break;
        case "Home":
          e.preventDefault();
          goToSlide(0);
          break;
        case "End":
          e.preventDefault();
          goToSlide(SLIDES_DATA.length - 1);
          break;
      }
    });

    // Touch Swipe Gestures for Mobile
    let touchStartX = 0;
    let touchEndX = 0;

    slideViewer.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    slideViewer.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      const swipeDistance = touchEndX - touchStartX;
      if (swipeDistance < -55) {
        // Swiped Left -> Go Next
        nextSlide();
      } else if (swipeDistance > 55) {
        // Swiped Right -> Go Prev
        prevSlide();
      }
    }
  }

  // Run initial setup
  init();
});
