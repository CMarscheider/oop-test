let contacts = [
new Contact('Thomas', 'Müller', '017625489551'),
new Contact('Anton', 'Meier', '016021456988'),
new Friend('Erika', 'Mustermann')
];


function addContact(firstName, lastName, phone) {
    let myContact = new Contact(firstName, lastName, phone);
    contacts.push(myContact);
}

function addFriend(firstName, lastName){
    let myFriend = new Friend(firstName, lastName);
    contacts.push(myFriend);
}