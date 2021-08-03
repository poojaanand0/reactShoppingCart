import React, {useState} from 'react';
import { Button } from 'reactstrap';
import { Row, Col } from 'reactstrap';
// import Product from './Product';

export default function Main(props){
    // const {products} = props;
    const [cart,setCart]=useState([]);
    const [page,setPage]=useState('productPage');
    const [products] = useState([
        {
            name: 'Laptop',
            cost:'1,25,000',
            image:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-gold-select-201810?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1603332211000',
        },
        {
            name: 'Mobile',
            cost:'75,000',
            image:'data:image/jpeg;base64,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',
        },
        {
            name: 'Tab',
            cost:'27,000',
            image:'data:image/jpeg;base64,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',
        },
    ])

    const addToCart = (product) =>{
        setCart([...cart,{...product}]);
    };

    const fetchItems= () =>
    (
        <div>
            <h2>Items</h2>
            {products.map((product, index)=>(
                <div key={index}>
                    <Row>
                        <img className="img-size" src={product.image} alt={product.name}/>
                        <div><h4>{product.name}</h4></div>
                        <div><h4>Rs. {product.cost}</h4></div>
                        <Button onClick={()=>addToCart(product)} className="h-30">Add to cart</Button>
                    </Row>
                </div>
            ) 
            )}
        </div>
    )

    const checkout=()=>
    {
        window.alert('Order Successfully Placed.')
    }
    const fetchcart=()=>
    (
        <div>
            <h2>Cart</h2>
            <div>
                {cart.map((product, index)=>(
                    <div key={index}>
                        <Row>
                            <img className="img-size" src={product.image} alt={product.name}/>
                            <div><h4>{product.name}</h4></div>
                            <div><h4>Rs. {product.cost}</h4></div>
                            <Button onClick={()=>remove(product)} className="h-30">Remove Product</Button>
                        </Row>
                    </div>
                ) 
                )}
            </div>   
            <Button onClick={()=>checkout()}>Check Out</Button>
        </div>
    )

    const remove=(removeprod)=>
    {
        setCart(cart.filter((product)=> product !== removeprod))
    }
    const goTo=(toPage)=>
    {
        setPage(toPage);
    }

    return(
        <div className="block">
            <Row>
                <Col> <Button onClick={()=> goTo('productPage')}>Back</Button></Col>
                <Col><h1>Online Store</h1></Col>
                <Col><Button onClick={()=> goTo('cart')}>cart</Button></Col>
            </Row>
           { page==='productPage' && fetchItems()}
           { page==='cart' && fetchcart()}
            {/* <div>
                {products.map((product)=>( 
                    <Product key={product.id} product={product}></Product>
                ))}
            </div> */}
        </div>
    );
}
