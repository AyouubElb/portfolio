<template>
  <nav class="nav-bar">
    <ul class="nav-bar-items d-flex justify-content-end">
      <li
        class="flip-horizontal-bottom my-auto"
        @click="scrollPage('.about-section-container')"
      >
        about
      </li>
      <li
        class="flip-horizontal-bottom my-auto"
        @click="scrollPage('.skills-section-container')"
      >
        skills
      </li>
      <li
        class="flip-horizontal-bottom my-auto"
        @click="scrollPage('.projects-section-container')"
      >
        projects
      </li>
      <li
        class="flip-horizontal-bottom my-auto"
        @click="scrollPage('.contact-section-container')"
      >
        contact
      </li>
      <li class="my-auto">
        <button class="resume-btn" @click="openResume">Resume</button>
      </li>
    </ul>
  </nav>
  <div class="sidebar d-flex">
    <div
      class="sidebar-icon ms-auto me-4 mt-4"
      data-bs-toggle="offcanvas"
      href="#offcanvas"
    >
      <i class="bi bi-list"></i>
    </div>
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvas"
      aria-labelledby="offcanvasLabel"
    >
      <div class="offcanvas-body">
        <ul class="nav-bar-items d-flex flex-column align-items-center p-0">
          <li
            class="flip-horizontal-bottom navbar-link"
            @click="scrollPage('.about-section-container')"
          >
            about
          </li>
          <li
            class="flip-horizontal-bottom navbar-link"
            @click="scrollPage('.skills-section-container')"
          >
            skills
          </li>
          <li
            class="flip-horizontal-bottom navbar-link"
            @click="scrollPage('.projects-section-container')"
          >
            projects
          </li>
          <li
            class="flip-horizontal-bottom navbar-link"
            @click="scrollPage('.contact-section-container')"
          >
            contact
          </li>
          <li>
            <button class="resume-btn" @click="openResume">Resume</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
const scrollPage = (targetElement) => {
  const element = document.querySelector(targetElement);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const openResume = () => {
  window.open(
    "https://portfolio-jeg1.onrender.com/resume/resume.pdf",
    "_blank"
  );
};
</script>
<style>
.nav-bar .nav-bar-items {
  padding: 0 50px;
  height: 90px;
  gap: 1rem;
  margin: 0;
}
.nav-bar .nav-bar-items li {
  text-transform: uppercase;
  padding: 0 20px;
  cursor: pointer;
  transition: color 0.25s, transform 1s;
}
.nav-bar .nav-bar-items li:hover {
  color: #64dcdd;
  /* transform: rotateX(360deg);
  transition: transform 1s; */
}
.resume-btn {
  color: #64dcdd;
  background-color: transparent;
  padding: 8px 12px;
  font-weight: 500;
  border: 2px solid #64dcdd;
}
.resume-btn:hover {
  box-shadow: 0 0 4px 2px #3c9fa0;
}
.sidebar {
  display: none;
}
.sidebar-icon {
  color: #fefdfb;
  font-size: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
  padding: 2px 10px;
  border-radius: 0.25rem;
  cursor: pointer;
  display: none;
}
.sidebar .offcanvas {
  max-width: 270px;
}
.offcanvas-body {
  padding: 2rem;
}
.navbar-link {
  font-size: 1.75rem;
  font-weight: 600;
  text-align: start;
  padding: 0.25rem 1rem;
  text-transform: uppercase;
  cursor: pointer;
}
.navbar-link:hover {
  color: #3c9fa0;
}
@media only screen and (max-width: 992px) {
  .nav-bar {
    display: none;
  }
  .sidebar {
    display: flex;
  }
  .sidebar-icon {
    display: block;
  }
  .resume-btn {
    border: 2px solid #3c9fa0;
    margin: 1rem;
  }
  .resume-btn a {
    color: #3c9fa0;
  }
  .resume-btn:hover {
  }
}
</style>
