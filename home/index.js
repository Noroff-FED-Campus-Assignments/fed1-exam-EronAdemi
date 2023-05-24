const articles = document.querySelector(".articles");


fetch("https://thehexablogs.flywheelsites.com/wp-json/wp/v2/posts?per_page=100")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((posts) => {
    console.log(posts);
    const postHTML = posts
      .slice(8, 11)
      .reverse()
      .map((post) => {
        console.log(post);
        return `
        <div class="article">
          <img src="${post.better_featured_image.media_details.sizes.medium.source_url}" >
          <div>${post.title.rendered}</div>
          <div onclick=handleClick('${post.slug}') style="text-decoration: underline; text-decoration-color: coral; cursor: pointer; margin-top: 15px">Read more</div>
        </div>
      `;
      });
    articles.innerHTML = postHTML.join("");
  });
