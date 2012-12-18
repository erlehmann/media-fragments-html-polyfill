/*
    media-fragments-html-polyfill.js
    Copyright (C) 2012  Nils Dagsson Moskopp // erlehmann

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of the
    License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

function seekToFragmentTime() {
    var url = location.href;
    var fragment = getFragmentFromUrl(url);
    var elementid = getElementIdFromFragment(fragment);
    var element = document.getElementById(elementid);
    if (element) {
        element.scrollIntoView();
        element.focus();  /* triggers :focus CSS pseudo-class in WebKit */
        var mediafragment = getMediaFragmentFromFragment(fragment);
        applyMediaFragmentToElement(element, mediafragment);
    }
}

function getFragmentFromUrl(url) {
    return url.split('#')[1];
}

function getElementIdFromFragment(fragment) {
    return fragment.split('&')[0];
}

function getMediaFragmentFromFragment(fragment) {
    return fragment.split('&')[1];
}

function applyMediaFragmentToElement(element, mediafragment) {
    var urlprefix = element.currentSrc.split('#')[0]
    element.src = urlprefix + '#' + mediafragment;
    element.load()
}

window.addEventListener("hashchange", seekToFragmentTime, false);
seekToFragmentTime();