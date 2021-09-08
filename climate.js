var data = []
var x = 273.15

function CallAjax(City) {
    var key = "21ec46344d981a5c9b3ecb0f2f68c0c4"
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${City} &appid=${key}`
    var http = new XMLHttpRequest();
    http.open("GET", url);
    http.send()
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.response))
                // console.log(JSON.parse(this.response))

            data = JSON.parse(this.response)
            document.querySelector(".weather").innerHTML = `
                    <h2>${data.name}</h2>
                    <h4>Max Temp. ${Math.floor(data.main.temp_max - x)}&deg;c</h4>
                    <h4>Min Temp. ${Math.floor(data.main.temp_min - x)}&deg;c</h6>
    
                    <p>Weather description : ${data.weather[0].description}</p>`
        }
    }
}



function News(country) {
    var key = "3b34a575e35847f8b669d428fe59b377"
    var url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=3b34a575e35847f8b669d428fe59b377`
    var http = new XMLHttpRequest();
    http.open("GET", url);
    http.send()
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var result = JSON.parse(this.response)

            console.log(result.articles)
            BindNews(result.articles)
        }
    }
}


function BindNews(news) {

    var temp = ``
    news.forEach((n, i) => {
        temp += `<div class="box">`
        temp += `<div class='news-title'>${n.title}</div>`
        temp += `<div class='news-author'>Author by: ${n.author==null?'No Author':n.author}</div>`
        temp += `<div class='news-content'>Content: ${n.content==null?'No content available':n.content}</div>`
        temp += `<div class='news-description'>Description: ${n.description==null?'No Description':n.description}</div>`
        temp += `<div class='news-image'><img src="${n.urlToImage}" alt="No Image" /></div></div>`

    })
    document.querySelector(".card-body").innerHTML = temp

}