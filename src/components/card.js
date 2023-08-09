import CardInfo from './card-info'
import CardImage from './card-image'
const Card = () => {
    return (
        <div className={'col'}>
            <div className={'box'}>
                <CardImage></CardImage>
                <CardInfo></CardInfo>
            </div>
        </div>
    )
}

export default Card