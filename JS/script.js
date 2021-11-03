console.log("welcome")
$(document).ready(function() {
  $(".design-showing").click(function() {
      $(".design-showing").slideDown().hide();
      $(".design-details").show();
  });
  $(".design-details").click(function() {
      $(".design-details").slideUp();
      $(".design-showing").slideDown();
  });
});
$(document).ready(function() {
  $(".devpt-showing").click(function() {
      $(".devpt-showing").slideDown().hide();
      $(".devpt-details").show();
  });
  $(".devpt-details").click(function() {
      $(".devpt-details").slideUp();
      $(".devpt-showing").slideDown();
  });
});
$(document).ready(function() {
  $(".product-showing").click(function() {
      $(".product-showing").slideDown().hide();
      $(".product-details").show();
  });
  $(".product-details").click(function() {
      $(".product-details").slideUp();
      $(".product-showing").slideDown();
  });
});