// You can ignore everything in this function for now!
// You'll learn about how to create GET and POST requests in the next module.
function onclick2() {
  fetch("https://api.github.com/gists", {
    method: "POST",
    body: JSON.stringify({
      description: "Fetch API Post example",
      public: true,
      files: {
        "test.js": {
          content: "content",
        },
      },
    }),
  })
    .then(function (data) {
      console.log("Request success: ", data);
    })
    .catch(function (error) {
      console.log("Request failure: ", error);
    });
}

function onclick1() {
  fetch("https://api.github.com/gists", {
    method: "GET",
  })
    .then(function (data) {
      console.log("Request success: ", data);
    })
    .catch(function (error) {
      console.log("Request failure: ", error);
    });
}

window.onload = () => {
  let postButton1 = document.getElementById("postButton1");
  postButton1.onclick = onclick1;

  let postButton2 = document.getElementById("postButton2");
  postButton2.onclick = onclick2;

  let postButton3 = document.getElementById("postButton3");
  postButton3.onclick = onclick1;

  let postButton4 = document.getElementById("postButton4");
  postButton4.onclick = onclick1;

  let postButton5 = document.getElementById("postButton5");
  postButton5.onclick = onclick1;

  let postButton6 = document.getElementById("postButton6");
  postButton6.onclick = onclick1;
};
