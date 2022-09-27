let projects = [
    {
        client: 'Bank 1 Saar',
        title: 'Markeneinführung und Positionierung Jugendkonto ONE',
        imgUrl: 'https://fbo.de/wp-content/uploads/2021/09/1px.png',
        imgUrl2: 'https://fbo.de/wp-content/uploads/2021/09/bank1saar-preview-opt.jpg'
    },
    {
        client: 'URSAPHARM Arzneimittel GmbH',
        title: 'Markenrelaunch und Neupositionierungen Veno SL 300',
        imgUrl: 'https://fbo.de/wp-content/uploads/2021/09/1px.png',
        imgUrl2: 'https://fbo.de/wp-content/uploads/2021/09/ursapharm-preview-opt.jpg'
    },
    {
        client: 'Bauernverband Saar e.V.',
        title: 'Markeneinführung und Positionierung für die Initiative Saartenvielfalt',
        imgUrl: 'https://fbo.de/wp-content/uploads/2021/09/1px.png',
        imgUrl2: 'https://fbo.de/wp-content/uploads/2021/09/vielfalt-preview-opt.jpg'
    },
    {
        client: 'IKK Südwest',
        title: 'Strategie, Konzeption und Umsetzung Präventionskampagne',
        imgUrl: 'https://fbo.de/wp-content/uploads/2021/09/1px.png',
        imgUrl2: 'https://fbo.de/wp-content/uploads/2021/09/ikk-preview-opt.jpg'
    },
    {
        client: 'Woll Maschinenbau GmbH',
        title: 'Von der Markenpositionierung zu Website mit Woll Maschinenbau',
        imgUrl: 'https://fbo.de/wp-content/uploads/2021/09/1px.png',
        imgUrl2: 'https://fbo.de/wp-content/uploads/2021/09/woll-preview-opt.jpg'
    },
    {
        client: 'Staatskanzlei des Saarlandes',
        title: 'Konzeption und Screensdesign für das Dachportal des Saarlandes',
        imgUrl: 'https://fbo.de/wp-content/uploads/2021/09/1px.png',
        imgUrl2: 'https://fbo.de/wp-content/uploads/2021/09/saarland-preview-opt-1.jpg'
    },
    {
        client: 'ZENNER International GmbH & Co. KG',
        title: 'Konzeption und Webentwicklung für Zenner',
        imgUrl: 'https://fbo.de/wp-content/uploads/2021/09/1px.png',
        imgUrl2: 'https://fbo.de/wp-content/uploads/2021/09/zenner-preview-opt.jpg'    
    },
    {
        client: 'saaris e.V.',
        title: 'Mitmachmarketing und Kampagnenmamnagement für den Standort',
        imgUrl: 'https://fbo.de/wp-content/uploads/2021/09/1px.png',
        imgUrl2: 'https://fbo.de/wp-content/uploads/2021/09/saaris-preview-opt.jpg'    
    }
];


let ourmoves = [
    {
        title: 'T-Shirt für den guten Zweck',
        category: 'Aktuelles',
        author: 'FBO GmbH',
        date: '23.03.2022',
        imgUrl: 'https://fbo.de/wp-content/uploads/2022/03/Ukraine_Teasermotiv_1024x664px.jpg'
    },
    {
        title: 'Frisch ausgerichtet der Zukunft entgegen – Alles bleibt anders',
        category: 'Allgemein',
        author: 'FBO GmbH',
        date: '31.01.2022',
        imgUrl: 'https://fbo.de/wp-content/uploads/2022/01/FBO_Markenrad_1280x830px-tinified-1024x664.jpg'
    },
];

let jobs = [
    {
        title: 'DevOP / IT-Administrator (m/w/d/x)',
        imgUrl: 'https://fbo.de/wp-content/uploads/2022/08/684e4c5d-header-2560x100-03_1hp0kz1hc0kz006000000-1024x403.jpg'
    },
    {
        title: 'Javascript Web-Entwickler (m/w/d/x) in Vollzeit (Remote innerhalb Deutschlands)',
        imgUrl: 'https://fbo.de/wp-content/uploads/2022/08/684e4c5d-header-2560x100-03_1hp0kz1hc0kz006000000-1024x403.jpg'
    },
    {
        title: 'Mediengestalter / Content Manager (m/w/d/x)',
        imgUrl: 'https://fbo.de/wp-content/uploads/2021/10/fbo_anz_recruting_entwickler_1920x1078_optim-1024x575.jpg'
    },
    {
        title: 'Mediengestalter Digital/Print (m/w/d/x)',
        imgUrl: 'https://fbo.de/wp-content/uploads/2022/07/fbo_mediengestalter_ist_1291139074_sl_mont_1024x575px_optim.jpg'
    },
    {
        title: 'Designer/Kreativer (m/w/d/x)',
        imgUrl: 'https://fbo.de/wp-content/uploads/2019/02/Kreativ-Kopf_2019_FBO_Web_Detailseite_web_geschn-1024x575.jpg'
    },
    {
        title: 'Werkstudent Webentwicklung (m/w/d/x)',
        imgUrl: 'https://fbo.de/wp-content/uploads/2021/04/fbo_istock_1212006391_xxl_sl-1024x683.jpg'
    },
    {
        title: 'Full-Stack Webentwickler (m/w/d/x) in Vollzeit',
        imgUrl: 'https://fbo.de/wp-content/uploads/2022/07/fbo_mediengestalter_ist_1291139074_sl_mont_1024x575px_optim.jpg'
    },
];

// When the user scrolls the page, execute myFunction
window.onscroll = function() {showScrollProgress()};

function showScrollProgress() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}

function load() {
    loadExampleProjects();
    loadMoves();
    loadJobs();
}

function loadExampleProjects() {
    document.getElementById('project-examples').innerHTML = '';
    
    projects.forEach(p => {
        document.getElementById('project-examples').innerHTML += /*html*/ `
            <div class="example-block" style="background-image: url(${p.imgUrl2})">
                <p>${p.client}</p>
                <h2>${p.title}</h2>
            </div>`;
    })
}

function loadMoves() {
    document.getElementById('moves-examples').innerHTML = '';
    
    ourmoves.forEach(m => {
        document.getElementById('moves-examples').innerHTML += /*html*/ `
            <div class="example-block" style="background-image: url(${m.imgUrl})">
                <h2>${m.title}</h2>
                <p style="margin-top: -32px; margin-bottom: 32px;">
                    <b>Kategorie:</b>${m.category} <br>
                    <b>Autor:</b>${m.author} <br>
                    <b>Datum:</b>${m.date} <br>
                </p>
            </div>`;
    })
}

function loadJobs() {
    document.getElementById('jobs-examples').innerHTML = '';
    
    jobs.forEach(j => {
        document.getElementById('jobs-examples').innerHTML += /*html*/ `
            <div class="example-block" style="background-image: url(${j.imgUrl}) ">
                <h2>${j.title}</h2>
            </div>`;
    })
}

function showResponsiveMenu() {
    document.getElementById('responsive-overlay').classList.remove('d-none');

}

function hideMenu() {
    document.getElementById('responsive-overlay').classList.add('d-none');

}

function selectVideo(i) {
    document.getElementById('overlay-text').classList.add('animation');
    setBgColorOfCircle(i);
    playSelectedVideo(i);
    setOverlayHTML(i);
    setTimeout(() => {
        document.getElementById('overlay-text').classList.remove('animation');
    }, 1100);
}

function setBgColorOfCircle(i) {
    if(i == 1) {
        document.getElementById('select-1').classList.add('bg-white');
        document.getElementById('select-2').classList.remove('bg-white');
    } else {
        document.getElementById('select-1').classList.remove('bg-white');
        document.getElementById('select-2').classList.add('bg-white');
    }
}

function playSelectedVideo(i) {
    if(i == 1) {
        document.getElementById('video-src').src = "https://fbo.de/wp-content/uploads/2018/03/FBO_image_clip01.mp4";
    } else {
        document.getElementById('video-src').src = "https://fbo.de/wp-content/uploads/2018/03/FBO_image_clip02.mp4";
    }
    document.getElementById('video').load();
}

function setOverlayHTML(i) {
    if(i == 1) {
        document.getElementById('overlay-text').innerHTML = `
        <p class="headline">FBO • MARKETING UND DIGITALES BUSINESS</p>
        <p class="subline">#INSIDE_FBO</p>
        <button class="see-video-btn">Video anschauen</button>`;

    } else {
        document.getElementById('overlay-text').innerHTML = `
        <p class="headline">WIR GEHEN NICHT MIT DER ZEIT</p>
        <p class="subline">SONDERN SIND IHR IMMER EINEN SCHRITT VORAUS</p>
        <button class="see-video-btn">Video anschauen</button>`;
    }
}