import m from 'mithril';

const Hello = {
    view: function() {
        return m("main", [
            m("h1", "Hello world"),
            m("p", "Goodbye world")
        ]);
    }
};


window.addEventListener('DOMContentLoaded', () => {
	m.mount(document.body, Hello);
});