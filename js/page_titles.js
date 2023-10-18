let title = document.title;
let embedTitle = document.createElement('meta');
embedTitle.setAttribute('content', title);
embedTitle.setAttribute('property', 'og:title');