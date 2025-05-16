const posts = [
    {
        title: "Mein erster Blog-Beitrag",
        content: "Chat gpt hat mir einen Code für diesen Blog geschrieben. Nach etwas Bearbeitung wird er mir gefallen, mal schauen wann ich ihn hoste.",
        date: "2025-05-12"
    },
    {
        title: "Fitnesstraining",
        content: "Heute wird den ganzen Tag gefastet. Ich freue mich auf das Krafttraining zwischendurch.",
        date: "2025-05-14"
    },
    {
        title: "Persönliche Entwicklung heißt",
        content: "sich selbst besser kennenzulernen und bewusst an sich zu arbeiten. Man wird klarer im Kopf, stärker im Auftreten und lebt mehr so, wie es wirklich zu einem passt.",
        date: "2025-05-16"
    }
];
function displayPosts() {
    const blogPosts = document.getElementById('blog-posts');
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p><em>${post.date}</em></p>
            <p>${post.content}</p>
        `;
        blogPosts.appendChild(postElement);
    });
}
// Blog-Beiträge anzeigen
displayPosts();