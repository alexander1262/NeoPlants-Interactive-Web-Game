/* eslint-disable prettier/prettier */
const createButton = document.querySelector('.create-button');

async function createChar(event) {
    event.preventDefault();
    const characterName = document.querySelector('#char-name').value.trim();
    const characterType = document.querySelector('#cactus').value;

    const newCharacter = {
        charName: characterName,
        charType: characterType,
    };
    const create = await fetch('/api/character/create', {
        body: JSON.stringify(newCharacter),
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
    });
    console.log(newCharacter);
    if (create.ok) {
        console.log('created Character!');
        document.getElementById('signedUpc').innerHTML =
            'Successfully created character!';
        window.location.replace('/login');
    } else {
        console.log('No new character');
    }
};

createButton.addEventListener('click', createChar);
