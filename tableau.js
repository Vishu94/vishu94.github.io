function initViz() {
    var containerDiv = document.getElementById("tableauViz"),
    url = "https://public.tableau.com/views/obesitydashboard_4/Obesity?:embed=y&:display_count=yes";

    var viz = new tableau.Viz(containerDiv, url);
}
