// Credit: https://codeburst.io/easy-i18n-in-10-lines-of-javascript-poc-eb9e5444d71e
function i18n(template) {
    for (var info = i18n.db[i18n.locale][template],
            out = [info.t[0]],
            i = 1, length = info.t.length; i < length; i++) out[i] = arguments[1 + info.v[i - 1]] + info.t[i];
    return out.join('');
}

function i18n_load(locale) {
    if (locale == null) {
        if (navigator.language.includes('de')) {
            i18n.locale = 'de';
        } else if (navigator.language.includes('bg')) {
            i18n.locale = 'bg';
        } else i18n.locale = 'en';
    } else {
        i18n.locale = locale;
    }
    Array.from(document.querySelectorAll('[data-i18n-key]'), (el) => { el.innerHTML = i18n(el.getAttribute('data-i18n-key')) });
    Array.from(document.querySelectorAll('[data-i18n-placeholder-key]'), (el) => { el.setAttribute('placeholder', i18n(el.getAttribute('data-i18n-placeholder-key'))) });
    Array.from(document.querySelectorAll('[data-i18n-value-key]'), (el) => { el.setAttribute('value', i18n(el.getAttribute('data-i18n-value-key'))) });
}
i18n_load();