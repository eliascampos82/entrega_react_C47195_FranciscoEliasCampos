// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import useFetch from '../../Hooks/useFetch'

// eslint-disable-next-line react/prop-types
const ItemDetailContainer = ( { id }) => {
    const [item] = useFetch(`https://fakestoreapi.com/products/${id}`)
    return (
        <>
            {
                item !== null &&
                <ItemDetail item={item} />

            }
        </>
    )
}

export default ItemDetailContainer