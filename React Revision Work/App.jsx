const parent = document.getElementById('parent');
const root = ReactDOM.createRoot(parent);
const h2 = React.createElement('h2', {style: {background: 'brown', color: 'white'}}, 'welcome to react dom');
const l1 = React.createElement('li', {}, 'java');
const l2= React.createElement('li', {}, 'python');
const l3= React.createElement('li', {}, 'React');
const ul=React.createElement('ul', {style: {background: 'cyan'}}, l1, l2, l3);

const myName=React.createElement('h1', {}, 'blah blah blah');
