let postsListEl = document.querySelector('.post-list')
const id = localStorage.getItem("id")

function onSearchChange(event) {
    const id = event.target.value;
    renderPosts(id)
}


async function renderPosts(id) {
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const postsData = await posts.json();
    postsListEl.innerHTML = postsData.map(post => postsHTML(post)).join('')
}

function postsHTML(post) {
    return `
    <div class="post">
      <div class="post__title">
        ${post.title}
      </div>
      <p class="post__body">
        ${post.body}
      </p>
    </div>
  </div>`
}

renderPosts(id);