function Button(props) {
    return React.createElement('button', null, props.title);
}
function TableHead(props) {
    return (
        React.createElement('tr', null,
            React.createElement('th', null, props.headers[0]),
            React.createElement('th', null, props.headers[1]),
            React.createElement('th', null, props.headers[2]),
            React.createElement('th', null, props.headers[3])));


}
function TableItem(props) {
    return (
        React.createElement('tr', null,
            React.createElement('td', null, props.data[0]),
            React.createElement('td', null, props.data[1]),
            React.createElement('td', null, props.data[2]),
            React.createElement('td', null, React.createElement(Button, { title: 'Buy Now' }))));


}
function ShoppingTable(props) {
    return (
        React.createElement('ul', null,
            React.createElement('table', null,
                React.createElement(TableHead, { headers: ['Year', 'Model', 'Price', 'Buy'] }),
                React.createElement(TableItem, { data: props.data }))));



}
function Cars(props) {
    return (
        React.createElement('div', null,
            React.createElement('h2', null, props.title),
            React.createElement(ShoppingTable, { data: ['2013', 'A', '$32000'] }),
            React.createElement(ShoppingTable, { data: ['2011', 'B', '$4400'] }),
            React.createElement(ShoppingTable, { data: ['2016', 'B', '$15500'] })));


}
function Trucks(props) {
    return (
        React.createElement('div', null,
            React.createElement('h2', null, props.title),
            React.createElement(ShoppingTable, { data: ['2014', 'D', '$18000'] }),
            React.createElement(ShoppingTable, { data: ['2013', 'E', '$5200'] })));


}
function Convertibles(props) {
    return (
        React.createElement('div', null,
            React.createElement('h2', null, props.title),
            React.createElement(ShoppingTable, { data: ['2009', 'F', '$2000'] }),
            React.createElement(ShoppingTable, { data: ['2010', 'G', '$6000'] }),
            React.createElement(ShoppingTable, { data: ['2012', 'H', '$12500'] }),
            React.createElement(ShoppingTable, { data: ['2017', 'M', '$50000'] })));


}

function ShoppingType(props) {
    return (
        React.createElement('div', null,
            React.createElement(Cars, { title: 'Cars' }),
            React.createElement(Trucks, { title: 'Trucks' }),
            React.createElement(Convertibles, { title: 'Convertibles' })));


}

function ShoppingTitle(props) {
    return (
        React.createElement('div', { className: 'title' },
            React.createElement('h1', null, props.title),
            React.createElement('h2', null, props.description),
            React.createElement(ShoppingOptions, null)));


}

function ShoppingOptions(props) {
    return (
        React.createElement('div', null,
            React.createElement('h2', null, 'Choose Options'),
            React.createElement('div', null, 'New Only',

                React.createElement('input', { type: 'checkbox', id: 'coding', name: 'interest', value: 'coding', defaultChecked: 'checked' })), 'Select Type',



            React.createElement('select', null,
                React.createElement('option', { value: 'All' }, 'All'),
                React.createElement('option', { value: 'Cars' }, 'Cars'),
                React.createElement('option', { value: 'Trucks' }, 'Trucks'),
                React.createElement('option', { value: 'Convertibles' }, 'Convertibles'))));



}
function ShoppingApp(props) {
    return (
        React.createElement('div', null,
            React.createElement(ShoppingTitle, { title: 'Welcome to React Transportation', description: 'The best place to buy vehicles online' }),
            React.createElement(ShoppingType, null)));


}

var element = React.createElement(ShoppingApp, null);

ReactDOM.render(
element,
document.getElementById("root"));