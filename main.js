const mtvare = document.querySelector('#mtvare');
const mze = document.querySelector('#mze');
const h1 = document.querySelector('h1');
const h3 = document.querySelector('h3');
const input = document.querySelector('#user');
const btn = document.querySelector('.btn');
const card = document.querySelectorAll('.card');
const error1 = document.querySelector('.error1');
const avatarmobile = document.querySelector('.avatar-mobile')
const avatardesktop = document.querySelector('.avatar')
const name1 = document.querySelector('.name')
const login = document.querySelector('.login')
const join = document.querySelector('.join-date')
const bio = document.querySelector('.bio')
const repos = document.querySelector('#repos')
const followers = document.querySelector('#followers')
const following = document.querySelector('#following')
const city = document.querySelector('#city')
const blog = document.querySelector('#blog')
const twitter = document.querySelector('#twitter')
const company = document.querySelector('#company')
const stats = document.querySelector('.stats')
const stattitle = document.querySelector('.stat-title')
const amount = document.querySelector('.amount')
const flw = document.querySelector('.flw')
const flg = document.querySelector('.flg')



const octocat = {
    avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
    bio: null,
    blog: "https://github.blog",
    company: "@github",
    created_at: "2011-01-25T18:44:36Z",
    email: null,
    events_url: "https://api.github.com/users/octocat/events{/privacy}",
    followers: 8291,
    followers_url: "https://api.github.com/users/octocat/followers",
    following: 9,
    following_url: "https://api.github.com/users/octocat/following{/other_user}",
    gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
    gravatar_id: "",
    hireable: null,
    html_url: "https://github.com/octocat",
    id: 583231,
    location: "San Francisco",
    login: "octocat",
    name: "The Octocat",
    node_id: "MDQ6VXNlcjU4MzIzMQ==",
    organizations_url: "https://api.github.com/users/octocat/orgs",
    public_gists: 8,
    public_repos: 8,
    received_events_url: "https://api.github.com/users/octocat/received_events",
    repos_url: "https://api.github.com/users/octocat/repos",
    site_admin: false,
    starred_url: "https://api.github.com/users/octocat/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
    twitter_username: null,
    type: "User",
    updated_at: "2023-01-22T12:13:51Z",
    url: "https://api.github.com/users/octocat",
};

input.addEventListener('input',()=>{
    error1.textContent = ''
})
function datecounter(date1) {
    const dateobj = new Date(date1);
    const datestring = dateobj.toDateString()
    const [weekday, month, day, year] = datestring.split(' ')
    return `${day} ${month} ${year}`
}

function displayinfo(data) {
    avatarmobile.src = data.avatar_url
    avatardesktop.src = data.avatar_url
    name1.textContent = data.name
    login.textContent = '@' + data.login
    const date = datecounter(data.created_at)
    join.textContent = 'joined ' + date
    bio.textContent = data.bio ||
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.'
    repos.textContent = data.public_gists
    followers.textContent = data.followers
    following.textContent = data.following
    city.textContent = data.location
    blog.textContent = data.blog
    twitter.textContent = data.twitter_username
    company.textContent = data.company
}
displayinfo(octocat)

function shecvla(dark) {
    if (dark === 'dark') {
        document.body.style.backgroundColor = '#141D2F';
        document.body.style.transition = '1s';
        mze.style.display = 'block'
        mtvare.style.display = 'none'
    } else {
        mtvare.style.display = 'block';
        mze.style.display = 'none';
    }
    document.body.style.backgroundColor = 'white';
    h1.classList.toggle('dark');
    h3.classList.toggle('dark');
    input.classList.toggle('dark')
    Array.from(card).forEach(cards => cards.classList.toggle('dark'))
}


mtvare.addEventListener('click', () => {
    shecvla('dark');
    document.body.style.backgroundColor = '#141D2F';
    input.style.backgroundColor = '#141D2F'
    stats.style.backgroundColor = '#141D2F'
    stattitle.style.color = 'white'
    amount.style.color = 'white'
    followers.style.color = 'white'
    following.style.color = 'white'
    repos.style.color = 'white'
    flw.style.color = 'white'
    flg.style.color = 'white'
});
mze.addEventListener('click', () => {
    shecvla('light');
    document.body.style.backgroundColor = 'white';
    input.style.backgroundColor = 'white'
    stats.style.backgroundColor = '#F6F8FF'
    stattitle.style.color = '#2B3442'
    amount.style.color = '#2B3442'
    followers.style.color = '#2B3442'
    following.style.color = '#2B3442'
    repos.style.color = '#2B3442'
    flw.style.color = '#2B3442'
    flg.style.color = '#2B3442'
});

btn.addEventListener('click', async (e) => {
    e.preventDefault();
    try {
        const username = input.value.trim();
        if (username) {
            const res = await fetch(`https://api.github.com/users/${username}`);
            if (res.ok) {
                const data = await res.json();
                displayinfo(data);
            } else {
                console.error('User not found');
                error1.textContent = 'No Result'
            }
        } else {
            console.error('Please enter a Nicckname')
            console.error('Please enter a username');
        }
    } catch (error) {
        console.error(error);
        error1.textContent = 'error'
    }
});





