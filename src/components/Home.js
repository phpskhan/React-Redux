import React from "react";

function Home(props) {
    console.warn("Product : ", props);
    return (
        <div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Clipart.png" alt="" />
                </div>

                <div className="text-wrapper item">
                    <span>
                        iPhone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>

                <div className="btn-wrapper item">
                    <button
                        onClick={() =>
                            props.addToCartHandler
                                ({
                                    price: 1000,
                                    name: 'iPhone 15'
                                })
                        }
                    >Add to Cart</button>

                    <button
                        onClick={() =>
                            props.removeFromCartHandler
                                ()
                        }
                    >Remove Item</button>
                </div>
            </div>
        </div>
    );
}

export default Home;