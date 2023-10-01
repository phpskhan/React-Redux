import React from "react";

function Header(props) {
    console.warn("Product : ", props.data);
    return (
        <div>
            <div className="add-to-cart">
                <span className="cartVal">{props.data.length}</span>
                <img src="https://png.pngtree.com/png-vector/20221030/ourmid/pngtree-yellow-shop-now-or-add-to-cart-button-design-with-3d-png-image_6403997.png" alt="" />
            </div>
        </div>
    );
}

export default Header;