import React from 'react';

const Content = () => {

    const name = 'FullStack';
    const handleNimi = () => {
        const nimi = ['FullStack', 'JavaScript', 'React', 'Laurea']
        const randomNimi = nimi[Math.floor(Math.random() * nimi.length)]
        return randomNimi;
    }

    const handleClick = () => {
        console.log('Button clicked');
    }


    const handleClick2 = (name) => {
        console.log(`'Button clicked ' ${name}`);
    }

    const handleClick3 = (e) => {
        console.log(e.target.innerText);
    }

    return (
        <main>
            {/* Your content goes here */}

            {/* HTML elementti, joka näkyy selaimessa */}
            <h1>Hello World</h1>

            {/* Paragraph element with a variable */}
            <p>Hello {name}</p>

            {/* // Paragraph element with a double click event handler and a function call */}
            <p onDoubleClick={() => {
                console.log('Double clicked');
                const nimi = handleNimi();
                console.log(nimi);
            }}>Hello</p>


            {/* // Button element with an event handler */}
            <button onClick={handleClick}>Nappi 1</button>

            {/* // Button element with an event handler and a parameter */}
            <button onClick={() => handleClick2("JavaScript")}>Nappi 2</button>

            {/* // Button element with an event handler and a event parameter */}
            <button onClick={(e) => handleClick3(e)}>Nappi 3</button>

            {/* Paragraph with a string  */}
            <p>{"Opiskellaan JSXäää"}</p>

            {/* Paragraph with a variable */}
            <p>{name}</p>

            {/* Paragraph with a function call */}
            <p>{new Date().toLocaleTimeString()}</p>

            {/* Paragraph with a list */}
            <p>{[1, 2, 3]}</p>

            {/* Paragraph with a list and a map method */}
            <p>[1,2,3]</p>
            <p>{[1, 2, 3].map(n => n * 2)}</p>

            {/* Paragraph with a string method */}
            <p>{name.toUpperCase()}</p>
        </main>
    );
};

export default Content;