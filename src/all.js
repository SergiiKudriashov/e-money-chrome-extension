//<script data-require="react@0.12.2" data-semver="0.12.2" src="//cdnjs.cloudflare.com/ajax/libs/react/0.12.2/react.js"></script>
//    <script data-require="react-jsx@*" data-semver="0.12.2" src="//cdnjs.cloudflare.com/ajax/libs/react/0.12.2/JSXTransformer.js"></script>
const CONSTANTS = {
    scripts: [{
        src:'//cdnjs.cloudflare.com/ajax/libs/react/0.12.2/react.js',
        dataAttributes: [{
            name: 'require',
            value: 'react@0.12.2'
        }, {
            name: 'semver',
            value: '0.12.2'
        }]
        }, {
        src:'//cdnjs.cloudflare.com/ajax/libs/react/0.12.2/JSXTransformer.js',
        dataAttributes: [{
            name: 'require',
            value: 'react-jsx@'
        }, {
            name: 'semver',
            value: '0.12.2'
        }]
    }]
};

var rootElement = document.createElement('div');
rootElement.id = 'root-e-money';
rootElement.innerHTML = 'Root element';
document.body.appendChild(rootElement);

function loadScript(data) {
    var script = document.createElement('script');
    script.src = data.src;
    for (var i = 0; i < data.dataAttributes; i++) {
        var attr = data.dataAttributes[i];
        script.setAttribute = (attr.name, attr.value);
    }
    document.body.appendChild(script);
}

loadScript(CONSTANTS.scripts[0]);
loadScript(CONSTANTS.scripts[1]);

window.onload = function() {

};

