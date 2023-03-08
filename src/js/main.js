import $ from "./lib/lib";

$("#first").on("click", () => {
  $("div").eq(1).fadeToggle(800);
});

$("[data-count='second']").click(() => {
  $("div").eq(2).fadeToggle(800);
});

$("button")
  .eq(2)
  .on("click", () => {
    $(".w-500").fadeToggle(800);
  });

$("#trigger").click(() =>
  $("#trigger").createModal({
    text: {
      title: "Modal title",
      body: "Lorem  Lorem Lorem",
    },
    btns: {
      count: 3,
      settings: [
        ["Close", ["btn-danger", "mr-10"], true],
        ["Save", ["btn-success"], false, () => alert("Ok")],
        ["Click me", ["btn-warning", "ml-10"], false, () => alert("Thanks")],
      ],
    },
  })
);

$()
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => console.log(res));
