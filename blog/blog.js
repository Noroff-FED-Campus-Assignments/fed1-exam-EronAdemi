const cardsContainer = document.querySelector(".cards-container");
const loadMore = document.querySelector(".load");

let int = 10;

const fetchPosts = () => {
  fetch(
    "https://thehexablogs.flywheelsites.com/wp-json/wp/v2/posts?per_page=100"
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((posts) => {
      const postHTML = posts.slice(0, int).map((post, index) => {
        return `
          <div class="card">
            <img src="${post.better_featured_image.source_url}">
            <p>${post.title.rendered}</p>
            <div onclick=handleClick('${post.slug}') style="text-decoration: underline; text-decoration-color: coral; text-align: center; margin-bottom:45px; cursor: pointer; margin-top=5px">Read more</div>
          </div>
        `;
      });
      cardsContainer.innerHTML = postHTML.join("");
    });
};

loadMore.addEventListener("click", () => {
  int = int + 4;
  console.log(int);
  fetchPosts();
});

fetchPosts();

const handleClick = (post) => {
  const params = { title: `${post}` };
  const url = "/specific-blog.html?";
  const searchParams = new URLSearchParams(params);
  const queryString = searchParams.toString();
  window.location.href = url + queryString;
};

const sortPosts = () => {
  const sortedPosts = Array.from(cardsContainer.children).sort((a, b) => {
    const titleA = a.querySelector("p").textContent.trim().toLowerCase();
    const titleB = b.querySelector("p").textContent.trim().toLowerCase();
    return titleA.localeCompare(titleB);
  });

  cardsContainer.innerHTML = "";
  sortedPosts.forEach((post) => cardsContainer.appendChild(post));
};

const sortButton = document.querySelector(".sort");
sortButton.addEventListener("click", sortPosts);
