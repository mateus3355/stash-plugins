// ==UserScript==
// @name         Bunkr
// @namespace    http://tampermonkey.net/
// @version      2025-06-26
// @description  Removes 'truncate' class from .text-subs p elements after 2 seconds
// @author       You
// @match        https://bunkr.cr/*
// @match        https://bunkr.bk/*
// @match        https://bunkr.pk/*
// @match        https://bunkr.fi/*
// @match        https://bunkr.ac/*
// @match        https://bunkr.site/*
// @match        https://bunkr.*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function fixTexts(){
        const elements = document.querySelectorAll('.text-subs p');
        elements.forEach(el => el.classList.remove('truncate'));
    }

    setTimeout(() => {
        const menu = document.querySelector('#menu-box');

        fixTexts();
        const newButtonText = document.createElement('button');
        newButtonText.innerText = 'Fix Texts';
        newButtonText.style.marginLeft = '10px';
        menu.appendChild(newButtonText);
        newButtonText.addEventListener('click', fixTexts);

        const newButton = document.createElement('button');
        newButton.innerText = 'Get Links';
        newButton.style.marginLeft = '10px';
        menu.appendChild(newButton);
        newButton.addEventListener('click', () => {
            const links = []
            const a = document.querySelectorAll("#galleryGrid a")
            a.forEach(link => {
                links.push(link.href)
            });
            console.log(links.join("\n"))
            navigator.clipboard.writeText(links.join("\n")).then(() => {
                alert('Links copied to clipboard!');
            }).catch(err => {
                console.error('Could not copy text: ', err);
            });
        });

    }, 2000);
})();
