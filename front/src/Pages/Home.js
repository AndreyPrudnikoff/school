import React, {Component} from 'react';
import Header from "../Components/Header";
import {Link} from "react-router-dom";


const TITLE = 'Домашняя';

const SECTION = [
    {title: 'НОВОСТИ', href: '/news'},
    {title: 'ПРО НАС', href: '/about'}
]

const getRequest = () => {
    fetch('http://localhost:8080/click', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({say: "Hello from front!"})
    })
        .then(res => res.json())
        .then(data => SECTION[0].title = data.hello)
}

const create = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({user: 'Andrey'})
    });
}

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Header
                    title={TITLE}
                />
                <h2>Home</h2>
                <div className="Home-Body">
                    <div className="SectionNavigation">
                        {SECTION.map(({title, href}, index) => {
                            return (<Link key={index} to={href}><span>{title}</span></Link>)
                        })}
                    </div>
                    <button onClick={getRequest}>CLICK</button>
                </div>
                <form>
                    <input type="text"/>
                    <input type="email"/>
                    <input type="password"/>
                    <button onClick={create} className="btn-primary">Create</button>
                </form>
            </div>
        );
    }
}

export default Home;
