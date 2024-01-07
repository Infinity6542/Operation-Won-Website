let clientSupportsScroll = (CSS.supports("animation-timeline", "scroll()"));

if (clientSupportsScroll == false) {
    window.alert("Whoops! It looks like your browser doesn't support a feature which this site requires. Redirecting...");
    window.location.href = ""; // TODO: implement this
}