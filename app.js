function updateWordCount() {
  const articleElement = document.getElementById("article");
  const articleText = articleElement.textContent.trim();
  const words = articleText.split(/\s+/);
  const wordCount = words.length;
  // Update the DataLayer with the new word count
  DataLayer.article_data.word_count = wordCount;
}


window.addEventListener("load", updateWordCount);


const articleElement = document.getElementById("article");
articleElement.addEventListener("scroll", function () {
  if (
    articleElement.scrollTop + articleElement.clientHeight >=
    articleElement.scrollHeight
  ) {
    updateWordCount();
  }
});

// Check if window.location.href matches DataLayer.journey_data.canonical_url
if (window.location.href === DataLayer.journey_data.canonical_url) {

  DataLayer.article_data.original_article = true;
} else {
  DataLayer.article_data.original_article = false;
}
