$(document).ready(function () {
    let i = 1;
    $(".add").on("click", function () {

        let h3 = document.createElement("h3");
        let deleleteButton = document.createElement("button");
        let listGrouping = document.createElement("div");
        h3.setAttribute("class", `all-texts h3-${i}`);
        deleleteButton.setAttribute("class", `all-buttons delete-${i}`);
        deleleteButton.setAttribute("onclick", `removeUl(${i})`);
        listGrouping.setAttribute("class", `list-grouping-${i}`);

        i++;

        h3.innerText = $(".start-text").val();
        deleleteButton.innerText = "Delete";

        listGrouping.append(h3, deleleteButton);
        $(".list").append(listGrouping);

        $(".start-text").val("");
    })
})

function removeUl(number) {
    $(`.list-grouping-${number}`).remove();
}