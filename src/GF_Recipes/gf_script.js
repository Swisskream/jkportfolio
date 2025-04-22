function toggleDetails(element) {
    const details = element.querySelector(".details");
    const allDetails = document.querySelectorAll(".details");
    allDetails.forEach(d => {
        if (d !== details) d.style.display = "none";
    });
    details.style.display = details.style.display === "block" ? "none" : "block";
}

export default toggleDetails;