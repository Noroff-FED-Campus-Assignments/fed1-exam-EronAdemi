const url = window.location.href;
const searchParams = new URL(url).searchParams;
const data = new URLSearchParams(searchParams).entries();
const array = Array.from(data)[0];
const title = array[1];
console.log(title);

const main = document.querySelector("main");
const modalBtn = document.querySelector("#openModalBtn");
const specificContainer = document.querySelector(".specific-container");
const blogTitle = document.querySelector("h1");
const blogContent = document.querySelector("p");
const modalImg = document.querySelector("#modalImg");
const headtitle = document.querySelector("title");

fetch("https://thehexablogs.flywheelsites.com/wp-json/wp/v2/posts?per_page=100")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((posts) => {
    console.log(posts);
    const post = posts.find((post) => post.slug === title);
    console.log(post);
    modalBtn.setAttribute(
      "src",
      post.better_featured_image.media_details.sizes.medium.source_url
    );
    blogTitle.innerHTML = post.title.rendered;
    blogContent.innerHTML = post.content.rendered;
    modalImg.setAttribute(
      "src",
      post.better_featured_image.media_details.sizes.medium.source_url
    );
    headtitle.innerText = post.title.rendered;
  });
