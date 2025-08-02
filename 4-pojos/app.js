let markup = {
    type: 'article',
    children: [
        {
            type: 'h1',
            children: [
                {
                    type: 'text',
                    value: 'POJOs'
                }
            ]
        },
        {
            type: 'p',
            children: [
                {
                    type: 'text',
                    value: 'Plain Old Javascript Objects (POJOs)'
                }
            ]
        },
        {
            type: 'h2',
            children: [
                {
                    type: 'text',
                    value: 'Counter'
                }        
            ]
        },
        {
            type: 'p',
            children: [
                {
                    type: 'text',
                    value: 'You clicked ',
                },
                { 
                    type: 'em', 
                    children: [
                        {
                            type: 'text',
                            value: '0'
                        }
                    ]
                },
                {
                    type: 'text',
                    value: ' times.'
                }
            ]
        },
        {
            type: 'button',
            children: [
                {
                    type: 'text',
                    value: 'Click me'
                }
            ]
        }
    ]
}

const mainElement = document.getElementById('app')

function render(node, parentElement) {
    let newDOMElement = node.type === 'text' ? 
        document.createTextNode(node.value) :
        document.createElement(node.type)

    if (node.children) {
        node.children.forEach(child => {
            render(child, newDOMElement)
        })
    }
    parentElement.appendChild(newDOMElement)
}

render(markup, mainElement)