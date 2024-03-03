const readNum = document.getElementById("read-blogs").innerText;
let read = parseInt(readNum);

const loadAllBlogs = async () => {
  const response = await fetch("https://openapi.programming-hero.com/api/retro-forum/posts");
  const data = await response.json();
  
  const div = document.getElementById("blogs-div");
  div.innerHTML = "";
  
  data.posts.forEach((blog) => {
    const blogDiv = document.createElement("div");
    blogDiv.innerHTML = `
    <div class="flex flex-col lg:flex-row justify-around items-center gap-3 bg-[#797DFC1A] rounded-2xl p-5">
        <div>
          <div class="avatar online">
            <div class="w-24 rounded-full">
            <img src= ${blog.image} />
          </div>
          </div>
          <div class="avatar offline hidden">
            <div class="w-24 rounded-full">
            <img src=${blog.image} />
          </div>
      </div>
      </div>
      <div class="space-y-2">
        <div class="flex gap-3 text-gray-400"><p>#${blog.category}</p><p>Author : ${blog.author.name}</p></div>
        <div>
          <h3 class="font-extrabold off">${blog.title}</h3>
          <p class="text-gray-400">${blog.description}</p>
          <hr class="border-dashed border-t-2 m-3">
        </div>
        <div class="flex justify-between">
          <div class="flex gap-3">
            <p><i class="fa-regular fa-comment-dots"></i>${blog.comment_count}</p>
            <p><i class="fa-solid fa-eye"></i><span>${blog.view_count}</span></p>
            <p><i class="fa-regular fa-clock"></i>${blog.posted_time}</p>
          </div>
          <button class="btn bg-green-600 read-btns">
            <i class="fa-regular fa-envelope-open"></i>
          </button>
        </div>
      </div>
    </div>
    `;
    div.appendChild(blogDiv);
  });
  const btns = document.getElementsByClassName("read-btns");
  for (const btn of btns) {
    btn.addEventListener("click", function () {
      const readT = btn.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
      const readC = btn.parentNode.childNodes[1].childNodes[3].childNodes[1].innerText;

      const readTt = document.getElementById("read-title");
      const p1 = document.createElement("p");
      p1.innerText = readT;
      readTt.appendChild(p1);

      const readCc = document.getElementById("read-count");
      const p2 = document.createElement("p");
      p2.innerText = readC;
      readCc.appendChild(p2);

      read++;
      document.getElementById("read-blogs").innerText = read;
    })
  }
}

loadAllBlogs();