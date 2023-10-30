/*
 * ---------------------------------------------------------------------------
 * jQuery Version
 * ---------------------------------------------------------------------------
 */

var $window = $(window),
  $mainHeader = $("#main-header"),
  $defaultLogo = "images/logo.svg",
  $smallLogo = "images/logo-shrink.svg";

// 헤더 사이즈 조절
$window.scroll(function () {
  if ($window.scrollTop() > 100) {
    if (!$mainHeader.hasClass("shrink")) {
      $mainHeader.addClass("shrink");
      switchImages($smallLogo);
    }
  } else {
    if ($mainHeader.hasClass("shrink")) {
      $mainHeader.removeClass("shrink");
      switchImages($defaultLogo);
    }
  }
});

// switchImages 함수
function switchImages(newPath) {
  var $logo = $("#logo");
  $logo.fadeOut(300, function () {
    $logo.attr("src", newPath);
    $logo.fadeIn(300);
  });
}

/*
 * ---------------------------------------------------------------------------
 * Vanilla JavaScript Version
 * ---------------------------------------------------------------------------
 */
