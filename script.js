let postsContainer = document.querySelector(".posts");

function dynamicPost() {

     fetch('https://jsonplaceholder.typicode.com/posts')
     .then(response => response.json())
     .then(data => data.map((data) => {
          const postElement = document.createElement("div")
          postElement.classList.add("post");
          postElement.innerHTML = `
               <h3 class="post-title">${data.title}</h3>
               <p class="post-paragraph">${data.body}</p>
          `;

          postsContainer.appendChild(postElement);
     }))
       
};

dynamicPost();
