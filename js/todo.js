$(document).ready(function () {
    let i = 1;
    $(".add").on("click", function () {

        let h3 = document.createElement("h3");
        let deleleteButton = document.createElement("button");
        let crossoutButton = document.createElement("button");
        let listGrouping = document.createElement("div");
        let buttonGrouping = document.createElement("div");

        h3.setAttribute("class", `all-texts h3-${i}`);
        deleleteButton.setAttribute("class", `all-buttons all-delete-buttons delete-${i}`);
        crossoutButton.setAttribute("class", `all-buttons all-crossout-buttons crossout-${i}`);
        deleleteButton.setAttribute("onclick", `removeUlElement(${i})`);
        crossoutButton.setAttribute("onclick", `crossUlElement(${i})`);
        listGrouping.setAttribute("class", `list-groupings list-grouping-${i}`);
        buttonGrouping.setAttribute("class", `button-groupings button-grouping-${i}`);

        i++;

        h3.innerText = $(".start-text").val();
        deleleteButton.innerText = "Delete";
        crossoutButton.innerText = "Cross";

        buttonGrouping.append(deleleteButton, crossoutButton);
        listGrouping.append(h3, buttonGrouping);
        $(".list").append(listGrouping);

        $(".start-text").val("");
    })
})

function removeUlElement(number) {
    $(`.list-grouping-${number}`).remove();
}
function crossUlElement(number) {
    let currentHTML = $(`.h3-${number}`).text();
    console.log(currentHTML);
    $(`.h3-${number}`).html(`<s>${currentHTML}</s>`);
}