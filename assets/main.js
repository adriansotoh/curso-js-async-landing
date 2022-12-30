const API =
  "https://youtube-v31.p.rapidapi.com/search?channelId=UCDCq_4XxhMHIAG850pHcM9A&part=snippet%2Cid&order=date&maxResults=8";

const content = null || document.getElementById("content");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b24121d550mshcabf531db4b8bcdp17c4a4jsn98beb0f5278d",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

async function fetchData(API, options) {
  const response = await fetch(API, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(API, options);
    let view = `
    ${videos.items
      .map(
        (video) => `
    <div class="group relative">
      <div
      class="w-full bg-orange-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
        <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
      </div>
      <div class="mt-4 flex justify-between">
        <div class="text-sm text-orange-700">
          <span aria-hidden="true" class="absolute inset-0"></span>
          ${video.snippet.title}
        </div>
      </div>
  </div>`
      )
      .slice(0, 8)
      .join("")})}`;
    content.innerHTML = view;
  } catch (err) {
    console.log(err);
  }
})();
