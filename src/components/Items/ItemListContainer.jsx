import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ItemListContainer = () => {
    //const [products, setProducts]= useState([]);
    const [items, setItems] = useState([]);
    const { id }  = useParams()
    
    useEffect(() => {
        const URL = id ? `https://fakestoreapi.com/products/category/${id}` : `https://fakestoreapi.com/products/`
        const getData = fetch(URL)
        getData
        .then((res) => res.json())
        .then((res)=>{
            setItems(res);
        })
        .catch((err) => console.log(err));
    },[id]);

    return (
        <Container>
            <Row>
            
                {
                    
                    items !== null &&
                    <ItemList items={items} />
                }
            </Row>
        </Container>
    );
}

export default ItemListContainer