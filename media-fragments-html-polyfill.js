/*
    media-fragments-html-polyfill.js
    Copyright (C) 2012  Nils Dagsson Moskopp // erlehmann

    Polyfill for linking to media elements using fragment identifiers
    containing media fragments <http://www.w3.org/TR/media-frags/>

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

this.HTMLMediaElement && (function (global) {
    function seek() {
        var fragment = location.hash.substring(1).split('&');
        var elementid = fragment.shift();
        var mediafragment = fragment.join('&');
        var element = document.getElementById(elementid);
        if (element) {
            element.scrollIntoView();
            element.focus();  /* triggers :focus CSS pseudo-class in WebKit */
            element.src = element.currentSrc.split('#')[0] + '#' + mediafragment;
            element.load();
        }
    }
    addEventListener("hashchange", seek, false);
    addEventListener("DOMContentLoaded", seek, false);
})(this);