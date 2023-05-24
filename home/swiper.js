const swiperWrapper = document.querySelector(".swiper-wrapper");
const readmore = document.createElement("div");

fetch("https://thehexablogs.flywheelsites.com/wp-json/wp/v2/posts?per_page=100")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((posts) => {
    const postHTML = posts.map((post, index) => {
      return `
        <div class="swiper-slide slide_${index}">
              <img src="${post.better_featured_image.media_details.sizes.medium.source_url}" >

          <div>${post.title.rendered}</div>
          <div onclick=handleClick('${post.slug}') style="text-decoration: underline; text-decoration-color: coral; cursor: pointer; margin-top=5px">Read more</div>
        </div>
      `;
    });
    swiperWrapper.innerHTML = postHTML.join("");
    swiper.update();
  });

const handleClick = (post) => {
  const params = { title: `${post}` };
  const url = "/specific-blog.html?";
  const searchParams = new URLSearchParams(params);
  const queryString = searchParams.toString();
  window.location.href = url + queryString;
};

const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    550: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1040: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1500: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
});
