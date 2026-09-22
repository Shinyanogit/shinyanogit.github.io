(function() {
    function getPreferredLang() {
        var saved = localStorage.getItem('vocabry-lang');
        if (saved === 'en' || saved === 'ja') return saved;
        return (navigator.language || '').startsWith('ja') ? 'ja' : 'en';
    }

    function setLang(lang) {
        document.documentElement.lang = lang;
        localStorage.setItem('vocabry-lang', lang);
        document.querySelectorAll('.lang-btn').forEach(function(btn) {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
    }

    var lang = getPreferredLang();
    document.documentElement.lang = lang;

    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('.lang-btn').forEach(function(btn) {
            btn.classList.toggle('active', btn.dataset.lang === lang);
            btn.addEventListener('click', function() {
                setLang(this.dataset.lang);
            });
        });
    });
})();
