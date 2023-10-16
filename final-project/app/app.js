import { changePageContent } from "../model/model.js";

function initListeners() {
    $("nav .links a").on("click", function(e) {
        let btnID = e.currentTarget.id;
        console.log(btnID);
        changePageContent(btnID);
        
    });

    $("#app").on("click", ".read-more", function(e) {
        changePageContent("about");
    });

    $("#app").on("click", ".read-more", function(e) {
        changePageContent("about");
    });

    $("#app").on("click", "#foodfestival", function(e) {
        changePageContent("foodfestival");
    });

    $("#app").on("click", "#deejay", function(e) {
        changePageContent("deejay");
    });

    $("#app").on("click", "#speech", function(e) {
        changePageContent("speech");
    });

    $("#app").on("click", "#openfoodfest", function(e) {
        changePageContent("openfoodfest");
    });

    $("#app").on("click", "#international", function(e) {
        changePageContent("international");
    });

    $("#app").on("click", "#blog1", function(e) {
        changePageContent("blog1");
    });

    $("#app").on("click", "#blog2", function(e) {
        changePageContent("blog2");
    });

    $("#app").on("click", "#blog3", function(e) {
        changePageContent("blog3");
    });

    $("#app").on("click", "#blog4", function(e) {
        changePageContent("blog4");
    });

    $("#app").on("click", "#blog5", function(e) {
        changePageContent("blog5");
    });
}

$(document).ready(function(){
    initListeners();
    changePageContent("home");
})
