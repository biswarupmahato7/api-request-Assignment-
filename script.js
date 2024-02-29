const url = 'https://api.github.com/users/biswarupmahato7'
const xhr = new XMLHttpRequest()

xhr.open('GET',url)
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if(xhr.readyState === 4){
        const data = JSON.parse(this.response)
        console.log(typeof data);
        const imgUrl = data.avatar_url
        const follower = data.followers

        document.querySelector('#card img').setAttribute('src',`${imgUrl}`)
        document.querySelector('h3').innerHTML = `Followers ${follower}`

    }
}
xhr.send()