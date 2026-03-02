
function ButtonComponent(){

    return <button>Click</button>
}


function ProductItem({singlProductItem, key}){
    return (
        <div key={key}>
            <p>{singlProductItem}</p>
            <ButtonComponent/>
        </div>
    )
}

export default ProductItem;