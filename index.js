// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"
const usersDataEl = document.querySelector('.user-card')

async function main() {
    const users = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const usersData = await users.json()
    usersDataEl.innerHTML = usersData.map(user => userHTML(user)).join('')
}

function showUserPosts(id) {
    localStorage.setItem("id", id);
    window.location.href = `${window.location.origin}/user.html`
}

function userHTML(user) {
    return `
    <div class="user-card">
    <div class="user-card__container" onclick="showUserPosts(${user.id})">
      <h3>${user.name}</h4>
        <p><b>Email:</b> ${user.email}</p>
        <p><b>Phone:</b> ${user.phone}</p>
        <p><b>Website:</b> <a href="https://${user.website}" target="_blank">
        ${user.website}
        </a></p>
    </div>
  </div>`
}

main();