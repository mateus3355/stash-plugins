// ==UserScript==
// @name         Coomer
// @namespace    http://tampermonkey.net/
// @version      2024-01-25
// @description  Filter Video Posts Of Coomer user
// @author       mateus355
// @match        https://coomer.st/*/user/*
// @exclude      https://coomer.st/*/user/*/*
// @grant        none
// ==/UserScript==

(async function () {

    'use strict';
    // ---------------------------------------------------------------------------------------------------------

    const videoExtensions = ['m4v', 'avi', 'mpg', 'mp4', 'webm', 'mov', 'wmv', 'mkv', 'flv', '3gp', '3g2']
    const imgExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp']
    const windowsURL = window.location.href

    // ---------------------------------------------------------------------------------------------------------

    setTimeout(() =>{
    // Create button element
    var filterDiv = document.createElement('div');
    filterDiv.className = 'global-sidebar-entry clickable-header-entry';

    var filterA = document.createElement('a');
    filterA.className = 'global-sidebar-entry-item clickable-header home-button';

    var filterImg = document.createElement('img');
    filterImg.src = '/static/menu/recent.svg';
    filterImg.className = 'global-sidebar-entry-item-icon';

    var filterText = document.createElement('text');
    filterText.textContent = 'Filter';

    filterA.appendChild(filterImg);
    filterA.appendChild(filterText);
    filterDiv.appendChild(filterA);

    var sideBar = document.querySelector(".global-sidebar");
    console.log(sideBar)
    var homeButton = sideBar.children[1];

    filterDiv.onclick = filterPosts;

    sideBar.insertBefore(filterDiv, homeButton);



    // ---------------------------------------------------------------------------------------------------------

    // Create log box element
    var logBox = document.createElement('div');
    logBox.id = 'logBox';

    // Apply styles to the log box
    logBox.style.width = '800px';
    logBox.style.height = '150px';
    logBox.style.overflow = 'auto';
    logBox.style.border = '1px solid #ccc';
    logBox.style.padding = '10px';
    logBox.style.margin = '20px';
    logBox.style.textAlign = 'center';
    logBox.style.display = 'inline-block';


    var footer = document.querySelector(".global-footer");
    footer.appendChild(logBox);

    // Function to log messages
    function logMessage(message, color) {
        var logEntry = document.createElement('div');
        logEntry.textContent = message;
        logEntry.style.color = color || 'white';
        logBox.appendChild(logEntry);

        // Scroll to the bottom of the log box to show the latest messages
        logBox.scrollTop = logBox.scrollHeight;
    }

    async function filterPosts() {

        // ---------------------------------------------------------------------------------------------------------

        let service = windowsURL.split('/')[3];
        let username = windowsURL.split('/')[5];

        var numberOfPosts = 0;
        if (document.getElementById('paginator-top').querySelector("small")) {
            var postsString = document.getElementById('paginator-top').querySelector("small").textContent;
            numberOfPosts = postsString.trim().split(" ")[5];
        }
        else {
            numberOfPosts = document.querySelector(".card-list__items").children.length;
        }
        let numberOfPostsPerPage = 50;
        let numberOfPages = Math.floor(numberOfPosts / numberOfPostsPerPage);

        // ---------------------------------------------------------------------------------------------------------

        let allPosts = [];

        logMessage(`Total of ${numberOfPosts} posts to filter`, 'green');

        let allPromises = [];

        for (let i = 0; i <= numberOfPosts; i = i + numberOfPostsPerPage) {
            let curURL = `https://coomer.st/api/v1/${service}/user/${username}/posts?o=${i}`;
            logMessage(`Fetching page: ${curURL} | ${i / numberOfPostsPerPage}/${numberOfPages} posts fetched`);

            allPromises.push(
                fetch(curURL)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        return response.json();
                    })
                    .catch((error) => {
                        logMessage(`Error fetching page: ${curURL} | ${error}`, 'red');
                        return null; // Handle the error, return null, or any other suitable value
                    })
            );
        }

        try {
            let responses = await Promise.all(allPromises);
            allPosts = responses.filter((data) => data !== null).flat(); // Remove null values and flatten the array
        } catch (error) {
            logMessage(`Error fetching posts: ${error}`, 'red');
            return;
        }

        // ---------------------------------------------------------------------------------------------------------

        var videoPosts = []
        // console.log(allPosts);
        logMessage(`Total of ${allPosts.length} posts fetched`, 'green');

        for (let i = 0; i < allPosts.length; i++) {
            let post = allPosts[i];
            let decision = false;

            if (post.attachments.length > 0) {
                for (let j = 0; j < post.attachments.length; j++) {
                    let attachment = post.attachments[j].path;
                    if (videoExtensions.includes(attachment.split('.').pop())) {
                        videoPosts.push(post);
                        decision = true;
                        break;
                    }
                }
            }
            else if (decision == false) {
                let file = post.file;
                if (file.path && videoExtensions.includes(file.path.split('.').pop())) {
                    videoPosts.push(post);
                }
            }
        }

        // ---------------------------------------------------------------------------------------------------------

        //remove all children from the curret card-list__items div
        var cardListItems = document.querySelector(".card-list__items");
        let postCardBkp = cardListItems.children[0].cloneNode(false);
        for (let i = 0; i < cardListItems.children[0].children.length; i++) {
            postCardBkp.appendChild(cardListItems.children[0].children[i].cloneNode(true));
        }

        while (cardListItems.firstChild) {
            cardListItems.removeChild(cardListItems.firstChild);
        }

        if (document.getElementById('paginator-top').querySelector("small")) {
            //remove the small element with with paginator-top
            var paginatorTop = document.getElementById('paginator-top');
            paginatorTop.removeChild(paginatorTop.querySelector("small"));
            paginatorTop.removeChild(paginatorTop.querySelector("menu"));

            //remove the small element with with paginator-bottom
            var paginatorDown = document.getElementById('paginator-bottom');
            paginatorDown.removeChild(paginatorDown.querySelector("small"));
            paginatorDown.removeChild(paginatorDown.querySelector("menu"));
        }


        // ---------------------------------------------------------------------------------------------------------

        logMessage(`Total of ${videoPosts.length} video posts found`, 'green')

        for (let i = 0; i < videoPosts.length; i++) {
            let curPost = postCardBkp.cloneNode(true);
            let postData = videoPosts[i];

            curPost.setAttribute('data-id', postData.id);
            curPost.querySelector("a").href = `/${service}/user/${username}/post/${postData.id}`;

            // header
            curPost.querySelector("a header").textContent = postData.title;

            // img thumbnail
            if (postData.file.path && imgExtensions.includes(postData.file.path.split('.').pop())) {
                if (curPost.querySelector("a div img")) {
                    curPost.querySelector("a div img").src = `//img.coomer.st/thumbnail/data${postData.file.path}`;
                }
                else {
                    let imgDiv = document.createElement('div');
                    imgDiv.className = 'post-card__image-container';

                    let img = document.createElement('img');
                    img.src = `//img.coomer.st/thumbnail/data${postData.file.path}`;
                    img.className = 'post-card__image';

                    imgDiv.appendChild(img);

                    curPost.querySelector("a").appendChild(imgDiv);
                }
            }
            else if (curPost.querySelector("a div img")) {
                curPost.querySelector("a div img").remove();
            }

            // footer
            curPost.querySelector("a footer time").setAttribute('datetime', postData.published); // formatar e verficar se é o published ou added
            curPost.querySelector("a footer time").textContent = postData.published              // formatar e verficar se é o published ou added
            if (postData.attachments.length == 0) {
                curPost.querySelector("a footer div").textContent = "No attachments"
            }
            else if (postData.attachments.length == 1) {
                curPost.querySelector("a footer div").textContent = "1 attachment"
            }
            else {
                curPost.querySelector("a footer div").textContent = `${postData.attachments.length} attachments`
            }

            cardListItems.appendChild(curPost);

        }

        // ---------------------------------------------------------------------------------------------------------

        //TODO
        //with the videoLinks
        //Put then in a hiden element in the dom
        //extract the video duration from the element
        //put durantion on the video card or filter by duration

        // console.log(videoPosts);
        // console.log(allPosts);

        var videoTeste = ""
        if (videoPosts[0].attachments[0]){
            videoTeste = `https://c4.coomer.st/data${videoPosts[0].attachments[0].path}`;
        }
        else if (videoPosts[0].file){
            videoTeste = `https://c4.coomer.st/data${videoPosts[0].file.path}`;
        }

        var videoElementTest = document.createElement('video');
        videoElementTest.src = videoTeste;
        videoElementTest.onloadedmetadata = function () {
            logMessage(`Video Duration Teste: ${videoElementTest.duration}`)
        };

    }
    },2000)

})();