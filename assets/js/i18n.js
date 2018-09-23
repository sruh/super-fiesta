// Credit: https://codeburst.io/easy-i18n-in-10-lines-of-javascript-poc-eb9e5444d71e
function i18n(template) {
    for (var info = i18n.db[i18n.locale][template.join('\x01')],
            out = [info.t[0]],
            i = 1, length = info.t.length; i < length; i++) out[i] = arguments[1 + info.v[i - 1]] + info.t[i];
    return out.join('');
}
if (navigator.language.includes('de')) {
    i18n.locale = 'de';
} else if (navigator.language.includes('bg')) {
    i18n.locale = 'bg';
} else i18n.locale = 'en';
i18n.db = {
    "en": {
        "Eli &amp; Stefan are getting married": {
            "t": ["Eli &amp; Stefan are getting married"],
            "v": []
        },
        "When?": {
            "t": ["When?"],
            "v": []
        },
        "Where?": {
            "t": ["Where?"],
            "v": []
        },
        "What else?": {
            "t": ["What else?"],
            "v": []
        },
        "RSVP right away": {
            "t": ["RSVP right away"],
            "v": []
        }
    },
    "de": {
        "Eli &amp; Stefan are getting married": {
            "t": ["Eli &amp; Stefan heiraten"],
            "v": []
        },
        "When?": {
            "t": ["Wann?"],
            "v": []
        },
        "Where?": {
            "t": ["Wo?"],
            "v": []
        },
        "What else?": {
            "t": ["Was noch?"],
            "v": []
        },
        "RSVP right away": {
            "t": ["Sofort antworten"],
            "v": []
        }

    },
    "bg": {
        "Eli &amp; Stefan are getting married": {
            "t": ["Ели и Щефан се женят!"],
            "v": []
        },
        "When?": {
            "t": ["Кога?"],
            "v": []
        },
        "Where?": {
            "t": ["Къде?"],
            "v": []
        },
        "What else?": {
            "t": ["Какво друго?"],
            "v": []
        },
        "RSVP right away": {
            "t": ["Test"],
            "v": []
        }

    }
};
