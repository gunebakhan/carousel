const image_urls = []
const captions = []


$.ajax({
    type: "get",
    url: "https://picsum.photos/v2/list",
    success: function (response) {
        for (let index = 0; index < 3; index++) {
            // console.log(response[Math.ceil(response.length * Math.random())].download_url);
            image_urls.push(response[Math.ceil(response.length * Math.random())].download_url);
        }
        $("#one").attr("src", image_urls[0]);
        $("#two").attr("src", image_urls[1]);
        $("#three").attr("src", image_urls[2]);
    }
});

$.ajax({
    type: "get",
    url: "https://type.fit/api/quotes",
    success: function (response) {
        response = JSON.parse(response)
        for (let index = 0; index < 3; index++) {
            var place = Math.ceil(response.length * Math.random());
            console.log(response[place].text)
            captions.push({text: response[place].text, author: response[place].author});
        }
        $("#first-label").text(captions[0].author);
        $("#first-text").text(captions[0].text);
        $("#second-label").text(captions[1].author);
        $("#second-text").text(captions[1].text);
        $("#third-label").text(captions[2].author);
        $("#third-text").text(captions[2].text);

    }
});