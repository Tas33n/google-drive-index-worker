function toggleDarkmode() {
    if (getCookie('darkmode') == 'false') {
        darkmodeStylesheet = document.createElement('link');
        darkmodeStylesheet['rel'] = 'stylesheet';
        darkmodeStylesheet['href'] = 'https://cdn.jsdelivr.net/gh/tas33n/google-drive-index-worker@main/assets/css/darkmode.css';
        document.head.appendChild(darkmodeStylesheet);
        setCookie('darkmode', 'true');
    } else if (getCookie('darkmode') == "true") {
        var stylesheets = document.getElementsByTagName('link');
        for (var i = 0; i < stylesheets.length; i++) {
            var stylesheet = stylesheets[i];
            if (stylesheet['href'].includes('css/darkmode.css')) {
                document.head.removeChild(stylesheet);
            }
        }
        setCookie('darkmode', 'false');
    }
    updateDarkmodeButtonInnerHTML();
}

function updateDarkmodeButtonInnerHTML() {
    if (getCookie('darkmode') == 'false') {
        document.getElementById('darkmode-button1').innerHTML = '<i class="eye icon"></i>dark mode';
        document.getElementById('darkmode-button2').innerHTML = '<i class="eye icon"></i>dark mode';
    } else {
        document.getElementById('darkmode-button1').innerHTML = '<i class="eye slash icon"></i>light mode';
        document.getElementById('darkmode-button2').innerHTML = '<i class="eye slash icon"></i>light mode';
    }
}

if (getCookie('darkmode') == '') {
    setCookie('darkmode', 'true');
} else if (getCookie('darkmode') == 'true') {
    var darkmodeStylesheet = document.createElement('link');
    darkmodeStylesheet['rel'] = 'stylesheet';
    darkmodeStylesheet['href'] = 'https://cdn.jsdelivr.net/gh/tas33n/google-drive-index-worker@main/assets/css/darkmode.css';
    document.head.appendChild(darkmodeStylesheet);
}
