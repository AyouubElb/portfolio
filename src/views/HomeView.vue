<template>
  <div class="home-container">
    <div
      class="home-header d-flex justify-content-center align-items-center"
      data-aos="fade-up"
      data-aos-duration="750"
      data-aos-easing="ease-in-out"
      data-aos-offset="50"
    >
      <div class="home-header-text d-flex flex-column">
        <h1>
          Hello,
          <span class="color-text">I'm </span>
          Ayoub a fullstack
          <span class="color-text">developer</span>
        </h1>
        <div class="header-links d-flex mx-auto my-3">
          <a href="https://github.com/AyouubElb" target="_blank"
            ><i class="bi bi-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ayoub-el-bouasri/"
            target="_blank"
          >
            <i class="bi bi-linkedin"></i>
          </a>
        </div>
        <div
          class="scroll-down-arrow-component d-flex flex-column align-items-center"
        >
          <p class="m-0">Scroll down</p>
          <div
            class="scroll-down-icon"
            @click="scrollPage('.about-section-container')"
          >
            <i class="bi bi-arrow-down"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="about-section-container d-flex flex-column">
      <div
        class="about-title mb-4"
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        <h2>About me.</h2>
      </div>
      <div class="about-img mx-auto">
        <img src="../assets/images/profile-image.png" alt="" />
      </div>
      <div class="about-text mx-auto">
        Hi There I'm Ayoub EL Bouasri. A Full Stack Web Developer with 1+ years
        of professional experience in web development. Passionate and quick
        learner with a strong focus on staying updated with new skills and
        technologies in software engineering. My expertise lies in translating
        designs into fully functional websites while utilizing my development
        skills to enhance and customize their features.
      </div>
    </div>
    <div class="skills-section-container">
      <div
        class="skills-title"
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        <h2>Technologies I work with</h2>
      </div>
      <div class="skills-section-text d-flex gap-5 justify-conte">
        <div class="skill-list d-flex justify-content-center gap-4">
          <div class="skill-item d-flex flex-column">
            <img src="../assets/icons/javascript-svgrepo-com.svg" />
            <span>JavaScript</span>
          </div>
          <div class="skill-item d-flex flex-column">
            <img src="../assets/icons/typescript.svg" />
            <span>TypeScript</span>
          </div>
          <div class="skill-item d-flex flex-column">
            <img src="../assets/icons/bootstrap-svgrepo-com.svg" />
            <span>Bootstrap</span>
          </div>
          <div class="skill-item d-flex flex-column">
            <img src="../assets/icons/tailwind-svgrepo-com.svg" />
            <span>Tailwind</span>
          </div>
          <div class="skill-item d-flex flex-column">
            <img src="../assets/icons/vue-svgrepo-com.svg" />
            <span>Vue</span>
          </div>
          <div class="skill-item d-flex flex-column">
            <img src="../assets/icons/react-svgrepo-com.svg" />
            <span>React</span>
          </div>
          <div class="skill-item d-flex flex-column">
            <img src="../assets/icons/vite.svg" />
            <span>Vite</span>
          </div>
          <div class="skill-item d-flex flex-column">
            <img src="../assets/icons/nodejs-logo-svgrepo-com.svg" />
            <span>Node</span>
          </div>
          <div class="skill-item d-flex flex-column">
            <img src="../assets/icons/icons8-express-js.svg" />
            <span>Express</span>
          </div>
          <div class="skill-item d-flex flex-column">
            <img src="../assets/icons/mongodb-svgrepo-com.svg" />
            <span>MongoDB</span>
          </div>
          <div class="skill-item d-flex flex-column">
            <img src="../assets/icons/mysql-logo-svgrepo-com.svg" />
            <span>Mysql</span>
          </div>
          <div class="skill-item d-flex flex-column">
            <img src="../assets/icons/git-svgrepo-com.svg" />
            <span>Git</span>
          </div>
        </div>
      </div>
    </div>
    <div class="projects-section-container">
      <div class="projects-section-title">
        <h2>My projects</h2>
      </div>
      <div class="projects-section-content grid-2 mb-5">
        <div
          class="project-image"
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <img src="../assets/images/blog-app-screenshot.png" alt="" />
        </div>
        <div
          class="project-text px-5 py-3"
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <h3 class="mb-4">Blog App</h3>
          <ul class="projects-tags-list d-flex gap-2 p-0">
            <li class="projects-tag-item">TypeScript</li>
            <li class="projects-tag-item">React</li>
            <li class="projects-tag-item">Vite</li>
            <li class="projects-tag-item">Tailwind</li>
            <li class="projects-tag-item">Node/Express</li>
            <li class="projects-tag-item">Mysql</li>
          </ul>
          <div class="project-actions d-flex gap-3">
            <button class="btn">
              <a
                href="https://blog-app-client-zytp.onrender.com/"
                target="_blank"
              >
                <i class="bi bi-eye-fill"></i>
                See Live
              </a>
            </button>
            <button class="btn">
              <a href="https://github.com/AyouubElb/blog-app" target="_blank">
                <i class="bi bi-code-slash"></i>
                Source Code
              </a>
            </button>
          </div>
        </div>
      </div>
      <div class="projects-section-content grid-2 mb-5">
        <div
          class="project-image"
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <img src="../assets/images/blackshop-screenshot.png" alt="" />
        </div>
        <div
          class="project-text px-5 py-3"
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <h3 class="mb-4">E-commerce Website: Clothes Store</h3>
          <ul class="projects-tags-list d-flex gap-2 p-0">
            <li class="projects-tag-item">JavaScript</li>
            <li class="projects-tag-item">Vue</li>
            <li class="projects-tag-item">Pinia</li>
            <li class="projects-tag-item">Bootstrap</li>
            <li class="projects-tag-item">Node/Express</li>
            <li class="projects-tag-item">MongoDB</li>
          </ul>
          <div class="project-actions d-flex gap-3">
            <button class="btn">
              <a
                href="https://blackshop-store-client.onrender.com"
                target="_blank"
              >
                <i class="bi bi-eye-fill"></i>
                See Live
              </a>
            </button>
            <button class="btn">
              <a href="https://github.com/AyouubElb/Blackshop" target="_blank">
                <i class="bi bi-code-slash"></i>
                Source Code
              </a>
            </button>
          </div>
        </div>
      </div>
      <div class="projects-section-content grid-2" style="margin-bottom: 62px">
        <div
          class="project-image"
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <img src="../assets/images/realtime-chat-app-screenshot.png" alt="" />
        </div>
        <div
          class="project-text px-5 py-3"
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <h3 class="mb-4">Realtime Chat App</h3>
          <ul class="projects-tags-list d-flex gap-2 p-0">
            <li class="projects-tag-item">JavaScript</li>
            <li class="projects-tag-item">Vue</li>
            <li class="projects-tag-item">Pinia</li>
            <li class="projects-tag-item">Bootstrap</li>
            <li class="projects-tag-item">Node/Express</li>
            <li class="projects-tag-item">MongoDB</li>
            <li class="projects-tag-item">Socket.io</li>
          </ul>
          <div class="project-text-pragraph mb-4">
            Built a real-time chat application enabling users to exchange text
            messages in real time
          </div>
          <div class="project-actions d-flex gap-3">
            <button class="btn">
              <a
                href="https://realtime-chat-app-client-r7p9.onrender.com"
                target="_blank"
              >
                <i class="bi bi-eye-fill"></i>
                See Live</a
              >
            </button>
            <button class="btn">
              <a
                href="https://github.com/AyouubElb/Realtime-Chat-App-client"
                target="_blank"
              >
                <i class="bi bi-code-slash"></i>
                Source Code
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="contact-section-container grid-2">
      <div
        class="contact-section-text pe-3"
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        <div
          class="contact-section-title"
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <h2>Get in touch</h2>
        </div>
        <p>
          Drop me a line, give me a call, or send me a message by submitting the
          form.
        </p>
        <ul class="contact-info-list p-0">
          <li>
            <i class="bi bi-envelope"></i>
            <span class="my-auto">ayoub.elbouuasri@gmail.com</span>
          </li>
          <li>
            <i class="bi bi-linkedin"></i>
            <a
              href="https://www.linkedin.com/in/ayoub-el-bouasri/"
              class="my-auto"
              target="_blank"
              >linkedin.com/in/ayoub-el-bouasri</a
            >
          </li>
          <li>
            <i class="bi bi-github"></i>
            <a
              href="https://github.com/AyouubElb"
              class="my-auto"
              target="_blank"
              >github.com/AyouubElb</a
            >
          </li>
          <li>
            <i class="bi bi-telephone"></i>
            <span class="my-auto">+90 551 002 81</span>
          </li>
        </ul>
      </div>
      <div
        class="contact-section-form pt-5"
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        <form>
          <div class="form-group mb-3">
            <label for="name" class="form-label">Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              v-model="name"
              required
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="email"
              required
            />
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea
              class="form-control"
              id="message"
              v-model="message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            @click.prevent="sendMessage"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import toastr from "toastr";

const skillList = reactive([
  "Frontend Development",
  "Backend Development",
  "Database Management",
  "Version Control",
]);
const name = ref();
const email = ref();
const message = ref();
const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

const sendMessage = () => {
  if (!name.value || !email.value || !message.value) {
    toastr.error("All fields is required!", {
      positionClass: "toast-top-right",
    });
    return;
  }
  if (!emailRegEx.test(email.value)) {
    toastr.error("Please enter a valid email address!", {
      positionClass: "toast-top-right",
    });
    return;
  }
  toastr.success("Message is sent successFully", "New Message", {
    positionClass: "toast-top-right",
  });
  name.value = null;
  email.value = null;
  message.value = null;
};

const scrollPage = (targetElement) => {
  const element = document.querySelector(targetElement);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
<style>
/* animations */
@keyframes slideUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0%);
  }
}
@keyframes slideDown {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0%);
  }
}
@keyframes slideLeft {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
}
@keyframes slideRight {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
}
.home-container .home-header {
  padding: 54px 64px;
}
.header-icon {
  position: absolute;
  z-index: -1;
}
.header-icon i {
  position: absolute;
  color: #7a878d;
  font-size: 3.5rem;
  -webkit-text-stroke: 0.4px;
}
.home-header .header-icon:first-of-type {
  left: 15%;
  top: 25%;
}
.home-header .header-icon:nth-of-type(2) {
  left: 25%;
}
.home-header .header-icon:nth-of-type(3) {
  right: 45%;
  top: 45%;
}
.home-header .header-icon:nth-of-type(4) {
  right: 30%;
  top: 40%;
}
.home-header .home-header-text {
  width: 550px;
}
.home-header-text .header-links a {
  font-size: 1.75rem;
  color: #fefdfb;
}
.home-header-text .header-links a:first-of-type {
  margin-right: 12px;
}
.home-header h1 {
  font-size: 4.5rem;
  font-weight: 600;
  text-align: center;
}
.home-container .home-header h1 .color-text {
  color: #64dcdd;
  font-weight: 300;
  font-style: italic;
}
.home-container h2 {
  font-size: 3rem;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 2.5rem;
  position: relative;
}
.home-container h2::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -17px;
  height: 3px;
  background-color: #64dcdd;
  width: 80px;
}
.home-container h3 {
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.2;
}
.scroll-down-arrow-component p {
  color: #7a878d;
}
.scroll-down-arrow-component .scroll-down-icon {
  animation: slide-arrow-down 3s infinite, slide-arrow-up 3s infinite;
}
.scroll-down-arrow-component i {
  color: #64dcdd;
  font-size: 4rem;
  cursor: pointer;
}
@keyframes slide-arrow-down {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(20px);
  }
}
@keyframes slide-arrow-up {
  0%,
  100% {
    transform: translateY(20px);
  }
  50% {
    transform: translateY(0);
  }
}

/* about section */
.about-section-container {
  padding: 100px;
}
.about-section-container .about-title h2 {
  position: relative;
  /* animation: slideLeft 1s ease; */
}
@keyframes opacity {
  0%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.about-img img {
  border-radius: 50%;
  width: 150px;
  animation: shadow-on 4s infinite, shadow-off 4s infinite;
}
@keyframes shadow-on {
  0%,
  100% {
    box-shadow: none;
  }
  50% {
    box-shadow: 0 0 30px #64dcdd;
  }
}
@keyframes shadow-off {
  0%,
  100% {
    box-shadow: 0 0 30px #64dcdd;
  }
  50% {
    box-shadow: none;
  }
}
.about-text {
  text-align: center;
  padding-top: 35px;
  max-width: 70%;
  /* animation: slideUp 2s ease; */
}
/* skills section */
.skills-section-container {
  padding: 100px;
}
.skills-section-text {
  padding: 25px 50px;
}
.skills-section-text li {
  position: relative;
  width: 200px;
  cursor: pointer;
}
.skills-section-text li::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 90%;
  width: 3px;
  background-color: #64dcdd;
}
.skill-item img {
  width: 50px;
  margin-inline: auto;
}
.skill-item span {
  font-size: 14px;
  font-weight: 500;
  margin-inline: auto;
  color: #3c9fa0;
}
/* */
.skill-list {
  flex-wrap: wrap;
}
.skill-item {
  min-width: 125px;
  padding: 35px 0px;
  border: #565656 2px solid;
  border-radius: 75px;
  gap: 8px;
  transition: border 0.5s;
}
.skill-item:hover {
  border: #3c9fa0 2px solid;
}
/* projects section */
.projects-section-container {
  padding: 100px;
}
.project-image img {
  width: max(100%, 400px);
}
.projects-tags-list {
  flex-wrap: wrap;
}
.projects-tag-item {
  font-size: 14px;
  background-color: #3c9fa0;
  border-radius: 4px;
  padding: 4px 8px;
}
.project-actions button {
  border: #64dcdd 2px solid;
  border-radius: 4px;
  transition: background-color 0.5s;
}
.project-actions button a {
  color: #64dcdd;
}
.project-actions button:hover {
  background-color: #64dcdd;
}
.project-actions button a:hover {
  color: #fefdfb;
}
/* contact section */
.contact-section-container {
  padding: 100px;
}
.contact-section-text h2 {
  margin-bottom: 2.5rem;
}
.contact-section-text p {
  color: #7a878d;
  font-weight: 300;
  font-size: 1.125rem;
}
.contact-info-list li {
  display: flex;
  gap: 10px;
}
.contact-info-list li i {
  font-size: 2rem;
  color: #7a878d;
}
.contact-info-list li a {
  color: #fefdfb;
  text-decoration: none;
}
.contact-info-list li a:hover {
  text-decoration: underline;
  color: #3c9fa0;
}
.contact-section-form .form-control {
  background-color: transparent;
  border-radius: 0;
  border: #3c9fa0 2px solid;
  box-shadow: 0 0 4px 1px #3c9fa0;
  color: #fefdfb;
}
.contact-section-form .form-control:focus {
  /* box-shadow: 0 0 4px 1px #3c9fa0; */
}
.contact-section-form textarea {
  height: 100px;
}
.contact-section-form button {
  background-color: #fefdfb;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0);
  color: #000;
  font-weight: 500;
  font-size: 1.125rem;
}
.contact-section-form button:hover {
  background-color: #fefdfb;
  color: #000;
  box-shadow: 0 0 4px 2px #3c9fa0;
}
@media only screen and (max-width: 992px) {
  .home-container .home-header {
    padding: 130px 50px;
  }
  .about-section-container,
  .skills-section-container,
  .projects-section-container,
  .contact-section-container {
    padding: 100px 50px;
  }
  .skills-section-text {
    padding: 25px 0px;
  }
  .skill-item {
    min-width: 125px;
    padding: 35px 0;
  }
  .projects-section-container {
    padding-bottom: 50px;
  }
  .projects-section-content {
    display: block;
  }
  .project-text {
    padding: 2rem 1rem !important;
  }
}
@media screen and (max-device-width: 480px) {
  .about-section-container,
  .skills-section-container,
  .projects-section-container,
  .contact-section-container {
    padding: 60px 25px;
  }
  .home-container h2 {
    font-size: 2.5rem;
  }
  .home-header h1 {
    font-size: 3.5rem;
  }
  .about-img img {
    width: 140px;
  }
  .about-text {
    max-width: 100%;
  }
  .skill-list {
    gap: 2rem;
  }
  .skill-item {
    min-width: 145px;
    padding: 45px 0;
  }
  .project-image img {
    width: min(90%, 380px);
  }
  .contact-section-container {
    display: block;
  }
  .contact-section-form {
    padding-top: 1rem;
  }
}
</style>
