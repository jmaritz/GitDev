var app = angular.module("testApp", []);

app.controller("testController", function() {

});

app.controller("testController2", function() {

});

app.directive("helloWorld", function() {
    return {
        restrict: "E",
        template: "<div>Hello, world jmz!</div><table ><tr><td class='maintableJMZ'>Angular testing table2 </td></tr></table>"
    };
});


app.directive("helloWorld2", function() {
    return {
        restrict: "E",
        template: "<div>Hello, world jmz2!</div><table ><tr><td class='maintableJMZ2'>Angular testing table3</td></tr></table>"
    };
});
