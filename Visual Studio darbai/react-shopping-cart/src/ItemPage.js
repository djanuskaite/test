import React from 'react'
import './ItemPage.css'

class ItemPage extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={"ItemsContainer"}>
                {this.props.items.map(item => (
                    <Item key={item.id} item={item} onAddToCart={() => this.props.onAddToCart(item)} />
                ))}
            </div>
        )
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }
}

class Item extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={"ItemContainer"}>
                <div className={"ItemImg"}>
                    <img src={this.props.item.img} alt={"product"} width={120} />
                </div>

                <h3 className={"ItemTitle"}>
                    {this.props.item.title}
                </h3>

                <h4 className={"ItemAuthor"}>
                    {this.props.item.author}
                </h4>

                <p className={"ItemPrice"}>
                    {this.props.item.price}
                </p>

                <button className={"addToCart"} onClick={this.props.onAddToCart}>
                    Add To Cart
                </button>

            </div>
        )
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }
}

export default ItemPage;