import React from 'react';
import Contacts from './Contact';

const fiches = [
    {
        avatar:"https://randomuser.me/api/portraits/men/14.jpg",
        name: "David Shelton",
        online: true,
    },
    {
        avatar:"https://randomuser.me/api/portraits/women/29.jpg",
        name:"Jessica Chastain",
        online:false,
    },
    {
        avatar:"https://randomuser.me/api/portraits/women/75.jpg",
        name:"Britney Spears",
        online:true,
    },
    {
        avatar:"https://randomuser.me/api/portraits/men/20.jpg",
        name:"Josh Einstein",
        online:false,
    },

]

const ContactList = () => (
    <div>
        {fiches.map(cards => <Contacts avatar={cards.avatar} name={cards.name} online={cards.online}/>)}
    </div>
);

export default ContactList;
