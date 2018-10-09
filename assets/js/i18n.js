// Credit: https://codeburst.io/easy-i18n-in-10-lines-of-javascript-poc-eb9e5444d71e
function i18n(template) {
    for (var info = i18n.db[i18n.locale][template],
            out = [info.t[0]],
            i = 1, length = info.t.length; i < length; i++) out[i] = arguments[1 + info.v[i - 1]] + info.t[i];
    return out.join('');
}
i18n.db = {
    "en": {
        "title": {
            "t": ["Eli &amp; Stefan are getting married"],
            "v": []
        },
        "when": {
            "t": ["When?"],
            "v": []
        },
        "where": {
            "t": ["Where?"],
            "v": []
        },
        "what-else": {
            "t": ["What else?"],
            "v": []
        },
        "rsvp-now": {
            "t": ["RSVP right away"],
            "v": []
        },
        "form-please-complete": {
            "t": ["Please complete the form."],
            "v": []
        },
        "form-thank-you-sent": {
            "t": ["Thank you, your message has been sent."],
            "v": []
        },
        "form-error": {
            "t": ["Your message could not be sent due to an error."],
            "v": []
        },
        "message": {
            "t": ["Message"],
            "v": []
        },
        "send-message": {
            "t": ["Send Message"],
            "v": []
        }
    },
    "de": {
        "title": {
            "t": ["Eli &amp; Stefan heiraten"],
            "v": []
        },
        "when": {
            "t": ["Wann?"],
            "v": []
        },
        "where": {
            "t": ["Wo?"],
            "v": []
        },
        "what-else": {
            "t": ["Was noch?"],
            "v": []
        },
        "rsvp-now": {
            "t": ["Sofort antworten"],
            "v": []
        },
        "form-please-complete": {
            "t": ["Das Formular bitte vollständig ausfüllen"],
            "v": []
        },
        "form-thank-you-sent": {
            "t": ["Vielen Dank, ihre Nachricht wurde verschickt."],
            "v": []
        },
        "form-error": {
            "t": ["Aufgrund eines Fehlers konnte das Formular nicht abgesendet werden."],
            "v": []
        },
        "message": {
            "t": ["Nachricht"],
            "v": []
        },
        "send-message": {
            "t": ["Nachricht senden"],
            "v": []
        }

    },
    "bg": {
        "title": {
            "t": ["Ели и Щефан се женят!"],
            "v": []
        },
        "when": {
            "t": ["Кога?"],
            "v": []
        },
        "where": {
            "t": ["Къде?"],
            "v": []
        },
        "what-else": {
            "t": ["Какво друго?"],
            "v": []
        },
        "rsvp-now": {
            "t": ["Test"],
            "v": []
        },
        "form-please-complete": {
            "t": ["Please complete the foo bar baz."],
            "v": []
        },
        "form-thank-you-sent": {
            "t": ["Thank you, your message has been sent. BG"],
            "v": []
        },
        "form-error": {
            "t": ["Your message could not be sent due to an error. BG"],
            "v": []
        },
        "message": {
            "t": ["съобщение"],
            "v": []
        },
        "send-message": {
            "t": ["изпращам"],
            "v": []
        }
    }
};  // 
function i18n_load(locale){
  if (locale == null){
    if (navigator.language.includes('de')) {
        i18n.locale = 'de';
    } else if (navigator.language.includes('bg')) {
        i18n.locale = 'bg';
    } else i18n.locale = 'en';
  }
  else {
    i18n.locale = locale;
  }
  Array.from(document.querySelectorAll('[data-i18n-key]'), (el) => {el.innerHTML = i18n(el.getAttribute('data-i18n-key'))});
  Array.from(document.querySelectorAll('[data-i18n-placeholder-key]'), (el) => {el.setAttribute('placeholder', i18n(el.getAttribute('data-i18n-placeholder-key')))});
  Array.from(document.querySelectorAll('[data-i18n-value-key]'), (el) => {el.setAttribute('value', i18n(el.getAttribute('data-i18n-value-key')))});
}
i18n_load();
