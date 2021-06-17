
function addValue() {
if ($("#movie").val() != null && $("#rating").val() != null) {
addToTable();

clearForm();

$("#movie").focus();
}
}

function addToTable() {

if ($("#myTable tbody").length == 0) {
$("#myTable").append("<tbody id='table-body'></tbody>");
}

$("#myTable tbody").append(
"<tr>" +
"<td>" + $("#movie").val() + "</td>" +
"<td>" + $("#rating").val() + "</td>" +
"<td>" +
    "<button type='button' onclick='deleteValue(this);' class='btn btn-primary'> Delete" +
    "<span class='glyphicon glyphicon-remove' />" +
        "</button>" +
    "</td>" +
"</tr>");
}

function clearForm() {
$("#movie").val("");
$("#rating").val("");
}

function deleteValue(ctl) {
$(ctl).parents("tr").remove();
}


$("#first").on("click", function(){
var tbody = $("#table-body"),
childNodes = tbody.childNodes,
i = childNodes.length;

while (i--)
tbody.appendChild(childNodes[i]);
});
$("#second").on("click", function(){
var tbody = $("#table-body"),
childNodes = tbody.childNodes,
i = childNodes.length;

while (i--)
tbody.appendChild(childNodes[i]);
});
$("#third").on("click", function(){
var tbody = $("#table-body"),
childNodes = tbody.childNodes,
i = childNodes.length;

while (i--)
tbody.appendChild(childNodes[i]);
});
$("#fourth").on("click", function(){
var tbody = $("#table-body"),
childNodes = tbody.childNodes,
i = childNodes.length;

while (i--)
tbody.appendChild(childNodes[i]);
});