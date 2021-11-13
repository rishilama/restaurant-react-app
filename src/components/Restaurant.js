import './style.css';
import Menu from './menuAPI';
import React from 'react';
import MenuCard from './MenuCard';
import Navbar from './Navbar';


const uniqueList =[ ...new Set(Menu.map((singleCard)=> {
    return singleCard.category;
}))]
console.log(uniqueList);

function Restaurant() {

    const [menuData, setMenuData] = React.useState(Menu);

    const filterItem = (category) => {
        const updatedList = Menu.filter((singleCard) => {
            return singleCard.category === category;
        });
        setMenuData(updatedList);
    };
    return (
        <>
            <Navbar filterItem={filterItem} setMenuData={setMenuData} />
            <MenuCard menuData={menuData} />
        </>
    )
}

export default Restaurant