import image from "./assets/product.png";

const CardImage = () => {
    return (
        <div>
            <img className={'product-img'} src={image} alt=""/>
        </div>
    )
}

export default CardImage